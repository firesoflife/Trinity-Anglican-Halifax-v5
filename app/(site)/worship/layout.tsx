import { Metadata } from 'next';

type LayoutProps = {
	children: React.ReactNode;
};

export const metadata: Metadata = {
	title: 'Worship at Trinity Anglican Church, Halifax',
	description:
		'Explore traditional Anglican worship in Halifax. Find service schedules, special events, and sermon resources to enrich your spiritual journey at Trinity.',
};

export default function Layout({ children }: LayoutProps) {
	return (
		<>
			<main>{children}</main>
		</>
	);
}
