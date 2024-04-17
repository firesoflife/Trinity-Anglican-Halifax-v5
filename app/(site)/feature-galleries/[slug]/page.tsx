// import { getSingleFeatureGallery } from '@/app/lib/api/getSingleFeatureGallery';
// import Image from 'next/image';

// type GalleryProps = {
// 	params: {
// 		slug: string;
// 	};
// };

// const FeatureGalleryPage = async ({ params: { slug } }: GalleryProps) => {
// 	const gallery = await getSingleFeatureGallery(slug);

// 	if (!gallery) return <div>Gallery not found.</div>;

// 	return (
// 		<div className='bg-primary mx-auto'>
// 			<div className='relative w-full h-[50vh] overflow-hidden'>
// 				<div className='relative w-full h-full'>
// 					<Image
// 						src={gallery.coverImageUrl}
// 						alt={`Cover for ${gallery.title}`}
// 						className='w-full h-full object-cover'
// 						fill
// 					/>
// 				</div>
// 				<div className='absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center'>
// 					<h1 className='text-4xl font-mainContent text-white pb-5'>
// 						{gallery.title}
// 					</h1>
// 					<p className='text-xl text-center text-white mx-auto max-w-2xl'>
// 						{gallery.description}
// 					</p>
// 				</div>
// 			</div>
// 			<div className='mx-4 md:mx-12 grid grid-cols-2 md:grid-cols-4 gap-7 py-12'>
// 				{gallery.imageIds &&
// 					gallery.imageIds.map((img, index) => (
// 						<div
// 							key={index}
// 							className='w-full aspect-square relative overflow-hidden'>
// 							<div className='w-full h-full transition-transform duration-300 ease-in-out hover:scale-110 cursor-pointer'>
// 								<Image
// 									src={img.imageUrl}
// 									alt={`Image ${index}`}
// 									className='w-full h-full object-cover'
// 									fill
// 								/>
// 							</div>
// 						</div>
// 					))}
// 			</div>
// 		</div>
// 	);
// };

// export default FeatureGalleryPage;

'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import { getSingleFeatureGallery } from '@/app/lib/api/getSingleFeatureGallery';
import Loading from './Loading';

type GalleryProps = {
	params: {
		slug: string;
	};
};

// Assuming getSingleFeatureGallery returns data of type FeatureGallery or null if not found
const FeatureGalleryPage = ({ params: { slug } }: GalleryProps) => {
	const [gallery, setGallery] = useState<FeatureGallery | null>(null);

	useEffect(() => {
		const fetchGallery = async () => {
			const data = await getSingleFeatureGallery(slug);
			if (data) {
				setGallery(data);
			} else {
				setGallery(null);
			}
		};

		fetchGallery();
	}, [slug]);

	if (!gallery) return <Loading />;
	return (
		<div className='bg-primary mx-auto'>
			<div className='relative w-full h-[50vh] overflow-hidden'>
				<div className='relative w-full h-full'>
					<Image
						src={gallery.coverImageUrl}
						alt={`Cover for ${gallery.title}`}
						className='w-full h-full object-cover'
						fill
					/>
				</div>
				<div className='absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center'>
					<h1 className='text-4xl font-mainContent text-white pb-5'>
						{gallery.title}
					</h1>
					<p className='text-xl text-center text-white mx-auto max-w-2xl'>
						{gallery.description}
					</p>
				</div>
			</div>
			<div className='mx-4 md:mx-12 grid grid-cols-2 md:grid-cols-4 gap-7 py-12'>
				{gallery.imageIds &&
					gallery.imageIds.map((img, index) => (
						<div
							key={index}
							className='w-full aspect-square relative overflow-hidden'>
							<div className='w-full h-full transition-transform duration-300 ease-in-out hover:scale-110 cursor-pointer'>
								<Image
									src={img.imageUrl}
									alt={`Image ${index}`}
									className='w-full h-full object-cover'
									fill
								/>
							</div>
						</div>
					))}
			</div>
		</div>
	);
};

export default FeatureGalleryPage;
