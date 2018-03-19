const common = require('./webpack.common');
const merge = require('webpack-merge');

//libreria=> extrae nuestros stilos de buldle hacia un nuevo archivo externo que sirvamos como nuestro css
const ExtractTextPlugin = require('extract-text-webpack-plugin');

//configurar el pligin que extrae el texto
const extractSass =new ExtractTextPlugin({
    filename:'dist/css/[name].[contenthash].css'//nombre del archivo que quiero colocar mi csss
})
module.exports = merge(common,{
    output:{
        publicPath: '.'
    }, 
    module:{
        rules: [
            {
                test: /\.scss$/,
                use: extractSass.extract({
                    use:[
                        {loader:'css-loader', options:{minimize : true}},
                        {loader: 'sass-loader'}
                    ]
                })
            },{
                test: /\.html$/,
                use:[
                    {loader: 'html-loader', options:{minimize: true, attrs: false}}
                ]
            }
      ]
    },
    plugins: [extractSass]
});