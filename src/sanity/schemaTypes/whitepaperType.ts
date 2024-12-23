import { DocumentTextIcon } from "@sanity/icons";
import { defineField, defineType } from "sanity";

export const whitepaperType = defineType({
    name: 'whitepaper',
    title: 'Whitepaper',
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
        {
            name: 'content_type',
            title: 'Content Type',
            type: 'string',
            hidden: true,
            initialValue: 'Whitepaper',
          },
    ],
    preview: {
        select: {
            title: 'title',
            media: 'thumbnail',
        },
    },
})