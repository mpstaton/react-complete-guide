import React, { Component } from 'react';

import Aux from '../../hoc/Aux';
import Burger from '../../components/Burger/Burger';

class BurgerBuilder extends Component {
  //apparently the below setting of state replaces the need for constructor and super
  //note the state object is not an array, so to run array functions on it you have to convert it into an array. 
  state = {
    ingredients: {
      salad: 1,
      bacon: 1,
      cheese: 2,
      meat: 2
    }
  }

  render () {
      return (
        <Aux>
          <Burger/>
          <div>Build Controls</div>
        </Aux>
      );
  }
}

export default BurgerBuilder;
