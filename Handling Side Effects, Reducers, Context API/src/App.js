import React, { useState, useEffect } from 'react';

import Login from './components/Login/Login';
import Home from './components/Home/Home';
import MainHeader from './components/MainHeader/MainHeader';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  

  //We want to persist the logged in data so when the page reloads we dont have to log in again

  useEffect(()=> {
    const storedUserLoggedInInformation = localStorage.getItem("isLoggedIn");
    console.log("use effect");
    if (storedUserLoggedInInformation === "1") {
      setIsLoggedIn(true);
    }

  },[]);  //Will only run once, at the start, when the page is first rendered or when it reloads.

  const loginHandler = (email, password) => {
    // We should of course check email and password
    // But it's just a dummy/ demo anyways
    localStorage.setItem('isLoggedIn', '1'); //1-logged in, 0-not logged in
    setIsLoggedIn(true); //Save this data in the browser storage (localStorage) to not log off when refreshing
  };

  const logoutHandler = () => {
    localStorage.removeItem('isLoggedIn');
    setIsLoggedIn(false);
  };

  return (
    <React.Fragment>
      <MainHeader isAuthenticated={isLoggedIn} onLogout={logoutHandler} />
      <main>
        {!isLoggedIn && <Login onLogin={loginHandler} />}
        {isLoggedIn && <Home onLogout={logoutHandler} />}
      </main>
    </React.Fragment>
  );
}

export default App;
