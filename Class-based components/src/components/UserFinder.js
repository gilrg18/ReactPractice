import { Fragment,  Component } from "react";
import classes from "./UserFinder.module.css";
import Users from "./Users";

const DUMMY_USERS = [
  { id: "u1", name: "Gil" },
  { id: "u2", name: "Mike" },
  { id: "u3", name: "Laura" },
];

class UserFinder extends Component {
  constructor() {
    super();
    this.state = {
      filteredUsers: [],
      searchTerm: "",
    };
  }

  //will only run once - when the component was initially rendered for the first time
  componentDidMount(){
    // Send http request...
    this.setState({filteredUsers: DUMMY_USERS})
  }
  
  //the previous props and state before the current component update
  componentDidUpdate(prevProps, prevState) {
    //if to prevent an infinite loop because componentDidUpdate gets called whenever the state changes
    if (prevState.searchTerm !== this.state.searchTerm) {
        this.setState({
          filteredUsers: DUMMY_USERS.filter((user) =>
            user.name.includes(this.state.searchTerm)
          ),
        });
    }
  }

  searchChangeHandler(event) {
    this.setState({ searchTerm: event.target.value });
  }

  render() {
    return (
      <Fragment>
        <div className={classes.finder}>
          <input type="search" onChange={this.searchChangeHandler.bind(this)} />
        </div>
        <Users users={this.state.filteredUsers} />
      </Fragment>
    );
  }
}

// const UserFinder = () => {
//   const [filteredUsers, setFilteredUsers] = useState(DUMMY_USERS);
//   const [searchTerm, setSearchTerm] = useState("");

//   useEffect(() => {
//     setFilteredUsers(
//       DUMMY_USERS.filter((user) => user.name.includes(searchTerm))
//     );
//   }, [searchTerm]);

//   const searchChangeHandler = (event) => {
//     setSearchTerm(event.target.value);
//   };

//   return (
//     <Fragment>
//       <div className={classes.finder}>
//         <input type="search" onChange={searchChangeHandler} />
//       </div>
//       <Users users={filteredUsers} />
//     </Fragment>
//   );
// };

export default UserFinder;

//Class-based components lifecycle:
/**
 * componentDidMount() - called once component mounted - useEffect(..., []) (empty dependency array)
 * componentDidUpdate() - called once component state updated - useEffect(...,[someValue])
 * componentWillUnmount() - called right before component is unmounted (removed from DOM) -
 * useEffect(()=>{return () => {...}},[]) (same as useEffect cleanup function that triggers before the
 * next useEffect or when the component unmounts)
 */
