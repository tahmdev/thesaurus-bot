import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Chatwindow } from "./components/Chatwindow";

const uid = Math.random().toString(36).slice(2);
export const UserContext = React.createContext(uid);

function App() {
  return (
    <div className="App">
      <UserContext.Provider value={uid}>
        <Chatwindow />
      </UserContext.Provider>
    </div>
  );
}

export default App;
