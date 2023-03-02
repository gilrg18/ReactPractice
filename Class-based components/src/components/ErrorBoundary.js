import { Component } from "react";

class ErrorBoundary extends Component {
  constructor() {
    super();
    this.state = { hasError: false };
  }
  //theres no equivalent for functional components
  //so only class components have error boundaries
  componentDidCatch(error) {
    //what happens if an error occurs
    console.log(error);
    this.setState({ hasError: true });
  }

//   componentDidUpdate() {
//     const myTimeout = setTimeout(() => {
//       this.setState({ hasError: false });
//       console.log("lol");
//     }, 5000);
//   }

  render() {
    //you surround a component that might cause an error with the error boundary component
    if (this.state.hasError) {
      return <p>Something went wrong!</p>;
    } else {
      return this.props.children;
    }
  }
}

export default ErrorBoundary;
