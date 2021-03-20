import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import Editor from "../editor/editor";
import Footer from "../footer/footer";
import Header from "../header/header";
import Preview from "../preview/preview";
import styles from "./maker.module.css";

const Maker = ({ authService }) => {
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

	const history = useHistory();
	const onLogout = () => {
		authService.logout();
	};
	useEffect(() => {
		authService.onAuthChange((user) => {
			if (!user) {
				history.push("/");
			}
		});
	});

	const createOrUpdateCard = (card) => {
		console.log(card);

		setCards((cards) => {
			const updated = { ...cards };
			updated[card.id] = card;
			return updated;
		});
	};

	// need to seperate this // different API route 

	const deleteCard = (card) => {
		console.log(card);
		setCards((cards) => {
			const updated = { ...cards };
			delete updated[card.id];
			return updated;
		});
	};
	return (
		<section className={styles.maker}>
			<Header onLogout={onLogout} />
			<div className={styles.container}>
				<Editor
					cards={cards}
					addCard={createOrUpdateCard}
					updateCard={createOrUpdateCard}
					deleteCard={deleteCard}
				/>
				<Preview cards={cards} />
			</div>
			<Footer />
		</section>
	);
};

export default Maker;
