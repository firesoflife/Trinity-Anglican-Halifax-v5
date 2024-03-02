import React from 'react';
import CovenantBanner from './CovenantBanner';
import CovenantHeader from './CovenantHeader';
import { getCovenant } from '@/app/lib/api/getCovenant';
import PdfViewer from '../../components/Covenant/PdfViewer';

export const revalidate = 10;

const Covenant = async () => {
	const covenant = await getCovenant();

	return (
		<div className='h-full pb-40 bg-secondary'>
			<CovenantBanner />
			<CovenantHeader />
			<PdfViewer covenant={covenant} />
		</div>
	);
};

export default Covenant;
