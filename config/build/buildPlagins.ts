import HtmlWebpackPlugin from 'html-webpack-plugin';
import webpack from 'webpack';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import { BuildOptions } from './types/config';

export function buildPlagins({ paths, isDev }: BuildOptions): webpack.WebpackPluginInstance[] {
    return [
        new HtmlWebpackPlugin({
            template: paths.html,
        }), // плагин для работы с html минификация
        new webpack.ProgressPlugin(), // плагин для понимания времени сборки
        new MiniCssExtractPlugin({
            filename: 'css/[name].[contenthash:8].css',
            chunkFilename: 'css/[name].[contenthash:8].css',
        }),
        new webpack.DefinePlugin({
            __IS_DEV__: JSON.stringify(isDev), // переменные окружения
        }),
        // плагин для обновления кода без обновления страницы
        new webpack.HotModuleReplacementPlugin(),
    ];
}
