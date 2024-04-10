// import React from 'react';

// function StaffDetails() {
// 	return (
// 		<div className='w-2/3 p-4'>
// 			{/* Render your staff details here */}
// 			<h2 className='text-2xl font-bold'>Staff Name</h2>
// 			<p>Staff Bio</p>
// 		</div>
// 	);
// }

// export default StaffDetails;

interface StaffDetailsProps {
	isOpen: boolean;
	onClose: () => void;
	children: React.ReactNode;
}

const Modal: React.FC<StaffDetailsProps> = ({ isOpen, onClose, children }) => {
	if (!isOpen) return null;

	return (
		<div className='fixed inset-0 z-50 overflow-y-auto bg-black bg-opacity-50'>
			<div className='flex items-center justify-center min-h-screen'>
				<div className='bg-white p-5 rounded-lg shadow-lg'>
					{children}
					<button
						onClick={onClose}
						className='mt-4 px-4 py-2 bg-red-500 text-white rounded'>
						Close
					</button>
				</div>
			</div>
		</div>
	);
};

export default Modal;
