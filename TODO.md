# Items Left to Dooooo

## TODO General

- [x] fix type error in Dummy Docs Schema
- [ ] Convert component that fetch from multiple endpoints to fetch in parallel - guide: https://www.youtube.com/watch?v=-Sj05H2AuW8
- [x] Change Staff and Clergy menu to "Clergy & People"
- [x] Add all links to Navbar --> first create dynamic pages for Parish Events
- [x] Add announcements Schema / Component / Navigation - to home page
- [x] Add Icon Picker ? (Optional) https://npm.io/package/sanity-plugin-icon-picker -- Icons for Front End and in particular for the footer
- [ ] Add API calls for all header component - example AboutUs.tsx - to be done for all pages
- [ ] Locaiotn section -- move box out of map -- make schema for box info
- [ ] Add featureVerse to all pages with banner -- update schemas, update groq queries, update components - example WorshipBanner.tsx
- [ ] 404 page - seek and ye shall find
- [ ] Create fallback content in separate internal file for all api calls if no data is returned / undefined / null
- [ ] Fallbacks for all images
- [ ] Fallbacks for all fetched text
- [x] Build out Calendar of Events page
- [ ] Meta tags for all pages -- check layout.tsx from about for example
- [ ] check that all banners and images use image builder for all images
- [ ] checkout all images from Sanity for crop and hotspots - example of working scenario - worship.shceduleImage
- [ ] loading pages or spinners / skeleton for components -- skeleton example in Parish Events page
- [x] Calendar and Events instead of All Events
- [ ] Add Sanity Schema field and Groq for all Header Titles. Change Headers to fetch data? Need to think this one through
- [x] Change deskStructure so Banner and general page content is in own studio pane in singleton form. Then event docs on on pane with multiple docs allowable. Need to change so title and slug are added to event. Currently have primary page title populated with test data. Also must reformat preview as current implementation does not render event title
- [ ] Refactor ALL components to call data from props instead of directly from Sanity - may requrie refactoring most layout.tsx and page.tsx components to pass data down to children
- [ ] Implement email sending using formspree or emailjs or Resend:
  - [ ] Resend: https://resend.com/docs/send-with-nextjs
  - [ ] Resend + Verecel Edge Functions: https://resend.com/docs/send-with-vercel-edge-functions
  - [ ] Resend guide: https://www.youtube.com/watch?v=T2xaiw7VK4A

## TODO Navigation

- [ ] Ensure all links are to correct paths - mobile
- [x] Ensure all links are to correct paths - desktop
- [x] Center Navigation and Title on medium (ipad type) screens
- [x] Add option to show items on nav via Sanity setting - currently all items are mapped only if type == recurring - Could simply hard code a few non-rucurring items (i.e. Refugee Sponsorship)

## TODO Landing Page

- [x] Upload and render images for Quick links
- [x] Quick Link to be made responsive
- [x] External links editable in Studio - Pastoral Care link overwrrite and hard coded to internal page
- [x] Map and Content to be parsed to own component and rendered in parent
- [x] Map to be made responsive
- [x]if schedule grows to more items, map will need to flow or image added below map.
- [x] Test schedule items for overflow and make responsive if needed
- [x] Calendar of events thumbnail
- [x] Hamburger Menu closed on load
- [x] map and schedule to be made responsive on medium screens
- [x] calendarEvents schema - description to be reference of Event page description? - use clamp to shorten on calendar component
- [x] Make Calendar component responsive - currently div on right pushes outside screen
- [x] data fetched via client side -- add loading component for calendar
- [x] fetch contact info from Contact groq ?
- [x] Make calendar list item clickable to go to event page
- [x] Match colour to large calendar component

## TODO About Page

- [x] Add Location Component
- [x] Add Location Header
- [x] add Location Schema with header and subheader for map contanct.
- [x] Remove "Description" from schema
- [x] Location page exists here as well -- might be intersting to have just a small bit of info on thel location -- the church's place in the commmunity.
- [x] Remove extra space at bottom of page
- [x] Remove Gradient on About page background
- [x] Conditioanlly render "contact" button for wardens
- [x] Change button on contact card for staff
- [x] Remove description from the about / our history schema
- [x] Add Verse and Verse attribution to smallImage banner schema
- [ ] Add main banner verse and verse attributtion
- [x] Move block inside map to above map
- [x] Put map in container with x margin
- [ ] Add featureVerseQuote to attribute the verse or author to schema, groq and implement in block quote (both banner component and faq component)
- [ ] Hide header if staff type does not exist

## TODO Worship Page

- [x] Add featureVerseQuote to attribute the verse or author to schema, groq and implement in block quote (both banner component and faq component)
- [x] Add fallbacks for verse and attribute
- [x] Fix banner image above schedules - change opacity to mask? Add text option for quote? Ensure text is not opaque
- [ ] Full Sermons section
- [ ] Re-write descriptions to indicate to use where things will appear - make more clear
- [ ] Check all quotes are using the `<RiDoubleQuotesR />` icon instead of svg
- [ ] our vison arao -- our covenant in ministry
- [x] Flex-col or vertical stack on image and content in the "what to expect" section

## TODO Parish Events Page

- [x] Allow for dynamic events to be made and then rendered via title in Navbar
- [x] Create dynamic pages like blogroll for events
- [ ] Change Events Banner Image and query from parish Events instead of worship
- [ ] Add featureVerseQuote to attribute the verse or author to schema, groq and implement in block quote (both banner component)
- [x] Create Groq for General Page
- [x] Create Groq for Event specific page
- [ ] implement parallel fetching
- [x] Event time on events list? -- need to add, schema, groq, and component
- [x] Add centering styles and Image manipulation (hotspot and crop? ) etc for RicheText Editor
- [ ] Dynamic Event page - mobile view
- [ ] Large Calendar component - center title and "today" button on mobile - add padding to sides of calendar

## TODO Contact Page

- [ ] Add in Contact info above general form
- [ ] Secondary Form for Pastoral Care / or use same one or only use form for pastoral care? -- I think this is the best option
- [ ] Social Media Links
- [ ] Add styling to forms

  - [ ] Fonts
  - [ ] Colours
  - [ ] Responsiveness

  ## TODO Footer

  - [x] Add Social Media Links
  - [x] Add quick links

## Need from Benj

- [ ] Mailer / Subscription host?
- [ ] Domain information
- [ ] Any background on location? Demographics, Attractions etc that could be added to map
- [ ] Social Media Links
- [x] ANOUNCEMENTS ?
-
