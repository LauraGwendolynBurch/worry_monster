import React from "react";
import styles from "./Nav.module.css";
import { Link } from "react-router-dom";
import LogoutButton from "../LogoutBtn/LogoutBtn.js";

const Nav = ({ setLoginModal, user }) => {
	return (
		<header className={styles.nav}>
			<h1>
				<Link className={styles.logo} to="/Worry">
					worry monster
				</Link>
			</h1>

			<ul className={styles.ul}>
				<li className={`${styles.li} ${styles.active}`}>
					<Link className={styles.link} to="/Worry">
						<h5 className={styles.h5}>My Worries</h5>
					</Link>
				</li>
				<li className={styles.li}>
					<Link className={styles.link} to="/SharedWorry">
						<h5 className={styles.h5}>Shared Worries</h5>
					</Link>
				</li>
				<li className={styles.li}>
					<LogoutButton />
				</li>
			</ul>
		</header>
	);
};

export default Nav;
