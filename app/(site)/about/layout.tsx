import { Metadata } from 'next';

type LayoutProps = {
	children: React.ReactNode;
};

export const metadata: Metadata = {
	title:
		'Trinity Anglican Church - A Historic Spiritual Community in Halifax, Nova Scotia',
	description:
		'Discover the rich history and warm community at Trinity Anglican Church in Halifax, Nova Scotia. Our welcoming congregation invites you to join us for worship, community outreach, and to explore our heritage. Experience spiritual growth and fellowship in our iconic, historic setting. Visit us to find your place in our church family and to learn more about our service times, upcoming events, and the storied history of our beautiful church',
};

export default function Layout({ children }: LayoutProps) {
	return (
		<>
			<main>{children}</main>
		</>
	);
}
