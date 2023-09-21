import {
	MdHome,
	MdInfo,
	MdHistory,
	MdPeople,
	MdContactMail,
} from 'react-icons/md';
import { TbChristmasTree } from 'react-icons/tb';
import {
	GiBookCover,
	GiScrollUnfurled,
	GiChurch,
	GiHeartPlus,
} from 'react-icons/gi';
import { MdEventNote } from 'react-icons/md';
import { IoShareSocialOutline } from 'react-icons/io5';

export const deskStructure = (S) =>
	S.list()
		.title('Content')
		.items([
			S.listItem()
				.title('Home')
				.icon(MdHome)
				.child(S.editor().schemaType('home').documentId('home')),
			// S.listItem()
			// .title('Quick Links')
			// .child(S.editor().schemaType('card').documentId('card')),
			S.listItem()
				.title('About')
				.icon(MdInfo)
				.child(
					S.list()
						.title('About')
						.items([
							S.listItem()
								.title('About')
								.icon(MdInfo)
								.child(S.editor().schemaType('about').documentId('about')),
							// S.listItem()
							// 	.title('Our History')
							// 	.icon(MdHistory)
							// 	.child(
							// 		S.editor().schemaType('ourHistory').documentId('ourHistory')
							// 	),
							S.listItem()
								.title('Clergy and People')
								.icon(MdPeople)
								.child(
									S.documentList()
										.schemaType('staff')
										.title('Clergy and Staff')
										.filter('_type == "staff"')
								),
						])
				),
			S.listItem()
				.title('Contact Us')
				.icon(MdContactMail)
				.child(
					S.list()
						.title('Contact Us')
						.items([
							S.listItem()
								.title('Contact Us Main Page')
								.icon(MdContactMail)
								.child(
									S.editor().schemaType('contactUs').documentId('contactUs')
								),
							S.listItem()
								.title('Social Media')
								.icon(IoShareSocialOutline)
								.child(
									S.documentList()
										.id('socialMediaPlatform')
										.title('Social Media')
										.schemaType('socialMediaPlatform')
										.filter('_type == "socialMediaPlatform"')
								),
							S.listItem()
								.title('Pastoral Care')
								.icon(GiHeartPlus)
								.child(
									S.editor()
										.schemaType('pastoralCare')
										.documentId('pastoralCare')
								),
						])
				),
			S.listItem()
				.title('Worship')
				.icon(GiBookCover)
				.child(
					S.list()
						.title('Worship')
						.items([
							S.listItem()
								.title('Worship Main Page')
								.icon(GiBookCover)
								.child(S.editor().schemaType('worship').documentId('worship')),
							S.listItem()
								.title('Regular Services')
								.icon(MdEventNote)
								.child(
									S.documentTypeList('regularService').title('Regular Services')
								),
							S.listItem()
								.title('Special Services & Holidays')
								.icon(TbChristmasTree)
								.child(
									S.documentTypeList('specialService').title(
										'Special Services & Holidays'
									)
								),
							S.listItem()
								.title('Sermons')
								.icon(GiScrollUnfurled)
								.child(
									S.documentList()
										.id('sermon')
										.title('Sermons')
										.schemaType('sermon')
										.filter('_type == "sermon" ')
								),
						])
				),
			S.listItem()
				.title('Facility Rental')
				.icon(GiChurch)
				.child(
					S.editor().schemaType('facilityRental').documentId('facilityRental')
				),
		]);
