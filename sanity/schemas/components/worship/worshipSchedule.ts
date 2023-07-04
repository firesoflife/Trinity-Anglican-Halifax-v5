import { MdEvent } from 'react-icons/md';
// import { ValidationContext, Preview } from '../../../../types';
import { ValidationContext } from '@sanity/types';
import { Preview } from 'sanity';
import { defineType, defineField } from 'sanity';

export const worshipSchedule = defineType({
  name: 'worshipSchedule',
  title: 'Worship Schedule',
  type: 'document',
  icon: MdEvent,
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      description: 'The title of the event',
      validation: (Rule) => Rule.required().min(10).max(80)
    },
    {
      name: 'eventType',
      title: 'Event Type',
      type: 'string',
      options: {
        list: [
          { title: 'Regular Service', value: 'regularService' },
          { title: 'Special Service', value: 'specialService' }
        ],
        layout: 'radio',
      },
      validation: (Rule) => Rule.required()
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text',
      description: 'A short description of the event',
    },
    {
      name: 'date',
      title: 'Date',
      type: 'date',
      options: {
        dateFormat: 'MMMM Do YYYY',
      },
      description: 'The date of the event (for unique events)',
      validation: (Rule) => Rule.custom((field, context) => {
        if (context.document && (context.document).eventType === 'specialService' && !field) {
          return 'A date is required for special services'
        }
        return true
      }),
      hidden: ({ document }: { document: any }) => document.eventType === 'regularService',
    },
    {
      name: 'startTime',
      title: 'Start Time',
      type: 'string',
      description: 'The start time of the event(e.g., 9:00 AM)',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'endTime',
      title: 'End Time',
      type: 'string',
      description: 'The end time of the event or service(e.g., 10:00 AM)',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'daysOfWeek',
      title: 'Days of the Week',
      type: 'array',
      description:
        'The days of the week when this event or service occurs (for regular services)',
      of: [{ type: 'string' }],
      options: {
        list: [
          { title: 'Sunday', value: 'sunday' },
          { title: 'Monday', value: 'monday' },
          { title: 'Tuesday', value: 'tuesday' },
          { title: 'Wednesday', value: 'wednesday' },
          { title: 'Thursday', value: 'thursday' },
          { title: 'Friday', value: 'friday' },
          { title: 'Saturday', value: 'saturday' },
        ],
      },
      validation: (Rule) => Rule.custom((field, context) => {
        if (context.document && (context.document).eventType === 'regularService' && !field) {
          return 'Days of the week are required for regular services'

        }
        return true
      })
    }
  ],

  //////////// PREVIEW //////////////
  preview: {
    select: {
      title: 'title',
      eventType: 'eventType',
      date: 'date',
      startTime: 'startTime',
      endTime: 'endTime',
      daysOfWeek: 'daysOfWeek',
    } as Record<string, string>,
    prepare(selection: Record<string, any>) {
      const {
        title,
        eventType,
        date,
        startTime,
        endTime,
        daysOfWeek
      } = selection;

      const formatDate = (dateStr: any) => {
        const dateObj = new Date(dateStr);
        return dateObj.toLocaleDateString('en-US', {
          year: 'numeric',
          month: 'long',
          day: 'numeric',
        });
      };

      const subtitle =
        eventType === 'regularService'
          ? `Regular Service: ${daysOfWeek.join(
            ', '
          )} (${startTime} - ${endTime})`
          : `Unique Event: ${formatDate(date)} (${startTime} - ${endTime})`;

      return {
        title: title,
        subtitle: subtitle,
      }
    },
  }


})