//importar la configuracion
const common = require('./webpack.common');
const merge = require('webpack-merge');// combina el archivo de webpack de desarrolo con el de produccion

module.exports = merge(common,{
    
    module:{
        rules: [
            {
                test: /\.scss$/,
                use: [ 'style-loader', 'css-loader', 'sass-loader' ]
            }
      ]
    }
});

