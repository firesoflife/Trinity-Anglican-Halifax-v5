import React from 'react';

const loading = () => {
	return (
		<div className='flex w-full h-[100vh] justify-center items-center'>
			<span className='loading loading-infinity loading-lg'></span>
			<p> LOADING ...</p>
		</div>
	);
};

export default loading;
