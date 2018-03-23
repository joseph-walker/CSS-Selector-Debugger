module.exports = {
    devtool: 'inline-source-map',
    entry: {
        extension: './src/main.tsx',
        background: './src/worker.ts'
    },
    output: {
        filename: './dist/build/[name].js'
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