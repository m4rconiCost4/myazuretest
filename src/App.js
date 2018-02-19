import React, { Component } from "react";
import Loadable from "react-loadable";
let WrappedComponent = "";
let LoadableComponent = "";
const Loading = () => <div>Loading...</div>;

function withSubscription() {
  return class hoc extends Component {
 
    render() {
            WrappedComponent = Loadable({
        loader: () =>
          import("./Components/" + this.props.match.params.componente),
        loading: Loading
      });

      return <WrappedComponent />;
    }
  };
}
export default withSubscription;
