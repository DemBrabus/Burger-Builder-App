import React, { Component } from 'react';
import Aux from '../../hoc/Aux';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';
import Modal from '../../components/UI/Modal/Modal';
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary';

const Ingredient_Price = {
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
    totalPrice: 4,
    purchasable: false,
    purchasing: false,
  }

  updatePurchaseState = (ingredients) => {
    const sum = Object.keys(ingredients)
                .map(igKey => {
                  return ingredients[igKey];
                })
                .reduce((sum, el) => {
                  return sum + el;
                }, 0);
                this.setState({ purchasable: sum > 0 })
  }

  addIngredientHandler = (type) => {
    const oldCount = this.state.ingredients[type];
      const updatedCount = oldCount + 1;
      const updatedIngredients = {
        ...this.state.ingredients
      };
      updatedIngredients[type] = updatedCount;
      const priceAddition = Ingredient_Price[type];
      const oldPrice = this.state.totalPrice;
      const newPrice = oldPrice + priceAddition;
      this.setState({ totalPrice: newPrice, ingredients: updatedIngredients });
      this.updatePurchaseState(updatedIngredients);
  }

  removeIngredientHandler = (type) => {
    const oldCount = this.state.ingredients[type];
    if(oldCount > 0){
      const updatedCount = oldCount - 1;
      const updatedIngredients = {
        ...this.state.ingredients
      };
      updatedIngredients[type] = updatedCount;
      const priceSubtraction = Ingredient_Price[type];
      const oldPrice = this.state.totalPrice;
      const newPrice = oldPrice - priceSubtraction;
      this.setState({ totalPrice: newPrice, ingredients: updatedIngredients })
      this.updatePurchaseState(updatedIngredients);
    }
    
  }

  purchaseHandler = () => {
    this.setState({ purchasing: true })
  }

  closeSummary = () => {
    this.setState({ purchasing: false })
  }

  purchaseContinueHandler = () => {
    alert('Continue');
    this.setState({ purchasing: false })
  }



  render(){

    const disbaleInfo = {
      ...this.state.ingredients
    }
    for ( let key in disbaleInfo ){
      disbaleInfo[key] = disbaleInfo[key] <= 0;
    }

    return (
      <Aux>
        <div>
          <Burger ingredients={ this.state.ingredients } />
        </div>
        <BuildControls
          currentPrice={ this.state.totalPrice }
          removeIngredient={ this.removeIngredientHandler }
          addIngredient={ this.addIngredientHandler }
          disabled={ disbaleInfo }
          purchasable={ this.state.purchasable }
          ordered={ this.purchaseHandler } />
          <Modal 
            show={ this.state.purchasing }
            closeModal={ this.closeSummary }>
            <OrderSummary 
              price={ this.state.totalPrice }
              ingredients={ this.state.ingredients }
              purchaseCancelled={ this.closeSummary }
              purchaseContinue={ this.purchaseContinueHandler } />
          </Modal>
      </Aux>
    );
  };
}

export default BurgerBuilder;