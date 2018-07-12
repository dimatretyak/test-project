import React, { Component } from 'react';
import './unitSelector.css';

export class UnitSelector extends Component {
  render() {
    const { activeItem, handleClick } = this.props;

    return (
      <div className="unit-selector">
        { 
          this.props.items.map((currentItem, index) => (
            <button
              key={`button-${index}`}
              className={`unit-selector__button ${activeItem === currentItem ? 'selector__button--active' : ''}`}
              onClick={ handleClick(currentItem) }
            >{ currentItem }</button>            
          ))
        }        
      </div>
    );
  }
}