import { getContact } from '@/app/lib/api/getContact';
import { getRegularServices } from '@/app/lib/api/getServices';
import React from 'react';
import { LiaCrossSolid } from 'react-icons/lia';

const MapContactCard = async () => {
	const services = await getRegularServices();
	const contact = await getContact();

	return (
		<>
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
						<div className='bg-secondary h-full rounded-lg p-6 lg:pl-12 text-white flex xl:flex-row flex-col items-center justify-around py-12 lg:py-0" style="z-index: -10"'>
							<div className='lg:p1-12'>
								<h3 className='text-2xl font-mainContent2'>Contact Us</h3>
								<h5 className='text-xl font-semibold mb-2'>Address:</h5>
								<p className='mb-6'>
									321 Main Ave, st <br /> Halifax, NS
								</p>
								<h5 className='text-xl font-semibold mb-4'>Email us:</h5>
								<p className='mb-6'>{contact.email || 'not available'}</p>
								<h5 className='text-xl font-semibold mb-4'>Phone:</h5>
								<p className='mb-6'>{contact.phone || 'Not Available'}</p>
							</div>
							<div className='divider lg:divider-horizontal justify-center'>
								<LiaCrossSolid size={75} />
							</div>
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
		</>
	);
};

export default MapContactCard;
