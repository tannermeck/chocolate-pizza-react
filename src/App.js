import React, { Component } from 'react';
import Header from './Header.js';
import Image from './Image.js';
import IngredientList from './IngredientList.js';
import Footer from './Footer.js';

class App extends Component {
  render() { 
    return (
    <>
      <Header />
      <Image />
      <IngredientList />
      <Footer />
    </>
    );
  }
}
 
export default App;