const path = require("path");
const vendor = require("./vendor");
const babel = require("./babel.config");
const HtmlWebpackPlugin = require("html-webpack-plugin");

const VENDOR_REGEXP = new RegExp(`[\/]node_modules[\/](${ [].concat(vendor).join("|") })[\/]`);

module.exports = {
	entry: {
		"master": `${__dirname}/src/@master/app.js`,
		"members": `${__dirname}/src/@members/app.js`,
	},

	output: {
		path: path.join(__dirname, "dist"),
		filename: "[name].bundle.js",
		chunkFilename: "[name].bundle.js?[contenthash]",
	},

	resolve: {
		extensions: [
			".js",
			".jsx",
			".json",
		],
		alias: {
			"@master": `${__dirname}/src/@master`,
			"@members": `${__dirname}/src/@members`,
			"actions": `${__dirname}/src/actions`,
			"components": `${__dirname}/src/components`,
			"containers": `${__dirname}/src/containers`,
			"reducers": `${__dirname}/src/reducers`,
			"selectors": `${__dirname}/src/selectors`,
			"classes": `${__dirname}/src/classes`,
			"store": `${__dirname}/src/store`,
			"imports": `${__dirname}/src/imports`,
			"modules": `${__dirname}/src/modules`,
			"hooks": `${__dirname}/src/hooks`,
			"styles": `${__dirname}/src/styles`,
			"helpers": `${__dirname}/src/helpers`,
			"validation": `${__dirname}/src/validation`,
			"__mocks__": `${__dirname}/src/__mocks__`,
			"api": `${__dirname}/src/api`,
		},
		modules: [
			`${__dirname}/node_modules`,
		],
	},

	externals: {},

	plugins: [
		new HtmlWebpackPlugin(), // Generates default index.html
		new HtmlWebpackPlugin({
			filename: process.env.NODE_ENV === "development" ? "user" : "user.html",
			template: "src/assets/user.html",
		}),
		new HtmlWebpackPlugin({
			filename: "product",
			template: "src/assets/product.html",
		}),
	    new HtmlWebpackPlugin({
		  filename: process.env.NODE_ENV === "development" ? "pasabahce" : "pasabahce.html",
		  template: path.resolve(__dirname, "./src/assets/pasabahce.html"),
	    }),
		new HtmlWebpackPlugin({
		  filename: process.env.NODE_ENV === "development" ? "delivery" : "delivery.html",
		  template: path.resolve(__dirname, "./src/assets/delivery.html"),
		}),
		new HtmlWebpackPlugin({
		  filename: process.env.NODE_ENV === "development" ? "contacts" : "contacts.html",
		  template: path.resolve(__dirname, "./src/assets/contacts.html"),
		}),
		new HtmlWebpackPlugin({
		  filename: process.env.NODE_ENV === "development" ? "shopping_card" : "shopping_card.html",
		  template: path.resolve(__dirname, "./src/assets/shopping_card.html"),
		}),
		new HtmlWebpackPlugin({
		  filename: process.env.NODE_ENV === "development" ? "catalog" : "catalog.html",
		  template: path.resolve(__dirname, "./src/assets/catalog.html"),
		}),
		new HtmlWebpackPlugin({
		  filename: process.env.NODE_ENV === "development" ? "order" : "order.html",
		  template: path.resolve(__dirname, "./src/assets/order.html"),
		}),
		new HtmlWebpackPlugin({
			filename: process.env.NODE_ENV === "development" ? "product_details" : "product_details.html",
			template: path.resolve(__dirname, "./src/assets/product_details.html"),
		}),
		new HtmlWebpackPlugin({
			filename: process.env.NODE_ENV === "development" ? "about" : "about.html",
			template: path.resolve(__dirname, "./src/assets/about.html"),
		}),
	],

	resolveLoader: {
		extensions: [".js", ".jsx", ".json"],
	},

	target: "web",

	module: {
		rules: [
			{
				test: /\.js$|\.jsx$/,
				include: [/src/, /node_modules\/(?=(swiper|dom7)\/).*/],
				exclude: [/node_modules\/(?!(swiper|dom7)\/).*/, /.test.js(x)?$/],
				use: {
					loader: "babel-loader",
					options: babel,
				},
			},
			{
				test: /\.(scss|css)$/,
				use: ["style-loader", "css-loader", "postcss-loader", "sass-loader"],
			},
			{
				test: /\.(jpe?g|png|gif)$/i,
				exclude: /sprite_src/,
				use: [
					{
						loader: "file-loader",

						/*
						 * options: {
						 * 	name: function () {
						 * 		return "[path][name].[ext]?[contenthash:6]";
						 * 	},
						 * },
						 */
					},
				],
			},
			{
				test: /\.svg$/,
				use: [
					"@svgr/webpack",
				],
			},
			{

				//...
				parser: {
					amd: false, // disable AMD
				},
			},
		],
	},

	optimization: {
		moduleIds: "deterministic",
		chunkIds: "named",
		runtimeChunk: "single",
		splitChunks: {
			cacheGroups: {
				vendor: {
					test: (module) => {
						const name = module.nameForCondition && module.nameForCondition();

						if (!name) {
							return;
						}

						return (
							VENDOR_REGEXP.test(name)
							&& !(/\.css$/.test(name))
						);
					},
					name: "vendor",
					chunks: "all",
				},
				default: false,
				vendors: false,
			},
		},
	},
};
