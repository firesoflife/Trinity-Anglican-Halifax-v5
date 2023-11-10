type Props = {
	sermons: Sermon[];
};

function SermonList({ sermons }: Props) {
	return (
		<div className='container mx-auto'>
			{sermons.map((sermon) => (
				<div className='flex gap-4 bg-base-100 shadow-xl p-3 m-3 mb-14 w-full mx-auto overflow-auto'>
					<div className='col-span-1 hidden sm:block max-h-fit'>
						<div className='aspect-w-1 aspect-h-1 mx-auto'>
							<img
								className='object-cover w-full h-[200px] mx-auto'
								src={urlFor(sermon.mainImage)}
								alt={sermon.title}
							/>
						</div>
					</div>
					<div className='card-body flex flex-col md:flex-row justify-between w-full'>
						<div className='w-1/3 flex flex-col justify-between'>
							<h2 className='card-title text-3xl font-subheading underline underline-offset-8 decoration-5 decoration-myBlue pb-4'>
								{sermon.title}
							</h2>
							<h3>
								Date:{' '}
								{sermon.publishedAt
									? new Date(sermon.publishedAt).toDateString()
									: 'Unknown'}{' '}
							</h3>
						</div>
						<div className='flex flex-col md:w-2/3'>
							<div>
								<p className='line-clamp-3 max-w-prose font-heading text-lg'>
									{sermon.description}
								</p>
							</div>
							<div className='lg:flex  hidden md:w-1/2 mx-auto'>
								<hr className='w-64 h-px my-8 bg-gray-200 border-0 dark:bg-gray-700' />
								<span className='self-center px-5'>
									<GiTriquetra size={30} />
								</span>
								<hr className='w-64 h-px my-8 bg-gray-200 border-0 dark:bg-gray-700' />
							</div>
						</div>
					</div>
				</div>
			))}
		</div>
	);
}
