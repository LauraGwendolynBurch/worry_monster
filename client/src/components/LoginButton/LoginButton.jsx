import React from "react";
import { useLogin, useLogout } from "../../utils/auth";
import styles from "./LoginButton.module.css";

const LoginButton = ({ setLoginModal, user }) => {
	// const login = useLogin();
	const logout = useLogout();

	const openLoginModal = () => {
		setLoginModal(() => true);
	};
	return (
		<>
			{/* {user ? (
				<button className="btn-logout" onClick={logout}>
					logout
				</button>
			) : (
				<button className="btn-login" onClick={openLoginModal}>
					login
				</button>
			)} */}
			{user ? (
				<button className="btn-logout" onClick={logout}>
					LOGOUT
				</button>
			) : (
			<button className={styles.login} onClick={openLoginModal}>
					start your worry monster
				</button>
			)}
			{/* <button className="btn-logout"> logout</button> */}
		</>
	);
};

export default LoginButton;
