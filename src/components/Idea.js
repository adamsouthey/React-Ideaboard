import React from 'react';

const Idea = ({idea}) =>
  <div className="tile" key={idea.id}>
    <h4>{idea.title}</h4>
    <p>{idea.body}</p>
    <em> This item was created at: {idea.created_at}</em>
    <br />
    <em> This item was updated at: {idea.updated_at}</em>
  </div>;

export default Idea;
