import { useElectron } from "@/hooks/useElectron";
import { Button } from "@/components/ui/button";
import {
  Minimize2,
  Maximize2,
  X,
  Monitor,
  Download,
  FolderOpen,
  Save,
  Info,
  Settings,
  ExternalLink,
  Fullscreen,
  FileText,
  MessageCircle,
  Folder,
} from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuSeparator,
  DropdownMenuLabel,
} from "@/components/ui/dropdown-menu";
import { useState } from "react";

export const AppControls = () => {
  const {
    isElectron,
    minimize,
    maximize,
    close,
    toggleFullscreen,
    getSystemInfo,
    getEnvInfo,
    getDisplayInfo,
    getVersion,
    getName,
    openFile,
    openDirectory,
    saveFile,
    showMessage,
    openExternal,
  } = useElectron();

  const [isLoading, setIsLoading] = useState(false);

  const handleSystemInfo = async () => {
    setIsLoading(true);
    try {
      const [sysInfo, envInfo] = await Promise.all([
        getSystemInfo(),
        getEnvInfo(),
      ]);

      const message = `System Information:
Platform: ${sysInfo.platform}
Architecture: ${sysInfo.arch}
OS Version: ${sysInfo.version}
CPUs: ${sysInfo.cpus}
Total Memory: ${(sysInfo.totalMemory / 1024 / 1024 / 1024).toFixed(2)} GB
Free Memory: ${(sysInfo.freeMemory / 1024 / 1024 / 1024).toFixed(2)} GB
Uptime: ${Math.floor(sysInfo.uptime / 3600)}h ${Math.floor(
        (sysInfo.uptime % 3600) / 60
      )}m

Environment:
Node: ${envInfo.nodeVersion}
Electron: ${envInfo.electronVersion}
Chromium: ${envInfo.chromiumVersion}
V8: ${envInfo.v8Version}`;

      if (isElectron) {
        await showMessage({
          type: "info",
          title: "System Information",
          message: message,
        });
      } else {
        alert(message);
      }
    } catch (error) {
      console.error("Error getting system info:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleDisplayInfo = async () => {
    try {
      const displayInfo = await getDisplayInfo();
      if (displayInfo) {
        const message = `Window Information:
Position: ${displayInfo.bounds.x}, ${displayInfo.bounds.y}
Size: ${displayInfo.bounds.width} x ${displayInfo.bounds.height}
Display: ${displayInfo.displaySize.width} x ${displayInfo.displaySize.height}
Scale Factor: ${displayInfo.displayScaleFactor}
Maximized: ${displayInfo.isMaximized}
Fullscreen: ${displayInfo.isFullScreen}`;

        if (isElectron) {
          await showMessage({
            type: "info",
            title: "Display Information",
            message: message,
          });
        } else {
          alert(message);
        }
      }
    } catch (error) {
      console.error("Error getting display info:", error);
    }
  };

  const handleOpenFile = async () => {
    try {
      const filePath = await openFile();
      if (filePath) {
        await showMessage({
          type: "info",
          title: "File Selected",
          message: `Selected file: ${filePath}`,
        });
      }
    } catch (error) {
      console.error("Error opening file:", error);
    }
  };

  const handleOpenDirectory = async () => {
    try {
      const dirPath = await openDirectory();
      if (dirPath) {
        await showMessage({
          type: "info",
          title: "Directory Selected",
          message: `Selected directory: ${dirPath}`,
        });
      }
    } catch (error) {
      console.error("Error opening directory:", error);
    }
  };

  const handleSaveFile = async () => {
    try {
      const content = `Sample file content generated at ${new Date().toISOString()}

This is a test file created from the Electron app.
Platform: ${await getSystemInfo().then((info) => info.platform)}
Version: ${await getVersion()}`;

      const result = await saveFile(content, "sample-file.txt");
      if (result) {
        await showMessage({
          type: "info",
          title: "File Saved",
          message: isElectron
            ? `File saved to: ${result}`
            : "File downloaded successfully",
        });
      }
    } catch (error) {
      console.error("Error saving file:", error);
    }
  };

  const handleOpenGitHub = () => {
    openExternal("https://github.com/electron/electron");
  };

  // Only show desktop controls when running in Electron
  if (!isElectron) {
    return (
      <div className="flex items-center gap-2 p-2 bg-muted/50 rounded-lg">
        <Monitor className="h-4 w-4" />
        <span className="text-sm text-muted-foreground">
          Running in Web Browser
        </span>

        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" size="sm" disabled={isLoading}>
              <Info className="h-3 w-3 mr-1" />
              Web Info
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>Web Actions</DropdownMenuLabel>
            <DropdownMenuItem onClick={handleSystemInfo}>
              <Download className="h-3 w-3 mr-2" />
              System Information
            </DropdownMenuItem>
            <DropdownMenuItem onClick={handleDisplayInfo}>
              <Monitor className="h-3 w-3 mr-2" />
              Display Information
            </DropdownMenuItem>
            <DropdownMenuItem onClick={handleSaveFile}>
              <Save className="h-3 w-3 mr-2" />
              Download Sample File
            </DropdownMenuItem>
            <DropdownMenuItem onClick={handleOpenGitHub}>
              <ExternalLink className="h-3 w-3 mr-2" />
              Open GitHub
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    );
  }

  return (
    <div className="flex items-center gap-2 p-2 bg-muted/50 rounded-lg">
      <Monitor className="h-4 w-4" />
      <span className="text-sm text-muted-foreground">Desktop App</span>

      {/* File Operations Dropdown */}
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="ghost" size="sm">
            <FileText className="h-3 w-3 mr-1" />
            Files
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end">
          <DropdownMenuLabel>File Operations</DropdownMenuLabel>
          <DropdownMenuItem onClick={handleOpenFile}>
            <FolderOpen className="h-3 w-3 mr-2" />
            Open File
          </DropdownMenuItem>
          <DropdownMenuItem onClick={handleOpenDirectory}>
            <Folder className="h-3 w-3 mr-2" />
            Open Directory
          </DropdownMenuItem>
          <DropdownMenuItem onClick={handleSaveFile}>
            <Save className="h-3 w-3 mr-2" />
            Save Sample File
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>

      {/* System Info Dropdown */}
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="ghost" size="sm" disabled={isLoading}>
            <Info className="h-3 w-3 mr-1" />
            Info
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end">
          <DropdownMenuLabel>Information</DropdownMenuLabel>
          <DropdownMenuItem onClick={handleSystemInfo}>
            <Download className="h-3 w-3 mr-2" />
            System Info
          </DropdownMenuItem>
          <DropdownMenuItem onClick={handleDisplayInfo}>
            <Monitor className="h-3 w-3 mr-2" />
            Display Info
          </DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem onClick={handleOpenGitHub}>
            <ExternalLink className="h-3 w-3 mr-2" />
            Electron GitHub
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>

      {/* Window Controls */}
      <div className="flex gap-1 ml-auto">
        <Button variant="ghost" size="sm" onClick={toggleFullscreen}>
          <Fullscreen className="h-3 w-3" />
        </Button>
        <Button variant="ghost" size="sm" onClick={minimize}>
          <Minimize2 className="h-3 w-3" />
        </Button>
        <Button variant="ghost" size="sm" onClick={maximize}>
          <Maximize2 className="h-3 w-3" />
        </Button>
        <Button variant="ghost" size="sm" onClick={close}>
          <X className="h-3 w-3" />
        </Button>
      </div>
    </div>
  );
};
