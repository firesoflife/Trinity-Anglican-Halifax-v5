import { getBlogPage } from '@/app/lib/api/getBlogPage';
import urlFor from '@/sanity/lib/urlFor';
import { fallbackImages, placeholders } from '../../utilities/fallbackAssets';
import { RiDoubleQuotesR } from 'react-icons/ri';

const blogBanner = async () => {
	const blog = await getBlogPage();

	////////////// BANNER IMAGE //////////////
	const blogBannerUrl = blog?.bannerImage
		? urlFor(blog?.bannerImage)
		: fallbackImages.blog.bannerImageFallback;

	return (
		<>
			<section
				className='hero h-[44vh] relative'
				style={{ backgroundImage: `url(${blogBannerUrl})` }}>
				<div className='hero-overlay bg-opacity-60 border-b-[1px] border-primary absolute inset-0'></div>
				<div className='hero-content absolute top-10 left-28 text-neutral-content'>
					<div className='max-w-md'>
						<div className='text-xl font-bold font-heading leading-snug text-left'>
							<blockquote className='text-xl italic font-semibold text-primary opacity-60 font-heading'>
								<div className='pb-2 -ml-3'>
									<RiDoubleQuotesR />
								</div>
								<p className='drop-shadow-2xl'>
									{blog?.bannerVerse || placeholders.blog.bannerVerseFallback}
								</p>
								<p className='text-right pr-9'>
									--{' '}
									{blog?.bannerVerseAttribution ||
										placeholders.blog.bannerVerseAttFallback}
								</p>
							</blockquote>
						</div>
					</div>
				</div>
			</section>
		</>
	);
};

export default blogBanner;
