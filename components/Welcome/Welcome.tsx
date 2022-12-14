import { Title, Text, Group } from '@mantine/core';
import { motion } from 'framer-motion';
import Link from 'next/link';
import useStyles from './Welcome.styles';
import { getAssetUrl, Shows, Teammates } from '../../cms/directus';
import ShowList from '../showList';

const variants = {
  initial: {
    pathLength: 0,
  },
  hover: {
    scale: 1.03,
  },
  tap: {
    scale: 1.07,
  },
};

const LEFT_MAX = -60;
const RIGHT_MAX = 60;
const TOTAL_ARC = RIGHT_MAX - LEFT_MAX;

export function Welcome({
  teammates,
  upcomingShows,
}: {
  teammates: Teammates;
  upcomingShows: Shows;
}) {
  const { classes } = useStyles();

  const length = teammates?.length ?? 0;
  const EACH_PERSON_ARC = TOTAL_ARC / (length - 1);

  return (
    <>
      <Group className={classes.group}>
        {teammates?.map((teammate, i) => {
          const rotate = i * EACH_PERSON_ARC + LEFT_MAX;
          const transX = (i * EACH_PERSON_ARC + LEFT_MAX) * 0.5;
          return (
            <Link href={`/who-are-we/${teammate?.id}`} passHref>
              <motion.img
                src={getAssetUrl(teammate?.primary_image)}
                key={teammate?.id}
                variants={variants}
                className={classes.person}
                initial={{ rotate, translateX: transX }}
                transition={{ type: 'spring', bounce: 0.4 }}
                whileHover="hover"
                whileTap="tap"
              />
            </Link>
          );
        })}
      </Group>
      <Title className={classes.title} align="center" mt={100}>
        We are{' '}
        <Text inherit variant="gradient" component="span">
          THIS TEAM!
        </Text>
      </Title>
      <Text color="dimmed" align="center" size="lg" sx={{ maxWidth: 580 }} mx="auto" mt="xl">
        Just a couple of whippersnappers in NYC singing and improvising, while hosting incredibly
        fun indie shows!
      </Text>

      <Title className={classes.title} align="center" mt={100}>
        <Text inherit variant="gradient" component="span">
          UPCOMING SHOWS
        </Text>
      </Title>
      <ShowList shows={upcomingShows} />
    </>
  );
}
