 const path = require('path');

 module.exports = {
 	context: path.resolve(__dirname, 'src'),
 	entry: './index.js',
 	output: {
 		filename: 'bundle.js',
 		path: path.resolve(__dirname, 'dist'),
 	},
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