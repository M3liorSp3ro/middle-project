import webpack from "webpack";
import { BuildOptions } from "./types/config";

export function buildResolvers(options: BuildOptions): webpack.ResolveOptions {
  return {
    extensions: ['.tsx', '.ts', '.js'], // указание файлов с исходным кодом где мы не должны указывать расширение
    preferAbsolute: true, // абсолютные пути в приоритете
    modules: [options.paths.src, 'node_modules'],
    mainFiles: ['index'], // главное названия файла в папке
    alias: {} // не указываем алиас чтобы просто указывать сразу нужный путь например shared
  }
}