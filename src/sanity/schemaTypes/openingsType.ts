import { CaseIcon } from '@sanity/icons'
import { defineArrayMember, defineField, defineType } from 'sanity'

export const openingsType = defineType({
    name: 'openings',
    title: 'Openings',
    type: 'document',
    icon: CaseIcon,
    fields: [
        defineField({
            name: 'title',
            type: 'string',
        }),
        defineField({
            name: 'slug',
            type: 'slug',
            options: {
                source: 'title',
            },
        }),
        defineField({
            name: 'type',
            type: 'string',
        }),
        defineField({
            name: 'location',
            type: 'string',
        }),
        defineField({
            name: 'description',
            type: 'blockContent',
        }),
        defineField({
            name: 'link',
            type: 'url',
        }),
        defineField({
            name: 'publishedAt',
            type: 'datetime',
        }),
        defineField({
            name: 'deadline',
            type: 'datetime',
        })
    ],
    preview: {
        select: {
            title: 'title',
        },
    },
})
