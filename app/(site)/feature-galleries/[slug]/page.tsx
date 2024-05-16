'use client';

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import Lightbox from 'yet-another-react-lightbox';
import Zoom from 'yet-another-react-lightbox/plugins/zoom';
import 'yet-another-react-lightbox/styles.css';
import { AiOutlineExpandAlt } from 'react-icons/ai';
import { TbArrowBackUp } from 'react-icons/tb';
import { getSingleFeatureGallery } from '@/app/lib/api/getSingleFeatureGallery';
import Loading from './Loading';
import Link from 'next/link';

type GalleryProps = {
	params: {
		slug: string;
	};
};

// Define FeatureGallery type locally
interface FeatureGallery {
	title: string;
	description: string;
	coverImageUrl: string;
	imageIds: Array<{ imageUrl: string; title?: string; description?: string }>;
}

type ImageId = {
	imageUrl: string;
	title?: string;
	description?: string;
};

export const revalidate = 10;

const FeatureGalleryPage = ({ params: { slug } }: GalleryProps) => {
	const [gallery, setGallery] = useState<FeatureGallery | null>(null);
	const [lightboxOpen, setLightboxOpen] = useState(false);
	const [currentIndex, setCurrentIndex] = useState(0);

	useEffect(() => {
		const fetchGallery = async () => {
			const data = await getSingleFeatureGallery(slug);
			setGallery(data);
		};
		fetchGallery();
	}, [slug]);

	if (!gallery) return <Loading />;

	const slides =
		gallery?.imageIds?.map((img) => ({
			src: img.imageUrl,
			title: img.title,
			description: img.description,
		})) ?? [];

	return (
		<div className='bg-primary mx-auto'>
			<div className='relative w-full h-[50vh] overflow-hidden mb-2'>
				{gallery.coverImageUrl ? (
					<Image
						src={gallery.coverImageUrl}
						alt={`Cover for ${gallery.title}`}
						className='w-full h-full object-cover'
						fill={true}
					/>
				) : (
					<div className='w-full h-full bg-black'></div>
				)}
				<div className='absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center'>
					<h1 className='text-2xl md:text-4xl font-mainContent mb-4 text-white'>
						{gallery?.title || ''}
					</h1>
					<p className='text-base md:text-xl w-2/3 md:w-2/4 text-white text-center'>
						{gallery?.description || ''}
					</p>
				</div>
			</div>

			<div className='flex justify-center items-end text-secondary'>
				<Link href='/gallery' className='flex justify-center items-center '>
					<TbArrowBackUp />
					<p className='ml-1'>Go back to galleries</p>
				</Link>
			</div>
			<div className='grid grid-cols-2 md:grid-cols-4 gap-4 py-4'>
				{gallery?.imageIds?.length > 0 ? (
					gallery?.imageIds?.map((img, index) => (
						<div
							key={index}
							className='w-full aspect-square overflow-hidden cursor-pointer relative'
							onMouseEnter={() => setCurrentIndex(index)}
							onClick={() => setLightboxOpen(true)}>
							<div className='relative w-full h-full group'>
								<Image
									src={img.imageUrl}
									alt={`Image ${index}`}
									fill={true}
									style={{ objectFit: 'cover' }}
									className='transition-transform duration-300 ease-in-out group-hover:scale-110'
								/>
								<div className='absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 duration-300 bg-black bg-opacity-50'>
									<AiOutlineExpandAlt className='text-4xl text-white' />
								</div>
							</div>
						</div>
					))
				) : (
					<div className='text-center col-span-full text-secondary'>
						No images in the gallery
					</div>
				)}
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
