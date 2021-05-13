import React, { useState } from "react";
import { Form, Button, Segment } from "semantic-ui-react";

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
    <Segment inverted color="teal">
      <Form>
        <Form.Group>
          <Form.Field width={8} required>
            <label>Title</label>
            <input
              value={title}
              onChange={handleTitleChange}
              type="text"
              placeholder="Add new expense title"
            />
          </Form.Field>

          <Form.Field width={4} required>
            <label>Amount</label>
            <input
              value={amount}
              onChange={handleAmountChange}
              type="number"
              min="0.01"
              step="0.01"
              placeholder="0.00"
            />
          </Form.Field>

          <Form.Field width={4} required>
            <label>Date</label>
            <input
              value={date}
              onChange={handleDateChange}
              type="date"
              min="2019-01-01"
              max={"2022-12-31"}
            />
          </Form.Field>
        </Form.Group>
        <Button onClick={handleSubmit}>Add expense</Button>
        <Button>Cancel</Button>
      </Form>
    </Segment>
  );
}

export default ExpenseForm;
