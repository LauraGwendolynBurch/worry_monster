import React from "react";
import styles from "./Nav.module.css";
import { Link, Switch } from "react-router-dom";
import Shape1 from "../../images/Shape1.svg";
import LogoutButton from "../../components/LogoutButton.js"

const Nav = ({ setLoginModal, user }) => {
	return (
		<header className={styles.nav}>
			<div className="wrapInner">
				<h1>
					<Link to="/">
						<img className={styles.logo} src={Shape1} alt="worrymonster logo" />
					</Link>
					<span>worry monster</span>
				</h1>
				<Switch>
					<div >
						<Link className={styles.navRouteLinks} to="/Worry">My Worries</Link>
						<Link className={styles.navRouteLinks} to="/SharedWorry">Shared Worries</Link>
						<Link className={styles.navRouteLinks} to="/Monster">Monster</Link>
					</div>
				</Switch>
				<LogoutButton />
			</div>
		</header>


	);
};

export default Nav;
