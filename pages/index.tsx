import { Welcome } from '../components/Welcome/Welcome';
import { getFutureShows, getTeammates, Shows, Teammates } from '../cms/directus';

// This gets called on every request
export async function getServerSideProps() {
  const teammates = await getTeammates();
  const upcomingShows = await getFutureShows();
  // Pass data to the page via props
  return { props: { teammates, upcomingShows } };
}
export default function HomePage({
  teammates,
  upcomingShows,
}: {
  teammates: Teammates;
  upcomingShows: Shows;
}) {
  return (
    <>
      <Welcome teammates={teammates} upcomingShows={upcomingShows} />
    </>
  );
}
