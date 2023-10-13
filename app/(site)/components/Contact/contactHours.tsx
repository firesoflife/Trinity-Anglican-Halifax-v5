import { getContact } from '@/app/lib/api/getContact';
import { getRegularServices } from '@/app/lib/api/getServices';
import React from 'react';
import { LiaCrossSolid } from 'react-icons/lia';

const MapContactCard = async () => {
	const services = await getRegularServices();
	const contactInfo = await getContact();
	return (
		<>
			<section className='text-secondary bg-primary'>
				<div className='flex flex-wrap justify-center'>
					<div className='flex-initial w-'>
						<div className='bg-secondary h-full rounded-lg p-6 lg:pl-12 text-white flex xl:flex-row flex-col items-center justify-around py-12 lg:py-0" style="z-index: -10"'>
							<div className='lg:p1-12'>
								<h3 className='text-xl font-mainContent2 mb-3'>
									{contactInfo?.pageTitle || 'Contact Us'}
								</h3>
								<h5 className='text-base font-semibold mb-1'>Address:</h5>
								<p className='mb-3'>
									321 Main Ave, st <br /> Halifax, NS
								</p>
								<h5 className='text-base font-semibold mb-1'>Email us:</h5>
								<p className='mb-2'>
									{contactInfo?.email || 'oh oh. Nothing here yet.'}
								</p>
								<h5 className='text-base font-semibold mb-1'>Phone:</h5>
								<p>{contactInfo?.phone || 'no number'}</p>
							</div>
							<div className='divider lg:divider-horizontal justify-center'>
								<LiaCrossSolid size={75} />
							</div>
							<div className='lg:p1-12'>
								<h3 className='text-2xl mb-3 text-center font-mainContent2'>
									{contactInfo?.hoursTitle || 'Regular Services'}
								</h3>
								<div className='grid flex-1 card bg-white rounded-box text-primary bg-opacity-20 p-4 pl-4'>
									{contactInfo.days.length > 0 ? (
										contactInfo.days.map((dayInfo, index) => {
											// Function to add leading zero to hour if necessary
											const formatHour = (time: string) => {
												const [hour, minute] = time.split(':');
												return `${hour.padStart(2, '0')}:${minute}`;
											};

											// Convert 24-hour format time to 12-hour format (AM/PM)
											const fromTime = new Date(
												`1970-01-01T${formatHour(dayInfo.from)}:00`
											);
											const toTime = new Date(
												`1970-01-01T${formatHour(dayInfo.to)}:00`
											);
											const fromTime12Hour = fromTime.toLocaleTimeString(
												'en-US',
												{ hour: 'numeric', minute: 'numeric', hour12: true }
											);
											const toTime12Hour = toTime.toLocaleTimeString('en-US', {
												hour: 'numeric',
												minute: 'numeric',
												hour12: true,
											});

											return (
												<div key={index} className='mb-2 min-w-fit '>
													<p className='font-subheading text-2xl flex justify-between'>
														{dayInfo.day.charAt(0).toUpperCase() +
															dayInfo.day.slice(1)}{' '}
														<span className='pl-4'>
															{dayInfo.from && dayInfo.to
																? `${fromTime12Hour} - ${toTime12Hour}`
																: 'Away'}
														</span>
													</p>
												</div>
											);
										})
									) : (
										<p>Closed</p>
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
