/**
 * This configuration is used to for the Sanity Studio that’s mounted on the `/app/studio/[[...index]]/page.tsx` route
 */

import { visionTool } from '@sanity/vision'
import {  defineConfig } from 'sanity'
import { deskTool } from 'sanity/desk'
import { deskStructure } from './sanity/lib/deskStructure'


// Go to https://www.sanity.io/docs/api-versioning to learn how API versioning works
import { apiVersion, dataset, projectId } from './sanity/env'
import { schema } from './sanity/schema'
import { myTheme } from './theme'
import Logo from './app/(site)/components/Images/Logo'


export default defineConfig({
  basePath: '/studio',
  projectId,
  name: 'Trinity_Anglican_Church_Content_Studio',
  title: 'Trinity Content Studio',
  dataset,
  // Add and edit the content schema in the './sanity/schema' folder
  schema,
  plugins: [
    deskTool({
      structure: deskStructure,
    }),
    // Vision is a tool that lets you query your content with GROQ in the studio
    // https://www.sanity.io/docs/the-vision-plugin
    visionTool({ defaultApiVersion: apiVersion }),
  ],
 studio: {
    components: {
      logo: Logo,
    }
  },
  theme: myTheme,
})
