import { Welcome } from '../components/Welcome/Welcome';
import { getTeammates, Teammates } from '../cms/directus';

// This gets called on every request
export async function getServerSideProps() {
  const teammates = await getTeammates();
  // Pass data to the page via props
  return { props: { teammates } };
}
export default function HomePage({ teammates }: { teammates: Teammates }) {
  return (
    <>
      <Welcome teammates={teammates} />
    </>
  );
}
