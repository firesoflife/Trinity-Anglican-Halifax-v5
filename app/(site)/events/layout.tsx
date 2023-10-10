import CalendarLarge from '../components/Calendar/CalendarLarge';
import EventsBanner from '../components/Events/EventsBanner';

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
