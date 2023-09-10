import { groq } from 'next-sanity';
import { client } from '@/sanity/lib/client';

export async function getRegularServices(): Promise<RegularService[]> {
  return client.fetch(
    groq`*[_type == "regularService"]{
      _id,
      title,
      description,
      startTime,
      endTime,
      daysOfWeek
    }`
  );
}

export async function getSpecialServices(): Promise<SpecialService[]> {
  return client.fetch(
    groq`*[_type == "specialService"]{
      _id,
      title,
      description,
      date,
      startTime,
      endTime,
      daysOfWeek
    }`
  );
}