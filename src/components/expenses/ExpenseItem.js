import React from "react";

export default function ExpenseItem(props) {
  //   const humanDate = props.date.toLocaleDateString("en-GB");
  const humanDate = props.date.toLocaleDateString("en-GB", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <tr className="">
      <td>{humanDate}</td>
      <td className="ui small header">{props.title}</td>
      <td className="ui medium header inverted right aligned">
        £{props.amount}
      </td>
    </tr>
  );
}
