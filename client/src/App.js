import React from "react";
import { useAuthTokenStore } from "./utils/auth";
import RegistrationForm from "./components/RegistrationForm";
import LoginForm from "./components/LoginForm";
import LogoutButton from "./components/LogoutButton";

import "./App.css";

function App() {
  useAuthTokenStore();

  return (
    <div className="App">
      <div className="App-header">
        <h2>Worry Monster</h2>
      </div>
      <div>


        <RegistrationForm />
        <LoginForm />
        <LogoutButton />
        
      </div>
    </div>

  );
}

export default App;
