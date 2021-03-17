import React from "react";
import { useAuthTokenStore } from "./utils/auth";
import RegistrationForm from "./components/RegistrationForm";

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
      </div>
    </div>

  );
}

export default App;
