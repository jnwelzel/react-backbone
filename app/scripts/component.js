/**
 * @jsx React.DOM
 */
'use strict';

define(['require', 'react'], function(require) {
  var React = require('react');
  var CommentBox = React.createClass({displayName: 'CommentBox',
    render: function() {
      console.log("rendering react component")
      return (
        React.DOM.div( {className:"commentBox"}, 
          "Hello, world! I am a React component."
        )
      );
    }
  });
  React.renderComponent(
    CommentBox(null ),
    document.getElementById('comment-box')
  );
});
