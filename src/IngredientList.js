import React, { Component } from 'react';
import './IngredientList.css';
import Ingridients from './Ingridients.js';
import IngridientItems from './IngridientItems';

class IngredientList extends Component {
    render() { 
        return ( 
            Ingridients.map(item => <IngridientItems amount={item.amount} name={item.name}/>)
         );
    }
}
 
export default IngredientList;