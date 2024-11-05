import { defineField, defineType } from "sanity";
import { UserIcon } from "@sanity/icons";


export const userDataType = defineType({
    name: 'userData',
    title: 'User Data',
    type: 'document',
    icon: UserIcon,
    fields: [
        defineField({
            name: 'name',
            type: 'string',
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: 'email',
            type: 'string',
            validation: (Rule) => Rule.required(),
        }),
    ],
})