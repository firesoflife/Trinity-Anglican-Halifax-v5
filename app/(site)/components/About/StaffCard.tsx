'use client';

import { useState } from 'react';
import urlFor from '@/sanity/lib/urlFor';
import Link from 'next/link';
import { fallbackImages } from '../../utilities/fallbackAssets';
import StaffDetails from './StaffDetails';
import Modal from './Modal';
import StaffDetailsModal from './StaffDetails';

interface StaffCardProps {
	staffMember: StaffCardMember;
}

const StaffCard: React.FC<StaffCardProps> = async ({ staffMember }) => {
	const [isModalOpen, setModalOpen] = useState(false);

	return (
		<div
			key={staffMember._id}
			className='flex flex-col items-center max-w-sm mx-auto bg-white border border-gray-200 rounded-lg shadow'>
			<div>
				<img
					className='rounded-t-lg'
					src={urlFor(
						staffMember?.imageUrl ||
							fallbackImages.about.missingProfileImageFallback
					)}
					alt={staffMember?.name || 'Staff Member Image'}
					style={{ width: '100%', height: 'auto' }}
				/>
			</div>
			<div className='p-5 w-full flex flex-col justify-between h-full'>
				<div>
					<h5 className='mb-2 text-2xl font-bold tracking-tight text-center text-gray-900'>
						{staffMember?.name || 'Name Unavailable'}
					</h5>
					<p className='mb-3 font-normal text-gray-700 line-clamp-5 '>
						{staffMember?.bio || 'Nothing here yet...'}
					</p>
					<p
						className='text-right text-secondary cursor-pointer'
						onClick={() => setModalOpen(true)}>
						Read Full Bio
					</p>

					{/* <Modal isOpen={isModalOpen} onClose={() => setModalOpen(false)}>
						<p>{staffMember?.bio || 'Nothing here yet...'}</p>
					</Modal> */}
					<Modal isOpen={isModalOpen} onClose={() => setModalOpen(false)}>
						<StaffDetailsModal staffMember={staffMember} />
					</Modal>
				</div>
				{staffMember?.role === 'warden' && ( // Conditionally render the contact button for Wardens only
					<Link
						href={`mailto:${
							staffMember?.email ||
							'Please contact the office on our Contact page.'
						}`}
						className='flex justify-center items-center px-3 py-2 text-sm font-medium text-white bg-secondary rounded-lg hover:bg-secondaryHover focus:ring-4 focus:outline-none focus:ring-myBlue '>
						Contact {staffMember?.name || 'Name Unavailable'}
						<svg
							className='w-3.5 h-3.5 ml-2'
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
					</Link>
				)}
			</div>
		</div>
	);
};

export default StaffCard;
