 const path = require('path');
 const MiniCssExtractPlugin = require('mini-css-extract-plugin');
 const HtmlWebpackPlugin = require('html-webpack-plugin');

 module.exports = {
 	context: path.resolve(__dirname, 'src'),
 	mode: 'development',
 	entry: {
 		bundle: './index.js',
 	},

 	output: {
 		path: path.resolve(__dirname, 'dist'),
 		filename: '[name].js'
 	},

 	plugins: [
 		new MiniCssExtractPlugin({
 			filename: '[name].css'
 		}),

 		require('autoprefixer'),

 		new HtmlWebpackPlugin({
 			template: './index.pug'
 		}),

 	],

 	module: {
 		rules: [{
 				test: /\.css$/,
 				use: [{
 						loader: MiniCssExtractPlugin.loader,
 						options: {
 							publicPath: './dist/'
 						}
 					},
 					'css-loader'
 				]
 			},
 			{
 				test: /\.scss$/,
 				use: [
 					MiniCssExtractPlugin.loader,
 					'css-loader',
 					{
 						loader: 'sass-loader',
 						options: {
 							implementation: require('sass'),

 						}
 					}
 				]
 			},
 			{
 				test: /\.css$/,
 				use: ['style-loader', 'css-loader', 'postcss-loader']
 			},

 			{
 				test: /\.pug$/,
 				use: 'pug-loader'
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


 			// Other rules...
 		]
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