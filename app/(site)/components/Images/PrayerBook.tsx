import Image from 'next/image';
import prayerBook from '../../../../public/prayer_book_society.png';

function PrayerBook(props: any) {
	const { renderDefault } = props;

	return (
		<div className='flex items-center space-x-2'>
			<Image
				className='rounded-full object-cover'
				height={50}
				width={50}
				src={prayerBook}
				alt='Prayer book society of canada logo'
			/>

			<>{renderDefault(props)}</>
		</div>
	);
}

export default PrayerBook;
