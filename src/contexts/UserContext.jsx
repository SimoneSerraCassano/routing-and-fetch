import { createContext, useReducer } from "react";

export const UserContext = createContext("");

export const UserProvider = ({ children }) => {
  // const [username, setUsername] = useState("");

  const [username, dispatch] = useReducer(userReducer, "");

  return (
    <UserContext.Provider value={{ user: username, dispatch: dispatch }}>
      {children}
    </UserContext.Provider>
  );
};

const userReducer = (state, action) => {
  switch (action.type) {
    case "login": {
      let userObject = {
        username: action.email.split("@")[0],
        email: action.email,
      };
      localStorage.setItem("systagram_user", JSON.stringify(userObject));
      return userObject;
    }
    case "logout": {
      localStorage.removeItem("systagram_user");
      return null;
    }
    default: {
      throw Error("Errore: " + action.type);
    }
  }
};
