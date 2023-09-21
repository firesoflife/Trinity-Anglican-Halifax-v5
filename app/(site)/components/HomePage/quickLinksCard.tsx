import Link from 'next/link';

const QuickLinkCard: React.FC<QuickLinkCardProps> = ({
	imageSrc,
	alt,
	header,
	content,
	cta,
}) => {
	return (
		<>
			{cta && (
				<Link
					href={cta.link}
					target='_blank'
					rel='noopener noreferrer'
					className='flex flex-col items-center font-heading text-secondary bg-white border border-gray-200 rounded-lg shadow xl:flex-row md:max-w-xl xl:w-auto'>
					<div className='w-2/3 h-32 md:h-48 xl:h-64 md:w-64 lg:w-80 xl:w-auto md:rounded-none md:rounded-l-lg overflow-hidden'>
						<img
							className='object-contain w-full h-full'
							src={imageSrc}
							alt={alt}
						/>
					</div>
					<div className='flex flex-col justify-between p-4 leading-normal'>
						<div className='w-full'>
							<h5 className='mb-2 text-2xl font-bold tracking-tight text-left'>
								{header}
							</h5>
						</div>
						<p className='mb-3 font-normal font-subContent text-gray-700'>
							{content}
						</p>
					</div>
				</Link>
			)}
		</>
	);
};

export default QuickLinkCard;
