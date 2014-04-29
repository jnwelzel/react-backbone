/**
 * @jsx React.DOM
 */
'use strict';

define(['require', 'react', 'models/example'], function(require) {
  var React = require('react');
  var ExampleModel = require('models/example');

  var DisplayView = React.createClass({
    componentDidMount: function() {
      this.props.model.on('change', function() {
        this.forceUpdate();
      }.bind(this));
    },
    render: function() {
      return (
        <p>Hello, world! I am a React component called <strong>"{this.props.model.get('name')}"</strong> and created by <strong>"{this.props.model.get('author')}"</strong>.</p>
      );
    }
  })

  var ToggleView = React.createClass({
    handleClick: function() {
      this.props.model.set('name', 'React');
      this.props.model.set('author', 'Facebook');
    },
    render: function() {
      return (
        <button onClick={this.handleClick}>
          model.set('name', 'React');
          model.set('author', 'Facebook');
        </button>
      );
    }
  });

  var model = new ExampleModel();

  React.renderComponent((
    <span>
      <DisplayView model={model} />
      <ToggleView model={model} />
    </span>
  ), document.getElementById('comment-box'))
});
