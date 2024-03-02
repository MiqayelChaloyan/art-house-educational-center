import { type SchemaTypeDefinition } from 'sanity';

import art_house_center from './schemas/art-house';
import art_house_design from './schemas/design';
import art_house_itm from './schemas/it-m';
import art_house_language from './schemas/language';
import art_house_educational_center from './schemas/educational-center';

export const schemaTypes = [
  art_house_center,
  art_house_design,
  art_house_itm,
  art_house_language,
  art_house_educational_center
];

export const schema: { types: SchemaTypeDefinition[] } = {
  types: schemaTypes,
}
