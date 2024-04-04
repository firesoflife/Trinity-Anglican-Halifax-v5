type Base = {
	_createdAt: Date;
	_id: string;
	_rev: string;
	_type: string;
	_updatedAt: Date;
};

interface Slug {
	current: string;
}
interface Home extends Base {
	pageTitle: string;
	logo: 'Image';
	bannerTitle: string;
	bannerSubtitle: string;
	navbarTitle: string;
	slug: Slug;
	welcomeHeading: string;
	welcome: string;
	welcomeImage: Image;
	alt: string;
	pastoralCare: string;
}

interface QuickLinkCardProps {
	imageSrc: string;
	header: string;
	subheader?: string;
	content: string;
	alt: string;
	cta?: {
		text: string;
		link: string;
	} | null;
}

interface About extends Base {
	title: string;
	slug: Slug;
	description: string;
	bannerImage: Image;
	bannerVerse: string;
	bannerVerseAttribution: string;
	smallImage: Image;
	middleBannerImage: Image;
	middleBannerVerse: string;
	middleBannerVerseAttribution: string;
	body: Array<Block | Image>;
}

interface Blog extends Base {
	title: string;
	bannerImage: Image;
	bannerVerse: string;
	bannerVerseAttribution: string;
}

interface Post extends Base {
	title: string;
	slug: Slug;
	description: string;
	author: Author;
	mainImage: Image;
	alt: string;
	publishedAt: Date;
	body: Block[];
}

interface Image extends Base {
	_type: 'image';
	asset: Reference;
}

interface SinglePost extends Base {
	author: Author;
	body: Block[];
	categories: category[];
	mainImage: Image;
	slug: Slug;
	title: string;
	description: string;
}
// interface Author extends Base {
// 	name: string;
// 	image: Image;
// 	slug: Slug;
// 	alt: string;
// 	bio: string;
// }

interface Covenant extends Base {
	title: string;
	covenantBannerImage: Image;
	bannerVerse: string;
	bannerVerseAttribution: string;
	covenantFile: File | asset;
	covenantFileUrl: string;
}

interface Author extends Base {
	name: string;
	slug: Slug;
	image: Image;
	bio: Block[];
}

interface Block {
	_key: string;
	_type: 'block';
	children: Span[];
	markDefs: any[];
	style: 'normal' | 'h1' | 'h2' | 'h3' | 'h4' | 'blockquote';
}

interface Span {
	_key: string;
	_type: 'span';
	marks: string[];
	text: string;
}

interface Staff extends Base {
	[x: string]: any;
	name: string;
	role: string;
	imageUrl: SanityImageSource;
	bio: string;
	email: string;
}

interface StaffCardProps {
	staffMember: Staff;
}

interface StaffCardMember extends Base {
	_id: string;
	name: string;
	role: string;
	imageUrl: SanityImageSource;
	bio: string;
	email: string;
}

interface Worship extends Base {
	pageTitle: string;
	slug: { current: string };
	mainContent: string;
	bannerVerse: string;
	bannerVerseAttribution: string;
	expectVerse: null;
	expectVerseAttribution: string;
	item1: string;
	item1Content: string;
	item2: string;
	item2Content: string;
	item3: string;
	item3Content: string;
	bannerImage: Image;
	expectImage: Image;
	scheduleImage: Image;
	scheduleBannerVerse: string;
	scheduleBannerVerseAtt: string;
	regularScheduleHeader: string;
	specialScheduleHeader: string;
}

interface AccordionItem {
	id: string;
	title: string;
	content: string;
}

interface RegularService extends Base {
	title: string;
	description: string;
	startTime: string;
	endTime: string;
	daysOfWeek: string[];
	preview: {
		select: {
			title: string;
			description: string;
			startTime: string;
			endTime: string;
			daysOfWeek: string[];
		};
		prepare(selection: RegularServiceSelection): {
			title: string;
			subtitle: string;
			media: JSX.Element;
		};
	};
}

interface Sermon extends Base {
	title: string;
	slug: Slug;
	speaker: Speaker;
	audio: File;
	audioUrl: string;
	description: string;
	date: Date;
	tags: string[];
}

