import { defineType } from "sanity";
import {BookIcon} from '@sanity/icons'

export const guideType = defineType({
    name: 'guide',
    title: 'Guide',
    type: 'document',
    icon: BookIcon,
    fields: [
      {
        name: 'title',
        title: 'Title',
        type: 'string',
      },
      {
        name: 'slug',
        title: 'Slug',
        type: 'slug',
        options: {
          source: 'title',
        },
      },
      {
        name: 'thumbnail',
        title: 'Thumbnail',
        type: 'image',
        options: {
          hotspot: true,
        },
      },
      {
        name: 'body',
        title: 'Body',
        type: 'array',
        of: [{ type: 'block' }],
      },
      {
        name: 'download_link',
        title: 'Download Link',
        type: 'url',
      },
      {
        name: 'content_type',
        title: 'Content Type',
        type: 'string',
        initialValue: 'Guide',
        readOnly: true,
      },
    ],
    preview: {
        select: {
          title: 'title',
          media: 'thumbnail',
        },
      },
})