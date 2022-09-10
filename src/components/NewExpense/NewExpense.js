import React, { useState } from "react";

import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

const NewExpense = (props) => {
  const [createExpense, setCreateExpense] = useState(false);

  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = { ...enteredExpenseData, id: Math.random().toString() };
    console.log(expenseData);
    props.onAddNewExpense(expenseData);
    setCreateExpense(false);
  };

  const createExpenseHandler = () => {
    setCreateExpense(true);
  };

  return (
    <div className="new-expense">
      {!createExpense && (
        <button onClick={createExpenseHandler}>Add New Expense</button>
      )}
      {createExpense && (
        <ExpenseForm onCancel onSaveExpenseData={saveExpenseDataHandler} />
      )}
    </div>
  );
};
export default NewExpense;
