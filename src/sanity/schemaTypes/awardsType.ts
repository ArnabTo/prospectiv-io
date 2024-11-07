import { defineField, defineType } from "sanity";
import { DocumentTextIcon } from '@sanity/icons'

export const awardsType = defineType({
    name: 'awards',
    title: 'Awards',
    type: 'document',
    icon: DocumentTextIcon,
    fields: [
        defineField({
            name: 'title',
            type: 'string',
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: 'slug',
            type: 'slug',
            options: {
                source: 'title',
            },
        }),
        defineField({
            name: 'award_name',
            type: 'text',
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: 'category', // Add the option field here
            title: 'Category',
            type: 'string',
            options: {
                list: [
                    { title: 'Gold', value: 'gold' },
                    { title: 'Silver', value: 'silver' },
                    { title: 'Bronze', value: 'bronze' },
                ],
                layout: 'dropdown', // Optional, can also be 'radio' for radio buttons
            },
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: 'year',
            type: 'string',
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: 'award_url',
            type: 'url',
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: 'thumbnail',
            type: 'image',
            options: {
              hotspot: true,
            },
            fields: [
              {
                name: 'alt',
                type: 'string',
                title: 'Alternative text',
              }
            ]
          }),
    ],
})