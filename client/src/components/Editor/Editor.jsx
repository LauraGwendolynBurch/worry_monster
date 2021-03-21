import React from "react";
import CardAddForm from "../CardAddForm/CardAddForm";
import CardEditForm from "../CardEditForm/CardEditForm";
import style from "./Editor.module.css";

const Editor = ({ cards, addCard, deleteCard, updateCard }) => (
	<section className={style.editor}>
		<h3 className={style.title}>worry card add and edit</h3>
		{Object.keys(cards).map((key) => (
			<CardEditForm key={key} card={cards[key]} />
		))}
		<CardAddForm onAdd={addCard} />
	</section>
);

export default Editor;
