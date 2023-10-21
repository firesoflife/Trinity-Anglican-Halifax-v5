import Link from 'next/link';

export default function NotFound() {
	return (
		<div className='h-screen'>
			<section className='bg-primary h-screen flex items-center'>
				<div className='py-8 lg:py-16 px-10 mx-auto max-w-screen-md'>
					<h2 className='mb-4 text-4xl tracking-tight font-subheading text-center text-secondary dark:text-white'>
						This Page Does Not Exist
					</h2>
					<div className='flex  flex-col mb-8 lg:mb-16 font-light text-gray-700  sm:text-xl'>
						<p className=' text-center '>
							"Ask and it will be given to you; seek and you will find; knock
							and the door will be opened to you. For everyone who asks
							receives; the one who seeks finds; and to the one who knocks, the
							door will be opened."
							<br />
						</p>
						<p className='text-end'>Matthew 7:7-8</p>
					</div>

					<div className='w-full text-center  mx-auto'>
						<Link href='/'>
							<button
								type='submit'
								className='py-3 px-5 text-sm font-medium text-center text-secondary rounded-lg bg-primary-700 sm:w-fit hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300'>
								Return Home
							</button>
						</Link>
					</div>
				</div>
			</section>
		</div>
	);
}
