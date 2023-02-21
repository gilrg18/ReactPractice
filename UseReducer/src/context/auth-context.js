import React from "react";

//React.createContext("mystate");
const AuthContext = React.createContext({
  isLoggedIn: false,
});

export default AuthContext;
//All the components wrapped between <AuthContext.Provider>
//will have access to the context value
/*
<AuthContext.Provider
      value={{
        isLoggedIn: 'myvalue',
      }}
    >
*/