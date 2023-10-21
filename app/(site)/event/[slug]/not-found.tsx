import Link from 'next/link';

export default function NotFound() {
	return (
		<div className='global'>
			<h2>Not Found</h2>
			<p>Could not find requested resource</p>
			<Link href='/'>Return Home</Link>
			return (
			<section className='bg-primary h-vh'>
				<div className='py-8 lg:py-16 px-10 mx-auto max-w-screen-md'>
					<h2 className='mb-4 text-4xl tracking-tight font-subheading text-center text-secondary dark:text-white'>
						Nothing to see here...
					</h2>
					<p className='mb-8 lg:mb-16 font-light text-center text-gray-700  sm:text-xl'>
						Looks like you've found a page that doesn't exist. Please check the
						URL and try again.
					</p>

					<div>
						<label
							htmlFor='email'
							className='block mb-2 text-sm font-medium text-secondary dark:text-gray-300'>
							Your email
						</label>
						<button
							type='submit'
							className='py-3 px-5 text-sm font-medium text-center text-secondary rounded-lg bg-primary-700 sm:w-fit hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300'>
							Send message
						</button>
					</div>
				</div>
			</section>
			);
		</div>
	);
}
