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
      
        <p>Multiselect with default values</p>
        <Multiselect data={fruits} defaultValue={defValues} />
     
        <p>Multiselect with disabled values</p>
        <Multiselect data={fruits} disabled={defValues} />

        <p>Multiselect with disabled and default values</p>
        <Multiselect data={fruits} disabled={defValues}  defaultValue={defValues}/>
     
    </React.Fragment>
  );
};
export default MyMultiSelect;
