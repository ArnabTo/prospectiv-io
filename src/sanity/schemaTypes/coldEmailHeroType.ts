import { DocumentTextIcon } from '@sanity/icons'
import { defineField, defineType} from 'sanity'

export const coldEmailHeroType = defineType({
  name: 'coldemailherodata',
  title: 'Cold Email Hero Section',
  type: 'document',
  icon: DocumentTextIcon, 
  fields: [
    defineField({
      name: 'headline',
      type: 'string',
    }),
    defineField({
        name: 'slug',
        type: 'slug',
        options: {
          source: 'headline',
        },
      }),
    defineField({
      name: 'subline',
      type: 'string',
    }),

    defineField({
      name: 'bannerImageOne',
      title: 'Banner Image 1',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),

    defineField({
      name: 'bannerImageTwo',
      title: 'Banner Image 2',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),

    defineField({
      name: 'bannerImageThree',
      title: 'Banner Image 3',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),

  ],
  preview: {
    select: {
      title: 'headline',
      media: 'bannerImage',
    },
  },
})
