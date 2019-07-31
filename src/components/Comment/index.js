import React, { Component } from "react";
import "./Comment.css";

export default class Comment extends Component {
  render() {
    const { author, content } = this.props.data;
    return (
      <div className="comments">
        <img className="avatar" src={author.avatar} />
        <div className="comments-body">
          <span className="comments-author">{author.name} </span>
          <span className="comments-content">{content}</span>
        </div>
      </div>
    );
  }
}
