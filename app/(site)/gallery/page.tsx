import { getFeatureGalleries } from '@/app/lib/api/getFeatureGalleries';
import Link from 'next/link';

export default async function FeatureGalleryList() {
	const galleries: FeatureGallery[] = await getFeatureGalleries();

	return (
		<div className='flex flex-wrap justify-center p-5'>
			{galleries.map((gallery) => (
				<div
					key={gallery._id}
					className='flex flex-col bg-white border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700 m-3 w-full sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl'>
					<Link href={`/feature-galleries/${gallery.slug}`}>
						{' '}
						{/* Updated to use slug */}
						<div className='h-64 w-full overflow-hidden rounded-t-lg bg-gray-100 relative'>
							<img
								className='absolute top-0 left-0 w-full h-full object-cover'
								src={gallery.coverImageUrl}
								alt={`Cover Image for ${gallery.title}`}
								style={{ objectPosition: 'center' }}
							/>
						</div>
						<div className='p-5'>
							{/* <Link href={`/feature-galleries/${gallery.slug.current}`}> */}{' '}
							{/* Updated to use slug */}
							<h5 className='mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white'>
								{gallery.title}
							</h5>
							{/* </Link> */}
							<p className='mb-3 font-subContent text-gray-700'>
								{gallery.description}
							</p>
						</div>
					</Link>
				</div>
			))}
		</div>
	);
}
