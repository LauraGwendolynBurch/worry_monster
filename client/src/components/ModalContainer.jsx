import React from "react";
import { useHistory } from "react-router-dom";
import MemberModalBox from "./MemberModalBox/MemberModalBox";

const ModalContainer = ({ setLoginModal }) => {
	const history = useHistory();
	const closeModal = () => {
		setLoginModal(() => false);
	};

	return <MemberModalBox closeModal={closeModal} history={history} />;
};
export default ModalContainer;
