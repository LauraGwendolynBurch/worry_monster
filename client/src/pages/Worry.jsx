import React, { useState } from "react";
import styles from "./Worry.module.css";
import HeaderContainer from "../components/HeaderContainer";
import Editor from "../components/Editor/Editor";
import Preview from "../components/Preview/Preview";

const Worry = (props) => {
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

	return (
		<section className={styles.worrypage}>
			<HeaderContainer />
			<div className={styles.container}>
				<Editor />
				<Preview />
			</div>
			<h1>sdflkdjfsdkf</h1>
		</section>
	);
};

export default Worry;
