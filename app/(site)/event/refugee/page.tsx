import { getRefugee } from '@/app/lib/api/getRefugee';
import urlFor from '@/sanity/lib/urlFor';
import Image from 'next/image';
import { fallbackImages } from '../../utilities/fallbackAssets';
import { PortableText } from '@portabletext/react';
import { RichTextComponents } from '../../utilities/RichTextComponents';
import { Refugee } from '@/typings';

export const revalidate = 10;

const refugee = async () => {
	const refugeeData = await getRefugee();
	return (
		<div>
			<h1>{refugeeData?.title || 'Refugee Sponsorship '}</h1>
			<h1>{refugeeData?.description || ' '}</h1>
			<Image
				className=' object-center mx-auto'
				src={
					urlFor(refugeeData?.pageBannerImage) ||
					fallbackImages.parishEvents.pageBannerImageFallback
				}
				alt='Image for Refugee Sponsorship Page'
				fill
				objectFit='cover'
			/>
			{refugeeData?.body ? (
				<div className='mt-24 lg:w-4/5 mx-auto text-secondary bg-primary p-14'>
					<PortableText
						value={refugeeData?.body}
						components={RichTextComponents}
					/>
				</div>
			) : (
				<div className='mt-24 lg:w-4/5 h-[15rem] mx-auto text-secondary bg-primary p-14'>
					<h2 className='text-3xl pb-9'>
						There is nothing here right now, but in the future we will provide
						more information on {refugeeData?.title || 'this event'} here.
					</h2>
				</div>
			)}
		</div>
	);
};

export default refugee;
