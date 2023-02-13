import React from 'react';
import AddUser from './components/Users/AddUser';
import UsersList from './components/Users/UsersList';


function App() {
  return (
    <div>
      <AddUser/>
      <UsersList users={[{name:'gil', age:26},{name:'cobi', age:14}]}/>
    </div>
  );
}

export default App;
