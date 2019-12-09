const path = require('path')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const MiniCSSExtractPlugin = require('mini-css-extract-plugin')

const mode = process.env.NODE_ENV || 'development'
const prod = mode === 'production'

module.exports = {
  entry: {
    bundle: ['./src/app.js']
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'app.bundle.js',
  },

  devServer: {
    index: path.resolve(__dirname, 'public.index.html'),
    contentBase: path.join(__dirname, 'dist'),
    compress: false,
    port: 4008,
    writeToDisk: true,
    open: 'chrome'
  },

  resolve: {
    alias: {
      svelte: path.resolve('node_modules', 'svelte'),
      components: path.resolve(__dirname, 'src/components'),
      pages: path.resolve(__dirname, 'src/pages'),
      utils: path.resolve(__dirname, 'src/utils'),
    },
    extensions: ['.mjs', '.js', '.svelte'],
    mainFields: ['svelte', 'browser', 'module', 'main'],
  },

  module: {
    rules: [
      {
        test: /\.(html|svelte)$/,
        use: {
          loader: 'svelte-loader',
          options: {
            emitCss: true,
            hotReload: true
          }
        }
      },

      {
        test: /\.css$/,
        use: [
          /**
					 * MiniCssExtractPlugin doesn't support HMR.
					 * For developing, use 'style-loader' instead.
					 * */
					prod ? MiniCssExtractPlugin.loader : 'style-loader',
					'css-loader'
        ]
      }
    ]
  },

  mode,
  plugins: [
    new CleanWebpackPlugin(),
    new MiniCSSExtractPlugin({
      filename: '[name].css'
    })
  ],
  devtool: prod ? false: 'source-map'
}