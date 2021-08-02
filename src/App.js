import React, { Component } from 'react';
import Header from './Header.js';
import Recipe from './Recipe.js';

class App extends Component {
  render() { 
    return (
    <>
      <Header />
      <Recipe />
    </>
    );
  }
}
 
export default App;