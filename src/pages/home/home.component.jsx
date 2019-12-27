import React from 'react';
import { Link } from 'react-router-dom';

import './home.style.css';

const Home = () => {
	return (
		<div className='Home'>
			<div className='omni-wallet'>
				<Link to='/home/wallet'>
					<div className='inner-container'>
						<h3>Omni Wallet</h3>
						<p>A wallet for all your needs!</p>
						{/* <a href='https://www.omni.fyi/'>Visit</a> */}
					</div>
				</Link>
			</div>
			<div className='omni-pages'>
				<Link to='/home/page'>
					<div className='inner-container'>
						<h3>Omni Pages</h3>
						<p>Your own this!</p>
					</div>
				</Link>
			</div>
			<div className='omni-whiteboard'>
				<Link to='/home/whiteboard'>
					<div className='inner-container'>
						<h3>Omni WhiteBoard</h3>
						<p>Write something!</p>
					</div>
				</Link>
			</div>
			<div className='omni-farm'>
				<Link to='/home/farm'>
					<div className='inner-container'>
						<h3>Omni Farm</h3>
						<p>Your own virtual farm!</p>
					</div>
				</Link>
			</div>
			<div className='omni-people'>
				<Link to='/home/people'>
					<div className='inner-container'>
						<h3>Omni People</h3>
						<p>People of your choice!</p>
					</div>
				</Link>
			</div>
			<div className='omni-party'>
				<Link to='/home/party'>
					<div className='inner-container'>
						<h3>Omni Party</h3>
						<p>It's party time!</p>
					</div>
				</Link>
			</div>
		</div>
	);
};

export default Home;
