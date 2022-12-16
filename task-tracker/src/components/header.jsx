import React from "react";
import PropTypes from "prop-types";
import Button from "./button";

const Header = ({ title, name, onAddForm, formState }) => {
  // here i destructured the object so porps.title garnu ra direct porps ko object lai destructured garera leko

  return (
    <header className="header">
      <h1>{title}</h1>
      <Button
        color={formState ? "Red" : "Green"}
        text={formState ? "Close" : "Add"}
        onClick={onAddForm}
      />
    </header>
  );
};

Header.defaultProps = {
  title: "Task Tracker",
  name: "John",
};
Header.protoTypes = {
  title: PropTypes.string.isRequired,
};

export default Header;
