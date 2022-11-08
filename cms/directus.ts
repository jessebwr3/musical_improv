import { Directus, Item, OneItem, QueryOne } from '@directus/sdk';

// Map your collection structure based on its fields.
type Teammate = {
  id: string;
  sort: number;
  my_story: string;
  primary_image: string;
  photos?: [string];
};

type Show = {
  id: number;
  date: string;
  title: string;
  description: string;
  location: string;
};

// Map your collections to its respective types. The SDK will
// infer its types based on usage later.
type App = {
  // [collection_name]: typescript_type
  teammates: Teammate;
  shows: Show;
};

type OneItemTemplate<T extends Item> = OneItem<T, QueryOne<T>, false>;
type MultiItemTemplate<T> = T[] | null | undefined;

export type OneItemShow = OneItemTemplate<Show>;
export type Shows = MultiItemTemplate<OneItemShow>;
export type OneItemTeammate = OneItemTemplate<Teammate>;
export type Teammates = MultiItemTemplate<OneItemTeammate>;

const rootUrl = 'https://musical-improv-nyc.fly.dev';

const directus = new Directus<App>(rootUrl);

const teammatesCollection = directus.items('teammates');
const showsCollection = directus.items('shows');

const getShowsData = async (future: boolean) => {
  const showsQuery = await showsCollection.readByQuery({
    sort: [future ? 'date' : '-date'],
    filter: {
      date: {
        [future ? '_gte' : '_lte']: '$NOW',
      },
    },
  });

  return showsQuery.data;
};

export const getFutureShows = async (): Promise<Shows> => getShowsData(true);

export const getPastShows = async (): Promise<Shows> => getShowsData(false);

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
