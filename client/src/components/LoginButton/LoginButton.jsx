import React from "react";

const LoginButton = (props) => {
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
			<button className="btn-logout"> logout</button>
		</>
	);
};

export default LoginButton;
