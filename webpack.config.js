module.exports = {
    devtool: 'inline-source-map',
    entry: './src/main.tsx',
    output: {
        filename: './dist/build/bundle.js'
    },
    resolve: {
        extensions: ['.ts', '.tsx', '.js']
    },
    module: {
        rules: [
            { test: /\.tsx?$/, loader: 'ts-loader' }
        ]
    }
}