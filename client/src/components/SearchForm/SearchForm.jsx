import React from "react";
import styles from "./SearchForm.module.css";

const SearchForm = (props) => {
	return (
		<div>
			<div className={styles.container}>
				<form className={styles.form}>
					<div className={styles.input}>
						<input
							type="text"
							onChange={props.handleInputChange}
							value={props.searchState}
							placeholder="Type in city here"
						/>
					</div>

					
				</form>
			</div>
		</div>
	);
};

export default SearchForm;
