import React from "react";
import styles from "./Preview.module.css";
import Card from "../Card/Card";

const Preview = ({ cards }) => (
	
		<section className={styles.preview}>
			<h3 className={styles.title}> Card Preview</h3>
			<ul className={styles.cards}>
				{Object.keys(cards).map((key) => (
					<Card key={key} card={cards[key]} />
				))}
			</ul>
		</section>
	
)
export default Preview;
