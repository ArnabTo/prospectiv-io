import { defineField, defineType } from "sanity";
import { StarFilledIcon } from '@sanity/icons'

export const successstoryType = defineType({
    name: 'successstory',
    title: 'Success Story',
    type: 'document',
    icon: StarFilledIcon,
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
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: 'company_website',
            type: 'url',
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: 'company_location',
            type: 'string',
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: 'company_service',
            type: 'string',
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: 'deal_cycle',
            type: 'string',
        }),
        defineField({
            name: 'target_location',
            type: 'string',
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: 'company_size',
            type: 'string',
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: 'role',
            type: 'string',
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: 'cost_per_lead',
            type: 'number',
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: 'lead_rate',
            type: 'number',
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: 'response_rate',
            type: 'number',
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: 'body',
            type: 'blockContent',
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: 'created_at',
            type: 'datetime',
        }),
        defineField({
            name: 'video_url',
            type: 'url',
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
        defineField({
            name: 'company_logo',
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
    preview: {
        select: {
            title: 'title',
            media: 'thumbnail',
        },
    },
})