'use strict'

define ['require', 'backbone'], (require) ->
  Backbone = require 'backbone'
  ExampleModel = Backbone.Model.extend
    defaults:
      name: 'React Component Example'
      author: 'Jonathan Welzel'