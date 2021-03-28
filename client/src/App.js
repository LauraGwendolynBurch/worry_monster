import React, { useState } from "react";
import { useAuthTokenStore, useIsAuthenticated } from "./utils/auth";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import "./App.module.css";
import Main from "./pages/Main";
import Monster from "./pages/Monster";
import SharedWorry from "./pages/SharedWorry";
import Worry from "./pages/Worry";
import ModalContainer from "./components/ModalContainer";
import HeaderContainer from "./components/HeaderContainer";

function App() {
	useAuthTokenStore();

	const isAuthenticated = useIsAuthenticated();
	// const authenticatedUser = useAuthenticatedUser();
	const [loginModal, setLoginModal] = useState(false);
	// const [user, setUser] = useState(null);

	return (
		<BrowserRouter>
			<Switch>
				<div>
					<div>
						<Route exact path="/" render={() =>{return <Main setLoginModal={setLoginModal} />}} />
						
						{isAuthenticated && <HeaderContainer />}
						{loginModal && <ModalContainer setLoginModal={setLoginModal} />}
						<Route exact path="/Worry" component={isAuthenticated && Worry} />
						<Route
							exact
							path="/SharedWorry"
							component={isAuthenticated && SharedWorry}
						/>
						<Route
							exact
							path="/Monster"
							component={isAuthenticated && Monster}
						/>
					</div>
					
				</div>
			</Switch>
		</BrowserRouter>
	);
}

export default App;
