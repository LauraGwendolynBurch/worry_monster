import React from "react";
import styles from "./LogoBox.module.css";
import LoginButton from "../LoginButton/LoginButton";

const LogoBox = ({ setLoginModal }) => {
	return (
		<section className={styles.container}>
			<div>
				<div className={styles.titleBox}>
					<h2>
						W<span>O</span>RRY M<span>O</span>NSTER
					</h2>
					<h2>
						W<span>O</span>RRY M<span>O</span>NSTER
					</h2>
				</div>
				<div className={styles.p}>
					<p className={styles.intro}>
						{" "}
						Hi, I eat your worries and troubles, so you can let them go...
					</p>
				</div>

				<div className="btnbox">
					<LoginButton setLoginModal={setLoginModal}></LoginButton>
				</div>
			</div>
		</section>
	);
};

export default LogoBox;
