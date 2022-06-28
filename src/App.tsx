import React from "react";
import "./App.css";
import { Chatwindow } from "./components/Chatwindow";

const uid = Math.random().toString(36).slice(2);
export const UserContext = React.createContext(uid);

function App() {
  return (
    <div className="App">
      <h1> Thesaurus Bot </h1>
      <UserContext.Provider value={uid}>
        <Chatwindow />
      </UserContext.Provider>
    </div>
  );
}

export default App;
