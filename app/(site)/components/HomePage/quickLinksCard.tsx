// import Link from 'next/link';

// const QuickLinkCard: React.FC<QuickLinkCardProps> = ({
// 	imageSrc,
// 	header,
// 	subheader,
// 	content,
// 	cta,
// }) => {
// 	return (
// 		<>
// 			{cta && (
// 				<Link
// 					href={cta.link}
// 					target='_blank'
// 					rel='noopener noreferrer'
// 					className='flex flex-col items-center font-heading text-secondary  bg-white border border-gray-200 rounded-lg shadow xl:flex-row md:max-w-xl  dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700'>
// 					{/* TODO Add image alt */}
// 					<img
// 						className='object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-l-lg'
// 						src={imageSrc}
// 						alt=''
// 					/>
// 					<div className='flex flex-col justify-between p-4 leading-normal'>
// 						<h5 className='mb-2 text-2xl font-bold tracking-tight dark:text-white'>
// 							{header}
// 						</h5>
// 						<p className='mb-3 font-normal font-subContent text-gray-700 dark:text-gray-400'>
// 							{content}
// 						</p>
// 					</div>
// 				</Link>
// 			)}
// 		</>
// 		// </div>
// 	);
// };

// export default QuickLinkCard;

import Link from 'next/link';

const QuickLinkCard: React.FC<QuickLinkCardProps> = ({
	imageSrc,
	header,
	subheader,
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
					className='flex flex-col items-center font-heading text-secondary  bg-white border border-gray-200 rounded-lg shadow xl:flex-row md:max-w-xl  dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700'>
					<div className='w-full h-32 md:h-32 xl:h-40 md:w-48 lg:w-64 xl:w-auto md:rounded-none md:rounded-l-lg overflow-hidden'>
						{/* TODO Add image alt */}
						<img
							className='object-contain w-full h-full'
							src={imageSrc}
							alt=''
						/>
					</div>
					<div className='flex flex-col justify-between p-4 leading-normal'>
						<h5 className='mb-2 text-2xl font-bold tracking-tight dark:text-white text-center xl:text-left'>
							{header}
						</h5>
						<p className='mb-3 font-normal font-subContent text-gray-700 dark:text-gray-400'>
							{content}
						</p>
					</div>
				</Link>
			)}
		</>
	);
};

export default QuickLinkCard;
