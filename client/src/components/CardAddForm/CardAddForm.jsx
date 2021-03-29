import React, { useRef } from "react";
import Button from "../Button/Button";
import styles from "./CardAddForm.module.css";
import swal from "sweetalert";

const CardAddForm = ({ onAdd }) => {
	const formRef = useRef();
	const cityRef = useRef();
	const bodyRef = useRef();

	const onSubmit = (event) => {
		event.preventDefault();
		swal("Worry saved!", "Now let the moster take care of it!", "success");
		const card = {
			id: Date.now(),
			city: cityRef.current.value || "",
			body: bodyRef.current.value || "",
		};
		formRef.current.reset();

		onAdd(card);
	};

	return (
		<div>
			
			<form ref={formRef} className={styles.form} onSubmit={onSubmit}>
				<input
					ref={cityRef}
					className={styles.input}
					type="text"
					name="city"
					placeholder="Where are you? Enter your City"
				/>

				<textarea
					ref={bodyRef}
					className={styles.textarea}
					name="body"
					placeholder="Write your worries and troubles for Worry Monster"
				></textarea>

				<Button name="Add" onClick={onSubmit} />
			</form>
		
		</div>
	);
};

export default CardAddForm;
