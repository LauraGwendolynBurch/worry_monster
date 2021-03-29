import React from "react";
import styles from "./Preview.module.css";
import Card from "../Card/Card";

const Preview = ({ cards, deleteCard, updateCard }) => (
	<section className={styles.preview}>
		<div className={styles.break}></div>
		<ul className={styles.cards}>
			{cards
				? cards
						.filter((card) => {
							return card.share == false;
						})
						.map((card, key) => (
							<Card
								key={key}
								card={card}
								deleteCard={deleteCard}
								updateCard={updateCard}
							/>
						))
				: ""}
		
		</ul>
	</section>
);
export default Preview;
