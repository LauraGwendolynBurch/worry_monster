import React, { useEffect, useState } from "react";
import { useAuthenticatedUser } from "../utils/auth";
import { useAuthTokenStore, useIsAuthenticated } from "../utils/auth";

import styles from "./Worry.module.css";
import Add from "../components/Add/Add";
import Preview from "../components/Preview/Preview";
import WorryAPI from "../utils/WorryApi";
import MonsterUse from "./MonsterUse";
import picture from "../images/monster-NBG.gif";
import HeaderContainer from "../components/HeaderContainer";

const Worry = (props) => {
	const [cards, setCards] = useState([]);
	useAuthTokenStore();
	const user = useAuthenticatedUser();
	const [monster, setMonster] = useState(true);
	const [editCards, setEditCards] = useState([]);
	const [originalArry, setOriginalArry] = useState([]);
	useEffect(() => {
		loadMyWorry();
	}, []);

	const loadMyWorry = () => {
		WorryAPI.getMyWorry() //
			.then((res) => {
				console.log(res.data);
				setCards(res.data);
				setEditCards(res.data);
				setOriginalArry(res.data);
			}) //
			.catch((err) => console.log(err));
	};

	const handleWorrySubmit = (card) => {
		WorryAPI.createMyWorry(card).then((result) => {
			loadMyWorry();
		});
	};

	// const handleWorryDelete =  (card) => {
	// 	console.log(card);
	// 	 setTimeout(() => {
	// 		setMonster(true);
	// 	}, 3000);
	// 	setMonster(false);

	// 	// setCards((cards) => {
	// 	// 	const updated = { ...cards };
	// 	// 	delete updated[card._id];
	// 	// 	return updated;
	// 	// });

	// 	 WorryAPI.deleteMyWorry(card._id);
	// };

	const handleWorryDelete = (card) => {
		console.log(card);
		setMonster(false); 
		WorryAPI.deleteMyWorry(card._id);
		setTimeout(() => {
			setMonster(true);
			window.location.reload()
		}, 6000);
		setMonster(false);

		// setCards((cards) => {
		// 	const updated = { ...cards };
		// 	delete updated[card._id];
		// 	return updated;
		// });

		
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
			<div>
				<div className="info">
					<h3 className={styles.title}>
						{" "}
						Hi, {user.username}! Tell the Monster what is on your mind.
					</h3>
					<h3 className={styles.title}>
						Be sure to include the city you are in. Then decide if you want to
						feed the Worry Monster, or anonymously share with the community.
						Either way the Monster takes care of you from here!{" "}
					</h3>
				</div>
			</div>
			<img src={picture} hidden={monster} className="monster-image" />

			<div className={styles.container}>
				<MonsterUse />

				<Add
					cards={cards}
					onAdd={handleWorrySubmit}
					// deleteCard={handleWorryDelete}
					// onEdit={handleWorryEdit}
				/>
				<div className={styles.break}></div>
				<Preview
					cards={cards}
					onAdd={handleWorrySubmit}
					deleteCard={handleWorryDelete}
					onEdit={handleWorryEdit}
				/>
			</div>
		</section>
	);
};

export default Worry;
