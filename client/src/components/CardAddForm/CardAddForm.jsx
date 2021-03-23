import React, { useRef } from "react";
import Button from "../Button/Button";
import styles from "./CardAddForm.module.css";

const CardAddForm = ({ onAdd }) => {
	const formRef = useRef();
	const cityRef = useRef();
	const bodyRef = useRef();

	const onSubmit = (event) => {
		event.preventDefault();
		const card = {
			id: Date.now(),
			city: cityRef.current.value || "",
			body: bodyRef.current.value || "",
		};
		formRef.current.reset();

		onAdd(card);
	};

	return (
		<form ref={formRef} className={styles.form} onSubmit={onSubmit}>
			<input
				ref={cityRef}
				className={styles.input}
				type="text"
				name="city"
				placeholder="city"
			/>

			<textarea
				ref={bodyRef}
				className={styles.textarea}
				name="body"
				placeholder="Message"
			></textarea>

			<Button name="Add" onClick={onSubmit} />
		</form>
	);
};

export default CardAddForm;
