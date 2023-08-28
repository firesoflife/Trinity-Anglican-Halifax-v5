import { client } from "@/sanity/lib/client";
import { groq } from "next-sanity";

export async function getStaff(): Promise<Staff> {
  return client.fetch(
    groq`
      *[_type == "staff"][0]{
        name,
        role,
        "imageUrl": image.asset->url,
        bio,
        email
      }
    `
  ).catch(err => {
    console.error('Error fetching staff:', err);
  });
}