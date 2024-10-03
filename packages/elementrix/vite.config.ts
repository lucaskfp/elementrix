import { resolve } from "node:path";
import { defineConfig } from "vite";
import dts from "vite-plugin-dts";

export default defineConfig({
	plugins: [
		dts()
	],
	server: {
		host: "127.0.0.1",
	},
	build: {
		lib: {
			entry: [
				resolve(__dirname, "src/lib/index.ts"),
				resolve(__dirname, "src/lib/**/index.ts")
			],
			name: "elementrix",
			formats: ["es"],
		},
		rollupOptions: {
			input: {
				"index": resolve(__dirname, "src/lib/index.ts"),
				"accordion/index": resolve(__dirname, "src/lib/accordion/index.ts")
			},
			output: {
				entryFileNames: (chunkInfo) => "[name].js",
			},
		},
	},
});