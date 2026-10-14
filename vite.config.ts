import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'
import tailwindcss from "@tailwindcss/vite";
import { federation } from "@module-federation/vite";

// https://vite.dev/config/
export default defineConfig({
    base: 'http://logist-aria-1m-vs.sfera.local/',
    plugins: [
        react(),
        tailwindcss(),
        federation({
            name: 'logist-aria-1m-vs',
            filename: 'remoteEntry.js',
            manifest: true,
            exposes: {
                './App': './src/App.tsx'
            },
            shared: {
                react: {
                    singleton: true,
                    requiredVersion: '^19.1.1',
                    strictVersion: false,
                },
                'react-dom': {
                    singleton: true,
                    requiredVersion: '^19.1.1',
                    strictVersion: false,
                },
            },
        }),
    ],
    build: { target: 'esnext', minify: false },
    preview: {
        port: 5003,
        host: '0.0.0.0',
        strictPort: true,
        headers: {
            'Access-Control-Allow-Origin': '*',
        }
    }
})