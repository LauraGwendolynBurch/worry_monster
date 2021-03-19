import React from "react";
import styles from "./Nav.module.css";
import { Link } from "react-router-dom";
import LoginButton from "../LoginButton/LoginButton";

const Nav = ({ setLoginModal, user }) => {
	return (
		<header className={styles.nav}>
			<div className="wrapInner">
				<h1>
					<Link to="/">
						<img src="" alt="worrymonster logo" />
					</Link>
				</h1>
				<LoginButton setLoginModal={setLoginModal} user={user} />
			</div>
		</header>
	);
};

export default Nav;
