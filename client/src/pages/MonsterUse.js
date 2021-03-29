import React, { useEffect } from "react";

import Monster from "./Monster";
import MonsterMove from "./MonsterMove";

const MonsterUse = (props) => {
	useEffect(() => {
		new MonsterMove();
	}, []);
	return <Monster />;
};

export default MonsterUse;
