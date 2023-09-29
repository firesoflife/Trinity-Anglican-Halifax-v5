 type Base = {
    _createdAt: Date;
    _id: string;
    _rev: string;
    _type: string;
    _updatedAt: Date;
 };


 interface Home extends Base {
    pageTitle: string,
    logo: 'Image',
    bannerTitle: string,
    navbarTitle: string,
    slug: Slug,
    welcomeHeading: string,
    welcome: string,
    welcomeImage: Image,
    alt: string,
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
   body: Array<Block | Image>
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

interface Worship extends Base{
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
  _id: string;
  title: string;
  description: string;
  startTime: string;
  endTime: string;
  daysOfWeek: string[];
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

interface ParishEvent extends Base {
  title: string;
  slug: Slug;
  description: string;
  image: Image;
}

interface Event extends Base {
  title: string;
  date: Date;
  description: ParishEvent;
}