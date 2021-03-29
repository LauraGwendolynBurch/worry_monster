import React, { useEffect, useState } from "react";
import styles from "./Worry.module.css";
import Editor from "../components/Add/Add";
import Preview from "../components/Preview/Preview";
import WorryAPI from "../utils/WorryApi";
import MonsterUse from "./MonsterUse";
import picture from "../images/monster-NBG.gif";
import HeaderContainer from "../components/HeaderContainer"




const Worry = (props) => {
	const [cards, setCards] = useState({});
	const [monster, setMonster] = useState(true);
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
		setTimeout(() => {
			setMonster(true);
		},3000)
		setMonster(false);
		// MonsterUse();
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
				<h3 className={styles.title}> Tell the Monster what is on your mind.</h3>
				<h3 className={styles.title}>Be sure to include the city you are in.  Then decide if you want to feed the Worry Monster, or anonymously share with the community.  Either way the Monster takes care of you from here!  </h3>
				</div>
			</div>
			<img src={picture} hidden={monster} className="monster-image"/>

			<div className={styles.container}>
			<MonsterUse/>
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
