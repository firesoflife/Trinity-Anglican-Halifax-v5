/**
 * This configuration is used to for the Sanity Studio that’s mounted on the `/app/studio/[[...index]]/page.tsx` route
 */

import { visionTool } from '@sanity/vision'
import {  defineConfig } from 'sanity'
import { deskTool } from 'sanity/desk'
import { deskStructure } from './sanity/lib/deskStructure'
import { media } from 'sanity-plugin-media'


// Go to https://www.sanity.io/docs/api-versioning to learn how API versioning works
import { apiVersion, dataset, projectId } from './sanity/env'
import { schema } from './sanity/schema'
import { myTheme } from './theme'
import Logo from './app/(site)/components/Images/Logo'
import StudioNavbar from './sanity/components/StudioNavbar'

const singletonTypes = new Set(['home', 'about', 'ourHistory', 'staffList', 'worship', 'card', 'contactUs', 'rental', 'pastoralCare', 'facilityRental'])

export default defineConfig({
  basePath: '/studio',
  projectId,
  name: 'Trinity_Anglican_Church_Content_Studio',
  title: 'Trinity Content Studio',
  dataset,
  // Add and edit the content schema in the './sanity/schema' folder
  schema: {
    ...schema,
    templates: 
    (templates) =>
      templates.filter(({ schemaType }) => !singletonTypes.has(schemaType)),
  },

  plugins: [
    deskTool({
      structure: deskStructure,
    }),
    // Vision is a tool that lets you query your content with GROQ in the studio
    // https://www.sanity.io/docs/the-vision-plugin
    visionTool({ defaultApiVersion: apiVersion }),
    media()
  ],

 studio: {
    components: {
      logo: Logo,
      navbar: StudioNavbar,

    }
    
  },
  theme: myTheme,
})
