import { client } from '@/sanity/lib/client';
import { SanityImageSource } from '@sanity/image-url/lib/types/types';
import ImageUrlBuilder from '@sanity/image-url';
import 'app/globals.css';
import { fallbackImages } from './utilities/fallbackAssets';
import { getHome } from '../lib/api/getHome';
import QuickLinksLayout from './home/QuickLinksLayout';
import { getRegularServices } from '../lib/api/getServices';
import HomeBanner from './home/homeBanner';

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
					<QuickLinksLayout />
				</section>

				<div className='container my-12 py-12 mx-auto px-4 md:px-6 lg:px-12'>
					{/* MAP  & CONTACT */}
					<section className='mb-20 text-primary'>
						<div className='flex flex-wrap justify-center'>
							<div className='flex-initial shrink w-full xl:w-5/12 lg:w-6/12'>
								<div className='lg:py-12 lg:p1-6 lg:mb-0'>
									<iframe
										src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2838.3246822237566!2d-63.65569362282576!3d44.65171768727925!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4b5a22e1aff62109%3A0x166b256a3da440ec!2sTrinity%20Anglican%20Church%20Halifax%20N.S.!5e0!3m2!1sen!2sus!4v1694565530826!5m2!1sen!2sus'
										loading='lazy'
										className='h-80 w-full border-0 shadow-lg'></iframe>
								</div>
							</div>
							<div className='flex-initial w-full xl:w-7/12 lg:w-6/12 mb-6 md:mb-0 lg:-ml-12'>
								<div className='bg-secondary h-full rounded-lg p-6 lg:pl-12 text-white flex md:flex-row flex-col items-center justify-around py-12 lg:py-0" style="z-index: -10"'>
									<div className='lg:p1-12'>
										<h3 className='text-2xl font-mainContent2'>Contact Us</h3>
										<h5 className='text-xl font-semibold mb-2'>Address:</h5>
										<p className='mb-6'>
											321 Main Ave, st <br /> Halifax, NS
										</p>
										<h5 className='text-xl font-semibold mb-4'>Email us:</h5>
										<p className='mb-6'>filleraddres@trinityanglican.com</p>
										<h5 className='text-xl font-semibold mb-4'>Phone:</h5>
										<p className='mb-6'>(555) 555-5555</p>
									</div>
									{/* TODO - Add icon  */}
									<div className='divider lg:divider-horizontal'>Icon</div>
									<div className='lg:p1-12'>
										<h3 className='text-2xl mb-3 text-center font-mainContent2'>
											Regular Services
										</h3>
										<div className='grid flex-1 card bg-white rounded-box text-primary bg-opacity-20 p-4 pl-14'>
											{services.length > 0 ? (
												services.map((service, index) => (
													<div key={index} className='mb-4'>
														<h2 className='font-subheading text-2xl '>
															{service.title}
														</h2>
														<div className='border border-b border-slate-400 w-64'></div>
														<p>{service.description}</p>
														<p>Start Time: {service.startTime}</p>
														<p>Days: {service.daysOfWeek.join(', ')}</p>
													</div>
												))
											) : (
												<p>No regular services scheduled.</p>
											)}
										</div>
									</div>
								</div>
							</div>
						</div>
					</section>
				</div>
			</div>
		</div>
	);
};

export default HomePage;
