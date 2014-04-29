/**
 * @jsx React.DOM
 */
'use strict';

define(['require', 'react', 'models/example'], function(require) {
  var React = require('react');
  var ExampleModel = require('models/example');

  var DisplayView = React.createClass({displayName: 'DisplayView',
    componentDidMount: function() {
      this.props.model.on('change', function() {
        this.forceUpdate();
      }.bind(this));
    },
    render: function() {
      return (
        React.DOM.p(null, "Hello, world! I am a React component called ", React.DOM.strong(null, "\"",this.props.model.get('name'),"\""), " and created by ", React.DOM.strong(null, "\"",this.props.model.get('author'),"\""),".")
      );
    }
  })

  var ToggleView = React.createClass({displayName: 'ToggleView',
    handleClick: function() {
      this.props.model.set('name', 'React');
      this.props.model.set('author', 'Facebook');
    },
    render: function() {
      return (
        React.DOM.button( {onClick:this.handleClick}, 
          "model.set('name', 'React');"+' '+
          "model.set('author', 'Facebook');"
        )
      );
    }
  });

  var model = new ExampleModel();

  React.renderComponent((
    React.DOM.span(null, 
      DisplayView( {model:model} ),
      ToggleView( {model:model} )
    )
  ), document.getElementById('comment-box'))
});
