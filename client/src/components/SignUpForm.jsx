import React, { useRef } from "react";
import API from "../utils/API";
import { useLogin } from "../utils/auth";

const SignUpForm = ({ styles, closeModal, history }) => {
	const emailRef = useRef();
	const passwordRef = useRef();
	const usernameRef = useRef();

	// Get the helper login function from the `useLogin` hook.
	const login = useLogin();

	const handleSubmit = async (e) => {
		e.preventDefault();

		const username = usernameRef.current.value;
		const email = emailRef.current.value;
		const password = passwordRef.current.value;

		console.log(email, password, username);
		try {
			// Register the user.
			await API.register({ email, password, username });

			// User has been successfully registered, now log them in with the same information.
			await login({ email, password });
			closeModal();
			history.push("/Worry");

			// User has been successfully registered, logged in and added to state. Perform any additional actions you need here such as redirecting to a new page.
		} catch (err) {
			// Handle error responses from the API. This will include
			if (err.response && err.response.data) {
				console.log(err.response.data);
			} else {
				console.log(err);
			}
		}
	};

	return (
		<div className={`${styles.memberBox} ${styles.join}`}>
			<form onSubmit={handleSubmit}>
				<h2> SIGN UP</h2>
				<label htmlFor="userName" className="hidden"></label>
				<input
					ref={usernameRef}
					type="text"
					placeholder="Enter username"
					id="userName"
				/>
				<label htmlFor="userEmail" className="hidden" id="userEmail"></label>
				<input
					ref={emailRef}
					type="text"
					placeholder="Enter your email"
				></input>
				<label htmlFor="password" className="hidden"></label>
				<input
					ref={passwordRef}
					type="password"
					id="userPassword"
					placeholder="Enter password"
				/>
				<button className={styles.btnJoin}>SIGN UP</button>
			</form>
		</div>
	);
};

export default SignUpForm;
