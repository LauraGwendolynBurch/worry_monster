import React, { useEffect } from "react";
import { App } from "../utils/moving";
import Canvas from "../components/Canvas";

const UseCanvas = (props) => {
	useEffect(() => {
		new App();
	}, []);
	return <Canvas />;
};
export default UseCanvas;
