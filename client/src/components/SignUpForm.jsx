import React from "react";

const SignUpFrom = ({ styles, emailRef, passwordRef, emailJoin }) => {
	return (
		<div className={`${styles.memberbox} ${styles.join}`}>
			<form>
				<h2> SIGN UP</h2>
				<label htmlFor="userName" className="hidden">
					username
				</label>
				<input
					ref={userRef}
					type="text"
					placeholder="Enter username"
					id="userName"
				/>
				<label htmlFor="userEmail" className="hidden" id="userEmail"></label>
				<input
					ref={emailRef}
					type="text"
					placeholder="enter your email"
				></input>
				<label htmlFor="password" className="hidden"></label>
				<input
					ref={passwordRef}
					type="password"
					id="userPassword"
					placeholder="Enter password"
				/>
				<button className={styles.btnJoin} onClick={emailJoin}></button>
			</form>
		</div>
	);
};

export default SignUpFrom;
