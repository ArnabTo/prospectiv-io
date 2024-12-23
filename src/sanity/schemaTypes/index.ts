import { type SchemaTypeDefinition } from 'sanity'

import { blockContentType } from './blockContentType'
import { categoryType } from './categoryType'
import { postType } from './postType'
import { authorType } from './authorType'
import { openingsType } from './openingsType'
import { webinarType } from './webinarType'
import { whitepaperType } from './whitepaperType'
import { guideType } from './guideType' 
import { userDataType } from './userDataType'
import { successstoryType } from './successstoryType'
import { awardsType } from './awardsType'
import { googleAdsHeroType } from './googleHeroType'
import { linkedInAdsHeroType } from './linkedinHeroType'
import { coldEmailHeroType } from './coldEmailHeroType'
import { testimonialType } from './testimonialType'


export const schema: { types: SchemaTypeDefinition[] } = {
  types: [blockContentType,
    categoryType,
    postType,
    authorType,
    openingsType,
    guideType,
    webinarType,
    whitepaperType,
    userDataType,
    successstoryType,
    awardsType,
    googleAdsHeroType,
    linkedInAdsHeroType,
    coldEmailHeroType,
    testimonialType
  ],
}
