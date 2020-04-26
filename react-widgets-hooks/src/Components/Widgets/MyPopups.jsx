import React, { useState } from "react";
import { Button, Popover, PopoverHeader, PopoverBody } from "reactstrap";

const MyPopups = () => {
  const [popoverOpen1, setPopoverOpen1] = useState(false);
  const [popoverOpen2, setPopoverOpen2] = useState(false);

  const toggle = (id) => {
    switch (id) {
      case "pop1":
        setPopoverOpen1(!popoverOpen1);
        break;
      case "pop2":
        setPopoverOpen2(!popoverOpen2);
        break;
      default:
        break;
    }
  };

  return (
    <React.Fragment>
    <center>Popups</center>
      <div className="row justify-content-center">
        <Button id="pop1" type="button">
          Popup 1
        </Button>
        <Popover
          placement="bottom"
          isOpen={popoverOpen1}
          target="pop1"
          toggle={() => toggle("pop1")}
        >
          <PopoverHeader>This is the title of a popover</PopoverHeader>
          <PopoverBody>
            This is the body a popover, and there you can put any type of
            content.
          </PopoverBody>
        </Popover>
      </div>
      <div className="row justify-content-center mt-2">
        <Button id="pop2" type="button">
          Popup 2
        </Button>
        <Popover
          placement="auto"
          isOpen={popoverOpen2}
          target="pop2"
          toggle={() => toggle("pop2")}
        >
          <PopoverHeader>This is the title of a popover</PopoverHeader>
          <PopoverBody>
            This is the body a popover, and there you can put any type of
            content.
          </PopoverBody>
        </Popover>
      </div>
    </React.Fragment>
  );
};

export default MyPopups;
