'use strict'

module.exports =

  files:

    javascripts:
      joinTo:
        'vendor.js': /^(?!app)/
        'app.js': /^app/

    stylesheets:
      joinTo:
        'app.css': 'app/stylus/app.styl'

  plugins:

    babel:
      presets: [
        'es2015',
        'react'
      ]

    eslint:
      pattern: /^app\/.*\.jsx?$/
      warnOnly: yes

    stylus:
      linenos: true

  conventions:
    ignored: [
      /[\\/]_/,
      /vendor[\\/]node[\\/]/,
      /vendor[\\/](j?ruby-.*|bundle)[\\/]/,
      /^app\/.*\.test.jsx?$/,
    ]
