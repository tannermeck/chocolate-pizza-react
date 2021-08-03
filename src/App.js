import React, { Component } from 'react';
import Header from './Header.js';
import Image from './Image.js';
import IngredientList from './IngredientList.js';

class App extends Component {
  render() { 
    return (
    <>
      <Header />
      <Image />
      <IngredientList />
    </>
    );
  }
}
 
export default App;