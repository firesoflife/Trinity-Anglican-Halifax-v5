import React from 'react';
import WhatToExpect from '../components/Worship/WhatToExpect';
import Schedule from '../components/Worship/Schedule';
import Sermons from '../components/Worship/Sermons';

function page() {
	return (
		<div>
			<WhatToExpect />
			<Schedule />
			<Sermons />
		</div>
	);
}

export default page;
