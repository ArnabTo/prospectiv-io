import {UserIcon} from '@sanity/icons'
import {defineArrayMember, defineField, defineType} from 'sanity'

export const googleAdsHeroType = defineType({
  name: 'googleherodata',
  title: 'Google Hero Section',
  type: 'document',
  icon: UserIcon,
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
