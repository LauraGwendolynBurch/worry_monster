import React from "react";
import CardAddForm from "../CardAddForm/CardAddForm";
import style from "./Add.module.css";

const Add = ({ cards, onAdd }) => (
	<section className={style.editor}>
		<CardAddForm onAdd={onAdd} />
	</section>
);

export default Add;
