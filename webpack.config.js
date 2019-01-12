module.exports = {
    entry: "./src/index.tsx",
    output: {
	filename: "bundle.js",
	path: __dirname + "/dist"
    },
    module: {
	rules: [
	    { test: /\.tsx?$/, loader: "ts-loader" },
	    { enforce: "pre", test: /\.js$/, loader: "source-map-loader" }
	]
    },
    resolve: {
	extensions: [".ts", ".tsx", ".js", ".json"]
    },
    externals: {
	"react": "React",
	"react-dom": "ReactDOM"
    },
    devtool: "source-map"
}
