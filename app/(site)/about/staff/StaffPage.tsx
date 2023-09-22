import { getStaff } from '@/app/lib/api/getStaff';
import StaffCard from '../../components/About/StaffCard';

// TODO - Adapt for no staff members - i.e. if != wardens from Sanity then hide section and header

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

	type Role = 'rector' | 'clergy' | 'general' | 'warden';

	const roleTitles: Record<Role, string> = {
		rector: 'Rector',
		clergy: 'Clergy',
		general: 'Church Staff',
		warden: 'Wardens',
	};

	const rolesOrder = ['rector', 'clergy', 'general', 'warden'];

	return (
		<div className='flex flex-wrap gap-8 w-full'>
			{rolesOrder.map((role) => (
				<div key={role} className='w-full  p-4 rounded-lg'>
					<h2 className='text-center text-4xl mb-8 text-primary font-subheading first-letter:uppercase'>
						{roleTitles[role as Role]}
					</h2>
					<div className='flex flex-wrap justify-center gap-4'>
						{staffByRole[role]?.map((staffMember: Staff) => (
							<StaffCard key={staffMember._id} staffMember={staffMember} />
						))}
					</div>
				</div>
			))}
		</div>
	);
};

export default StaffPage;
