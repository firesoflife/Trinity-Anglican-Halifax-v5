// TODO - Refactor into multiple components - remove unnecessary imports
import { client } from '@/sanity/lib/client';
import { SanityImageSource } from '@sanity/image-url/lib/types/types';
import ImageUrlBuilder from '@sanity/image-url';
import 'app/globals.css';
import { fallbackImages } from './utilities/fallbackAssets';
import { getHome } from '../lib/api/getHome';
import QuickLinksLayout from './home/QuickLinksLayout';
import { getRegularServices } from '../lib/api/getServices';
import HomeBanner from './home/homeBanner';
import MapContactCard from './components/HomePage/mapContactCard';

const HomePage = async () => {
	// --------------FETCH FUNCTIONS --------------//
	const home = await getHome();
	const services = await getRegularServices();

	return (
		<div className='font-sans antialiased bg-primary text-gray-900'>
			<div className='bg-primary'>
				<HomeBanner />
				<section className='px-8 py-16 bg-secondary'>
					<h2 className='text-primary text-center text-4xl pb-4 font-subheading'>
						{home.welcomeHeading}
					</h2>
					<div className='max-w-4xl m-auto'>
						<p className='leading-8 text-xl text-primary text-center font-subContent'>
							{home.welcome}
						</p>
					</div>
				</section>
				<section>
					<QuickLinksLayout pastoralCare={home.pastoralCare} />
				</section>

				<div className='container my-12 py-12 mx-auto px-4 md:px-6 lg:px-12'>
					{/* MAP  & CONTACT */}
					<MapContactCard />
				</div>
			</div>
		</div>
	);
};

export default HomePage;
