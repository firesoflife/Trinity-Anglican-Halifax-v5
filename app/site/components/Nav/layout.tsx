import MobileNavbar from './mobileNavbar';
import Navbar from './navbar';

const NavLayout = () => {
	return (
		<nav className='navbar bg-primary text-secondary px-8'>
			<div className='navbar-start'>TITLE</div>
			<div className='hidden lg:flex navbar-end'>
				<Navbar />
			</div>
			<div className='lg:hidden navbar-end'>
				<MobileNavbar />
			</div>
		</nav>
	);
};

export default NavLayout;
