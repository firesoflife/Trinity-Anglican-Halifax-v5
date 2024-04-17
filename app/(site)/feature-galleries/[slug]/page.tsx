// 'use client';

// import { useEffect, useState } from 'react';
// import Image from 'next/image';
// import { getSingleFeatureGallery } from '@/app/lib/api/getSingleFeatureGallery';
// import Loading from './Loading';

// type GalleryProps = {
// 	params: {
// 		slug: string;
// 	};
// };

// // Assuming getSingleFeatureGallery returns data of type FeatureGallery or null if not found
// const FeatureGalleryPage = ({ params: { slug } }: GalleryProps) => {
// 	const [gallery, setGallery] = useState<FeatureGallery | null>(null);

// 	useEffect(() => {
// 		const fetchGallery = async () => {
// 			const data = await getSingleFeatureGallery(slug);
// 			if (data) {
// 				setGallery(data);
// 			} else {
// 				setGallery(null);
// 			}
// 		};

// 		fetchGallery();
// 	}, [slug]);

// 	if (!gallery) return <Loading />;
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

import React, { useState } from 'react';
import Image from 'next/image';
import Lightbox from 'yet-another-react-lightbox';
import Zoom from 'yet-another-react-lightbox/plugins/zoom';
import 'yet-another-react-lightbox/styles.css';
import { AiOutlineExpandAlt } from 'react-icons/ai';
import { getSingleFeatureGallery } from '@/app/lib/api/getSingleFeatureGallery';
import Loading from './Loading';

type GalleryProps = {
	params: {
		slug: string;
	};
};

const FeatureGalleryPage = ({ params: { slug } }: GalleryProps) => {
	const [gallery, setGallery] = useState<FeatureGallery | null>(null);
	const [lightboxOpen, setLightboxOpen] = useState(false);
	const [currentIndex, setCurrentIndex] = useState(0);

	React.useEffect(() => {
		const fetchGallery = async () => {
			const data = await getSingleFeatureGallery(slug);
			setGallery(data);
		};
		fetchGallery();
	}, [slug]);

	const slides = gallery
		? gallery.imageIds.map((img) => ({
				src: img.imageUrl,
				title: img.title,
				description: img.description,
		  }))
		: [];

	if (!gallery) return <Loading />;

	return (
		<div className='bg-primary mx-auto p-4'>
			<div className='relative w-full h-[50vh] overflow-hidden mb-20'>
				<Image
					src={gallery.coverImageUrl}
					alt={`Cover for ${gallery.title}`}
					className='w-full h-full object-cover '
					fill
				/>
				<div className='absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center'>
					<h1 className='text-4xl font-bold mb-4 text-white'>
						{gallery.title}
					</h1>
					<p className='text-xl w-1/3 text-white'>{gallery.description}</p>
				</div>
			</div>
			<div className='grid grid-cols-2 md:grid-cols-4 gap-4 py-4'>
				{gallery.imageIds.map((img, index) => (
					<div
						key={index}
						className='w-full aspect-square overflow-hidden cursor-pointer relative'
						onMouseEnter={() => setCurrentIndex(index)}
						onClick={() => setLightboxOpen(true)}>
						<div className='relative w-full h-full group'>
							<Image
								src={img.imageUrl}
								alt={`Image ${index}`}
								layout='fill'
								objectFit='cover'
								className='transition-transform duration-300 ease-in-out group-hover:scale-110'
							/>
							<div className='absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 duration-300 bg-black bg-opacity-50'>
								<AiOutlineExpandAlt className='text-4xl text-white' />
							</div>
						</div>
					</div>
				))}
			</div>
			{lightboxOpen && (
				<Lightbox
					open={lightboxOpen}
					close={() => setLightboxOpen(false)}
					plugins={[Zoom]}
					slides={slides}
					index={currentIndex}
				/>
			)}
		</div>
	);
};

export default FeatureGalleryPage;
