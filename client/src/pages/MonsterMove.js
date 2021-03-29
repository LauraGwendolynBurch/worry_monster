import monsterImage from "../images/monster-NBG.gif";

export class MonsterMove {
	monster = {
		// Variables to determine location on canvas
		x: 0,
		y: 180, //down
		//The tilesheet image, its size, and the number of columns it has
		IMAGE: { monsterImage },
		SIZE: 360,
		COLUMNS: 1,
		//The numbers of the animation frames and the starting frame
		numberOfFrames: 1,
		currentFrame: 0,
		//Properties of the animation frames's x and
		//y positions on the tile sheet.
		//They're 0 when this object first loads
		sourceX: 0,
		sourceY: 0,
		//A variable to control the direction of the loop
		forward: true,
		//The monster's updateAnimation method
		updateAnimation: function () {
			this.sourceX = Math.floor(this.currentFrame % this.COLUMNS) * this.SIZE;
			this.sourceY = Math.floor(this.currentFrame / this.COLUMNS) * this.SIZE;
			//If the last frame has been reached, set forward to false
			if (this.currentFrame === this.numberOfFrames) {
				this.forward = false;
			}
			//If the first frame has been reached, set forward to true
			if (this.currentFrame === 0) {
				this.forward = true;
			}
			//Add 1 to currentFrame if forward is true, subtract 1 if it's false
			if (this.forward) {
				this.currentFrame++;
			} else {
				this.currentFrame--;
			}
		},
	};

	render() {
		//call
		//define: drawingSurface, canvas, image
		let drawingSurface = ["monsterImage"];
		let canvas = [this.monster];
		let image = ["monsterImage"];

		//Clear the canvas of any previous frames
		drawingSurface.clearRect(0, 0, canvas.width, canvas.height);
		//Draw the monster's current animation frame
		drawingSurface.drawImage(
			image,
			this.monster.sourceX,
			this.monster.sourceY,
			this.monster.SIZE,
			this.monster.SIZE,
			Math.floor(this.monster.x),
			Math.floor(this.monster.y),
			this.monster.SIZE,
			this.monster.SIZE
		);
	}

	animate() {
		var setTimeoutVar = setTimeout(
			//Set a timer to call updateAnimation every 33 milliseconds - approx. 30FPS
			(setTimeoutVar = setTimeout(this.animate, 33))
		);
		//Update the monster's animation frames
		this.animate();
		console.log(setTimeoutVar);
		//Update the X position of the monster
		if (this.monster.x + this.monster.SIZE > this.monster.width) {
			this.monster.x = this.monster.width - this.monster.SIZE;
		} else {
			this.monster.x = this.monster.x + 1;
		}
		//Render the animation
		this.render();
	}
}

export default MonsterMove;
