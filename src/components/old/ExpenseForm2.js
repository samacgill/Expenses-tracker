import React, { useState } from "react";

// TODO set max date to today?

function ExpenseForm(props) {
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");
  const [date, setDate] = useState("");

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };
  const handleAmountChange = (e) => {
    setAmount(e.target.value);
  };
  const handleDateChange = (e) => {
    setDate(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newExpense = {
      title,
      amount,
      date: new Date(date),
    };
    props.addExpense(newExpense);
    setTitle("");
    setAmount("");
    setDate("");
  };

  return (
    <form onSubmit={handleSubmit} className="ui form">
      <div className="fields">
        <div className="eight wide field">
          <label>Title</label>
          <input value={title} onChange={handleTitleChange} type="text" />
        </div>
        <div className="field">
          <label>Amount</label>
          <input
            value={amount}
            onChange={handleAmountChange}
            type="number"
            min="0.01"
            step="0.01"
          />
        </div>
        <div className="field">
          <label>Date</label>

          <input
            value={date}
            onChange={handleDateChange}
            type="date"
            min="2019-01-01"
            max={"2022-12-31"}
          />
        </div>
      </div>
      <button type="submit" className="ui right floated button basic teal">
        Add expense
      </button>
    </form>
  );
}

export default ExpenseForm;
