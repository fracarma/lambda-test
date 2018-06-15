module.exports = [{
  mode: "production",
  entry: {
    'functions/hello/index' : './src/hello/index.ts',
    'functions/whats-my-name/index' : './src/whats-my-name/index.ts'
  },
  target: 'node',
  resolve: { extensions: ['.ts', '.tsx', '.js'] },
  output: {
    library: 'main',
    libraryTarget: 'commonjs2',
    filename: '[name].js',
    path: __dirname
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/
      }
    ]
  },
}];