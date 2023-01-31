import path from "path";
import webpack from "webpack";
import { buildDevServer } from "./buildDevServer";
import { buildLoaders } from "./buildLoaders";
import { buildPlagins } from "./buildPlagins";
import { buildResolvers } from "./buildResolves";
import { BuildOptions } from "./types/config";

export function buildWebpackConfig(options: BuildOptions): webpack.Configuration {

    const {paths, mode, isDev} = options

    return {
        mode: mode,
        entry: paths.entry,
        output: { // куда и как мы будем собирать наше приложение
            filename: '[name].[contenthash].js', // почитать про output [name] - шаблон для кеша в браузере [contenthash] - уникальные названия бандлов чтобы пользователь получал актульную сборку проекта
            path: paths.build,
            clean: true // очистка старых файлов сборки
        },
        plugins: buildPlagins(options),
        module: {
            rules: buildLoaders(options),
        },
        resolve: buildResolvers(),
        devtool: isDev ? 'inline-source-map' : undefined,
        devServer: isDev ? buildDevServer(options) : undefined
    }
}