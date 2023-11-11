import AudioPlayerComponent from '../../utilities/AudioPlayerComponent';
type Props = {
	sermons: Sermon[];
};

function SermonList({ sermons }: Props) {
	return (
		<div className='container mx-auto'>
			{sermons.map((sermon) => (
				<div className='flex flex-col gap-4 bg-base-100 shadow-xl p-3 m-3 mb-14 w-full mx-auto overflow-auto'>
					<div className='col-span-1 hidden sm:block max-h-fit'></div>
					<div className='card-body flex flex-col md:flex-row justify-between w-full'>
						<div className='w-1/3 flex flex-col justify-between'>
							<h2 className='card-title text-3xl font-subheading underline underline-offset-8 decoration-5 decoration-myBlue pb-4'>
								{sermon.title}
							</h2>
							<h3 className='pb-2'>
								Date:{' '}
								{sermon.date ? new Date(sermon.date).toDateString() : 'Unknown'}{' '}
							</h3>
							<h3>Speaker: {sermon.speaker.name} </h3>
						</div>
						<div className='flex flex-col md:w-2/3'>
							<div>
								<p className='line-clamp-3 max-w-prose font-heading text-lg'>
									{sermon.description} Lorem ipsum dolor sit amet consectetur
									adipisicing elit. Neque eius molestiae cumque odit expedita
									commodi cum officia nesciunt quae repellendus.
								</p>
							</div>
						</div>
					</div>
					<div className='text-white mb-6'>
						<AudioPlayerComponent sermon={sermon} />
					</div>
				</div>
			))}
		</div>
	);
}

export default SermonList;
