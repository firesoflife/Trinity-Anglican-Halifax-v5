import { client } from "@/sanity/lib/client";
import { groq } from "next-sanity";

// export function getHome() {
//     return client.fetch(

//     groq`
    
//     *[_type == "home"]{
//       pageTitle,
//       slug,
//       welcomeHeading,
//       welcome,
//       welcomeImage{
//         asset->{
//           _id,
//           url
//         },
//         alt
//       }
//     }
//     `
//   )

// }

export async function getHome(): Promise<Home> {

  return (client).fetch(

    groq`
    *[_type == "home"][0]{
      _id,
      _createdAt,
      pageTitle,
      "slug": slug.current,
      welcome,
      welcomeHeading,
      "welcomeImage": welcomeImage.asset->url,
      "welcomeImageAlt": welcomeImage.alt,
    }
    `
  )
}