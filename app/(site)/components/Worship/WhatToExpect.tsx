import { getWorship } from '@/app/lib/api/getWorship';
import { fallbackImages } from '../../utilities/fallbackAssets';
import '../../../globals.css';
import { OurValues } from './Values';

import WorshipHeader from './WorshipHeader';

const WhatToExpect = async () => {
	const worship = await getWorship();

	return (
		<>
			{/* TODO - Add in Banner component */}
			<main>
				<div className='pt-8'>
					<WorshipHeader />
				</div>
				<section className='py-8 md:py-16 bg-slate-100 mt-10'>
					<div className='container mx-auto px-4 md:px-8 flex felx-col md:flex-row gap-8 mb-9'>
						<div className='relative flex-1 my-auto'>
							{/* TODO - render conditionally with fallback; use Next Image? */}
							<img
								className='w-full object-cover shadow-2xl'
								src='https://churchos-uploads.s3.amazonaws.com/2020/04/09/09/32/21/9338edd7-2b91-41de-82b5-ab036c2688d3/Trinity_Halifax.png'
								alt='Growing Parishes.'
							/>
						</div>
						<div className='flex flex-1 flex-col justify-start'>
							<span className='text-4xl font-bold block mb-4 font-subheading text-myGrey'>
								{worship.pageTitle}
							</span>
							<p className='text-lg leading-relaxed text-myGrey first-letter:text-7xl first-letter:font-heading'>
								{worship.mainContent}
							</p>
						</div>
					</div>

					<div className='container mx-auto px-4 md:px-8 flex flex-col md:flex-row gap-8'>
						<div className='relative flex-1 flex justify-center items-center'>
							<div className='text-center'>
								<blockquote className='text-xl italic font-semibold text-gray-400 dark:text-white font-heading'>
									<svg
										className='w-4 h-4 text-gray-400 dark:text-gray-600 mb-4'
										aria-hidden='true'
										xmlns='http://www.w3.org/2000/svg'
										fill='currentColor'
										viewBox='0 0 18 14'>
										<path d='M6 0H2a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3H2a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Zm10 0h-4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3h-1a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Z' />
									</svg>
									<p className='drop-shadow-2xl'>
										"But God forbid that I should glory, save in the cross of
										our Lord Jesus Christ, by whom the world is crucified unto
										me, and I unto the world."
									</p>
									<p className='text-right pr-9'>-- Galatians 6:14</p>
								</blockquote>
							</div>
						</div>
						<div className='flex flex-1 flex-col justify-start'>
							{/* **** FAQ STYLE  ****/}
							<OurValues worship={worship} />
						</div>
					</div>
				</section>
			</main>
		</>
	);
};

export default WhatToExpect;
