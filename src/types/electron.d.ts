declare global {
  interface Window {
    electronAPI?: {
      // Platform information
      platform: string;

      // App info
      getVersion: () => Promise<string>;
      getName: () => Promise<string>;
      getPath: (name?: string) => Promise<string | null>;
      showItemInFolder: (fullPath: string) => Promise<void>;
      openExternal: (url: string) => Promise<void>;

      // Window controls
      minimize: () => Promise<void>;
      maximize: () => Promise<void>;
      close: () => Promise<void>;
      toggleFullscreen: () => Promise<void>;
      getDisplayInfo: () => Promise<{
        bounds: { x: number; y: number; width: number; height: number };
        isMaximized: boolean;
        isMinimized: boolean;
        isFullScreen: boolean;
        displaySize: { width: number; height: number };
        displayScaleFactor: number;
      } | null>;

      // File operations
      openFile: () => Promise<string | null>;
      openDirectory: () => Promise<string | null>;
      saveFile: (
        content: string,
        defaultFilename?: string
      ) => Promise<string | false>;

      // Dialog operations
      showMessage: (options: {
        type?: "info" | "warning" | "error" | "question";
        title?: string;
        message: string;
        buttons?: string[];
      }) => Promise<number>;

      // System information
      getSystemInfo: () => Promise<{
        platform: string;
        arch: string;
        version: string;
        totalMemory: number;
        freeMemory: number;
        cpus: number;
        uptime: number;
      }>;

      getEnvInfo: () => Promise<{
        nodeVersion: string;
        electronVersion: string;
        chromiumVersion: string;
        v8Version: string;
      }>;

      // Add your custom app-specific APIs here
      // Example:
      // saveSettings: (settings: any) => Promise<void>;
      // loadSettings: () => Promise<any>;
    };
  }
}

export {};
