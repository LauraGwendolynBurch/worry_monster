import React from "react";
import styles from "./Preview.module.css";
import Card from "../Card/Card";


const Preview = ({ cards, deleteCard, onEdit }) => (
	<section className={styles.preview}>
		<h3 className={styles.title}> Card Preview</h3>
		<ul className={styles.cards}>
			{Object.keys(cards).map((key) => (
					<Card key={key} card={cards[key]} deleteCard={deleteCard}
					onEdit={onEdit} />
				))}

			{/* {Object.keys(cards).map((key) => (
				<CardEditForm
					key={key}
					card={cards[key]}
					deleteCard={deleteCard}
					onEdit={onEdit}
				/>
			))} */}
		</ul>
	</section>
);
export default Preview;
