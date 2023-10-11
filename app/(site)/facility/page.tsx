import { getFacility } from '@/app/lib/api/getFacility';
import FacilityHeader from '../components/Facility/FacilityHeader';
import FacilityBanner from '../components/Facility/FacilityBanner';

const FacilityRental = async () => {
	const facility = await getFacility();
	return (
		<div className='h-auto mt-2 bg-primary'>
			<FacilityBanner />
			<FacilityHeader />
			<div className=''>
				{/* Gallery of images */}
				<div className='hero h- bg-primary'>
					<div className='hero-content bg-secondary w-8/12 h-1/4 text-center'>
						<div className='max-w-md'>
							<h1 className='text-5xl font-bold'>Hello there</h1>
							<p className='py-6'>
								Provident cupiditate voluptatem et in. Quaerat fugiat ut
								assumenda excepturi exercitationem quasi. In deleniti eaque aut
								repudiandae et a id nisi.
							</p>
							<button className='btn btn-primary'>Get Started</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default FacilityRental;
