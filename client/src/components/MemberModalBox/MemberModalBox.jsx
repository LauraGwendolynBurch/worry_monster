import React, { useRef, useState } from "react";
import { useHistory } from "react-router-dom";
import styles from "./MemberModalBox.module.css";
import API from "../../utils/API";
import { useLogin } from "../../utils/auth";
import welcomeMon from "../../images/mon1.png";
import SignUpForm from "../SignUpForm";
import LoginForm from "../LoginForm";

const MemberModalBox = ({ setLoginModal, history }) => {
	// const emailRef = useRef();
	// const passwordRef = useRef();
	// const usernameRef = useRef();
	const closeModal = () => {
		setLoginModal(() => false);
	};

	const [isJoin, setJoin] = useState(false);

	// // Get the helper login function from the `useLogin` hook.
	// const login = useLogin();

	// const emailJoin = async (event) => {
	// 	event.preventDefault();
	// 	const username = usernameRef.current.value;
	// 	const email = emailRef.current.value;
	// 	const password = passwordRef.current.value;
	// 	console.log(email, password, username);
	// 	try {
	// 		// Register the user.
	// 		await API.register({ email, password, username });

	// 		// User has been successfully registered, now log them in with the same information.
	// 		await login({ email, password });

	// 		// User has been successfully registered, logged in and added to state. Perform any additional actions you need here such as redirecting to a new page.

	// 		closeModal();
	// 		history.push("/Worry");
	// 	} catch (err) {
	// 		// Handle error responses from the API. This will include
	// 		if (err.response && err.response.data) {
	// 			console.log(err.response.data);
	// 		} else {
	// 			console.log(err);
	// 		}
	// 	}
	// };

	// const emailLogin = async (e) => {
	// 	e.preventDefault();

	// 	const email = emailRef.current.value;
	// 	const password = passwordRef.current.value;

	// 	try {
	// 		await login({ email, password });

	// 		// User has been successfully logged in and added to state. Perform any additional actions you need here such as redirecting to a new page.

	// 		closeModal();
	// 		history.push("/Worry");
	// 	} catch (err) {
	// 		// Handle error responses from the API
	// 		if (err.response && err.response.data) console.log(err.response.data);
	// 	}
	// };

	const handlebackground = (event) => {
		if (!event.target.dataset.background) {
			return;
		}
		closeModal();
	};

	return (
		<div
			className={styles.background}
			onClick={handlebackground}
			data-background="background"
		>
			<section className={styles.modal}>
				<div className={styles.img}>
					<img className={styles.sideImg} src={welcomeMon} alt="pink monster" />
				</div>
				{isJoin ? (
					<SignUpForm
						styles={styles}
						// username={usernameRef}
						// email={emailRef}
						// handleSubmit={handleSubmit}
						// onSubmit={emailJoin}
						history={history}
						closeModal={closeModal}
					/>
				) : (
					<LoginForm
						styles={styles}
						// username={usernameRef}
						// email={emailRef}
						// onSubmit={emailLogin}
						setJoin={setJoin}
						history={history}
						closeModal={closeModal}
					/>
				)}
				<button className={styles.btnClose} onClick={closeModal}>
					x<span className="hidden"></span>
				</button>
			</section>
		</div>
	);
};

export default MemberModalBox;
