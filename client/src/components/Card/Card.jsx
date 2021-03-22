import React from "react";
import styles from "./Card.module.css";

const Card = ({ card }) => {
	const { city, body } = card;
	return (
		<li className={styles.card}>
			<div className={styles.info}>
				<h3 className={styles.city}>{city}</h3>
				<p className={styles.body}>{body}</p>
			</div>
		</li>
	);
};

export default Card;
