import React, { useState } from "react";
import styles from "./Card.module.css";
import { Redirect } from "react-router-dom";
import WorryAPI from "../../utils/WorryApi";

const Card = ({ card, deleteCard, updateCard }) => {
	const { city, body, _id } = card;
	console.log(card, "card in sharedcard pages");

	const [redirectLink, setRedirectLink] = useState({ redirect: null });

	const onSubmit = (event) => {
		deleteCard(card);
	};

	// const onShare = async (e) => {
	// 	e.preventDefault();
	// 	// await WorryAPI.updateMyWorry(e.target.id);
	// 	const { _id: key } = e.target;
	// 	const { value } = e.target;
	// 	await updateCard({
	// 		...card,
	// 		share: true,
	// 		[key]: value,
	// 	});
	// 	//call api with id await
	// 	console.log("button id: ", e.target);
	// 	// await setRedirectLink({ redirect: "/SharedWorry" });
	// };

	const onShare = async (e) => {
		e.preventDefault();
		await WorryAPI.updateMyWorry(e.target.id);
		console.log("button id: ", e.target);
		setRedirectLink({ redirect: "/SharedWorry" });
	};

	return (
		<div>
			<li className={styles.card}>
				<form>
					<h3 className={styles.city}>{city}</h3>
					<p className={styles.body}>{body}</p>
					<div className={styles.buttons}>
						{redirectLink.redirect ? (
							<Redirect to={redirectLink.redirect} />
						) : (
							<button id={_id} onClick={onShare} className={styles.button}>
								Share My Worry
							</button>
						)}

						<button onClick={onSubmit} className={styles.button}>
							Feed Worry to Monster
						</button>
					</div>
				</form>
			</li>
		</div>
	);
};

export default Card;
