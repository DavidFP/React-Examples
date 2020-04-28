import React from "react";
import { Combobox } from "react-widgets";

const MyComboBox = () => {
  const listOfPersons = [
    { id: 1, name: "David", surname: "Fernandez" ,gender:"M"},
    { id: 2, name: "Enrique", surname: "Fernandez",gender:"M" },
    { id: 3, name: "Verónica", surname: "Fernandez",gender:"F" },
    { id: 4, name: "Pilar", surname: "Puentes",gender:"F" },
    { id: 5, name: "Juana", surname: "Puentes" ,gender:"F"},
    { id: 6, name: "Mercedes", surname: "Puentes",gender:"F" },
  ];

  let groupHeading = ({ item }) => (
   item==="M"? <span>Male</span> : <span>Female</span>
  );

  return (
    <React.Fragment>
      <p>Grouped by surname</p>
      <Combobox data={listOfPersons} textField="name" groupBy="surname" />

      <p>Grouped by name length</p>
      <Combobox
        data={listOfPersons}
        textField="name"
        groupBy={(person) => person.name.length}
      />

      <p>Grouped by name length with group heading.</p>
      <Combobox
        data={listOfPersons}
        textField="name"
        groupComponent={groupHeading}
        groupBy={person => person.name.length}
      />

    <p>Grouped by gender</p>
      <Combobox
        data={listOfPersons}
        textField="name"
        groupComponent={groupHeading}
        groupBy={person => person.gender}
      />

    </React.Fragment>
  );
};

export default MyComboBox;
