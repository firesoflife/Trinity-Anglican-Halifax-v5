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
			</main>
		</div>
	);
}
