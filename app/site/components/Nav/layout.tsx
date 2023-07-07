import MobileNavbar from './mobileNavbar';
import Navbar from './navbar';
import Link from 'next/link';
import Image from 'next/image';
import Church_Crest from '../../../../public/Church_Crest.png';

const NavLayout = () => {
	return (
		<nav className='flex navbar navbar-start w-full items-center bg-primary text-secondary px-8'>
			<div className='navbar navbar-start w-6/12 text-xl font-mainContent'>
				<div className='logo flex items-center'>
					<Link href='/'>
						<div className='flex items-center text-secondary hover:text-secondaryHover cursor-pointer'>
							<Image
								src={Church_Crest}
								alt='logo'
								width={50}
								height={50}
								className='rounded-full'
							/>
							<h1>Trinity Anglican Church</h1>
						</div>
					</Link>
				</div>
			</div>
			{/* <div className='hidden lg:flex w-100 space-x-4 ml-8 justify-end'> */}
			<div className='nav-daisyui-override hidden lg:flex'>
				<Navbar />
			</div>
			<div className='lg:hidden navbar-end text-end'>
				<MobileNavbar />
			</div>
		</nav>
	);
};

export default NavLayout;
