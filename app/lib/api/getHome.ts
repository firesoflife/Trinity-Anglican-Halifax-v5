import { client } from "@/sanity/lib/client";
import { groq } from "next-sanity";

export async function getHome(): Promise<Home> {

  return (client).fetch(

    groq`
    *[_type == "home"][0]{
      _id,
      _createdAt,
      pageTitle,
      "slug": slug.current,
      navbarTitle,
      "logo": logo.asset->url,
      bannerTitle,
      welcome,
      welcomeHeading,
      "welcomeImage": welcomeImage.asset->url,
      "welcomeImageAlt": welcomeImage.alt,
    }
    `
  )
}