// TODO - Broken system trying to keep integrity of drag and drop in Sanity desk - need to reprioritze  1) Build Staff List like blogroll - allow naming scheme for sorting in NextJS - sort by roles 2) Allow for some ordering in Sanity using the order function - clumsy as order set by manual numbering scheme and numbers can be duplicated and with many staff can become messy and hard to track

import { groq } from "next-sanity";
import { client } from "@/sanity/lib/client";

export async function getStaff(): Promise<Staff[]> {
  return client.fetch(
    groq`
      *[_type == "staff"]{
          ...,
          name,
          role,
          "imageUrl": image.asset->url,
          bio,
          email
        }
    `
  );
}

