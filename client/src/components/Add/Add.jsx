import React from "react";
import CardAddForm from "../CardAddForm/CardAddForm";
import CardEditForm from "../CardEditForm/CardEditForm";
import style from "./Add.module.css";

const Editor = ({ cards, onAdd, deleteCard, onEdit }) => (
	<section className={style.editor}>
		<h3 className={style.title}>worry card add only</h3>
		{Object.keys(cards).map((key) => (
			<CardEditForm
				key={key}
				card={cards[key]}
				deleteCard={deleteCard}
				onEdit={onEdit}
			/>
		))}
		<CardAddForm onAdd={onAdd} />
	</section>
);

export default Editor;
