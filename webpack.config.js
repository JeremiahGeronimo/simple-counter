'use strict';

let webpack = require('webpack');

module.exports = {
    entry: './src/scripts/index.js',

    output: {
        filename: 'index.js'
    },

    plugins: [
        new webpack.DefinePlugin({__CLIENT__: true, __SERVER__: false}),
        new webpack.DefinePlugin({'process.env': {NODE_ENV: '"production"'}}),
        new webpack.optimize.DedupePlugin(),
        new webpack.optimize.OccurenceOrderPlugin()
    ],

    module: {
        loaders: [
            {include: /\.json$/, loaders: ['json-loader']},

            {
                test: /\.jsx?$/,
                exclude: /(node_modules|bower_components)/,
                loader: 'babel', // 'babel-loader' is also a legal name to reference
                query: {
                    presets: ['react', 'es2015'],
                    plugins: ['transform-runtime']
                }
            },

            {include: /\.css$/, loader: 'style-loader!css-loader'},
            {include: /\.less$/, loader: 'style-loader!css-loader!less-loader'},
            {include: /\.scss$/, loader: 'style-loader!css-loader!sass-loader'},
            {include: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: 'file-loader'}
        ]
    },

    resolve: {
        extensions: ['', '.json', '.jsx', '.js'],
        modulesDirectories: [
            'node_modules'
        ]
    }
};
