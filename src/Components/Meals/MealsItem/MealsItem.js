import MealsItemForm from './MealsItemForm';
import classes from './MealsItem.module.css';

const MealsItem=(props)=> {
    const price= `$${props.price.toFixed(2)}`;
  return (
    <li>
        <div>
            <h3 className={classes.name}>{props.name}</h3>
            <div className={classes.description}>{props.description}</div>
            <div className={classes.price}>{price}</div>
        </div>
        <div>
            <MealsItemForm/>
        </div>
    </li>
  )
}

export default MealsItem