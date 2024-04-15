import { getFeatureGalleries } from '@/app/lib/api/getFeatureGalleries';
import Link from 'next/link';

export default async function FeatureGalleryList() {
	const galleries: featureGallery[] = await getFeatureGalleries();

	return (
		<div className='flex flex-wrap justify-center p-5'>
			{galleries.map((gallery) => (
				<div
					key={gallery._id}
					className='flex flex-col bg-white border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700 m-3 w-full sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl'>
					<Link href={`/gallery/${gallery._id}`}>
						{/* <div className='block'> */}
						<div className='h-64 w-full overflow-hidden rounded-t-lg bg-gray-100 relative'>
							<img
								className='absolute top-0 left-0 w-full h-full object-cover'
								src={gallery.coverImageUrl}
								alt={`Cover Image for ${gallery.title}`}
								style={{ objectPosition: 'center' }}
							/>
						</div>
						{/* </div> */}
					</Link>
					<div className='p-5'>
						<Link href={`/gallery/${gallery._id}`}>
							<h5 className='mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white'>
								{gallery.title}
							</h5>
						</Link>
						<p className='mb-3 font-normal text-gray-700 dark:text-gray-400'>
							{gallery.description}
						</p>
						<Link href={`/gallery/${gallery._id}`}>
							<div className='inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'>
								Read more
								<svg
									className='rtl:rotate-180 w-3.5 h-3.5 ml-2'
									aria-hidden='true'
									xmlns='http://www.w3.org/2000/svg'
									fill='none'
									viewBox='0 0 14 10'>
									<path
										stroke='currentColor'
										strokeLinecap='round'
										strokeLinejoin='round'
										strokeWidth='2'
										d='M1 5h12m0 0L9 1m4 4L9 9'
									/>
								</svg>
							</div>
						</Link>
					</div>
				</div>
			))}
		</div>
	);
}
