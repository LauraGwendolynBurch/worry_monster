import React from "react";
import styles from "./LoginButton.module.css";

const LoginButton = ({ setLoginModal }) => {
	const openLoginModal = () => {
		setLoginModal(() => true);
	};
	return (
		<>
			<div>
				<button className={styles.login} onClick={openLoginModal}>
					start your worry monster
				</button>
			</div>
		</>
	);
};

export default LoginButton;
