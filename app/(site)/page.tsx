import 'app/globals.css';
import { getHome } from '../lib/api/getHome';
import QuickLinksLayout from './home/QuickLinksLayout';
import HomeBanner from './home/homeBanner';
import MapContactCard from './components/HomePage/mapContactCard';
import { generateDate } from './components/Calendar/calendar';
import CalendarUI from './components/Calendar/CalendarUI';

const HomePage = async () => {
	// TODO - Remove log and import
	console.log(generateDate());

	// --------------FETCH FUNCTIONS --------------//
	const home = await getHome();

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

				<div className='container my-12 p-12 mx-auto mb-0 px-4 md:px-6 lg:px-12'>
					{/* MAP  & CONTACT */}
					<MapContactCard />
				</div>
				{/* ANOUNCMENTS OR CALENDAR SECTION?  */}
				<div className='p-8'>
					<CalendarUI />
				</div>
			</div>
		</div>
	);
};

export default HomePage;
