import React, { useEffect } from "react";
import Canvas from "../components/Canvas";
import Monster from "./Monster";
import { MonsterMove } from "./MonsterMove";

const MonsterUse = (props) => {
	useEffect(() => {
		new MonsterMove();
	}, []);
	return <Monster/>;
};
export default MonsterUse;