import { useContext } from 'react';

import MealsItemForm from './MealsItemForm';
import classes from './MealsItem.module.css';
import { CartContext } from '../../Store/CartProvider';


const MealsItem=(props)=> {
const cartContext= useContext(CartContext)

    const price= `$${props.price.toFixed(2)}`;

    const addToCartHandler= amount => {
      cartContext.addItem({
      id:props.id,
      name: props.name,
      amount:amount,
      price:props.price
     })
    };
  return (
    <li>
        <div>
            <h3 className={classes.name}>{props.name}</h3>
            <div className={classes.description}>{props.description}</div>
            <div className={classes.price}>{price}</div>
        </div>
        <div>
            <MealsItemForm onAddToCart={addToCartHandler}/>
        </div>
    </li>
  )
}

export default MealsItem