import React from 'react';
import WhatToExpect from '../components/Worship/WhatToExpect';
import Schedule from '../components/Worship/Schedule';
import Sermons from '../components/Worship/Sermons';
import WorshipBanner from '../components/Worship/WorshipBanner';

export const revalidate = 10;

function page() {
	return (
		<>
			<WorshipBanner />
			<div className='container mx-auto px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12 2xl:px-14'>
				<WhatToExpect />
				<Schedule />
				<Sermons />
			</div>
		</>
	);
}

export default page;
