import { type SchemaTypeDefinition } from 'sanity'

import { blockContentType } from './blockContentType'
import { categoryType } from './categoryType'
import { postType } from './postType'
import { authorType } from './authorType'
import { openingsType } from './openingsType'
import { webminarType } from './webinarsType'
import { whitepaperType } from './whitepaperType'
import { guideType } from './guideType'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [blockContentType,
    categoryType,
    postType,
    authorType,
    openingsType,
    webminarType,
    whitepaperType,
    guideType],
}
