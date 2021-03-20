import React from "react";
import { useHistory } from "react-router-dom";
import MemberModalBox from "./MemberModalBox/MemberModalBox";

const ModalContainer = ({ setLoginModal }) => {
	const history = useHistory();

	return <MemberModalBox setLoginModal={setLoginModal} history={history} />;
};
export default ModalContainer;
