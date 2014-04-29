/**
 * @jsx React.DOM
 */
'use strict';

define(['require', 'react'], function(require) {
  var React = require('react');
  var CommentBox = React.createClass({
    render: function() {
      return (
        <div className="commentBox">
          Hello, world! I am a CommentBox.
        </div>
      );
    }
  });
  React.renderComponent(
    <CommentBox />,
    document.getElementById('comment-box')
  );
});
