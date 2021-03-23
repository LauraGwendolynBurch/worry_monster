import React, { useRef } from "react";
import Button from "../Button/Button";

import styles from "./CardEditForm.module.css";

const CardEditForm = ({ card, deleteCard, onEdit, onAdd }) => {
	const formRef = useRef();
	const cityRef = useRef();
	const bodyRef = useRef();

	const { city, body } = card;
	const onChange = (event) => {
		if (event.currentTarget === null) {
			return;
		}
		event.preventDefault();

		onEdit({
			...card,
			[event.currentTarget.name]: event.currentTarget.value,
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
			<Button name="Edit" />
			<Button name="Delete" onClick={onSubmit} />
			{/* <Button name="Delete" onClick={onSubmit} /> */}
		</form>
	);
};

export default CardEditForm;
