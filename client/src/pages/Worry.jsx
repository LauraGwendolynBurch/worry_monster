import React, { useEffect, useState } from "react";
import styles from "./Worry.module.css";
import Editor from "../components/Add/Add";
import Preview from "../components/Preview/Preview";
import WorryAPI from "../utils/WorryApi";
import HeaderContainer from "../components/HeaderContainer";

const Worry = (props) => {
	const [cards, setCards] = useState({});

	useEffect(() => {
		loadMyWorry();
	}, []);

	const loadMyWorry = () => {
		WorryAPI.getMyWorry() //
			.then((res) => {
				console.log(res.data);
				setCards(res.data);
			}) //
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
		console.log(card);
		setCards((cards) => {
			const updated = { ...cards };
			delete updated[card._id];
			return updated;
		});

		WorryAPI.deleteMyWorry(card._id);
	};

	const handleWorryEdit = (card) => {
		setCards((cards) => {
			const updated = { ...cards };
			updated[card._id] = card;
			return updated;
		});
		WorryAPI.updateMyWorry(card._id);
	};

	return (
		<section className={styles.worrypage}>
			<HeaderContainer />
			<div className="card">
				<div className="info">
					<h2 className="city">WElcome to Wory Monster</h2>
					<p className="body">instructions</p>
				</div>
			</div>

			<div className={styles.container}>
				<Editor
					cards={cards}
					onAdd={handleWorrySubmit}
					// deleteCard={handleWorryDelete}
					// onEdit={handleWorryEdit}
				/>
				<Preview
					cards={cards}
					// onAdd={handleWorrySubmit}
					deleteCard={handleWorryDelete}
					onEdit={handleWorryEdit}
				/>
			</div>
		</section>
	);
};

export default Worry;
