const path = require("path");
const vendor = require("./vendor");
const babel = require("./babel.config");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const cssUrl = require("postcss-url");
const getFile = require("postcss-url/src/lib/get-file");
const calcHash = require("postcss-url/src/lib/hash");
const HtmlWebpackPlugin = require('html-webpack-plugin')

const VENDOR_REGEXP = new RegExp(`[\/]node_modules[\/](${ [].concat(vendor).join("|") })[\/]`);

const cssUrlOptions = {
	filter: (asset) => {
		if (asset.pathname && asset.pathname[0] === "/") {
			return !(/^\/font\//.test(asset.pathname));
		}

		return false;
	},
	url: function (asset, dir, options, decl, warn) {
		return getFile(asset, options, dir, warn)
			.then(file => {
				if (!file) {
return;
}

				return `${asset.pathname}?${calcHash(file.contents)}`;
			});
	},
};

module.exports = {
	entry: {
		"master": `${__dirname}/src/@master/app.js`,
		"members": `${__dirname}/src/@members/app.js`
	},

	output: {
		path: path.join(__dirname, 'dist'),
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
		new MiniCssExtractPlugin({
			filename: "[name].css?[contenthash:6]",
			chunkFilename: "[id].css?[contenthash:6]",
		}),
		new HtmlWebpackPlugin(), // Generates default index.html
		new HtmlWebpackPlugin({
			filename: 'user',
			template: 'src/assets/user.html'
		}),
		new HtmlWebpackPlugin({
			filename: 'contact',
			template: 'src/assets/contact.html'
		})
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
				test: /\.module\.s?css$/,
				use: [
					MiniCssExtractPlugin.loader,
					{
						loader: "css-loader",
						options: {
							sourceMap: true,
							importLoaders: 1,
							localsConvention: "dashes",
							modules: {
								localIdentName: "[local]___[hash:base64:6]",
							},
						},
					},
					{
						loader: "postcss-loader",
						options: {
							plugins: (loader) => {
								const plugins = [
									require("autoprefixer"),
									cssUrl(cssUrlOptions),
								];

								if (loader.mode === "production") {
									plugins.push(require("cssnano"));
								}

								return plugins;
							},
							sourceMap: true,
						},
					},
					{
						loader: "resolve-url-loader",
						options: {
							sourceMap: true,
						},
					},
					{
						loader: "sass-loader",
						options: {
							implementation: require("sass"),
							sassOptions: {
								outputStyle: "expanded",
							},
							sourceMap: true,
						},
					},
				],
			},
			{
				test: /\.s?css$/,
				exclude: /\.module\.s?css$/,
				use: [
					MiniCssExtractPlugin.loader,
					{
						loader: "css-loader",
						options: {
							sourceMap: true,
						},
					},
					{
						loader: "postcss-loader",
						options: {
							plugins: () => [
								require("autoprefixer"),
							],
							sourceMap: true,
						},
					},
					{
						loader: "postcss-loader",
						options: {
							plugins: (loader) => {
								const plugins = [
									require("autoprefixer"),
									cssUrl(cssUrlOptions),
								];

								if (loader.mode === "production") {
									plugins.push(require("cssnano"));
								}

								return plugins;
							},
							sourceMap: true,
						},
					},
					{
						loader: "resolve-url-loader",
						options: {
							sourceMap: true,
						},
					},
					{
						loader: "sass-loader",
						options: {
							implementation: require("sass"),
							sassOptions: {
								outputStyle: "expanded",
							},
							sourceMap: true,
						},
					},
				],
			},
		  {
			test: /\.svg$/,
			use: [
			  '@svgr/webpack',
			 ]
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
