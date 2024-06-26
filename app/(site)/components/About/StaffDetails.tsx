import { StaffCardMember } from '@/typings';
import { fallbackImages } from '../../utilities/fallbackAssets';

interface StaffDetailsModalProps {
	staffMember: StaffCardMember;
}

const StaffDetailsModal: React.FC<StaffDetailsModalProps> = ({
	staffMember,
}) => {
	return (
		<div className='space-y-8'>
			<div className='flex flex-col md:flex-row content-center justify-center items-center text-center md:text-left space-y-8'>
				<img
					className='h-44 w-44 object-cover rounded-full '
					src={
						staffMember.imageUrl ||
						fallbackImages.about.missingProfileImageFallback
					}
					alt={staffMember.name || 'Staff Member'}
				/>
				<h3 className='text-xl font-bold text-secondary mx-12 flex flex-col align-middle justify-center'>
					{staffMember.name}
				</h3>
			</div>
			<p className='indent-3 text-slate-600'>{staffMember.bio}</p>
			{/* Add more details as needed */}
		</div>
	);
};

export default StaffDetailsModal;
