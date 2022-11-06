import { createStyles } from '@mantine/core';

export default createStyles((theme) => ({
  title: {
    fontSize: 100,
    fontWeight: 900,
    letterSpacing: -2,

    [theme.fn.smallerThan('md')]: {
      fontSize: 50,
    },
  },
  group: {
    display: 'flex',
    justifyContent: 'center',
    [`@media (min-width: ${theme.breakpoints.md}px)`]: {
      height: '50vh',
    },
    [`@media (max-width: ${theme.breakpoints.md}px)`]: {
      height: '35vh',
    },
    [`@media (max-width: ${theme.breakpoints.sm}px)`]: {
      height: '30vh',
    },
    [`@media (max-width: ${theme.breakpoints.xs}px)`]: {
      height: '22vh',
    },
  },

  person: {
    position: 'absolute',
    transformOrigin: 'bottom center',
    cursor: 'pointer',

    [`@media (min-width: ${theme.breakpoints.md}px)`]: {
      height: '50vh',
    },
    [`@media (max-width: ${theme.breakpoints.md}px)`]: {
      height: '35vh',
    },
    [`@media (max-width: ${theme.breakpoints.sm}px)`]: {
      height: '30vh',
    },
    [`@media (max-width: ${theme.breakpoints.xs}px)`]: {
      height: '22vh',
    },
  },
}));
