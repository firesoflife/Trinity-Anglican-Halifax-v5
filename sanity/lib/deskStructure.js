import { MdHome } from 'react-icons/md';
import { MdInfo } from 'react-icons/md';
import { MdHistory } from 'react-icons/md';
import { MdPeople } from 'react-icons/md';
import { MdContactMail } from 'react-icons/md';
import { GiBookCover } from 'react-icons/gi';
import { GiScrollUnfurled } from 'react-icons/gi';
import { MdEventNote } from 'react-icons/md';
import { GiChurch } from 'react-icons/gi';
import { GiHeartPlus } from 'react-icons/gi';
import { IoShareSocialOutline } from 'react-icons/io5';

// export default () =>
export const deskStructure = (S) =>
	S.list()
		.title('Content')
		.items([
			S.listItem()
				.title('Home')
				.icon(MdHome)
				.child(S.editor().schemaType('home').documentId('home')),
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
							S.listItem()
								.title('Our History')
								.icon(MdHistory)
								.child(
									S.editor().schemaType('ourHistory').documentId('ourHistory')
								),
							S.listItem()
								.title('Clergy and People')
								.icon(MdPeople)
								.child(
									S.editor()
										.schemaType('staffList')
										.documentId('staffList')
										.title('Order of Appearance')
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
								.title('Worship Schedule')
								.icon(MdEventNote)
								.child(
									S.editor()
										.schemaType('worshipSchedule')
										.documentId('worshipSchedule')
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
