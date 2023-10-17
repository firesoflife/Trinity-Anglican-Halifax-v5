import { getFacility } from '@/app/lib/api/getFacility';
import FacilityHeader from '../components/Facility/FacilityHeader';
import FacilityBanner from '../components/Facility/FacilityBanner';
import FacilityDownloadButton from '../components/Facility/FacilityDownloadButton';

const FacilityRental = async () => {
	const facility = await getFacility();

	return (
		<div className='mt-2 bg-primary text-secondary'>
			<FacilityBanner />
			<FacilityHeader />
			{/* TODO Gallery of images */}
			<div className='flex items-center justify-center min-h-fit pb-32 pt-20 bg-primary text-primary text-center'>
				<div className='w-3/5 bg-secondary p-14 rounded-lg shadow-md space-y-4'>
					<h1 className='text-4xl font-subheading'>
						{facility?.title || 'Rental Info & Download Form'}{' '}
					</h1>
					<h2 className='text-lg w-2/3 m-auto font-mainContent text-gray-400'>
						{facility?.subtitle ||
							'Have an upcoming event an need a place to host? Download the form for rental requests to learn more!'}{' '}
					</h2>
					<p className='text-prose text-center w-2/3 m-auto'>
						{facility?.description ||
							'Need a space to host a large gathering? Look no further! Our church facility offers a spacious, utilitarian venue with ample parking and essential amenities. Perfect for meetings, community events, or simple gatherings. Make your next event hassle-free with us.'}
					</p>
					<p className='text-md font-mainContent '>
						Capacity:{' '}
						<span className='font-mainContent2'>
							{facility?.capacity || '100 persons'}{' '}
						</span>
					</p>

					<FacilityDownloadButton fileUrl={facility?.fileUrl} />
				</div>
			</div>
		</div>
	);
};

export default FacilityRental;
