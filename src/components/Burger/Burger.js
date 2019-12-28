import React from 'react';
import classes from './Burger.module.css';
import BurgerIngredient from './BurgerIngredient/BurgerIngredient';

  

const Burger = (props) => {

  let useableIngredients  = Object.keys( props.ingredients )
                        .map(igKey => {
                          return [...Array(props.ingredients[igKey])]
                            .map((_, i) => {
                              return <BurgerIngredient key={ igKey + i } type={ igKey } />
                            });
                        })
                        .reduce((arr, el) => {
                          return arr.concat(el)
                        }, []);
                      if(useableIngredients.length === 0){
                        useableIngredients = <p>Please add ingredients!</p>
                      }

  return (
    <div className={ classes.Burger }>
      <BurgerIngredient type='bread-top'/>
        { useableIngredients}
      <BurgerIngredient type='bread-bottom'/>
    </div>
  );
}

export default Burger;