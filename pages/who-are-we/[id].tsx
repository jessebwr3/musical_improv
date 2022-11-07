import { Group } from '@mantine/core';
import { motion } from 'framer-motion';
import { GetServerSideProps } from 'next';
import { getAssetUrl, getTeammateById, OneItemTeammate } from '../../cms/directus';

export const getServerSideProps: GetServerSideProps = async (context) => {
  const id = context.query.id as string;
  const teammate = await getTeammateById(id);

  return { props: { teammate } };
};

export default function PersonPage({ teammate }: { teammate: OneItemTeammate }) {
  if (!teammate) {
    return <div>Umm this is not a real person on our team</div>;
  }

  return (
    <Group style={{ paddingTop: '30px' }}>
      <motion.img
        src={getAssetUrl(teammate?.primary_image)}
        style={{ height: '80vh' }}
        whileHover={{ scale: 1.1 }}
        transition={{ type: 'spring', bounce: 0.4 }}
      />
      <div dangerouslySetInnerHTML={{ __html: teammate?.my_story }} />
    </Group>
  );
}
