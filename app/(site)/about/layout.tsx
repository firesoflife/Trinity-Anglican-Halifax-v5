import LocationMap from '../components/About/LocationMap';
import StaffHeader from './staff/StaffHeader';
import StaffPage from './staff/StaffPage';

type LayoutProps = {
	children: React.ReactNode;
};

// TODO - alter and configure meta data
export const metadata = {
	title: 'Trinity Anglican Church, Halifax',
	description: 'Generated by create next app',
};

export default function Layout({ children }: LayoutProps) {
	return (
		<>
			<main className='h-full'>
				{children}
				<StaffHeader />
				<StaffPage />
				<LocationMap />
			</main>
		</>
	);
}
