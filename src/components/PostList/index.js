import React, { Component } from "react";
import "./PostList.css";
import Post from "../Post";
class PostList extends Component {
  state = {
    posts: [
      {
        id: 1,
        author: {
          name: "Julio Alcantara",
          avatar: "https://i.pravatar.cc/150?img=1"
        },
        date: "04 Jun 2019",
        content: "Pessoal, alguém sabe se a Rocketseat está contratando?",
        comments: [
          {
            id: 1,
            author: {
              name: "Diego Fernandes",
              avatar: "https://i.pravatar.cc/150?img=1"
            },
            content: "Conteúdo do comentário"
          }
        ]
      },
      {
        id: 2,
        author: {
          name: "Julio Alcantara",
          avatar: "https://i.pravatar.cc/150?img=1"
        },
        date: "04 Jun 2019",
        content: "Pessoal, alguém sabe se a Rocketseat está contratando?",
        comments: [
          {
            id: 1,
            author: {
              name: "Diego Fernandes",
              avatar: "https://i.pravatar.cc/150?img=1"
            },
            content: "Conteúdo do comentário"
          },
          {
            id: 2,
            author: {
              name: "Diego Fernandes",
              avatar: "https://i.pravatar.cc/150?img=1"
            },
            content: "Conteúdo do comentário"
          }
        ]
      }
    ]
  };
  render() {
    const { posts } = this.state;
    return (
      <div className="postlist">
        {posts.map(post => (
          <Post key={post.id} data={post} />
        ))}
      </div>
    );
  }
}

export default PostList;
