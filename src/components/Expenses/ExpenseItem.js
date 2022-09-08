import React, { useState } from "react";

import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";
import "./ExpenseItem.css";

const ExpenseItem = (props) => {
  const [titleText, setTitle] = useState(props.title);
  const changeTitleHandler = () => {
    setTitle("New Text!");
    console.log("btn clicked");
  };
  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h2>{titleText}</h2>
        <div className="expense-item__price">{props.amount}€</div>
      </div>
      <div className="expense-btn">
        <button onClick={changeTitleHandler}>Change Title!</button>
      </div>
    </Card>
  );
};
export default ExpenseItem;
