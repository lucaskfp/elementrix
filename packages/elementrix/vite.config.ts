import { resolve } from "node:path";
import { defineConfig } from "vite";
import dts from "vite-plugin-dts";

export default defineConfig({
// 	plugins: [
//         dts({
// 		entryRoot: "src/lib",
// 		insertTypesEntry: true,
// 		outDir: "dist/elementrix/types",
// 		rollupTypes: true,
// 	})
// ],
	server: {
		host: "127.0.0.1",
	},
	build: {
		lib: {
			entry: [
				resolve(__dirname, "src/lib/components/index.ts"),
                resolve(__dirname, "src/lib/components/accordion/index.ts"),
				resolve(__dirname, "src/lib/react/index.ts"),
			],
			name: "elementrix",
			 formats: ["es"],
		},
		rollupOptions: {
			// external: ["react", "react-dom"],
			input: {
				"elementrix/index": resolve(__dirname, "src/lib/components/index.ts"),
				"elementrix/accordion/index": resolve(__dirname, "src/lib/components/accordion/index.ts"),
				"elementrix/react/index": resolve(__dirname, "src/lib/react/index.ts"),
			},
			output: {
				// globals: {
				// 	react: "React",
				// 	"react-dom": "ReactDOM",
				// },
				entryFileNames: (chunkInfo) => "[name].js",
			},
		},
	},
});