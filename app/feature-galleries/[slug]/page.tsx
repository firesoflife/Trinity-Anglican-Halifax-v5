import { getSingleFeatureGallery } from '@/app/lib/api/getSingleFeatureGallery';
import Image from 'next/image';

type GalleryProps = {
	params: {
		slug: string;
	};
};

const FeatureGalleryPage = async ({ params: { slug } }: GalleryProps) => {
	const gallery = await getSingleFeatureGallery(slug);

	console.log('Gallery data in component:', gallery);
	if (!gallery) return <div>Gallery not found.</div>;

	return (
		<div className='container mx-auto p-4'>
			<h1 className='text-2xl font-bold'>{gallery.title}</h1>
			<Image
				src={gallery.coverImageUrl}
				alt={`Cover for ${gallery.title}`}
				width={600}
				height={400}
			/>
			{gallery.imageIds &&
				gallery.imageIds.map((img, index) => (
					<Image
						key={index}
						src={img.imageUrl}
						alt={`Image ${index}`}
						width={500}
						height={500}
					/>
				))}
		</div>
	);
};

export default FeatureGalleryPage;
