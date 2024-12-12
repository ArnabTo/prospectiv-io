import { DocumentTextIcon } from '@sanity/icons'
import { defineField, defineType} from 'sanity'

export const testimonialType = defineType({
  name: 'testimonial',
  title: 'Testimonial',
  type: 'document',
  icon: DocumentTextIcon, 
  fields: [
    defineField({
      name: 'name',
      type: 'string',
    }),
    defineField({
        name: 'position',
        title: 'Position',
        type: 'string',
    }),
    defineField({
      name: 'testimonial',
      type: 'string',
    }),

    defineField({
      name: 'avatar',
      title: 'Client Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'logo',
      title: 'Company Logo',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
        name: 'rating',
        title: 'Rating',
        type: 'number',
        validation: (Rule) => Rule.required().error('Rating is required'),
    }),

  ],
  preview: {
    select: {
      title: 'name',
      media: 'logo',
    },
  },
})
