import { useRef } from "react";
import Input from "../../UI/Input";
import classes from './MealsItemForm.module.css'
const MealsItemForm =(props) => {
    const amountInputRef=useRef();

    const submitHandler = event =>{
        event.preventDefault();

        const enteredAmount=amountInputRef.current.value;
        const enteredAmountNumber = +enteredAmount;

        if(enteredAmount.trim())
    };
  return (
    <form className={classes.form}>
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
        <button>+ Add</button>
    </form>
  )
};

export default MealsItemForm