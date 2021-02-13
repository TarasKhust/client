const merge = require("webpack-merge");
const { HotModuleReplacementPlugin } = require("webpack");
const webpackConfig = require("./webpack.config");

const HOST = "127.0.0.1";
const PORT = 443;

module.exports = merge(webpackConfig, {

	entry: Object.keys(webpackConfig.entry).reduce((acc, key) => {
		acc[key] = ["react-hot-loader/patch", webpackConfig.entry[key]];
		return acc;
	}, {}),

	watch: true,

	watchOptions: {
		ignored: /node_modules/,
		poll: 1000, // Check for changes every second
	},

	output: {
		publicPath: `https://${HOST}:${PORT}/dist/vodien`,
	},

	resolve: {
		alias: {
			"react-dom": "@hot-loader/react-dom",
		},
	},

	devtool: "source-map",

	mode: "development",

	plugins: [
		new HotModuleReplacementPlugin(),
	],

	devServer: {
		contentBase: webpackConfig.resolve.alias.framework,
		https: true,
		port: 443,
		hot: true,

		/*
		 * lazy: true,
		 * hotOnly: true,
		 * writeToDisk: true,
		 * overlay: {
		 * 	warnings: false,
		 * 	errors: true,
		 * },
		 */
		disableHostCheck: true,
		headers: { "Access-Control-Allow-Origin": "*" },

		proxy: {
			"/dist/vodien": `https://${HOST}:${PORT}`,
		},
	},

});