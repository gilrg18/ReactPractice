import { Fragment, useState, useEffect } from "react";
import classes from './UserFinder.module.css';
import Users from "./Users";

const DUMMY_USERS = [
  { id: "u1", name: "Gil" },
  { id: "u2", name: "Mike" },
  { id: "u3", name: "Laura" },
];

const UserFinder = () => {
  const [filteredUsers, setFilteredUsers] = useState(DUMMY_USERS);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    setFilteredUsers(
      DUMMY_USERS.filter((user) => user.name.includes(searchTerm))
    );
  }, [searchTerm]);

  const searchChangeHandler = (event) => {
    setSearchTerm(event.target.value);
  };

  return (
    <Fragment>
      <div className={classes.finder}>
        <input type="search" onChange={searchChangeHandler} />
      </div>
      <Users users={filteredUsers} />
    </Fragment>
  );
};

export default UserFinder;


//Class-based components lifecycle:
/**
 * componentDidMount() - called once component mounted - useEffect(..., []) (empty dependency array)
 * componentDidUpdate() - called once component updated - useEffect(...,[someValue]) 
 * componentWillUnmount() - called right before component is unmounted (removed from DOM) - 
 * useEffect(()=>{return () => {...}},[]) (same as useEffect cleanup function that triggers before the 
 * next useEffect or when the component unmounts)
 */