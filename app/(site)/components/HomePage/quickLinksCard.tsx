const QuickLinkCard: React.FC<QuickLinkCardProps> = ({
	imageSrc,
	header,
	subheader,
	content,
	cta,
}) => {
	return (
		<div className='max-w-sm mx-auto bg-white rounded-xl shadow-md overflow-hidden flex flex-col'>
			<img
				className='w-full h-48 object-contain'
				src={imageSrc}
				alt='Card image'
			/>
			<div className='p-4 flex-grow flex flex-col justify-between'>
				<div>
					<h2 className='text-xl font-semibold text-gray-700'>{header}</h2>
					<h3 className='text-lg text-gray-500 mt-2'>{subheader}</h3>
					<p className='text-gray-600 mt-4'>{content}</p>
				</div>
				{cta && (
					<a
						href={cta.link}
						target='_blank'
						rel='noopener noreferrer'
						className='bg-accent hover:bg-blue-600 text-white font-semibold py-2 px-4 mt-4 rounded inline-block self-center'>
						{cta.text}
					</a>
				)}
			</div>
		</div>
	);
};

export default QuickLinkCard;
