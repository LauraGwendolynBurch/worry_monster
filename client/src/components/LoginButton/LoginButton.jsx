import React from "react";
import { useLogin, useLogout } from "../../utils/auth";
import styles from "./LoginButton.module.css";

const LoginButton = ({ user }) => {
	const login = useLogin();
	const logout = useLogout();
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
				<button className="btn-login" onClick={login}>
					LOGIN
				</button>
			)}
			{/* <button className="btn-logout"> logout</button> */}
		</>
	);
};

export default LoginButton;
