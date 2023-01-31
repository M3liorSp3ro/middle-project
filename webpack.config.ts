import path from 'path'
import webpack from 'webpack'
import { buildWebpackConfig } from './config/build/buildWebpackConfig'
import { BuildEnv, BuildPaths } from './config/build/types/config'

export default (env: BuildEnv) => {
  const paths: BuildPaths = {
    entry: path.resolve(__dirname, 'src', 'index.tsx'), // стартовая точка нашего приложения, // RANDOM: path.resolve(__dirname, 'src', 'index.js') - тут может быть любое названия длля бандла но обычно это не нужно,
    build: path.resolve(__dirname, 'build'), // где собираем ,
    html: path.resolve(__dirname, 'public', 'index.html') // шаблон для сборки html 
  }

  const mode = env.mode || 'development'
  const PORT = env.port || 3000

  const isDev = mode === 'development'

  const config: webpack.Configuration = buildWebpackConfig({
    mode,
    paths,
    isDev,
    port: PORT
  })

  return config
}