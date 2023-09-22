import { PortableText } from '@portabletext/react';
import { RichTextComponents } from '../../utilities/RichTextComponents';
import AboutHeader from '../../about/AboutUs';
import { getAbout } from '@/app/lib/api/getAbout';

const AboutContent = async () => {
	const about = await getAbout();
	return (
		<div>
			<section className='bg-primary shadow-lg rounded-lg overflow-hidden py-12 px-4 md:px-40'>
				<AboutHeader />
				<div className='text-secondary prose max-w-none lg:columns-2 gap-20 px-4 md:px-7 lg:px-16 font-subContent mb-3 first-line:uppercase first-line:tracking-widest first-letter:text-7xl first-letter:font-subheading first-letter:text-secondary first-letter:mr-3 first-letter:float-left'>
					<PortableText value={about.body} components={RichTextComponents} />
				</div>
			</section>
		</div>
	);
};

export default AboutContent;
