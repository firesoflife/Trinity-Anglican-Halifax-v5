'use client';
import React, { useState } from 'react';
import { AiOutlineExpandAlt } from 'react-icons/ai';
import Lightbox from 'yet-another-react-lightbox';
import Zoom from 'yet-another-react-lightbox/plugins/zoom';
import 'yet-another-react-lightbox/styles.css';

const FacilityGallery = () => {
	const [open, setOpen] = useState(false);
	const [image, setImage] = useState('');

	// Test data
	const galleryTab = [
		{
			imageUrl: 'https://themewagon.github.io/snapshot/images/model-1.jpg',
			type: 'Nature',
			title: 'Beautiful Work',
		},
		{
			imageUrl: 'https://themewagon.github.io/snapshot/images/model-2.jpg',
			type: 'Nature',
			title: 'Beautiful Work',
		},
		{
			imageUrl: 'https://themewagon.github.io/snapshot/images/model-3.jpg',
			type: 'Nature',
			title: 'Beautiful Work',
		},
		{
			imageUrl: 'https://themewagon.github.io/snapshot/images/model-4.jpg',
			type: 'Nature',
			title: 'Beautiful Work',
		},
		{
			imageUrl: 'https://themewagon.github.io/snapshot/images/model-5.jpg',
			type: 'Nature',
			title: 'Beautiful Work',
		},
	];

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
				Gallery Title
			</h1>
			<p className='pb-5 max-w-lg mx-auto'>
				General Gallery and Facility info Lorem ipsum dolor sit amet consectetur
				adipisicing elit. Aliquid laudantium ipsam nihil ex maxime. Aspernatur
				ratione ipsam voluptate repudiandae quo! Modi quos repudiandae hic
				aspernatur ea porro iste quaerat, quibusdam cumque voluptatem est quas
				sequi, voluptatibus qui vitae assumenda temporibus quod optio, rerum
				aliquam asperiores!
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
										<div className='text-xl text-white absolute bottom-0 left-2 z-10'>
											<div>{x.type}</div>
											<div>{x.title}</div>
										</div>
									</div>
									<div
										className='bg-black opacity-0 group-hover:opacity-75 absolute inset-0 flex items-center justify-center transition-all duration-300 ease-in-out'
										onClick={() => {
											setOpen(true);
											setImage(x.imageUrl);
										}}>
										<p className='text-white'>
											<AiOutlineExpandAlt className='text-5xl border w-16 h-16 bg-neutral-500 hover:bg-white hover:text-black p-3 cursor-pointer rounded-full' />
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
			/>
		</div>
	);
};

export default FacilityGallery;
