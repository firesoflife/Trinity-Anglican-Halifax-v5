const metadata = {
	title: 'Contact and Pastoral Care - Trinity Anglican Church, Halifax',
	description:
		'Reach out for support or inquiries on our Contact page. Request pastoral care, find our location, or get in touch with Trinity Anglican Church, Halifax.',
};

const loading = () => {
	return (
		<div className='flex w-full h-[100vh] justify-center items-center'>
			<span className='loading loading-infinity loading-lg'></span>
			<p> LOADING ...</p>
		</div>
	);
};

export default loading;
