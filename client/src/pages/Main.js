import React from "react";
import Footer from "../components/Footer/Footer";
import LogoBox from "../components/LogoBox/LogoBox";

const Main = ({ setLoginModal, user }) => {
	return (
		<>
			<LogoBox setLoginModal={setLoginModal} />

			<Footer />
		</>
	);
};

export default Main;
