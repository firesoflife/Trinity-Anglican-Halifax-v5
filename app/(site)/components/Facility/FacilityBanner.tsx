import { getFacility } from '@/app/lib/api/getFacility';
import { fallbackImages, placeholders } from '../../utilities/fallbackAssets';
import urlFor from '@/sanity/lib/urlFor';
import { RiDoubleQuotesR } from 'react-icons/ri';

const FacilityBanner = async () => {
	const facility = await getFacility();

	// Banner Image
	const facilityBannerUrl = facility?.bannerImage
		? urlFor(facility?.bannerImage)
		: fallbackImages.facility.pageBannerImageFallback;

	return (
		<>
			<section
				className='hero h-[44vh] relative'
				style={{ backgroundImage: `url(${facilityBannerUrl})` }}>
				<div className='hero-overlay bg-opacity-60 border-b-[1px] border-primary absolute inset-0'></div>
				<div className='hero-content absolute bottom-10 right-28 text-neutral-content'>
					<div className='max-w-md'>
						<div className='text-xl font-bold font-heading leading-snug text-left'>
							<blockquote className='text-xl italic font-semibold text-primary opacity-70 font-heading'>
								<div className='pb-2 -ml-3'>
									<RiDoubleQuotesR />
								</div>
								<p className='drop-shadow-2xl'>
									{facility?.bannerVerse ||
										placeholders.facility.bannerVerseFallback}
								</p>
								<p className='text-right pr-9'>
									--{' '}
									{facility?.bannerVerseAttribution ||
										placeholders.facility.bannerVerseAttFallback}
								</p>
							</blockquote>
						</div>
					</div>
				</div>
			</section>
		</>
	);
};

export default FacilityBanner;
