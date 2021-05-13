import React from "react";
import ExpenseForm from "./ExpenseForm";
import { Button, Segment } from "semantic-ui-react";

export default function Controls(props) {
  return (
    <div>
      <ExpenseForm addExpense={props.addExpense} />
      <Segment>
        <Button>Add new item</Button>
      </Segment>
    </div>
  );
}
