import React, { useContext, useEffect, useState } from "react";
import styles from "./Worry.module.css";
import Add from "../../components/Add/Add";
import Preview from "../../components/Preview/Preview";
import WorryAPI from "../../utils/WorryApi";
import HeaderContainer from "../../components/HeaderContainer";
import { logo } from "../../images/mon1.png";
import { useAuthTokenStore, useIsAuthenticated } from "../../utils/auth";
import { useAuthenticatedUser } from "../../utils/auth";

const Worry = (props) => {
	const [cards, setCards] = useState([]);
	useAuthTokenStore();
	const user = useAuthenticatedUser();
	console.log(user, "user123455667778");

	// console.log(props, "prosp");

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
		// setCards((cards) => {
		// 	const updated = { ...cards };
		// 	updated[card.id] = card;
		// 	return updated;
		// });

		WorryAPI.createMyWorry(card).then((result) => {
			loadMyWorry();
		});
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

	const [editCards, setEditCards] = useState([]);
	const [originalArry, setOriginalArry] = useState([]);
	const [editState, setEditState] = useState(false);

	const handleWorryEdit = (card) => {
		setCards((cards) => {
			const updated = { ...cards };
			updated[card._id] = card;
			console.log(updated, "updated");
			return updated;
		});
		WorryAPI.updateMyWorry(card._id);
	};

	return (
		<div>
			<HeaderContainer />
			<section className={styles.worrypage}>
				<div className="cardsdfsdfsdf">
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

				<div className={styles.container}>
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
						updateCard={handleWorryEdit}
					/>
				</div>
			</section>
		</div>
	);
};

export default Worry;
