import React, { Component } from 'react';
import Inventory from '../assets/ch02-inventory.js';

  function ProductImage(props) {
    return <img src={require('../assets/'+ props.color+'.jpg')} alt="Product Image" />;
  }

  function SizeSelector(props) {
    function sizeOptions() {
      return props.sizes.map(function(num) {
        return (
          <option value={num} key={num}>
            {num}
          </option>
        );
      });
    }
    function onSizeChange(evt) {
      props.handleSizeChange(evt.target.value);
    }
    return (
      <div className="field-group">
        <label htmlFor="size-options">Size:</label>
        <select defaultValue={props.size} name="sizeOptions" id="size-options" onChange={onSizeChange}>
          {sizeOptions()}
        </select>
      </div>
    );
  }

  function ColorSelector(props) {
    function colorOptions() {
      return props.colors.map(function(name) {
        return (
          <option value={name} key={name}>
            {name}
          </option>
        );
      });
    }
    function onColorChange(evt) {
      props.handleColorChange(evt.target.value);
    }
    return (
      <div className="field-group">
        <label for="color-options">Color:</label>
        <select defaultValue={props.color} name="colorOptions" id="color-options" onChange={onColorChange}>
          {colorOptions()}
        </select>
      </div>
    );
  }

  export default class ProductCustomizer extends Component {

    constructor(props) {
      super(props);

      var sizes = window.Inventory.allSizes,
      colors = window.Inventory.allColors;
      this.state = {
          color: 'brown',
          colors: colors,
          size: 8,
          sizes: sizes
      };
    }

    handleSizeChange(selectedSize) {
      var availableColors = window.Inventory.bySize[selectedSize];

      this.setState({
        colors: availableColors,
        size: selectedSize
      });
      if (availableColors.indexOf(this.state.color) === -1) {
        this.setState({ color: availableColors[0] });
      }
    }

    handleColorChange(selectedColor) {
      var availableSizes = window.Inventory.byColor[selectedColor];

      this.setState({
        sizes: availableSizes,
        color: selectedColor
      });
      if (availableSizes.indexOf(this.state.size) === -1) {
        this.setState({ size: availableSizes[0] });
      }
    }

    render() {
      return (
        <header className={this.state.color + " App-header"} id="mainShow" >
          <div className="content">
            <div className="item">
                <h2>H+ Basketball Sneakers</h2>
                <p>Run faster, jump higher.</p> 
                  <div className="customizer">
                    <div className="product-image">
                      <ProductImage color={this.state.color} />
                    </div>
                    <div className="selectors">
                      <SizeSelector size={this.state.size}
                          sizes={this.state.sizes} 
                          handleSizeChange={this.handleSizeChange.bind(this)} />
                      <ColorSelector color={this.state.color}
                          colors={this.state.colors}
                          handleColorChange={this.handleColorChange.bind(this)} />
                    </div>
                  </div>
            </div>
            <div className="clear"></div>
            <div className="clear"></div>
          </div>
        </header>
      );
    }
  }