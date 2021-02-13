const webpackConfig = require("./webpack.config");
const merge = require("webpack-merge");

module.exports = merge(webpackConfig, {

	watch: true,

	watchOptions: {
		ignored: /node_modules/,
		poll: 1000 // Check for changes every second
	},

	devtool: false,

	mode: "development",

});
