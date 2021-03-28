import styles from "../components/Preview/Preview.module.css";

import React, { useEffect, useState } from "react";
import WorryAPI from "../utils/WorryApi";
import SharedCard from "../components/SharedCard";
import SearchForm from "../components/SearchForm/SearchForm";

function SharedWorry() {
	const [cards, setCards] = useState({});
	const [searchCards, setSearchCards] = useState([]);
	const [originalArry, setOriginalArry] = useState([]);
	const [searchState, setSearchState] = useState("");

	useEffect(() => {
		// getting all my worry from database
		loadAllWorry();
	}, []);

	const loadAllWorry = () => {
		WorryAPI.getAllWorry()
			.then((res) => {
				console.log(res.data);
				setCards(res.data);
				setSearchCards(res.data);
				setOriginalArry(res.data);
			})

			.catch((err) => console.log(err));
	};

	const handleInputChange = (event) => {
		const { value } = event.target;
		setSearchState(value);
		// console.log(value, "value");
		const newCardsArry = originalArry.filter((card) => {
			return card.city.toLowerCase().includes(value.toLowerCase());
		});
		setSearchCards(newCardsArry);
	};

	return (
		<section className={styles.worrypage}>
			<div className={styles.container}>
				<SearchForm
					handleInputChange={handleInputChange}
					searchState={searchState}
				/>
				{searchCards.length > 0 &&
					searchCards.map((card, i) => {
						return (
							<SharedCard
								// cards={cards}
								key={i}
								city={card.city}
								body={card.body}
							/>
						);
					})}
				{/* {Object.keys(cards)} */}
			</div>
		</section>
	);
}
export default SharedWorry;
