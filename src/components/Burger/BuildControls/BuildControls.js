import React from 'react';

import classes from './BuildControls.css'; // note that the className on the div below is the same as this file that was imported with classes added: classesBuildControls
import BuildControl from './BuildControl/BuildControl'; 

const controls = [
   { label: 'Salad', type: 'salad'},
   { label: 'Bacon', type: 'bacon'},
   { label: 'Cheese', type: 'cheese'},
   { label: 'Meat', type: 'meat'}
];

// this loops through the controls array (above) using .map and puts the new array returned in an instance of BuildControl
const buildControls = (props) => (
   <div className={classes.BuildControls}>
      {controls.map(ctrl => (
         <BuildControl 
            key={ctrl.label} 
            label={ctrl.label}
            added={() => props.ingredientAdded(ctrl.type)}
            removed={() => props.ingredientRemoved(ctrl.type)}   
            disabled={props.disabled[ctrl.type]}
         />
      ))}
   </div>

);

export default buildControls;