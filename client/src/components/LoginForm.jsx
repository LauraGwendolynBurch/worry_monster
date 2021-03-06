import React, { useRef } from "react";
import { useLogin } from "../utils/auth";

// const LoginForm = ({ styles, emailRef, passwordRef, emailLogin, setJoin }) => {
// 	const onChangeJoin = (event) => {
// 		event.preventDefault();
// 		setJoin(() => true);
// 	};

const LoginForm = ({ styles, setJoin, history, closeModal }) => {
	const onChangeJoin = (event) => {
		event.preventDefault();
		setJoin(() => true);
	};
	const emailRef = useRef();
	const passwordRef = useRef();

	// Get the helper login function from the `useLogin` hook.
	const login = useLogin();

	const handleSubmit = async (e) => {
		e.preventDefault();

		const email = emailRef.current.value;
		const password = passwordRef.current.value;

		try {
			await login({ email, password });

			// User has been successfully logged in and added to state. Perform any additional actions you need here such as redirecting to a new page.
			closeModal();
			history.push("/Worry");
		} catch (err) {
			// Handle error responses from the API
			if (err.response && err.response.data) console.log(err.response.data);
		}
	};
	return (
		<div className={styles.memberBox}>
			<form onSubmit={handleSubmit}>
				<h2>LOG IN</h2>
				<input
					ref={emailRef}
					type="text"
					placeholder="enter your email"
				></input>
				<input ref={passwordRef} type="password" placeholder="password" />
				<button>LOG IN</button>
				<button onClick={onChangeJoin}>SIGN UP</button>
			</form>
		</div>
	);
};
export default LoginForm;
