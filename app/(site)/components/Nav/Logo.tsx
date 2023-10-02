import { getHome } from '@/app/lib/api/getHome';

const Logo = async () => {
	const home = await getHome();
	return <div>{home.navbarTitle} </div>;
};

export default Logo;
