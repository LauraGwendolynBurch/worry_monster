import React from "react";
import CardAddForm from "../CardAddForm/CardAddForm";
import CardEditForm from "../CardEditForm/CardEditForm";
import style from "./Add.module.css";

const Editor = ({ cards, onAdd }) => (

	
	<section className={style.editor}>	
	
		
		
		<CardAddForm onAdd={onAdd} />
	</section>
	
);






	export default Editor;
