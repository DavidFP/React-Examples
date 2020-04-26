// DEPENDENCIES
import React from "react";
import { render } from "react-dom";
import PropTypes from "prop-types";

// Add the css styles...
import "react-widgets/dist/css/react-widgets.css";

//  COMPONENTS
import { Multiselect } from "react-widgets";

const MyMultiSelect = (props) => {
  const {} = props;

  let fruits = ["orange", "tomatoes", "apple", "cherry"];
  let defValues = ["orange", "cherry"];
  let disabledValues = ["orange", "apple"];

  React.useEffect(() => {}, []);

  return (
    <React.Fragment>
      
        <h3>Multiselect with default values</h3>
        <Multiselect data={fruits} defaultValue={defValues} />
     
        <h3>Multiselect with disabled values</h3>
        <Multiselect data={fruits} disabled={defValues} />

        <h3>Multiselect with disabled and default values</h3>
        <Multiselect data={fruits} disabled={defValues}  defaultValue={defValues}/>
     
    </React.Fragment>
  );
};
export default MyMultiSelect;
