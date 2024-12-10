import { DocumentTextIcon } from '@sanity/icons'
import { defineField, defineType} from 'sanity'

export const linkedInAdsHeroType = defineType({
  name: 'linkedinherodata',
  title: 'LinkedIn Hero Section',
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
      name: 'bannerImage',
      title: 'Banner Image',
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
