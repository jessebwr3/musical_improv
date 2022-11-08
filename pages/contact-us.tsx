import { getPastShows } from '../cms/directus';

// This gets called on every request
export async function getServerSideProps() {
  const previousShows = await getPastShows();
  // Pass data to the page via props
  return { props: { previousShows } };
}
export default function ContactUsPage() {
  return <div>Contact us whenever you like!</div>;
}
