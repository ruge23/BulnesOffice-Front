const path = require('path')
const HtmlWebPackPlugin = require('html-webpack-plugin');

const htmlWebpack = new HtmlWebPackPlugin({
    template: './assets/index.template.html',
    filename: 'index.html'
})

module.exports = {
    entry: './assets/javascript/entry.js',
    output:{
        publicPath: '/',
        path: path.join(__dirname, '..'),
        filename: 'dist/javascript/bundle.js'
    },
    plugins: [htmlWebpack],
    module:{
        rules: [
            {
                test: /\.scss$/,
                use: [ 'style-loader', 'css-loader', 'sass-loader' ]
            },
            {
                test: /\.(png|jpg|gif)$/,
                use: [
                  {
                    loader: 'file-loader',
                    options: {}  
                  }
                ]
            }
        ]
    }
}