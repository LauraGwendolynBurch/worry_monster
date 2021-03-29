import React, { useState } from "react";
import { useAuthTokenStore, useIsAuthenticated } from "./utils/auth";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import "./App.module.css";
import Main from "./pages/Main";
import SharedWorry from "./pages/SharedWorry/SharedWorry";
import Worry from "./pages/Worry";
import ModalContainer from "./components/ModalContainer";
import { useAuthenticatedUser } from "./utils/auth";

function App() {
	useAuthTokenStore();
	const isAuthenticated = useIsAuthenticated();
	const [loginModal, setLoginModal] = useState(false);
	const user = useAuthenticatedUser();

	return (
		<BrowserRouter>
			<Switch>
				<div>
					<div>
						<Route
							exact
							path="/"
							render={() => {
								return <Main setLoginModal={setLoginModal} />;
							}}
						/>

						{loginModal && <ModalContainer setLoginModal={setLoginModal} />}
						<Route exact path="/Worry" component={isAuthenticated && Worry} />
						<Route
							exact
							path="/SharedWorry"
							component={isAuthenticated && SharedWorry}
						/>
					</div>
				</div>
			</Switch>
		</BrowserRouter>
	);
}

export default App;
