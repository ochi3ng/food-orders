import { useRef, useState} from "react";
import Input from "../../UI/Input";
import classes from './MealsItemForm.module.css'
const MealsItemForm =({onAddToCart}) => {
    const [amountIsValid, setAmountIsValid]=useState()
    const amountInputRef=useRef();

    const submitHandler = event =>{
        event.preventDefault();

        const enteredAmount=amountInputRef.current.value;
        const enteredAmountNumber = +enteredAmount;

        if(enteredAmount.trim().length === 0 ||
         enteredAmountNumber >5)
         {
            setAmountIsValid(false);
         return;   
        }

        onAddToCart(enteredAmountNumber);
    }; 
  return (
    <form className={classes.form} onSubmit={e=>submitHandler(e)}>
        <Input
        ref={amountInputRef}
         label="Amount" input={{
            id:'amount',
            type:'number',
            min:'1',
            max:'5',
            step:'1',
            defaultValue:'1'

        }}/>
        <button type="submit" >+ Add</button>
        {!amountIsValid && <p>please enter a valid amount (1-5)</p>}
    </form>
  )
};

export default MealsItemForm