import { BuildOptions } from "./types/config";
import type { Configuration as DevServerConfigurations } from 'webpack-dev-server'

export function buildDevServer(options: BuildOptions): DevServerConfigurations {
    return {
        port: options.port,
        open: true, // автоматическое открытие в браузереы
        historyApiFallback: true, // можем перезагрузиться не на главной странице
        hot: true, // нужен для обновления содержимого без перезагрузки страницы
    }
}