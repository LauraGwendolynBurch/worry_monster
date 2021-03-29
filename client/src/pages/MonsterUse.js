import React, { useEffect } from "react";
import Canvas from "../components/Canvas";
import Monster from "./Monster";
import MonsterMove from "./MonsterMove";
import UseCanvas from "./UseCanvas";

const MonsterUse = (props) => {
	useEffect(() => {
		new MonsterMove();
	}, []);
	return <Monster/>;
};










export default MonsterUse;