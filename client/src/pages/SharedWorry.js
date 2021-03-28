import styles from "../components/Preview/Preview.module.css";
import React, { useEffect, useState } from "react";
import WorryAPI from "../utils/WorryApi";
import SharedCard from "../components/SharedCard";
import SearchForm from "../components/SearchForm/SearchForm";
import HeaderContainer from "../components/HeaderContainer";

function SharedWorry() {
	const [cards, setCards] = useState({});
	const [searchCards, setSearchCards] = useState([]);
	const [originalArry, setOriginalArry] = useState([]);
	const [searchState, setSearchState] = useState("");

	useEffect(() => {
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
		const newCardsArry = originalArry.filter((card) => {
			return card.city.toLowerCase().includes(value.toLowerCase());
		});
		setSearchCards(newCardsArry);
	};

	return (
		<section className={styles.worrypage}>
			<HeaderContainer />
			<div className="card">
				<div className="info">
					<h2 className="city"> Weelcome to Worry Monster</h2>
					<p className=" body"> instructions</p>
				</div>
			</div>
			<div className={styles.container}>
				<SearchForm
					handleInputChange={handleInputChange}
					searchState={searchState}
				/>
				{searchCards.length > 0 &&
					searchCards.map((card, i) => {
						return <SharedCard key={i} city={card.city} body={card.body} />;
					})}
			</div>
		</section>
	);
}
export default SharedWorry;
