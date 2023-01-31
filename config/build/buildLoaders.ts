import MiniCssExtractPlugin from "mini-css-extract-plugin";
import webpack from "webpack";
import { BuildOptions } from "./types/config";

export function buildLoaders({ isDev }: BuildOptions): webpack.RuleSetRule[] { // обработка файлов которые выходят за рамки js: png css jpeg и тд

  const cssLoader = {
    test: /\.s[ac]ss$/i,
    use: [
      isDev ? 'style-loader' : MiniCssExtractPlugin.loader,
      {
        loader: 'css-loader',
        options: {
          modules: {
            auto: (resPath: string) => Boolean(resPath.includes('.module.')),
            localIdentName: isDev
              ? '[path][name]__[local]--[hash:base64:8]'
              : '[hash:base64:8]'
          },

        }
      },
      "sass-loader",
    ],
  }

  const typescriptLoader = {
    test: /\.tsx?$/, // файлы которые необходимо обработать если бы не использовали ts то нужно было бы еще добавить babel-loader
    use: 'ts-loader',
    exclude: /node_modules/,
  }

  return [ // лучше выносить в отлельные переменные так как порядок лоадеров очень важен
    typescriptLoader,
    cssLoader
  ]
}