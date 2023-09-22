import AboutBanner from '../components/About/AboutBanner';
import AboutContent from '../components/About/AboutContent';
import AboutQuote from '../components/About/AboutQuote';
import LocationMap from '../components/About/LocationMap';
import StaffHeader from './staff/StaffHeader';
import StaffPage from './staff/StaffPage';

const aboutPage = async () => {
	return (
		<div className=' bg-secondary'>
			<AboutBanner />
			<AboutContent />
			<AboutQuote />
			<StaffHeader />
			<StaffPage />
			<LocationMap />
		</div>
	);
};

export default aboutPage;
