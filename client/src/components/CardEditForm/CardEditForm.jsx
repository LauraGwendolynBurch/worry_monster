import React, { useRef } from "react";
import Button from "../Button/Button";

import styles from "./CardEditForm.module.css";

const CardEditForm = ({ card, deleteCard }) => {
	const formRef = useRef();
	const cityRef = useRef();
	const bodyRef = useRef();

	const { city, body } = card;

	const onSubmit = (event) => {
		event.preventDefault();
		deleteCard(card);
	};

	return (
		<form ref={formRef} className={styles.form}>
			<input
				ref={cityRef}
				className={styles.input}
				type="text"
				name="city"
				value={city}
				
			/>

			<textarea
				ref={bodyRef}
				className={styles.textarea}
				name="message"
				value={body}
				
			></textarea>
			<Button name="Edit" />
			<Button name="Delete" onClick={onSubmit} />
			
		</form>
	);
};

export default CardEditForm;
