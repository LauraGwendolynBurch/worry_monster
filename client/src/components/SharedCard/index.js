import React, { useLayoutEffect } from "react";

import "./style.css";

function SharedCard(props) {
	return (
		<div className="card">
			<div className="info">
				<h2 className="city">{props.city}</h2>
				<p className="body">{props.body}</p>
			</div>
		</div>
	);
}

export default SharedCard;
