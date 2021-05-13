import { useState } from "react";
import { v4 as uuid } from "uuid";
import ExpensesList from "./components/expenses/ExpensesList";
import Controls from "./components/controlPanel/Controls";
// import ExpensesFilter from "./components/ExpensesFilter";

const DUMMY_EXPENSES = [
  {
    id: "e1",
    title: "Toilet Paper",
    amount: 94.12,
    date: new Date(2020, 7, 14),
  },
  { id: "e2", title: "New TV", amount: 799.49, date: new Date(2021, 2, 12) },
  {
    id: "e3",
    title: "Car Insurance",
    amount: 294.67,
    date: new Date(2021, 2, 28),
  },
  {
    id: "e4",
    title: "New Desk (Wooden)",
    amount: 450,
    date: new Date(2021, 5, 12),
  },
  {
    id: "e5",
    title: "Fairy cakes",
    amount: 3.5,
    date: new Date(2019, 5, 12),
  },
  {
    id: "e6",
    title: "Barbie",
    amount: 8.99,
    date: new Date(2019, 5, 12),
  },
];

function App() {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

  const addExpense = (newExpense) => {
    setExpenses((prevExpenses) => {
      return [{ ...newExpense, id: uuid() }, ...prevExpenses];
    });
  };

  return (
    <div className="ui container">
      <h1>Expenses tracker</h1>
      <div className="ui raised segment">
        <Controls addExpense={addExpense} />
        <ExpensesList expenses={expenses} />
      </div>
    </div>
  );
}

export default App;
