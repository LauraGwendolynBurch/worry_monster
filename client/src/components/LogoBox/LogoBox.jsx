import React from "react";
import styles from "./LogoBox.module.css";
import LoginButton from "../LoginButton/LoginButton";

const LogoBox = ( { setLoginModal} ) => {


	


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
					<p className={styles.desc}>
					Hi!  I am a Worry Monster! <br/> You may not have heard of me, but I am here to help you manage stress. <br/>  Create an account, and then you can feed your worries to me! 
					</p>
					<div className="btnbox">
						<LoginButton setLoginModal={setLoginModal}></LoginButton>
			
					</div>
				</div>
			</div>
		</section>
	);
};

export default LogoBox;

