#/*global require*/
'use strict'

require.config
  paths:
    jquery: '../bower_components/jquery/dist/jquery'
    backbone: '../bower_components/backbone/backbone'
    underscore: '../bower_components/underscore/underscore'

require [
  'backbone'
], (Backbone) ->
  Backbone.history.start()
