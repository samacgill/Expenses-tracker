import React from "react";
import { Segment, Dropdown } from "semantic-ui-react";

export default function ExpensesFilter(props) {
  const yearOptions = [
    { key: 1, text: "2022", value: 2022 },
    { key: 2, text: "2021", value: 2021 },
    { key: 3, text: "2020", value: 2020 },
    { key: 4, text: "2019", value: 2019 },
  ];

  const handleChange = (e, { value }) => {
    props.onFilterSelect(value);
  };

  return (
    <Segment>
      <Dropdown
        onChange={handleChange}
        options={yearOptions}
        placeholder="Choose years"
        multiple
        selection
        value={props.currentYears}
        clearable
      />
    </Segment>
  );
}
