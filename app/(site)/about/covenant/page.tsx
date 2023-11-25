import React from 'react';
import CovenantBanner from './CovenantBanner';
import CovenantHeader from './CovenantHeader';

const Covenant = async () => {
	return (
		<div className='h-screen bg-secondary'>
			<CovenantBanner />
			<CovenantHeader />
		</div>
	);
};

export default Covenant;
