import React from "react";
import CardAddForm from "../CardAddForm/CardAddForm";
import CardEditForm from "../CardEditForm/CardEditForm";
import style from "./Editor.module.css";

const Editor = ({ cards, onAdd, deleteCard, onEdit }) => (
	<section className={style.editor}>
		<h3 className={style.title}>worry card add and edit</h3>
		
		<CardAddForm onAdd={onAdd} />
	</section>
);

export default Editor;
