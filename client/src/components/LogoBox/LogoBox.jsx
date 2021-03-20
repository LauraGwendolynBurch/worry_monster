import React from "react";
import { Link } from "react-router-dom";
import styles from "./LogoBox.module.css";

const LogoBox = (props) => {
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
						hi, there. I eat your worries and troubles, so you can let them
						go...
					</p>
					<div className="btnbox">
						<Link>start worry monster</Link>
					</div>
				</div>
			</div>
		</section>
	);
};

export default LogoBox;
