import styles from "../components/Preview/Preview.module.css";

import React, { useEffect, useState } from "react";
import WorryAPI from "../utils/WorryApi";
import SharedCard from "../components/SharedCard";

function SharedWorry() {
  const [cards, setCards] = useState({});
  // const [cardFormObject, setFormObject] = useState({
  // 	city: "",
  // 	body: "",

  // });

  useEffect(() => {
    // getting all my worry from database
    loadAllWorry();
  }, []);

  const loadAllWorry = () => {
    WorryAPI.getAllWorry()
      .then((res) => setCards(res.data))

      .catch((err) => console.log(err));
  };

  return (
    <section className={styles.worrypage}>
      <div className={styles.container}>
        {cards.length > 0 && cards.map((card) => {
          return( <SharedCard city={card.city} body={card.body} />)
        })}
      </div>
    </section>
  );
}
export default SharedWorry;
