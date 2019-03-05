// This component assembles the burger.
// This component is imported in BurgerBuider.js
import React from 'react';

import classes from './Burger.css';
import BurgerIngredient from './BurgerIngredient/BurgerIngredient';

const burger = (props) => {
   return ( 
      // renders a graphical representation of the burger that has top/bottom bun,meat, and cheese
      <div className={classes.Burger}>
         <BurgerIngredient type="bread-top" />
         <BurgerIngredient type="cheese" />
         <BurgerIngredient type="meat" />
         <BurgerIngredient type="bread-bottom" />
      </div>
   );
};

export default burger; // exported to BurgerBuilder.js
