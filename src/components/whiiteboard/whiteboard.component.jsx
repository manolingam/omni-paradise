import React from 'react';

import './whiteboard.style.css';

let ctx = '';

class Whiteboard extends React.Component {
	constructor() {
		super();
		this.state = {
			painting: false
		};
	}

	startPosition = () => {
		this.setState({ painting: true });
	};

	finishedPosition = () => {
		this.setState({ painting: false });
	};

	draw = e => {
		if (!this.state.painting) return;
		ctx.lineWidth = 5;
		ctx.lineCap = 'round';

		ctx.lineTo(e.clientX, e.clientY);
		ctx.stroke();
		console.log(ctx);
	};

	componentDidMount() {
		const canvas = document.getElementById('canvas');
		ctx = canvas.getContext('2d');

		canvas.height = window.innerHeight;
		canvas.width = window.innerWidth;

		canvas.addEventListener('mousedown', this.startPosition);
		canvas.addEventListener('mouseup', this.finishedPosition);
		canvas.addEventListener('mousemove', this.draw);
	}

	render() {
		return <canvas id='canvas'></canvas>;
	}
}

export default Whiteboard;
