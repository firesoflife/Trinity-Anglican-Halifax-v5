import React from 'react';

const NavLayout = () => {
	return (
		<nav className='navbar bg-primary text-secondary'>
			<div className='hidden lg:block'>BIG SCREEN</div>
			<div className='lg:hidden'>SMALL SCREEN</div>
		</nav>
	);
};

export default NavLayout;
