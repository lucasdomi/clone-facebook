import React, { Component } from "react";
import "./Post.css";
import Comments from "../Comment";
export default class Post extends Component {
  render() {
    const { content, author, date, comments } = this.props.data;
    return (
      <div className="post">
        <div class="post-header">
          <img className="avatar" src={author.avatar} />
          <div className="post-header__text">
            <span>{author.name}</span>
            <span>{date} </span>
          </div>
        </div>
        <div className="post-content">
          <span>{content}</span>
        </div>
        <hr />
        <div className="post-comments">
          {comments.map(comment => (
            <Comments key={comment.id} data={comment} />
          ))}
        </div>
      </div>
    );
  }
}
