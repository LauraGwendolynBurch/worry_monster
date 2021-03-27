import React, { useState } from "react";
import Button from "../Button/Button";
import styles from "./Card.module.css";
import { Redirect } from "react-router-dom";
import WorryAPI from "../../utils/WorryApi";

const Card = ({ card, deleteCard, onEdit }) => {
	const { city, body, _id } = card;

	const [redirectLink, setRedirectLink] = useState({ redirect: null });

	const onSubmit = (event) => {
		deleteCard(card);
	};

	const onShare = async (e) => {
		e.preventDefault();
		await WorryAPI.updateMyWorry(e.target.id);
		//call api with id await
		// console.log("button id: ", e.target.id)
		setRedirectLink({ redirect: "/SharedWorry" });
	};

	return (
		<div>
			<li className={styles.card}>
				<div className={styles.info}>
					<form>
						<h3 className={styles.city}>{city}</h3>
						<p className={styles.body}>{body}</p>
						<div className={styles.buttons}>
							<div>
								{redirectLink.redirect ? (
									<Redirect to={redirectLink.redirect} />
								) : (
									<button id={_id} onClick={onShare} className={styles.button}>
										Share My Worry
									</button>
								)}
							</div>
							&nbsp;
							<button onClick={onSubmit} className={styles.button}>
								Feed Worry to Monster
							</button>
						</div>
					</form>
				</div>
			</li>
		</div>
	);
};

export default Card;
