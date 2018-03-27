import React, { Component } from 'react';
import Axios from 'axios';

class IdeasContainer extends Component {

  constructor(props) {
    super(props);
    this.state = {
      ideas: []
    };
  }

  componentDidMount() {
    Axios.get('http://localhost:3001/api/v1/ideas.json')
      .then(response => {
        console.log(response);
        this.setState({ideas: response.data});
      })
      .catch(error => console.log(error));
  }

  render() {
    return (
      <div>
        {this.state.ideas.map((idea) => {
          return(
            <div className="tile" key={idea.id} >
              <h4>{idea.title}</h4>
              <p>{idea.body}</p>
              <em> This item was created at: {idea.created_at}</em>
              <br />
              <em> This item was updated at: {idea.updated_at}</em>
            </div>
          );
        })}
      </div>
    );
  }
}

export default IdeasContainer;
