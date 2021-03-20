import React, { useState, Component } from "react";
import {
	useAuthenticatedUser,
	useAuthTokenStore,
	useIsAuthenticated,
} from "./utils/auth";
// import RegistrationForm from "./components/RegistrationForm";
// import LoginForm from "./components/LoginForm";
import LogoutButton from "./components/LogoutButton";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import "./App.module.css";
import Main from "./pages/Main";
import ModalContainer from "./components/ModalContainer";
// import PrivateRoute from "./components/PrivateRoute";

function App() {
	useAuthTokenStore();

	const isAuthenticated = useIsAuthenticated();
	// const authenticatedUser = useAuthenticatedUser();
	const [loginModal, setLoginModal] = useState(false);
	const [user, setUser] = useState(null);

	return (
		<BrowserRouter>
			<Switch>
				<div className="App">
					{/* <Main></Main> */}
					{/* <div className="App-header">
					<h2>Worry Monster</h2>
				</div> */}
					<div>
						{/* {!isAuthenticated && <RegistrationForm />} */}
						{!isAuthenticated && <Main setLoginModal={setLoginModal} />}

						{/* {!isAuthenticated && <LoginForm />} */}

						{isAuthenticated && <LogoutButton />}
					</div>

					{loginModal && <ModalContainer setLoginModal={setLoginModal} />}
				</div>
			</Switch>
		</BrowserRouter>
	);
}

export default App;
