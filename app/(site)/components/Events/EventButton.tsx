'use client';

// This code is used to open a modal with more information about a specific event. It is used in the Events page and is displayed in the Parish Events section.

import { useState } from 'react';
import EventModal from './EventModal';

const EventButton = () => {
	const [isOpen, setIsOpen] = useState(false);

	const openModal = () => {
		setIsOpen(true);
	};

	const closeModal = () => {
		setIsOpen(false);
	};

	return (
		<>
			<button
				onClick={openModal}
				className='btn bg-myBlue hover:bg-myGrey text-white'>
				More Info ...
			</button>

			{isOpen && (
				<div
					className='fixed z-10 inset-0 overflow-y-auto'
					aria-labelledby='modal-title'
					role='dialog'
					aria-modal='true'>
					<div className='flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0'>
						<div
							className='fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity'
							aria-hidden='true'></div>
						<span
							className='hidden sm:inline-block sm:align-middle sm:h-screen'
							aria-hidden='true'>
							&#8203;
						</span>
						<div className='inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full'>
							<div className='bg-primary px-4 pt-5 pb-4 sm:p-6 sm:pb-4'>
								<div className='sm:flex sm:items-start'>
									<EventModal />
								</div>
							</div>
							<div className='bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse'>
								<button
									type='button'
									onClick={closeModal}
									className='btn bg-myBlue hover:bg-myGrey text-white'>
									Close
								</button>
							</div>
						</div>
					</div>
				</div>
			)}
		</>
	);
};

export default EventButton;
