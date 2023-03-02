import { Component } from 'react';
import classes from './User.module.css';

//Class-based Component
class User extends Component{
  componentWillUnmount(){
    console.log("User will unmount!") //prints 3 times because there are 3 users rendered conditionally
  }


  render(){
    //we can only have the props property if we extend from the Component Class and use the this keyword
     return <li className={classes.user}>{this.props.name}</li>;
  }
}

//Functional Component equivalent
// const User = (props) => {
//   return <li className={classes.user}>{props.name}</li>;
// };

export default User;
//Functional components can render class components and viceversa 
