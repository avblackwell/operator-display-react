const { app, BrowserWindow, ipcMain, dialog } = require("electron");
const path = require("path");
const os = require("os");
const isDev = process.env.NODE_ENV === "development";

let mainWindow;

function createWindow() {
  // Create the browser window
  mainWindow = new BrowserWindow({
    width: 1200,
    height: 800,
    webPreferences: {
      nodeIntegration: false,
      contextIsolation: true,
      enableRemoteModule: false,
      preload: path.join(__dirname, "preload.cjs"),
    },
    icon: path.join(__dirname, "../public/favicon.ico"), // Add your app icon
    titleBarStyle: "default",
    show: false, // Don't show until ready-to-show
  });

  // Load the app
  if (isDev) {
    mainWindow.loadURL("http://localhost:3000");
    // Open DevTools in development
    mainWindow.webContents.openDevTools();
  } else {
    mainWindow.loadFile(path.join(__dirname, "../dist/index.html"));
  }

  // Show window when ready to prevent visual flash
  mainWindow.once("ready-to-show", () => {
    mainWindow.show();
  });

  // Handle window closed
  mainWindow.on("closed", () => {
    mainWindow = null;
  });
}

// IPC Handlers
ipcMain.handle("app:getVersion", () => {
  return app.getVersion();
});

ipcMain.handle("app:getName", () => {
  return app.getName();
});

ipcMain.handle("app:getPath", (event, name) => {
  try {
    return app.getPath(name || "userData");
  } catch (error) {
    return null;
  }
});

ipcMain.handle("app:showItemInFolder", (event, fullPath) => {
  require("electron").shell.showItemInFolder(fullPath);
});

ipcMain.handle("app:openExternal", (event, url) => {
  require("electron").shell.openExternal(url);
});

ipcMain.handle("window:minimize", () => {
  if (mainWindow) {
    mainWindow.minimize();
  }
});

ipcMain.handle("window:maximize", () => {
  if (mainWindow) {
    if (mainWindow.isMaximized()) {
      mainWindow.unmaximize();
    } else {
      mainWindow.maximize();
    }
  }
});

ipcMain.handle("window:close", () => {
  if (mainWindow) {
    mainWindow.close();
  }
});

ipcMain.handle("window:toggleFullscreen", () => {
  if (mainWindow) {
    mainWindow.setFullScreen(!mainWindow.isFullScreen());
  }
});

ipcMain.handle("window:getDisplayInfo", () => {
  if (mainWindow) {
    const display = require("electron").screen.getDisplayMatching(
      mainWindow.getBounds()
    );
    return {
      bounds: mainWindow.getBounds(),
      isMaximized: mainWindow.isMaximized(),
      isMinimized: mainWindow.isMinimized(),
      isFullScreen: mainWindow.isFullScreen(),
      displaySize: display.size,
      displayScaleFactor: display.scaleFactor,
    };
  }
  return null;
});

ipcMain.handle("dialog:openFile", async () => {
  if (mainWindow) {
    const result = await dialog.showOpenDialog(mainWindow, {
      properties: ["openFile"],
      filters: [
        { name: "Text Files", extensions: ["txt"] },
        { name: "JSON Files", extensions: ["json"] },
        { name: "All Files", extensions: ["*"] },
      ],
    });

    if (!result.canceled && result.filePaths.length > 0) {
      return result.filePaths[0];
    }
  }
  return null;
});

ipcMain.handle("dialog:openDirectory", async () => {
  if (mainWindow) {
    const result = await dialog.showOpenDialog(mainWindow, {
      properties: ["openDirectory"],
    });

    if (!result.canceled && result.filePaths.length > 0) {
      return result.filePaths[0];
    }
  }
  return null;
});

ipcMain.handle("dialog:saveFile", async (event, content, defaultFilename) => {
  if (mainWindow) {
    const result = await dialog.showSaveDialog(mainWindow, {
      defaultPath: defaultFilename || "untitled.txt",
      filters: [
        { name: "Text Files", extensions: ["txt"] },
        { name: "JSON Files", extensions: ["json"] },
        { name: "All Files", extensions: ["*"] },
      ],
    });

    if (!result.canceled && result.filePath) {
      try {
        const fs = require("fs");
        fs.writeFileSync(result.filePath, content);
        return result.filePath;
      } catch (error) {
        console.error("Error saving file:", error);
        return false;
      }
    }
  }
  return false;
});

ipcMain.handle("dialog:showMessage", async (event, options) => {
  if (mainWindow) {
    const result = await dialog.showMessageBox(mainWindow, {
      type: options.type || "info",
      title: options.title || "Message",
      message: options.message || "",
      buttons: options.buttons || ["OK"],
    });
    return result.response;
  }
  return 0;
});

ipcMain.handle("system:getInfo", () => {
  return {
    platform: os.platform(),
    arch: os.arch(),
    version: os.release(),
    totalMemory: os.totalmem(),
    freeMemory: os.freemem(),
    cpus: os.cpus().length,
    uptime: os.uptime(),
  };
});

ipcMain.handle("system:getEnvInfo", () => {
  return {
    nodeVersion: process.version,
    electronVersion: process.versions.electron,
    chromiumVersion: process.versions.chrome,
    v8Version: process.versions.v8,
  };
});

// This method will be called when Electron has finished initialization
app.whenReady().then(createWindow);

// Quit when all windows are closed
app.on("window-all-closed", () => {
  // On macOS it is common for applications to stay active until explicitly quit
  if (process.platform !== "darwin") {
    app.quit();
  }
});

app.on("activate", () => {
  // On macOS re-create a window when dock icon is clicked
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow();
  }
});

// Security: Prevent new window creation
app.on("web-contents-created", (event, contents) => {
  contents.on("new-window", (event, navigationUrl) => {
    event.preventDefault();
    // You could open the URL in the user's default browser here
    require("electron").shell.openExternal(navigationUrl);
  });
});

// Handle app protocol for production
if (!isDev) {
  app.setAsDefaultProtocolClient("operator-display");
}
