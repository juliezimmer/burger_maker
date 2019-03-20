import React, { Component } from 'react';
import Aux from '../../hoc/Aux';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';

// all uppercase indicates a global constant
const INGREDIENT_PRICES = {
   salad: 0.5,
   cheese: 0.4,
   meat: 1.3,
   bacon: 0.7 
}

class BurgerBuilder extends Component {
   state = {
      ingredients: {
         salad: 0,
         bacon: 0,
         cheese: 0,
         meat: 0
      },
      totalPrice: 4 // base price w/o ingredients added

   }

   addIngredientHandler = (type) => {
      // need the old ingredient count
      const oldCount = this.state.ingredients[type];
      const updatedCount = oldCount + 1;
      // to update ingredients, use spread operator
      const updatedIngredients = {
         ...this.state.ingredients, // previous ingredient state
      };
      updatedIngredients[type] = updatedCount;
      const priceAddition = INGREDIENT_PRICES[type]; 
      const oldPrice = this.state.totalPrice;
      const newPrice = oldPrice + priceAddition;
      this.setState({
         totalPrice: newPrice,
         ingredients: updatedIngredients
      })
   }

   removeIngredientHandler = () => {
        
   }

   render() {
      return (
         <Aux>
           <Burger ingredients={this.state.ingredients}/>
            <BuildControls 
               ingredientAdded={this.addIngredientHandler}
            />
         </Aux>
      );
   }
}

export default BurgerBuilder;