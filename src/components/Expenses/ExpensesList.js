import React from "react";
import "./ExpensesList.css";
import ExpenseItem from "./ExpenseItem";

export default function ExpensesList(props) {
  //////////////////////  for message if there is no item//////////////////////
  let expensesContent = <p>No Content Found !</p>;

  if (props.items.length === 0) {
    return <h2 className="expenses-list__fallback">Found no expenses !</h2>;
  }

  return (
    <ul className="expenses-list">
      {props.items.map((expense) => (
        <ExpenseItem
          key={expense.id}
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
        />
      ))}
    </ul>
  );
}
