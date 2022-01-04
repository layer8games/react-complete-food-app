import React, { useRef, useState } from 'react'
import Input from "../../UI/Input";

import classes from "./MealItemForm.module.css";

const MealItemForm = (props) => {
  const amountInputRef = useRef();
  const [isFormValid, setIsFormValid] = useState(true);

  const submitHandler = event => {
    event.preventDefault();
    console.log("in the submit handler")

    const enteredAmount = amountInputRef.current.value;
    const enteredAmountNum = +enteredAmount;

    if(enteredAmount.trim().length === 0 || enteredAmountNum < 1 || enteredAmountNum > 5) {
      console.log("not valid!")
      setIsFormValid(false);
      return;
    }

    props.onAddToCart(enteredAmountNum);
  };

  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <Input
        ref={amountInputRef}
        label="Amount"
        input={{
          id: "amount+" + props.id,
          type: "number",
          min: "1",
          max: "5",
          step: "1",
          defaultValue: "1",
        }}
      />
      <button>+ Add</button>
      {!isFormValid && <p>Please enter a valid amount! Should be between 1 and 5.</p>}
    </form>
  );
};

export default MealItemForm;
