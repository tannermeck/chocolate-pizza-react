import React, { Component } from 'react';
import './IngredientList.css';
import IngridientsOne from './IngridientsOne.js';
import IngridientsTwo from './IngridientsTwo.js';
import IngridientItems from './IngridientItems';

class IngredientList extends Component {
    render() { 
        return ( 
        <section className="listSection">
                <div className="divOne">
                    {IngridientsOne.map(item => <IngridientItems amount={item.amount} name={item.name}/>)}
                </div>
                <div className="divTwo">
                    {IngridientsTwo.map(item => <IngridientItems amount={item.amount} name={item.name}/>)}
                </div>
            </section>
         );
    }
}
export default IngredientList;