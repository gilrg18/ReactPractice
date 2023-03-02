import { Component} from 'react';
import User from './User';

import classes from './Users.module.css';


//in react 16.8 hooks were introduced to manage state in functional components
//prior that, only class components could manage state
class Users extends Component{
  //constructor to define state
  constructor() {
    super(); //calls the constructor from the parent class (Component)
    //in class components state is ALWAYS an object and it HAS to be named "state", its not up to you
    this.state = { showUsers: true, more: 'Test' };
  };

  toggleUsersHandler() {
    //this.state.showUsers = false; //NOT VALID
    //this.setState from Component class
    this.setState((currentState)=>{
      return {showUsers: !currentState.showUsers}
    });// result: {showUsers: false, more: 'Test'}
    //setState merges this update with the current state, it doesnt overwrite it, so it keeps "more:'Test'"
    //in functional components states, state IS overwritten when changing it
  }

  //in the render method we return the jsx code that should be rendered
  render(){
      const usersList = (
        <ul>
          {this.props.users.map((user) => (
            <User key={user.id} name={user.name} />
          ))}
        </ul>
      );

    return (
      <div className={classes.users}>
        {/*Bind the this keyword so it refers to the same context(Users Class) as the one inside toggle method */}
        <button onClick={this.toggleUsersHandler.bind(this)}>
          {this.state.showUsers ? "Hide" : "Show"} Users
        </button>
        {this.state.showUsers && usersList}
      </div>
    );
  }
}

// const Users = () => {
//   const [showUsers, setShowUsers] = useState(true);

//   const toggleUsersHandler = () => {
//     setShowUsers((curState) => !curState);
//   };

//   const usersList = (
//     <ul>
//       {DUMMY_USERS.map((user) => (
//         <User key={user.id} name={user.name} />
//       ))}
//     </ul>
//   );

//   return (
//     <div className={classes.users}>
//       <button onClick={toggleUsersHandler}>
//         {showUsers ? 'Hide' : 'Show'} Users
//       </button>
//       {showUsers && usersList}
//     </div>
//   );
// };

export default Users;
