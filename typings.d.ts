 type Base = {
    _createdAt: Date;
    _id: string;
    _rev: string;
    _type: string;
    _updatedAt: Date;
 };


 interface Home extends Base {
    pageTitle: string,
    slug: Slug,
    welcomeHeading: string,
    welcome: string,
    welcomeImage: Image,
    alt: string
 }

 interface QuickLinkCardProps {
	imageSrc: string;
	header: string;
	subheader: string;
	content: string;
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
   imageUrl: string;
  bio: string;
  email: string;
}
