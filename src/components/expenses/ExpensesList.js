import React, { useState } from "react";
import { Message } from "semantic-ui-react";
import ExpenseItem from "./ExpenseItem";
import ExpensesFilter from "../controlPanel/ExpensesFilter";

const ExpensesList = (props) => {
  const [currentYears, setCurrentYears] = useState([]);

  const filterYears = (filterValues) => {
    setCurrentYears(filterValues);
  };

  const filteredExpenses = props.expenses.filter((expense) => {
    return (
      currentYears.length === 0 ||
      currentYears.includes(expense.date.getFullYear())
    );
  });

  const renderExpenses = () => {
    if (filteredExpenses.length === 0)
      return <Message info>No items found.</Message>;
    return filteredExpenses.map((expense) => {
      return (
        <ExpenseItem
          key={expense.id}
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
        />
      );
    });
  };

  return (
    <>
      <ExpensesFilter
        onFilterSelect={filterYears}
        currentYears={currentYears}
      />
      <table className="ui selectable striped inverted compact teal table">
        <tbody>{renderExpenses()}</tbody>
      </table>
    </>
  );
};
export default ExpensesList;
