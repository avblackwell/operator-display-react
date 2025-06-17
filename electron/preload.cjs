const { contextBridge, ipcRenderer } = require("electron");

// Expose protected methods that allow the renderer process to use
// the ipcRenderer without exposing the entire object
contextBridge.exposeInMainWorld("electronAPI", {
  // Platform information
  platform: process.platform,

  // App info
  getVersion: () => ipcRenderer.invoke("app:getVersion"),
  getName: () => ipcRenderer.invoke("app:getName"),
  getPath: (name) => ipcRenderer.invoke("app:getPath", name),
  showItemInFolder: (fullPath) =>
    ipcRenderer.invoke("app:showItemInFolder", fullPath),
  openExternal: (url) => ipcRenderer.invoke("app:openExternal", url),

  // Window controls
  minimize: () => ipcRenderer.invoke("window:minimize"),
  maximize: () => ipcRenderer.invoke("window:maximize"),
  close: () => ipcRenderer.invoke("window:close"),
  toggleFullscreen: () => ipcRenderer.invoke("window:toggleFullscreen"),
  getDisplayInfo: () => ipcRenderer.invoke("window:getDisplayInfo"),

  // File operations
  openFile: () => ipcRenderer.invoke("dialog:openFile"),
  openDirectory: () => ipcRenderer.invoke("dialog:openDirectory"),
  saveFile: (content, defaultFilename) =>
    ipcRenderer.invoke("dialog:saveFile", content, defaultFilename),

  // Dialog operations
  showMessage: (options) => ipcRenderer.invoke("dialog:showMessage", options),

  // System information
  getSystemInfo: () => ipcRenderer.invoke("system:getInfo"),
  getEnvInfo: () => ipcRenderer.invoke("system:getEnvInfo"),

  // Custom app-specific APIs can be added here
  // Example:
  // saveSettings: (settings) => ipcRenderer.invoke('app:saveSettings', settings),
  // loadSettings: () => ipcRenderer.invoke('app:loadSettings'),
});

// Remove or comment out in production
if (process.env.NODE_ENV === "development") {
  console.log("Preload script loaded successfully");
}
