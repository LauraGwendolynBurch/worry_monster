// import styles from "../components/Preview/Preview.module.css";
import React, { useEffect, useState } from "react";
import WorryAPI from "../../utils/WorryApi";
import SharedCard from "../../components/SharedCard";
import SearchForm from "../../components/SearchForm/SearchForm";
import HeaderContainer from "../../components/HeaderContainer";
import styles from "./SharedWorry.module.css";

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
		<div>
			<HeaderContainer />
			<section className={styles.worrypage}>
				<div className={styles.container}>
					<div className="cardsdfsdfsd">
						<div className="info">
							<h2 className={styles.title}>
								{" "}
								Here you will find all the worries shared in our community.
								<br />
								You can even search by city to see what collective woes you may
								have in common with your neighbors. The Worry Monster hopes
								seeing this might make you feel a little lighter.{" "}
							</h2>
						</div>
					</div>
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
		</div>
	);
}
export default SharedWorry;
