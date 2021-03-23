import React from "react";
import styles from "./Nav.module.css";
import { Link } from "react-router-dom";
import Shape1 from "../../images/Shape1.svg";

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
				

				
			</div>
		</header>
	);
};

export default Nav;
