#/*global require*/
'use strict'

require.config
  baseUrl: 'scripts/'
  paths:
    jquery: '../bower_components/jquery/dist/jquery'
    backbone: '../bower_components/backbone/backbone'
    underscore: '../bower_components/underscore/underscore'
    foundation: '../bower_components/foundation/js/foundation'
    react: '../bower_components/react/react'
  shim:
    foundation: ['jquery']
    underscore:
      exports: '_'
    backbone:
      deps: ['underscore', 'jquery']
      exports: 'Backbone'

require [
  'backbone',
  'jquery',
  'underscore',
  'foundation',
  'react',
  'component',
  'models/example'
], (backbone, jquery, underscore, foundation, react, component, example) ->
  # backbone and react objects
  console.log 'Surprise motherfucker!'
  return