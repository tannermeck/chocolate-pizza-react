import React, { Component } from 'react';
import './IngridientItems.css';

class IngridientItems extends Component {
    render() { 
        return (
            <label className="IngridientBackground">
                <input type="checkbox"/>
                <p>{this.props.amount}</p>
                <p>{this.props.name}</p>
            </label>
          );
    }
}
 
export default IngridientItems;