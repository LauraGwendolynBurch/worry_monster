import React, { useRef } from "react";
import Button from "../Button/button";

import styles from "./CardEditForm.module.css";

const CardEditForm = ({ card, updateCard, deleteCard }) => {
	const formRef = useRef();
	const cityRef = useRef();
	const bodyRef = useRef();

	const { city, body } = card;
	const onChange = (event) => {
		if (event.currentTarget === null) {
			return;
		}
		event.preventDefault();

		updateCard({
			...card,
			[event.currentTarget.city]: event.currentTarget.value,
		});
	};
	const onSubmit = (event) => {
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
				onChange={onChange}
			/>

			<textarea
				ref={bodyRef}
				className={styles.textarea}
				name="message"
				value={body}
				onChange={onChange}
			></textarea>

			<Button name="Delete" onClick={onSubmit} />
		</form>
	);
};

export default CardEditForm;
