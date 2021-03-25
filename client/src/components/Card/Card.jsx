import React from "react";
import styles from "./Card.module.css";

const Card = ({ card, deleteCard,  }) => {
	const { city, body } = card;
	const onSubmit = (event) => {
		deleteCard(card);
	};

	return (
		<form>
		<li className={styles.card}>
			<div className={styles.info}>
				<h3 className={styles.city}>{city}</h3>
				<p className={styles.body}>{body}</p>
				<div className={styles.buttons}>
					<button className={styles.button}>
						Share your worry
					</button>
					&nbsp;
					<button onClick={onSubmit} className={styles.button}>
						Feed your worry to the monster
					</button>
				</div>
			</div>
		</li>
		</form>
	);
};

export default Card;
