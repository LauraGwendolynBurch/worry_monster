import React, { useEffect, useState } from "react";
import styles from "./Worry.module.css";
import HeaderContainer from "../components/HeaderContainer";
import Editor from "../components/Editor/Editor";
import Preview from "../components/Preview/Preview";
import WorryAPI from "../utils/WorryApi";

const Worry = (props) => {
	const [cards, setCards] = useState({});
	const [cardFormObject, setFormObject] = useState({
		city: "",
		body: "",
	});

	useEffect(() => {
		// getting all my worry from database
		loadMyWorry();
	}, []);

	const loadMyWorry = () => {
		WorryAPI.getMyWorry() //
			.then((res) => setCards(res.data)) //
			.catch((err) => console.log(err));
	};

	const handleWorrySubmit = (card) => {
		setCards((cards) => {
			const updated = { ...cards };
			updated[card.id] = card;
			return updated;
		});
		WorryAPI.createMyWorry(card);
	};

	const handleWorryDelete = (card) => {
		setCards((cards) => {
			const updated = { ...cards };
			delete updated[card.id];
			return updated;
		});
		WorryAPI.deleteMyWorry(card);
	};

	return (
		<section className={styles.worrypage}>
			<HeaderContainer />
			<div className={styles.container}>
				<Editor
					cards={cards}
					onAdd={handleWorrySubmit}
					deleteCard={handleWorryDelete}
				/>
				<Preview cards={cards} />
			</div>
			<h1>sdflkdjfsdkf</h1>
		</section>
	);
};

export default Worry;
