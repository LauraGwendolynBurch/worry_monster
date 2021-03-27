import React from "react";
import { useLogout } from "../../utils/auth";
import styles from "./LogoutBtn.module.css";

function LogoutButton() {
	const logout = useLogout();

	return (
		<button className={styles.btn} onClick={logout}>
			Logout
		</button>
	);
}

export default LogoutButton;
