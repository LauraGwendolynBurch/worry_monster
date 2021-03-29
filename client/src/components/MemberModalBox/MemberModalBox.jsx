import React, { useRef, useState } from "react";
import styles from "./MemberModalBox.module.css";
import welcomeMon from "../../images/mon1.png";
import SignUpForm from "../SignUpForm";
import LoginForm from "../LoginForm";

const MemberModalBox = ({ setLoginModal, history }) => {
	const closeModal = () => {
		setLoginModal(() => false);
	};

	const [isJoin, setJoin] = useState(false);

	const handlebackground = (event) => {
		if (!event.target.dataset.background) {
			return;
		}
		closeModal();
	};

	return (
		<div
			className={styles.background}
			onClick={handlebackground}
			data-background="background"
		>
			<section className={styles.modal}>
				<div className={styles.img}>
					<img className={styles.sideImg} src={welcomeMon} alt="pink monster" />
				</div>
				{isJoin ? (
					<SignUpForm
						styles={styles}
						history={history}
						closeModal={closeModal}
					/>
				) : (
					<LoginForm
						styles={styles}
						setJoin={setJoin}
						history={history}
						closeModal={closeModal}
					/>
				)}
				<button className={styles.btnClose} onClick={closeModal}>
					x<span className="hidden"></span>
				</button>
			</section>
		</div>
	);
};

export default MemberModalBox;
