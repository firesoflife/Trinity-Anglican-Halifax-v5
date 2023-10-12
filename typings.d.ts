type Base = {
	_createdAt: Date;
	_id: string;
	_rev: string;
	_type: string;
	_updatedAt: Date;
};

// interface Image {
// 	asset: {
// 		_id: string;
// 		url: string;
// 	};
// 	crop: any;
// 	hotspot: any;
// }

interface Slug {
	current: string;
}
interface Home extends Base {
	pageTitle: string;
	logo: 'Image';
	bannerTitle: string;
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
	primaryImage: Image;
	smallImage: Image;
	body: Array<Block | Image>;
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

interface ContactUs extends Base {
	pageTitle: string;
	slug: Slug;
	days: Array<{
		day: string;
		from: string;
		to: string;
	}>;
	email: string;
	phone: string;
	preview: {
		select: {
			title: string;
			subtitle: string;
		};
	};
}

interface ContactUsDay {
	day: string;
	from: string;
	to: string;
}

interface ContactUsPreview {
	select: {
		title: string;
		subtitle: string;
	};
}

interface FacilityRental extends Base {
	title: string;
	subtitle: string;
	description: string;
	capacity: number;
	image: Image;
	fileUrl: string;
	preview: {
		select: {
			title: string;
			subtitle: string;
			media: string;
		};
	};
}

interface FacilityRentalPreview {
	select: {
		title: string;
		subtitle: string;
		media: string;
	};
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
