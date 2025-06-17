import { useEffect, useState } from "react";

export const useElectron = () => {
  const [isElectron, setIsElectron] = useState(false);

  useEffect(() => {
    // Check if we're running in Electron
    setIsElectron(typeof window !== "undefined" && !!window.electronAPI);
  }, []);

  return {
    isElectron,
    electronAPI: window.electronAPI,

    // App info methods
    getVersion: () => {
      if (window.electronAPI) {
        return window.electronAPI.getVersion();
      }
      return Promise.resolve("web-version");
    },

    getName: () => {
      if (window.electronAPI) {
        return window.electronAPI.getName();
      }
      return Promise.resolve(document.title || "Web App");
    },

    getPath: (name?: string) => {
      if (window.electronAPI) {
        return window.electronAPI.getPath(name);
      }
      console.warn("getPath() called but not running in Electron");
      return Promise.resolve(null);
    },

    showItemInFolder: (fullPath: string) => {
      if (window.electronAPI) {
        return window.electronAPI.showItemInFolder(fullPath);
      }
      console.warn("showItemInFolder() called but not running in Electron");
      return Promise.resolve();
    },

    openExternal: (url: string) => {
      if (window.electronAPI) {
        return window.electronAPI.openExternal(url);
      }
      // Fallback for web - open in new tab
      window.open(url, "_blank");
      return Promise.resolve();
    },

    // Window control methods with fallbacks
    minimize: () => {
      if (window.electronAPI) {
        return window.electronAPI.minimize();
      }
      console.warn("minimize() called but not running in Electron");
      return Promise.resolve();
    },

    maximize: () => {
      if (window.electronAPI) {
        return window.electronAPI.maximize();
      }
      console.warn("maximize() called but not running in Electron");
      return Promise.resolve();
    },

    close: () => {
      if (window.electronAPI) {
        return window.electronAPI.close();
      }
      console.warn("close() called but not running in Electron");
      return Promise.resolve();
    },

    toggleFullscreen: () => {
      if (window.electronAPI) {
        return window.electronAPI.toggleFullscreen();
      }
      // Fallback for web - try to toggle fullscreen
      if (document.fullscreenElement) {
        document.exitFullscreen();
      } else {
        document.documentElement.requestFullscreen();
      }
      return Promise.resolve();
    },

    getDisplayInfo: () => {
      if (window.electronAPI) {
        return window.electronAPI.getDisplayInfo();
      }
      // Fallback for web
      return Promise.resolve({
        bounds: {
          x: 0,
          y: 0,
          width: window.innerWidth,
          height: window.innerHeight,
        },
        isMaximized: false,
        isMinimized: false,
        isFullScreen: !!document.fullscreenElement,
        displaySize: { width: screen.width, height: screen.height },
        displayScaleFactor: window.devicePixelRatio,
      });
    },

    // File operation methods
    openFile: () => {
      if (window.electronAPI) {
        return window.electronAPI.openFile();
      }
      console.warn("openFile() called but not running in Electron");
      return Promise.resolve(null);
    },

    openDirectory: () => {
      if (window.electronAPI) {
        return window.electronAPI.openDirectory();
      }
      console.warn("openDirectory() called but not running in Electron");
      return Promise.resolve(null);
    },

    saveFile: (content: string, defaultFilename?: string) => {
      if (window.electronAPI) {
        return window.electronAPI.saveFile(content, defaultFilename);
      }
      // Fallback for web - trigger download
      const blob = new Blob([content], { type: "text/plain" });
      const url = URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = defaultFilename || "download.txt";
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      URL.revokeObjectURL(url);
      return Promise.resolve("download.txt");
    },

    // Dialog methods
    showMessage: (options: {
      type?: "info" | "warning" | "error" | "question";
      title?: string;
      message: string;
      buttons?: string[];
    }) => {
      if (window.electronAPI) {
        return window.electronAPI.showMessage(options);
      }
      // Fallback for web
      alert(`${options.title || "Message"}: ${options.message}`);
      return Promise.resolve(0);
    },

    // System information methods
    getSystemInfo: () => {
      if (window.electronAPI) {
        return window.electronAPI.getSystemInfo();
      }
      // Fallback for web
      return Promise.resolve({
        platform: navigator.platform,
        arch: "unknown",
        version: "web",
        totalMemory: (navigator as any).deviceMemory
          ? (navigator as any).deviceMemory * 1024 * 1024 * 1024
          : 0,
        freeMemory: 0,
        cpus: navigator.hardwareConcurrency || 1,
        uptime: 0,
      });
    },

    getEnvInfo: () => {
      if (window.electronAPI) {
        return window.electronAPI.getEnvInfo();
      }
      // Fallback for web
      return Promise.resolve({
        nodeVersion: "N/A",
        electronVersion: "N/A",
        chromiumVersion:
          (navigator as any).userAgentData?.brands?.find((b: any) =>
            b.brand.includes("Chromium")
          )?.version || "Unknown",
        v8Version: "N/A",
      });
    },

    getPlatform: () => {
      if (window.electronAPI) {
        return window.electronAPI.platform;
      }
      return navigator.platform;
    },
  };
};
