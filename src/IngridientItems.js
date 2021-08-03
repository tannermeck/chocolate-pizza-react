import React, { Component } from 'react';

class IngridientItems extends Component {
    render() { 
        return (
            <label>
                <input type="checkbox"/>
                <p>{this.props.amount}</p>
                <p>{this.props.name}</p>
            </label>
          );
    }
}
 
export default IngridientItems;