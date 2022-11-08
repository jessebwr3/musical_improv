import { getPastShows, Shows } from '../cms/directus';
import ShowList from '../components/showList';

// This gets called on every request
export async function getServerSideProps() {
  const previousShows = await getPastShows();
  // Pass data to the page via props
  return { props: { previousShows } };
}
export default function PreviousShowsPage({ previousShows }: { previousShows: Shows }) {
  return (
    <>
      <ShowList shows={previousShows} />
    </>
  );
}
