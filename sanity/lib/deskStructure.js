import {
	MdHome,
	MdInfo,
	MdHistory,
	MdEvent,
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
import { FaRegImages } from 'react-icons/fa';
import { MdEventNote } from 'react-icons/md';
import { IoShareSocialOutline } from 'react-icons/io5';
import { LuScroll } from 'react-icons/lu';
import { PiScrollLight } from 'react-icons/pi';
import { TbSectionSign } from 'react-icons/tb';
import { FaPenFancy } from 'react-icons/fa6';

export const deskStructure = (S) =>
	S.list()
		.title('Content')
		.items([
			S.listItem()
				.title('Home')
				.icon(MdHome)
				.child(S.editor().schemaType('home').documentId('home')),
			// S.listItem().title('Post').child(S.editor().schemaType('post')),
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
								.title('Clergy and People')
								.icon(MdPeople)
								.child(
									S.documentList()
										.schemaType('staff')
										.title('Clergy and Staff')
										.filter('_type == "staff"')
								),
							S.listItem()
								.title('Covenant In Ministry')
								.icon(LuScroll)
								.child(
									S.editor().schemaType('covenant').documentId('covenant')
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
							///////// REMOVED Pastoral Care from Contact Us to use main form instead /////////
							// 	S.listItem()
							// 		.title('Pastoral Care')
							// 		.icon(GiHeartPlus)
							// 		.child(
							// 			S.editor()
							// 				.schemaType('pastoralCare')
							// 				.documentId('pastoralCare')
							// 		),
						])
				),
			S.listItem()
				.title('Worship')
				.icon(GiBookCover)
				.child(
					S.list()
						.title('Worship Sections')
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
				.title('Parish Events & Activities')
				.icon(MdEvent)
				.child(
					S.list()
						.title('Parish Events')
						.items([
							S.listItem()
								.title('Parish Page Layout')
								.child(
									S.editor()
										.schemaType('generalParishLayout')
										.documentId('generalParishLayout')
								),
							S.documentTypeListItem('parishEvents').title('List of Events'),
						])
				),
			S.listItem()
				.title('Facility Rental')
				.icon(GiChurch)
				.child(
					S.list()
						.title('Facility Rental')
						.items([
							S.listItem()
								.title('Facility Rental')
								.icon(GiChurch)
								.child(
									S.editor()
										.schemaType('facilityRental')
										.documentId('facilityRental')
								),
							S.listItem()
								.title('Facility Image Gallery')
								.icon(FaRegImages)
								.child(
									S.editor()
										.schemaType('gallery')
										.documentId('gallery')
										.title('Gallery Title & Description')
								),
							/////////// Multiple Galleries Documents ////////
							// S.listItem()
							// 	.title('Facility Images')
							// 	.icon(FaRegImages)
							// 	.child(
							// 		S.documentList()
							// 			.id('gallery')
							// 			.title('gallery')
							// 			.schemaType('gallery')
							// 			.filter('_type == "gallery"')
							// 	),
						])
				),
			S.listItem()
				.title('Pastoral Letters')
				.icon(PiScrollLight)
				.child(
					S.list()
						.title('Pastoral Letters Sections')
						.items([
							S.listItem()
								.title('Banner Section')
								.icon(TbSectionSign)
								.child(S.editor().schemaType('blog').documentId('blog')),
							S.listItem()
								.title('Letters to the Parish')
								.icon(FaPenFancy)
								.child(
									S.documentList()
										.schemaType('post')
										.title('Blog Posts')
										.filter('_type == "post"')
								),
							S.listItem()
								.title('Authors')
								.icon(MdPeople)
								.child(
									S.documentList()
										.schemaType('author')
										.title('Authors')
										.filter('_type == "author"')
								),
						])
				),
			S.listItem()
				.title('Dummy Docs')
				.child(S.documentTypeList('dummyAssetDoc').title('Dummy Docs')),
		]);
