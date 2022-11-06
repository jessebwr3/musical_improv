import { Group, Text } from '@mantine/core';
import { motion } from 'framer-motion';
import { useRouter } from 'next/router';
import data from '../../json/whoAreWe.json';

const { people } = data;

export default function PersonPage() {
  const router = useRouter();
  const { id } = router.query;

  const person = people.find((option) => option.name === id);
  if (!person) {
    return <div>Umm this is not a real person on our team</div>;
  }

  return (
    <Group style={{ paddingTop: '30px' }}>
      <motion.img
        src={person.src}
        style={{ height: '80vh' }}
        whileHover={{ scale: 1.1 }}
        transition={{ type: 'spring', bounce: 0.4 }}
      />
      <Text>{person.description}</Text>
    </Group>
  );
}
