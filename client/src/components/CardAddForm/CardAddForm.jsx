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
		<div className={styles.wrap}>
			<h3 className={styles.h3}>I eat your worries and troubles... </h3>
			<form ref={formRef} className={styles.form} onSubmit={onSubmit}>
				<input
					className={styles.input}
					type="text"
					name="city"
					placeholder="city"
				/>

				<textarea
					ref={bodyRef}
					className={styles.textarea}
					name="body"
					placeholder="Worry"
				></textarea>

				<Button name="Add" onClick={onSubmit} />
			</form>
		</div>
	);
};

export default CardAddForm;
