import React from "react";
import Button from "../Button/Button";
import styles from "./Card.module.css";

const Card = ({ card, deleteCard, onEdit }) => {
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
							Change Share Status to private to share
						</button>
						&nbsp;
						<button onClick={onSubmit} className={styles.button}>
							Delete and Feed it to Monster
						</button>
					</div>
				</div>
			</li>
		</form>
	);
};

export default Card;
