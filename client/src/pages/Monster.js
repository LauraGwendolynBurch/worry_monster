import React from "react";
import "./Monster.css";




const Monster = (props) => {
	return ( 
	
	<canvas className="monster" id="monster"hidden={true} ></canvas>
 ) ;
};

// class MonsterUse extends React.Component {
// 	constructor(props) {
// 		this.monster.handleMonsterClick = this.handleMonsterClick.bind(this);
// 		this.state = {startMonsterGif: false};
// 	}

// 	handleMonsterClick() {
// 		this.setState({startMonsterGif: true});
// 	}

// 	render() {
// 		const startMosnterGif = this.state.startMonsterGif;
// 		let button;
// 		if (startMosnterGif) {
// 			button = <Card_button onClick={this.handleMonsterClick} />;
// 		}
// 	}
// }

	





export default Monster;
