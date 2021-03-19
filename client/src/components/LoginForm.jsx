import React from "react";

const LoginForm = ({
	styles,
	emailRef,
	passwordRef,
	handleSubmit,
	setJoin,
}) => {

	const onChangeJoin = (event) => {
		event.preventDefault();
		setJoin(() => true);
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
				<button onClick={handleSubmit}>LOG IN</button>
				<button onClick={onChangeJoin}>SIGN UP</button>
			</form>
		</div>
	);
};
export default LoginForm;
