import { fallbackImages, placeholders } from '../../utilities/fallbackAssets';
import { getParish } from '@/app/lib/api/getParish';
import { RiDoubleQuotesR } from 'react-icons/ri';
import urlFor from '@/sanity/lib/urlFor';

const EventsBanner = async () => {
	const parish = await getParish();

	// Banner Image

	const bannerImageUrl = parish.bannerImage
		? urlFor(parish.bannerImage)
		: fallbackImages.parishEvents.pageBannerImageFallback;

	return (
		<>
			<section
				className='hero h-[44vh] relative'
				style={{ backgroundImage: `url(${bannerImageUrl})` }}>
				<div className='hero-overlay bg-opacity-60 border-b-[1px] border-primary absolute inset-0'></div>
				<div className='hero-content absolute bottom-10 right-28 text-neutral-content'>
					<div className='max-w-md'>
						<div className='text-xl font-bold font-heading leading-snug text-left'>
							<blockquote className='text-xl italic font-semibold text-primary opacity-60 font-heading'>
								<div className='pb-2 -ml-3'>
									<RiDoubleQuotesR />
								</div>
								<p className='drop-shadow-2xl'>
									{parish?.bannerVerse ||
										placeholders.worship.bannerVerseFallback}
								</p>
								<p className='text-right pr-9'>
									--{' '}
									{parish?.bannerVerseAttribution ||
										placeholders.worship.bannerVerseAttFallback}
								</p>
							</blockquote>
						</div>
					</div>
				</div>
			</section>
		</>
	);
};

export default EventsBanner;
