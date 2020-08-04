module.exports = {
  syntax: 'postcss-scss',
  plugins: [
    require("stylelint")({
      configFile: '.stylelintrc.json'
    }),
    require("postcss-url")({
      url: 'inline'
    }),
    require('autoprefixer'),
    require('@csstools/postcss-sass')({
      includePaths: ["src/styles"],
    }),
    require('cssnano')({
      preset: 'default',
    }),
  ]
}
