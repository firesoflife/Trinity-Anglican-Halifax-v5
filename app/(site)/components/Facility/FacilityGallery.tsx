'use client';
import React, { useState } from 'react';
import { AiOutlineExpandAlt } from 'react-icons/ai';
import Lightbox from 'yet-another-react-lightbox';
import Zoom from 'yet-another-react-lightbox/plugins/zoom';
import 'yet-another-react-lightbox/styles.css';

interface FacilityGalleryProps {
	facilityImages: Gallery[];
	galleryDetails: GalleryDetails;
}

const FacilityGallery: React.FC<FacilityGalleryProps> = React.memo(
	({ facilityImages, galleryDetails }) => {
		const [open, setOpen] = useState(false);
		const [image, setImage] = useState('');
		const [currentIndex, setCurrentIndex] = useState(0);

		const galleryTab = facilityImages.map((image) => ({
			imageUrl: image.imageUrl,
			title: image.title,
			description: image.description,
		}));

		const slides = galleryTab.map((item) => ({
			src: item.imageUrl,
			width: 3840,
			height: 2560,
			srcSet: [
				{ src: item.imageUrl, width: 320, height: 213 },
				{ src: item.imageUrl, width: 640, height: 426 },
				{ src: item.imageUrl, width: 1200, height: 800 },
				{ src: item.imageUrl, width: 2048, height: 1365 },
				{ src: item.imageUrl, width: 3840, height: 2560 },
			],
		}));

		return (
			<div className='w-full'>
				<h1 className='opacity-100 z-100 font-subheading text-2xl py-5'>
					{galleryDetails.title || "Trinity's Facility Images"}
				</h1>
				<p className='pb-5 max-w-lg mx-auto'>
					{galleryDetails.description || 'Facility Images'}
				</p>
				<div className=''>
					<div className='flex flex-col md:grid md:grid-cols-3 h-full gap-0 flex-wrap mx-2 md:mx-0'>
						{galleryTab.map((x, index) => {
							return (
								<div key={index} className='md:h-44 h-screen relative'>
									<div className='group h-full'>
										<div
											className='bg-cover bg-center h-full w-full bg-no-repeat'
											style={{ backgroundImage: `url("${x.imageUrl}")` }}>
											<div className='text-base text-white absolute bottom-2 left-2 z-10'>
												<div>{x.title}</div>
											</div>
											<p>Click to Expand</p>
										</div>

										<div
											className='bg-black opacity-40 group-hover:opacity-75 group absolute inset-0 flex items-center justify-center transition-all duration-300 ease-in-out cursor-pointer'
											onClick={() => {
												setOpen(true);
												setImage(x.imageUrl);
												setCurrentIndex(index);
											}}>
											<p className='text-white opacity-0 group-hover:opacity-100'>
												<AiOutlineExpandAlt className='text-2xl border w-10 h-10 bg-neutral-500 hover:bg-white hover:text-black p-3  rounded-full' />
											</p>
										</div>
									</div>
								</div>
							);
						})}
					</div>
				</div>
				<Lightbox
					open={open}
					close={() => setOpen(false)}
					plugins={[Zoom]}
					// showPrevNext={false}
					slides={slides}
					index={currentIndex}
				/>
			</div>
		);
	}
);

export default FacilityGallery;
