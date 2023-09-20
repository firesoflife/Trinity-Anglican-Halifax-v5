import { getAbout } from '@/app/lib/api/getAbout';
import { PortableText } from '@portabletext/react';
import { RichTextComponents } from '../utilities/RichTextComponents';
import AboutBanner from '../components/About/AboutBanner';
import AboutHeader from './AboutUs';

const aboutPage = async () => {
	const about = await getAbout();

	return (
		<div className=' bg-secondary'>
			<AboutBanner />
			<section className='bg-primary shadow-lg rounded-lg overflow-hidden py-12 px-4 md:px-40'>
				<AboutHeader />
				<div className='text-secondary prose max-w-none lg:columns-2 gap-20 px-4 md:px-7 lg:px-16 font-subContent mb-3 first-line:uppercase first-line:tracking-widest first-letter:text-7xl first-letter:font-subheading first-letter:text-secondary first-letter:mr-3 first-letter:float-left'>
					<PortableText value={about.body} components={RichTextComponents} />
				</div>
			</section>

			<div className='md:w-6/12 mx-auto py-20 bg-primary shadow-lg rounded-lg overflow-hidden my-24'>
				<blockquote className='text-xl italic font-semibold text-secondary font-heading dark:text-white p-4'>
					<svg
						className='w-8 h-8 text-secondary dark:text-gray-600'
						aria-hidden='true'
						xmlns='http://www.w3.org/2000/svg'
						fill='currentColor'
						viewBox='0 0 18 14'>
						<path d='M6 0H2a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3H2a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Zm10 0h-4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3h-1a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Z' />
					</svg>
					<p>
						"Lorem ipsum dolor sit amet, consectetur adipisicing elit.
						Consectetur nulla incidunt, illo ab quibusdam illum sequi non porro,
						veniam distinctio sapiente repellendus dolore? Pariatur dignissimos
						harum ullam."
					</p>
				</blockquote>
			</div>
		</div>
	);
};

export default aboutPage;
