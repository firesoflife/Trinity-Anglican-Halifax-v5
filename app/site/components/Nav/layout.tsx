import MobileNavbar from './mobileNavbar';

const NavLayout = () => {
	return (
		<nav className='navbar bg-primary text-secondary px-12'>
			<div className='navbar-start'>TITLE</div>
			<div className='hidden lg:flex navbar-end'>BIGGIE</div>
			<div className='lg:hidden navbar-end'>
				<MobileNavbar />
			</div>
		</nav>
	);
};

export default NavLayout;
