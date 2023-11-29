import React from 'react';
import CovenantBanner from './CovenantBanner';
import CovenantHeader from './CovenantHeader';
import { getCovenant } from '@/app/lib/api/getCovenant';

const Covenant = async () => {
	const covenant = await getCovenant();

	return (
		<div className='h-full pb-40 bg-secondary'>
			<CovenantBanner />
			<CovenantHeader />
			{/* <div className='w-10/12 mx-auto'>
				{covenant.covenantFileUrl ? (
					<iframe
						src={covenant.covenantFileUrl}
						width='100%'
						height='600px'
						style={{ border: 'none' }}
						title='PDF Viewer'></iframe>
				) : (
					<p>Loading...</p>
				)}
			</div> */}

			<div className='w-10/12 mx-auto h-full'>
				{covenant.covenantFileUrl ? (
					<embed src={covenant.covenantFileUrl} width='100%' height='1000px' />
				) : (
					<p>Loading...</p>
				)}
			</div>
		</div>
	);
};

export default Covenant;
