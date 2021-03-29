import React from "react";
import Footer from "../components/Footer/Footer";
import LogoBox from "../components/LogoBox/LogoBox";

const Main = ({ setLoginModal, user }) => {
	return (
		<div>
			<LogoBox setLoginModal={setLoginModal} />

			<Footer />
		</div>
	);
};

export default Main;
