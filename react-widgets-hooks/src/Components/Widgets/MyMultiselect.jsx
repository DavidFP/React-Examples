// DEPENDENCIES
import React from 'react';
import { render } from 'react-dom';
import PropTypes from "prop-types";

// Add the css styles...
import 'react-widgets/dist/css/react-widgets.css';

//  COMPONENTS
import { Multiselect } from 'react-widgets'

const MyMultiSelect = props => {
  const {} = props;

  let colors = ["orange", "tomatoes", "apple", "cherry"];

  React.useEffect(() => {}, []);

  return (
    <React.Fragment>
      <Multiselect
        data={colors}
        defaultValue={["orange", "cherry"]}
        //disabled={["red", "purple"]}
      />
    </React.Fragment>
  );
};
export default MyMultiSelect;