interface Speaker extends Base {
	name: string;
	slug: Slug;
	bio: string;
}

interface RegularServiceSelection {
	title: string;
	description: string;
	startTime: string;
	endTime: string;
	daysOfWeek: string[];
}

interface RegularServicePrepare {
	title: string;
	subtitle: string;
	media: JSX.Element;
}

interface SpecialService extends Base {
	_id: string;
	title: string;
	description: string;
	date: string;
	startTime: string;
	endTime: string;
	daysOfWeek: string[];
}

type Day = {
	day:
		| 'monday'
		| 'tuesday'
		| 'wednesday'
		| 'thursday'
		| 'friday'
		| 'saturday'
		| 'sunday';
	from: string;
	to: string;
};

interface ContactUs extends Base {
	pageTitle: string;
	hoursTitle: string;
	formHeading: string;
	contactBannerImage: Image;
	formSubheading: string;
	days: Day[];
	email: string;
	phone: string;
	preview: {
		select: {
			title: string;
			subtitle: string;
			media: Icon;
		};
	};
}

interface IconPickerOptions extends Base {
	// ... define the properties based on the expected shape
	outputFormat: string;
	// ... other properties
}

interface SocialMediaPlatform extends Base {
	platformName: string;
	platformUrl: string;
	icon: {
		provider: string;
		name: string;
	};
}

interface FacilityRental extends Base {
	title: string;
	subtitle: string;
	description: string;
	capacity: number;
	bannerImage: Image;
	bannerVerse: string;
	bannerVerseAttribution: string;
	fileUrl: string;
	preview: {
		select: {
			title: string;
			subtitle: string;
			media: string;
		};
	};
}

interface Gallery extends Base {
	title: string;
	description: string;
	galleryImages: Image[];
	imageUrl: string;
	galleryDetails: {
		select: {
			title: string;
			description: string;
		};
	};
}

interface GalleryDetails extends Base {
	title: string;
	description: string;
}

interface galleryImage extends Base {
	title: string;
	description: string;
	image: Image;
}

interface FacilityRentalGallery extends Base {
	title: string;
	description: string;
	galleryImages: Image[];
}

interface Parish extends Base {
	pageTitle: string;
	slug: string;
	bannerImage: BannerImage;
	bannerVerse: string;
	bannerVerseAttribution: string;
}

// ParishEvents

interface EventDetails {
	eventType: string;
	date: string;
	eventTime: string;
	recurrence: Recurrence;
}

interface Recurrence {
	dayOfWeek: string;
	frequency: string;
	timeOfDay: string;
}

interface ParishEvents extends Base {
	pageTitle: string;
	slug: Slug;
	bannerImage: Image;
	bannerVerse: string;
	bannerVerseAttribution: string;
	eventTitle: string;
	description: string;
	body: Array<Block | Image>;
	primaryImage: Image;
	eventDetails: EventDetails;
	pageBannerImage: Image;
}

interface OneOffEvents extends Base {
	eventTitle: string;
	slug: Slug;
	description: string;
	body: Array<Block | Image>;
	primaryImage: Image;
	eventDetails: EventDetails;
}

interface Parish extends Base {
	pageTitle: string;
	slug: string;
	bannerImage: Image;
	bannerVerse: string;
	bannerVerseAttribution: string;
}

interface SingleParishEvent extends Base {
	eventTitle: string;
	slug: Slug;
	description: string;
	body: Array<Block | Image>;
	primaryImage: Image;
	eventDetails: EventDetails;
	pageBannerImage: Image;
}

interface Blog extends Base {
	title: string;
	bannerImage: Image;
	bannerVerse: string;
	bannerVerseAttribution: string;
}

interface EventDetails {
	eventType?: string;
	date?: string;
	recurrence?: {
		dayOfWeek?: string;
		frequency?: string;
		timeofDay?: string;
	};
}

interface ParishEvent {
	eventTitle?: string;
	eventDetails?: EventDetails;
	[key: string]: any; // for any other properties that might exist on a ParishEvent object
}

interface ParishEventsProps {
	data: ParishEvent[];
}
