import React, { Component } from "react";

import Controls from "../../components/Controls/Controls";

const prices = {
  product1: 12.5,
  product2: 10,
  product3: 22.5,
  product4: 8,
  product5: 85,
  product6: 102,
  product7: 71,
  product8: 108,
  product9: 20,
  product10: 307,
  product11: 11,
  product12: 18,
  product13: 8,
  product14: 140,
  product15: 15000,
  product16: 10060,
};

class Shopping extends Component {
  state = {
    products: {
      product1: 0,
      product2: 0,
      product3: 0,
      product4: 0,
      product5: 0,
      product6: 0,
      product7: 0,
      product8: 0,
      product9: 0,
      product10: 0,
      product11: 0,
      product12: 0,
      product13: 0,
      product14: 0,
      product15: 0,
      product16: 0,
    },
    totalPrice: 0,
    showModal: false,
  };

  addProductHandler = (type) => {
    const previousCount = this.state.products[type];
    const updatedCount = previousCount + 1;
    const updatedProducts = {
      ...this.state.products,
    };
    updatedProducts[type] = updatedCount;

    const priceAdded = prices[type];
    const previousPrice = this.state.totalPrice;
    const newPrice = previousPrice + priceAdded;

    this.setState({ totalPrice: newPrice, products: updatedProducts });
  };

  showModalHandler = () => {
    this.setState({showModal: true})
  };

  render() {
    return (
      <div>
        <Controls
          productAdd={this.addProductHandler}
          checkout={this.showModalHandler}
        />
      </div>
    );
  }
}

export default Shopping;
