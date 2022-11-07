import { Directus, OneItem, QueryOne } from '@directus/sdk';

// Map your collection structure based on its fields.
type Teammate = {
  id: string;
  sort: number;
  my_story: string;
  primary_image: string;
  photos?: [string];
};

// Map your collections to its respective types. The SDK will
// infer its types based on usage later.
type App = {
  // [collection_name]: typescript_type
  teammates: Teammate;
};

export type OneItemTeammate = OneItem<Teammate, QueryOne<Teammate>, false>;
export type Teammates = OneItemTeammate[] | null | undefined;

const rootUrl = 'https://musical-improv-nyc.fly.dev';

const directus = new Directus<App>(rootUrl);

const teammatesCollection = directus.items('teammates');

export const getTeammates = async (): Promise<Teammates> => {
  const teammatesQuery = await teammatesCollection.readByQuery({ limit: -1 });

  return teammatesQuery.data;
};

export const getTeammateById = async (id?: string): Promise<OneItemTeammate> => {
  if (!id) {
    return null;
  }

  const teammate = await teammatesCollection.readOne(id);
  return teammate;
};

export const getAssetUrl = (id?: string) => `${rootUrl}/assets/${id}`;

export default directus;
