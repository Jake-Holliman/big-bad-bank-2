import React from "react";

export const UserContext = React.createContext(null);

const UserContextProvider = (props) => {
  return (
    <UserContext.Provider
      value={{
        users: [
          {
            name: "Jake",
            email: "jgholliman@gmail.com",
            password: "password",
            balance: 100000,
          },
          {
            name: "Jules",
            email: "JulesH@hotmail.com",
            password: "password",
            balance: 100,
          },
        ],
        loggedIn: {
          name: "",
          email: "",
          index: null,
          status: false,
        },
      }}
    >
      {props.children}
    </UserContext.Provider>
  );
};

export default UserContextProvider;
