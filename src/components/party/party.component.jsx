import React from 'react';
import under_progress from '../../assets/under_progress.png';

const Party = () => {
	return (
		<div
			style={{
				height: '100vh',
				display: 'flex',
				alignItems: 'center',
				justifyContent: 'center'
			}}
		>
			<img src={under_progress} alt='' />
		</div>
	);
};

export default Party;
