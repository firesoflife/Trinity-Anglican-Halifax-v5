import { fallbackImages, placeholders } from '../../utilities/fallbackAssets';
import urlFor from '@/sanity/lib/urlFor';
import { RiDoubleQuotesR } from 'react-icons/ri';
import { getCovenant } from '@/app/lib/api/getCovenant';

const CovenantBanner = async () => {
	const covenant = await getCovenant();
	// Banner Image
	const covenantBannerUrl = covenant?.covenantBannerImage
		? urlFor(covenant?.covenantBannerImage)
		: fallbackImages.facility.pageBannerImageFallback;
	return (
		<>
			<section
				className='hero h-[44vh] relative'
				style={{ backgroundImage: `url(${covenantBannerUrl})` }}>
				<div className='hero-overlay bg-opacity-60 border-b-[1px] border-primary absolute inset-0'></div>
				<div className='hero-content absolute bottom-10 right-28 text-neutral-content'>
					<div className='max-w-md'>
						<div className='text-xl font-bold font-heading leading-snug text-left'>
							<blockquote className='text-xl italic font-semibold text-primary opacity-70 font-heading'>
								<div className='pb-2 -ml-3'>
									<RiDoubleQuotesR />
								</div>
								<p className='drop-shadow-2xl'>
									{covenant?.bannerVerse ||
										placeholders.facility.bannerVerseFallback}
								</p>
								<p className='text-right pr-9'>
									--{' '}
									{covenant?.bannerVerseAttribution ||
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

export default CovenantBanner;
