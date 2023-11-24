'use client';

import { AiOutlineCloseCircle } from 'react-icons/ai';
import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';

interface FacilityDownloadButtonProps {
	fileUrl: string | null;
}

const FacilityDownloadButton: React.FC<FacilityDownloadButtonProps> = ({
	fileUrl,
}) => {
	const [showAlert, setShowAlert] = useState(false);
	const [isLoaded, setIsLoaded] = useState(false);
	const alertRef = useRef<HTMLDivElement | null>(null);

	useEffect(() => {
		if (fileUrl !== undefined) {
			setIsLoaded(true);
		}
	}, [fileUrl]);

	useEffect(() => {
		const handleClickOutside = (event: MouseEvent) => {
			if (
				alertRef.current &&
				!alertRef.current.contains(event.target as Node)
			) {
				setShowAlert(false);
			}
		};

		document.addEventListener('mousedown', handleClickOutside);
		return () => {
			document.removeEventListener('mousedown', handleClickOutside);
		};
	}, []);

	const handleClick = (e: React.MouseEvent) => {
		if (!fileUrl) {
			e.preventDefault();
			setShowAlert(true);
		}
	};

	const handleCloseAlert = () => {
		setShowAlert(false);
	};

	return (
		<div>
			<button
				className='text-xl p-8 bg-myGrey download-button hover:cursor-pointer w-full'
				onClick={handleClick}
				disabled={!isLoaded}>
				{isLoaded ? (
					<a href={fileUrl || '#'} download target='_blank'>
						Download Rental Form
					</a>
				) : (
					<div>
						One Moment. File is being prepared{' '}
						<div
							className='inline-block h-4 w-4 animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]'
							role='status'>
							<span className='!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]'>
								Loading...
							</span>
						</div>
						<div
							className='inline-block h-4 w-4 animate-[spinner-grow_0.75s_linear_infinite] rounded-full bg-current align-[-0.125em] opacity-0 motion-reduce:animate-[spinner-grow_1.5s_linear_infinite]'
							role='status'>
							<span className='!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]'>
								Loading...
							</span>
						</div>
					</div>
				)}
			</button>
			{showAlert && (
				<div className='toast toast-center toast-middle' ref={alertRef}>
					<div className='alert alert-error'>
						<button onClick={handleCloseAlert}>
							<AiOutlineCloseCircle />
						</button>
						<span>
							No file available. Please{' '}
							<span>
								<Link href={'/contact'} className='underline'>
									contact
								</Link>
							</span>{' '}
							us directly
						</span>
					</div>
				</div>
			)}
		</div>
	);
};

export default FacilityDownloadButton;
