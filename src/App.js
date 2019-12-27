/* eslint-disable jsx-a11y/accessible-emoji */
import React from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';

import Home from './pages/home/home.component';
import Wallet from './components/wallet/wallet.component';
import Page from './components/omni-pages/page.component';
import Farm from './components/farm/farm.component';
import WhiteBoard from './components/whiiteboard/whiteboard.component';
import People from './components/people/people.component';
import Party from './components/party/party.component';
import './App.css';

function WelcomePage() {
	return (
		<div className='welcome'>
			<h3>
				<span>&#10024;</span>Omni Paradise<span>&#10024;</span>
			</h3>
			<p>--We are Omni--</p>
			<input
				style={{ marginBottom: '10px' }}
				type='email'
				placeholder='Email..'
			></input>
			<input type='password' placeholder='Password..'></input>
			<Link to='/home'>
				<button className='button'>Enter Omni</button>
			</Link>
		</div>
	);
}

function App() {
	return (
		<Router basename={process.env.PUBLIC_URL}>
			<Switch>
				<Route exact path='/' component={WelcomePage}></Route>
				<Route exact path='/home' component={Home}></Route>
				<Route path='/home/wallet' component={Wallet}></Route>
				<Route path='/home/page' component={Page}></Route>
				<Route path='/home/farm' component={Farm}></Route>
				<Route path='/home/whiteboard' component={WhiteBoard}></Route>
				<Route path='/home/people' component={People}></Route>
				<Route path='/home/party' component={Party}></Route>
			</Switch>
		</Router>
	);
}

export default App;
