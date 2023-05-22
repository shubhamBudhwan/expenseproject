import React, { useState } from "react";
import "./Expenses.css";
import Card from "../UI/Card.js";
import ExpenseItem from "../Expenses/ExpenseItem";
import ExpensesFilter from "./ExpensesFilter";
export default function Expenses(props) {
  const [year, setYear] = useState("2022");

  const selectedYear = (newYear) => {
    setYear(newYear);
  };
  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter onSelectYear={selectedYear} />
        <ExpenseItem
          title={props.expenses[0].title}
          amount={props.expenses[0].amount}
          date={props.expenses[0].date}
        />
        <ExpenseItem
          title={props.expenses[1].title}
          amount={props.expenses[1].amount}
          date={props.expenses[1].date}
        />
        <ExpenseItem
          title={props.expenses[2].title}
          amount={props.expenses[2].amount}
          date={props.expenses[2].date}
        />
        <ExpenseItem
          title={props.expenses[3].title}
          amount={props.expenses[3].amount}
          date={props.expenses[3].date}
        />
      </Card>
    </div>
  );
}
