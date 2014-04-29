#/*global require*/
'use strict'

require.config
  paths:
    jquery: '../bower_components/jquery/dist/jquery'
    backbone: '../bower_components/backbone/backbone'
    underscore: '../bower_components/underscore/underscore'
    foundation: '../bower_components/foundation/js/foundation'

require [
  'jquery',
  'backbone',
  'underscore',
  'foundation'
], (Backbone) ->
  # Backbone.history.start()
  console.log 'Surprise motherfucker!'
  return
