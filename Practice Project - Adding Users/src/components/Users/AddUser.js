import Button from "../UI/Button";
import Card from "../UI/Card";
import classes from './AddUser.module.css'

const AddUser = props => {

    const addUserHandler = (event) => {
        //Prevents default reload when submitting a form which can mess with react state
        event.preventDefault();
        
    }

    return (
      <Card className={classes.input}>
        <form onSubmit={addUserHandler}>
          <label htmlFor="username">Username</label>
          <input id="username" type="text" />
          <label htmlFor="age">Age (Years)</label>
          <input id="age" type="number" />
          <Button type="submit">Add User</Button>
        </form>
      </Card>
    );
};

export default AddUser;