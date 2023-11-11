import MobileNav from './MobileNav';
import Navbar from './DesktopNavbar';
import { getParishEvents } from '@/app/lib/api/getParishEvents';

export const revalidate = 1;

const NavLayout = async () => {
	const parishEvents = await getParishEvents();
	return (
		<div>
			<MobileNav data={parishEvents} />
			<Navbar />
		</div>
	);
};

export default NavLayout;
