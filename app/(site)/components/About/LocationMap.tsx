import LocationHeader from './LocationHeader';
import { LiaCrossSolid } from 'react-icons/lia';
import Link from 'next/link';

const LocationMap = () => {
	return (
		<>
			<LocationHeader />
			<section className='text-primary relative leading-3 mb-8'>
				<div className='container px-5 md:pb-24 mx-auto flex flex-col'>
					<div className='lg:w-full md:w-full rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0 relative z-10 shadow-md bg-primary'>
						<h2 className='text-secondary text-center text-xl mb-1 font-subheading'>
							Come Find Us
						</h2>
						<p className='text-base font-subContent mb-9 text-myGrey text-center lg:w-2/4 mx-auto'>
							Come join us for worship or come and participate in one of our
							many events! Click the map to get directions.
						</p>
						<div className='text-secondary flex flex-col space-y-4'>
							<div className='flex flex-col items-center space-y-3'>
								<Link href='/events'>
									<button className='text-white bg-secondary border-0 py-2 px-6 focus:outline-none hover:bg-secondaryHover rounded text-lg'>
										See Events Pages
									</button>
								</Link>
							</div>
							<div className='divider bg-inherit'>
								<LiaCrossSolid size={75} />
							</div>

							<div className='flex flex-col items-center space-y-3'>
								<Link href='/contact'>
									<button className='text-white bg-secondary border-0 py-2 px-6 focus:outline-none hover:bg-secondaryHover rounded text-lg'>
										Contact Us
									</button>
								</Link>
							</div>
						</div>
					</div>
					<div className='mt-10 h-[30rem] bg-gray-300'>
						<iframe
							src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2838.3246822237566!2d-63.65569362282576!3d44.65171768727925!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4b5a22e1aff62109%3A0x166b256a3da440ec!2sTrinity%20Anglican%20Church%20Halifax%20N.S.!5e0!3m2!1sen!2sus!4v1694565530826!5m2!1sen!2sus'
							loading='lazy'
							width='100%'
							height='100%'
							title='Trinity Anglican Church, Halifax location'
							style={{ border: 0 }}
						/>
					</div>
				</div>
			</section>
		</>
	);
};

export default LocationMap;
