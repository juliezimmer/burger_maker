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

   removeIngredientHandler = (type) => {
      const oldCount = this.state.ingredients[type];
      if (oldCount <=0) {
         return;
      }
      const updatedCount = oldCount - 1;
      const updatedIngredients = {
         ...this.state.ingredients
      };
      updatedIngredients[type] = updatedCount;
      const priceDeduction = INGREDIENT_PRICES[type];
      const oldPrice = this.state.totalPrice;
      const newPrice = oldPrice - priceDeduction;
      this.setState({totalPrice: newPrice, ingredients: updatedIngredients});
   }

   render() {
      // disables 'Less' button if ingredient is 0
      const disabledInfo = {
         ...this.state.ingredients // the state object at the top of the class
      };
      for (let key in disabledInfo){
         // disabled[key] is the value of each key
         disabledInfo[key] = disabledInfo[key] <= 0 }
      // {salad: true, meat: false,...}
      return (
         <Aux>
           <Burger ingredients={this.state.ingredients}/>
            <BuildControls 
               ingredientAdded={this.addIngredientHandler}
               ingredientRemoved={this.removeIngredientHandler}
               disabled={disabledInfo}
               price={this.state.totalPrice}
            />
         </Aux>
      );
   }
}

export default BurgerBuilder;