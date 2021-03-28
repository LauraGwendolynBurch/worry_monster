import React from "react";
import styles from "./Footer.module.css";

const Footer = (props) => {
	return (
		<footer className={styles.footer}>
			<div className={styles.info}>
				{/* <a href="https://github.com/LauraGwendolynBurch/worry_monster">
					<i className="fab fa-github"></i>
					<span>github</span>
				</a> */}

				<h5> © 2021 </h5>
			</div>
		</footer>
	);
};
export default Footer;
