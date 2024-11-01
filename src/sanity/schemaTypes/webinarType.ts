import { DocumentTextIcon } from "@sanity/icons";
import { defineField, defineType } from "sanity";

export const webinarType = defineType({
    name: 'webinar',
    title: 'Webinar',
    type: 'document',
    icon: DocumentTextIcon,
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
            name: 'author',
            type: 'reference',
            to: { type: 'author' },
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
                },
            ],
        }),
        defineField({
            name: 'body',
            type: 'blockContent',
        }),
        defineField({
            name: 'publishedAt',
            title: 'Published at',
            type: 'datetime',
        }),
        defineField({
            name: 'webinar_url',
            type: 'url',
        }),
        {
            name: 'content_type',
            title: 'Content Type',
            type: 'string',
            hidden: true,
            initialValue: 'Webinar',
          },
    ],
    preview: {
        select: {
            title: 'title',
            author: 'author.name',
            media: 'thumbnail',
        },
        prepare(selection) {
            const { author } = selection
            return { ...selection, subtitle: author && `by ${author}` }
        },
    },
})