import { Title, Text, Group } from '@mantine/core';
import { motion } from 'framer-motion';
import Link from 'next/link';
import useStyles from './Welcome.styles';
import data from '../../json/whoAreWe.json';

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

const { people } = data;

const LEFT_MAX = -60;
const RIGHT_MAX = 60;
const TOTAL_ARC = RIGHT_MAX - LEFT_MAX;
const EACH_PERSON_ARC = TOTAL_ARC / (people.length - 1);

export function Welcome() {
  const { classes } = useStyles();

  return (
    <>
      <Group className={classes.group}>
        {people.map((person, i) => {
          const rotate = i * EACH_PERSON_ARC + LEFT_MAX;
          const transX = (i * EACH_PERSON_ARC + LEFT_MAX) * 0.5;
          return (
            <Link href={`/who-are-we/${person.name}`} passHref>
              <motion.img
                src={person.src}
                key={person.src}
                variants={variants}
                className={classes.person}
                initial={{ rotate, translateX: transX }}
                transition={{ type: 'spring', bounce: 0.4 }}
                whileHover="hover"
                whileTap="tap"
                whileFocus="hover"
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
      <Text color="dimmed" align="center" size="lg" sx={{ maxWidth: 580 }} mx="auto" mt="xl">
        NONE RIGHT NOW?
      </Text>
    </>
  );
}
