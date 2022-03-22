const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');
const webpack = require('webpack');
const path = require('path');
const darkTheme = require('@ant-design/dark-theme');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const TerserJSPlugin = require('terser-webpack-plugin');

const tsConfigPath = path.join(__dirname, './tsconfig.json');
const dir = path.resolve('.')
const port = 8080;

const isDevelopment = process.env['NODE_ENV'] === undefined || process.env['NODE_ENV'] === 'development' || process.env['NODE_ENV'] === 'dev';
if (isDevelopment) {
  require('dotenv').config();
}

const styleLoader = process.env.NODE_ENV === 'production'
  ? MiniCssExtractPlugin.loader
  : 'style-loader';

module.exports = {
  entry: dir + '/src/app',
  output: {
    filename: 'bundle.js',
    path: dir + '/dist',
    assetModuleFilename: 'static/[hash][ext][query]'
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.json', '.less'],
    plugins: [new TsconfigPathsPlugin({
      configFile: tsConfigPath,
    })],
    alias: {
      'fs': 'browserfs/dist/shims/fs.js',
      'buffer': 'browserfs/dist/shims/buffer.js',
      'path': 'browserfs/dist/shims/path.js',
      'processGlobal': 'browserfs/dist/shims/process.js',
      'bufferGlobal': 'browserfs/dist/shims/bufferGlobal.js',
      'bfsGlobal': require.resolve('browserfs')
    },
    fallback: {
      net: false,
      child_process: false,
      url: false,
      process: false,
      Buffer: false,
      util: false,
      crypto: false,
      http: false,
      os: false,
    }
  },
  bail: true,
  mode: isDevelopment ? 'development' : 'production',
  devtool: isDevelopment ? 'source-map' : 'null',
  module: {
    // https://github.com/webpack/webpack/issues/196#issuecomment-397606728
    exprContextCritical: false,
    rules: [
      {
        test: /\.tsx?$/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              plugins: [['import', { "libraryName": "antd", style: 'css' }]]
            }
          },
          {
            loader: 'ts-loader',
            options: {
              happyPackMode: true,
              transpileOnly: true,
              configFile: tsConfigPath,
              compilerOptions: {
                target: 'es2015'
              }
            },
          },
        ],
      },
      {
        test: /\.png$/,
        use: 'asset/resource',
      },
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader'],
      },
      {
        test: /\.module.less$/,
        use: [
          styleLoader,
          {
            loader: "css-loader",
            options: {
              importLoaders: 1,
              sourceMap: true,
              modules: {
                localIdentName: '[local]___[contentHash:base64:5]',
              }
            }
          },
          {
            loader: "less-loader",
            options: {
              lessOptions: {
                strictMath: false,
                javascriptEnabled: true,
              },
            },
          }
        ]
      },
      {
        test: /^((?!\.module).)*less$/,
        use: [
          styleLoader,
          {
            loader: "css-loader"
          },
          {
            loader: "less-loader",
            options: {
              lessOptions: {
                strictMath: false,
                javascriptEnabled: true,
                modifyVars: darkTheme
              }
            },
          }
        ]
      },
      {
        test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
        type: 'asset/resource'
      }
    ],
  },
  resolveLoader: {
    modules: [path.resolve('node_modules')],
    extensions: ['.ts', '.tsx', '.js', '.json', '.less'],
    mainFields: ['loader', 'browser', 'module', 'main'],
  },
  optimization: {
    minimizer: [new TerserJSPlugin({}), new CssMinimizerPlugin({})],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: __dirname + '/index.html',
      inject: false,
      templateParameters: {
        cdnBase: isDevelopment ? '' : '/ide-startup-lite/',
      }
    }),
    new MiniCssExtractPlugin({
      filename: 'main.css'
    }),
    new webpack.DefinePlugin({
      'process.env.DEVELOPMENT': JSON.stringify(!!isDevelopment),
      'process.env.EXTENSION_WORKER_HOST': JSON.stringify(process.env.GITHUB_WORKFLOW ? 'https://opensumi.github.io/ide-startup-lite/worker.host.js' : '')
    }),
    new webpack.ProvidePlugin({ BrowserFS: 'bfsGlobal', process: 'processGlobal', Buffer: 'bufferGlobal' })
  ],
  devServer: {
    static: dir + '/dist',
    port,
    host: '127.0.0.1',
    hot: true,
    https: false,
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, PATCH, OPTIONS",
      "Access-Control-Allow-Headers": "X-Requested-With, content-type, Authorization"
    },
    client: {
      overlay: true,
    },
  }
}