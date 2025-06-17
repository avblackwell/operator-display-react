# Electron + Web App Setup

This project supports building both a web application and a native desktop application using Electron, while maintaining a single codebase.

## Architecture Overview

- **React + Vite**: Core web application
- **Electron**: Desktop wrapper with native capabilities
- **Dual Build System**: Separate builds for web deployment and desktop distribution

## Development

### Web Development
```bash
# Start web development server
pnpm dev
# or
pnpm start
```

### Desktop Development
```bash
# Start Electron app in development mode (runs both web server and Electron)
pnpm electron:dev

# Or run them separately:
pnpm dev          # Start web server
pnpm electron     # Start Electron (in another terminal)
```

## Building

### Web Build (for server deployment)
```bash
pnpm build:web
```
This creates a `dist/` folder with optimized web assets ready for deployment to any web server.

### Desktop Build
```bash
# Build for current platform
pnpm electron:dist

# Platform-specific builds
pnpm electron:dist:mac     # macOS (DMG + ZIP)
pnpm electron:dist:win     # Windows (NSIS installer + ZIP)
pnpm electron:dist:linux   # Linux (AppImage + DEB)

# Development build (unpacked)
pnpm electron:pack
```

Desktop builds are output to `dist-electron/` directory.

## Project Structure

```
├── src/                    # React application source
│   ├── components/         # React components
│   ├── hooks/
│   │   └── useElectron.ts # Hook for Electron API access
│   └── types/
│       └── electron.d.ts  # TypeScript declarations for Electron APIs
├── electron/              # Electron main process files
│   ├── main.js           # Main Electron process
│   └── preload.js        # Preload script (security bridge)
├── public/               # Static assets
└── dist/                 # Web build output
```

## Using Electron Features

### Detecting Environment
```tsx
import { useElectron } from '@/hooks/useElectron';

function MyComponent() {
  const { isElectron } = useElectron();

  return (
    <div>
      {isElectron ? 'Running in Desktop App' : 'Running in Web Browser'}
    </div>
  );
}
```

### Window Controls
```tsx
const { minimize, maximize, close } = useElectron();

// These work in desktop app, gracefully fail in web
await minimize();
await maximize();
await close();
```

### File Operations
```tsx
const { openFile, saveFile } = useElectron();

const handleOpenFile = async () => {
  const filePath = await openFile();
  if (filePath) {
    console.log('Selected file:', filePath);
  }
};

const handleSaveFile = async () => {
  const success = await saveFile('Hello World!');
  console.log('File saved:', success);
};
```

## Example Component

See `src/components/AppControls.tsx` for a complete example of:
- Environment detection
- Conditional UI rendering
- Safe API usage with fallbacks

## Deployment

### Web Deployment
1. Run `pnpm build:web`
2. Deploy the `dist/` folder to your web server
3. Configure your server for SPA routing (redirect all routes to `index.html`)

### Desktop Distribution
1. Run `pnpm electron:dist:mac` (or appropriate platform)
2. Distribute the generated installer/package from `dist-electron/`
3. For cross-platform builds, use CI/CD with multiple OS runners

## Configuration

### Electron Builder
Electron builder configuration is in `package.json` under the `"build"` key. You can customize:
- App icons and metadata
- Target platforms and architectures
- Installer options
- Code signing (for distribution)

### Security
- Node integration is disabled by default
- Context isolation is enabled
- Only safe APIs are exposed through the preload script
- External URLs open in the system browser, not the app

## Development Tips

1. **Hot Reload**: The desktop app will automatically reload when you make changes to the React code
2. **DevTools**: Development builds automatically open DevTools in the Electron window
3. **Debugging**: Use Chrome DevTools for renderer process, VS Code for main process
4. **Testing**: Run `pnpm test` - tests work the same for both web and desktop versions

## Troubleshooting

### Build Issues
- Ensure all dependencies are installed: `pnpm install`
- Clear node_modules and reinstall if you encounter version conflicts
- Check that your platform supports the target architecture (ARM64 vs x64)

### Security Warnings
- Electron may show security warnings in development - these are normal
- Always test production builds before distribution
- Never expose Node.js APIs directly to the renderer process

### Performance
- Large apps may take longer to start in Electron
- Consider lazy loading and code splitting for better performance
- The web version will typically load faster than the desktop version