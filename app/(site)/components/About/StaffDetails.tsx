import { fallbackImages } from '../../utilities/fallbackAssets';

interface StaffDetailsModalProps {
	staffMember: StaffCardMember;
}

const StaffDetailsModal: React.FC<StaffDetailsModalProps> = ({
	staffMember,
}) => {
	return (
		<div className='space-y-4'>
			<div className='flex'>
				<img
					className='w-32 h-32 object-cover rounded-full'
					src={
						staffMember.imageUrl ||
						fallbackImages.about.missingProfileImageFallback
					}
					alt={staffMember.name || 'Staff Member'}
				/>
				<h3 className='text-xl font-bold mx-12'>{staffMember.name}</h3>
			</div>
			<p>{staffMember.bio}</p>
			{/* Add more details as needed */}
		</div>
	);
};

export default StaffDetailsModal;
