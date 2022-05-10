import React from "react";
import Context from "./Context";
// import { Redirect } from "react-router-dom";

const withContext = (WrappedComponent) => {
  const WithHOC = (props) => {
    return (
      <Context.Consumer>
        {(context) => <WrappedComponent {...props} context={context} />}
      </Context.Consumer>
    );
  };
  return WithHOC;
};

export default withContext;
