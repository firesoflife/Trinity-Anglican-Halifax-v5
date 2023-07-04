import { Rule, ValidationContext, SanityDocument, ImageHotspot } from '@sanity/types';

//  Sanity Types
export type { Rule, ValidationContext, SanityDocument }

export type Preview = {
  select: {
    title: string;
    eventType: string;
    date: string;
    startTime: string;
    endTime: string;
    daysOfWeek: string[];
  };
  prepare: (args: {
    title: string;
    eventType: string;
    date: string;
    startTime: string;
    endTime: string;
    daysOfWeek: string[];
  }) => string | any; // Replace 'any' with the expected return type of the prepare function
};

export type Sermon = {
  _id: string;
  _createdAt: string;
  title: string;
  subtitle: string;
  speaker: string;
}