const AddUser = props => {

    const addUserHandler = (event) => {
        //Prevents default reload when submitting a form which can mess with react state
        event.preventDefault();
        
    }

    return (
      <form onSubmit={addUserHandler}>
        <label htmlFor="username">Username</label>
        <input id="username" type="text" />
        <label htmlFor="age">Age (Years)</label>
        <input id="age" type="number" />
        <button type="submit">Add User</button>
      </form>
    );
};

export default AddUser;