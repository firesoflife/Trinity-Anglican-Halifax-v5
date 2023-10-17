import CalendarLarge from '../components/Calendar/CalendarLarge';
import EventsBanner from '../components/Events/EventsBanner';
import { Metadata } from 'next';

export const metadata: Metadata = {
	title: 'Parish Events at Trinity Anglican Church, Halifax',
	description:
		'Explore our Parish Events for a lively mix of recurring and one-off community gatherings. Join us in celebration and fellowship at Trinity Anglican, Halifax.',
};

type LayoutProps = {
	children: React.ReactNode;
};

export default function Layout({ children }: LayoutProps) {
	return (
		<div className='bg-primary text-secondary pb-10'>
			<main>
				<EventsBanner />
				{children}
				<CalendarLarge />
			</main>
		</div>
	);
}
