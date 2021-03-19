import React from "react";
import { useAuthTokenStore, useIsAuthenticated } from "./utils/auth";
import RegistrationForm from "./components/RegistrationForm";
import LoginForm from "./components/LoginForm";
import LogoutButton from "./components/LogoutButton";
import { BrowserRouter } from "react-router-dom";

import "./App.css";
import Main from "./pages/Main";

function App() {
	useAuthTokenStore();

	const isAuthenticated = useIsAuthenticated();

	return (
		<BrowserRouter>
			<div className="App">
				<Main></Main>
				{/* <div className="App-header">
					<h2>Worry Monster</h2>
				</div> */}
				<div>
					{!isAuthenticated && <RegistrationForm />}
					{!isAuthenticated && <LoginForm />}
					{isAuthenticated && <LogoutButton />}
				</div>
			</div>
		</BrowserRouter>
	);
}

export default App;
