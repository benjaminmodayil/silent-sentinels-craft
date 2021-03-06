module.exports = {
  images      : true,
  fonts       : true,
  svgSprite   : false,
  stylesheets : true,

  javascripts: {
    entry: {
      // files paths are relative to
      // javascripts.dest in path-config.json
      app: ["./app.js"]
    },
    // This tells webpack middleware where to
    // serve js files from in development:
    publicPath: "/assets/javascripts"
  },

  browserSync: {
    // Update this to match your development URL
    proxy: 'silentsentinel.devlocal',
    files: ['craft/templates/**/*']
  },

  production: {
    rev: true
  },

  ghPages     : false,
  html        : false,
  static      : false
}

