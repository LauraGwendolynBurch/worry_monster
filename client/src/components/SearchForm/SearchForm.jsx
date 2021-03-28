import React from "react";
import styles from "./SearchForm.module.css";

const SearchForm = (props) => {
	return (
		<div>
			<div className={styles.container}>
				<form className={styles.form}>
					<input
						type="text"
						className={styles.input}
						onChange={props.handleInputChange}
						value={props.searchState}
						placeholder="Type in city here"
					/>
					{/* <button className={styles.btn}>search button</button> */}
				</form>
			</div>
		</div>
	);
};

export default SearchForm;
