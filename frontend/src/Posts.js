import React from 'react';
import "./Posts.css";

const Posts = ({ creator, title, paragraph, joinedPeople, onJoin }) => {
  return (
    <div className="post">
      <div className="post-creator">Creator: {creator}</div>
      <div className="post-title">Title: {title}</div>
      <div className="post-paragraph">{paragraph}</div>
      <div className="post-joined-people">Joined People: {joinedPeople}</div>
      <button className="join-button" onClick={onJoin}>Join</button>
    </div>
  );
};

export default Posts;