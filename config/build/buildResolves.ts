import webpack from "webpack";

export function buildResolvers(): webpack.ResolveOptions  {
    return {
        extensions: ['.tsx', '.ts', '.js'], // указание файлов с исходным кодом где мы не должны указывать расширение
      }
}