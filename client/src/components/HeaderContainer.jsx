import React from "react";
import Nav from "./Nav/Nav";

const HeaderContainer = ({ setLoginModal, user }) => {
	return <Nav setLoginModal={setLoginModal} user={user} />;
};
export default HeaderContainer;
