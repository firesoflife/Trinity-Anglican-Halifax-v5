type LayoutProps = {
	children: React.ReactNode;
};

export const metadata = {
	title: 'Trinity Anglican Church. Worship with Us!',
	description: 'Generated by create next app',
};

export default function Layout({ children }: LayoutProps) {
	return (
		<>
			<main className='h-full'>{children}</main>
		</>
	);
}
