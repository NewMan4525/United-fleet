 const path = require('path');
 const HtmlWebpackPlugin = require('html-webpack-plugin');
 //  const MiniCssExtractPlugin = require("mini-css-extract-plugin");

 module.exports = {
 	context: path.resolve(__dirname, 'src'),
 	entry: './index.js',





 	output: {
 		filename: 'bundle.js',
 		path: path.resolve(__dirname, 'dist'),
 	},



 	plugins: [
 		new HtmlWebpackPlugin({
 			template: path.join(__dirname, 'src/index.pug'),
 			filename: 'index.html',
 		}),

 		// new MiniCssExtractPlugin({
 		// 	filename: "[name].css"
 		// }),

 	],


 	module: {
 		rules: [{
 				test: /\.css$/i,
 				use: ['style-loader', 'css-loader'],
 			},
 			{
 				test: /\.s[ac]ss$/i,
 				use: [
 					// Creates `style` nodes from JS strings
 					"style-loader",
 					// Translates CSS into CommonJS
 					"css-loader",
 					// Compiles Sass to CSS
 					"sass-loader",
 				],
 			},

 			{
 				test: /\.m?js$/,
 				exclude: /node_modules/,
 				use: {
 					loader: "babel-loader",
 					options: {
 						presets: ['@babel/preset-env']
 					}
 				}
 			},
 			{
 				test: /\.pug$/,
 				use: '@webdiscus/pug-loader',
 			},

 			// {
 			// 	test: /\.css$/i,
 			// 	use: [MiniCssExtractPlugin.loader, "css-loader"],
 			// },

 		],
 	},



 	devServer: {
 		hot: true,
 		static: {
 			directory: path.join(__dirname, 'dist'),
 			watch: true,
 		},
 		compress: true,
 		port: 9000,
 	},
 };