import esbuild from 'esbuild';
import path from 'path';

esbuild.build({
  entryPoints: ['./server.cjs'], // Your entry file
  bundle: true,
  outfile: './dist/server.cjs', // Output in `.cjs` format
  platform: 'node', // Target Node.js environment
  target: 'node16', // Node.js version target
  format: 'cjs', // Bundle in CommonJS format
  resolveExtensions: ['.js', '.jsx', '.ts', '.tsx', '.json'], // File extensions to resolve
  external: [], // Exclude any modules from bundling (if necessary)
}).catch(() => process.exit(1)); // Exit on error
