import { getAbout } from '@/app/lib/api/getAbout';
import { fallbackImages, placeholders } from '../../utilities/fallbackAssets';
import { RiDoubleQuotesR } from 'react-icons/ri';
import urlFor from '@/sanity/lib/urlFor';

const AboutBanner = async () => {
	const about = await getAbout();

	const aboutBannerUrl = about.bannerImage
		? urlFor(about.bannerImage)
		: fallbackImages.about.primaryImageFallback;

	return (
		<>
			<section
				className='hero h-[44vh] relative'
				style={{ backgroundImage: `url(${aboutBannerUrl})` }}>
				<div className='hero-overlay bg-opacity-60 border-b-[1px] border-primary absolute inset-0'></div>
				<div className='hero-content absolute bottom-10 right-28 text-neutral-content'>
					<div className='max-w-md'>
						<div className='text-xl font-bold font-heading leading-snug text-left'>
							<blockquote className='text-xl italic font-semibold text-primary opacity-70 font-heading'>
								<div className='pb-2 -ml-3'>
									<RiDoubleQuotesR />
								</div>
								<p className='drop-shadow-2xl'>
									{about?.bannerVerse ||
										placeholders.worship.bannerVerseFallback}
								</p>
								<p className='text-right pr-9'>
									--{' '}
									{about?.bannerVerseAttribution ||
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

export default AboutBanner;
