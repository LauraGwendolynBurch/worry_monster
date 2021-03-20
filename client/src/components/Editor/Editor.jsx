import React from "react";
import CardAddForm from "../CardAddForm/CardAddForm";
import style from "./Editor.module.css";

const Editor = ({ cards }) => {
    
	return (
		<section className={style.editor}>
			<h1 className={style.title}>worry card add and edit</h1>

			<CardAddForm />
		</section>
	);
};

export default Editor;
