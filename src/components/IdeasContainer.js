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
      <div className='App-intro'>
        Ideas
      </div>
    );
  }
}

export default IdeasContainer;
