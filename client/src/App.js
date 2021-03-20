import React, { useState, Component } from "react";
import {
	useAuthenticatedUser,
	useAuthTokenStore,
	useIsAuthenticated,
} from "./utils/auth";
import LogoutButton from "./components/LogoutButton";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import "./App.module.css";
import Main from "./pages/Main";
import ModalContainer from "./components/ModalContainer";
import Worry from "./pages/Worry";
// import PrivateRoute from "./components/PrivateRoute";

function App() {
	useAuthTokenStore();

	const isAuthenticated = useIsAuthenticated();
	// const authenticatedUser = useAuthenticatedUser();
	const [loginModal, setLoginModal] = useState(false);
	// const [user, setUser] = useState(null);

	return (
		<BrowserRouter>
			<Switch>
				<div className="App">
					<div>
						{/* {!isAuthenticated && <RegistrationForm />} */}
						{!isAuthenticated && <Main setLoginModal={setLoginModal} />}

						{/* {!isAuthenticated && <LoginForm />} */}

						{isAuthenticated && <LogoutButton />}
						{isAuthenticated && <Worry />}
					</div>

					{loginModal && <ModalContainer setLoginModal={setLoginModal} />}
				</div>
			</Switch>
		</BrowserRouter>
	);
}

export default App;
