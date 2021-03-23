import React from "react";
import Footer from "../components/Footer/Footer";
import HeaderContainer from "../components/HeaderContainer";
import LogoBox from "../components/LogoBox/LogoBox";
// import Nav from "../components/Nav/Nav";

const Main = ({ setLoginModal, user }) => {
	return (
		<>
			 {/* <HeaderContainer setLoginModal={setLoginModal}  user={user} />  */}
			<LogoBox setLoginModal={setLoginModal}  />
			<Footer />
		</>
	);
};

export default Main;
