import { getStaff } from '@/app/lib/api/getStaff';
import StaffCard from '../../components/About/StaffCard';

const StaffPage = async () => {
	const staffMembers: Staff[] = await getStaff();

	const staffByRole = staffMembers.reduce(
		(acc: Record<string, Staff[]>, staffMember: Staff) => {
			const { role } = staffMember;
			if (!acc[role]) {
				acc[role] = [];
			}
			acc[role].push(staffMember);
			return acc;
		},
		{}
	);

	// Sort the staff members within each role by their order number assigned in the Studio
	Object.keys(staffByRole).forEach((role) => {
		staffByRole[role].sort((a, b) => a.order - b.order);
	});

	type Role = 'rector' | 'clergy' | 'general' | 'warden';

	const roleTitles: Record<Role, string> = {
		rector: 'Rector',
		clergy: 'Clergy',
		general: 'People & Volunteers',
		warden: 'Wardens',
	};

	const rolesOrder = ['rector', 'clergy', 'general', 'warden'];

	return (
		<div className='flex flex-wrap gap-8 w-full'>
			{rolesOrder.map(
				(role) =>
					staffByRole[role]?.length > 0 && (
						<div key={role} className='w-full p-4 rounded-lg'>
							<h2 className='text-center text-4xl mb-8 text-primary font-subheading first-letter:uppercase'>
								{roleTitles[role as Role]}
							</h2>
							<div className='flex flex-wrap justify-center gap-4'>
								{staffByRole[role].map((staffMember: Staff) => (
									<StaffCard key={staffMember._id} staffMember={staffMember} />
								))}
							</div>
						</div>
					)
			)}
		</div>
	);
};

export default StaffPage;
