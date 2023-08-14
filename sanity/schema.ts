import { type SchemaTypeDefinition } from 'sanity'
import { home } from './schemas/pages/homeSchema'
import { about } from './schemas/pages/aboutSchema'
import { ourHistory } from './schemas/components/about/ourHistory'
import { staff } from './schemas/components/about/staff'
import { staffList } from './schemas/components/about/staffList'
import { worship } from './schemas/pages/worshipSchema'
import { worshipSchedule } from './schemas/components/worship/worshipSchedule'
import { sermon } from './schemas/components/worship/sermon'
import { speaker } from './schemas/components/worship/speaker'
import { rental } from './schemas/pages/facilityRentalSchema'
import socialMediaPlatform from './schemas/components/contact/socialMedia'
import { contactUs } from './schemas/pages/contactSchema'
import { pastoralCare } from './schemas/components/contact/pastoralCare'
import quickLinks from './schemas/components/home/quickLinks'


export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    home,
    about,
    ourHistory,
    staff,
    staffList,
    worship,
    worshipSchedule,
    sermon,
    speaker,
    rental,
    socialMediaPlatform,
    contactUs,
    pastoralCare,
    quickLinks
  ],
}
