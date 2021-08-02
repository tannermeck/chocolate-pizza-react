import React, { Component } from 'react';
import './Recipe.css';
import printIcon from './images/print-icon.png';

class Recipe extends Component {
    render() { 
        return (
            <body>
                <section className="topHeader">
                    <div className="bodyHeader">
                        <h1>Chocolate Pizza</h1>
                        <p>POSTED ON 15 DEC 2013 / DESSERTS</p>
                    </div>
                    <div id="print">
                        <img alt="print-icon" src={printIcon}/>
                        <p>PRINT</p>
                    </div>
                </section>
            </body>
          );
    }
}
 
export default Recipe;