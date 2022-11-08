import { getFutureShows, Shows } from '../cms/directus';
import ShowList from '../components/showList';

// This gets called on every request
export async function getServerSideProps() {
  const upcomingShows = await getFutureShows();
  // Pass data to the page via props
  return { props: { upcomingShows } };
}

export default function UpcomingShowsPage({ upcomingShows }: { upcomingShows: Shows }) {
  return <ShowList shows={upcomingShows} />;
}
