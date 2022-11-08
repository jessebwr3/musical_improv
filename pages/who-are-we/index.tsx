import { getTeammates, Teammates } from '../../cms/directus';

// This gets called on every request
export async function getServerSideProps() {
  const teammates = await getTeammates();
  // Pass data to the page via props
  return { props: { teammates } };
}
export default function WhoAreWePage({ teammates }: { teammates: Teammates }) {
  return (
    <>
      {teammates?.map((teammate) => (
        <div id={teammate?.id}>{teammate?.name}</div>
      ))}
    </>
  );
}
