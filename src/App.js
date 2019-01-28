import React, { Component } from 'react';
import Posts from './components/modules/Posts'
import PostForm from './components/modules/PostForm'

class App extends Component {
  render() {
    return (
      <div>
        <PostForm />
        <Posts />
      </div>
    );
  }
}

export default App;
