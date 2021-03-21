import React, { useState } from "react";
import styles from "./Worry.module.css";
import HeaderContainer from "../components/HeaderContainer";
import Editor from "../components/Editor/Editor";
import Preview from "../components/Preview/Preview";

const Worry = (props) => {
	const [cards, setCards] = useState({
		1: {
			id: "1",
			city: "Seattle",
			body: "This is where you post your worry.  I worry about too much rain.",
			date: new Date(Date.now()),
		},
		2: {
			id: "2",
			city: "Dallas",
			body: "I am worried about money.",
			date: new Date(Date.now()),
		},
		3: {
			id: "3",
			city: "Orlando",
			body: "I am worried my husband is mad at me.",
			date: new Date(Date.now()),
		},
	});

	const addCard = (card) => {
		setCards((cards) => {
			const updated = { ...cards };
			updated[card.id] = card;
			return updated;
		});
	};

	const updateCard = (card) => {
		setCards((cards) => {
			const updated = { ...cards };
			updated[card.id] = card;
			return updated;
		});
	};
	const deleteCard = (card) => {
		console.log(card);
		setCards((cards) => {
			const updated = { ...cards };
			delete updated[card.id];
			return updated;
		});
	};
	return (
		<section className={styles.worrypage}>
			<HeaderContainer />
			<div className={styles.container}>
				<Editor
					cards={cards}
					addCard={addCard}
					deleteCard={deleteCard}
					updateCard={updateCard}
				/>
				<Preview cards={cards} />
			</div>
			<h1>sdflkdjfsdkf</h1>
		</section>
	);
};

export default Worry;
