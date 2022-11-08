import dayjs from 'dayjs';
import { Grid, Title, Stack, Text, MediaQuery } from '@mantine/core';
import { Shows, OneItemShow } from '../cms/directus';

const ShowRow = ({ show }: { show: OneItemShow }) => {
  const datetime = dayjs(show?.date);

  return (
    <>
      <Grid.Col
        id={`${show?.id}`}
        span={2}
        sx={{
          display: 'flex',
          alignItems: 'center',
          borderBottom: '1px solid',
        }}
      >
        <Stack style={{ gap: 0 }}>
          <Title order={1}>{datetime.date()}</Title>
          <MediaQuery smallerThan="sm" styles={{ display: 'none' }}>
            <Title order={6}>{datetime.format('MMMM')}</Title>
          </MediaQuery>
          <MediaQuery largerThan="sm" styles={{ display: 'none' }}>
            <Title order={6}>{datetime.format('MMM')}</Title>
          </MediaQuery>
          <Text>{datetime.format('hh:mm A')}</Text>
        </Stack>
      </Grid.Col>
      <Grid.Col id={`${show?.id}`} span={8} sx={{ borderBottom: '1px solid' }}>
        <Title order={4}>{show?.title}</Title>
        <Text dangerouslySetInnerHTML={{ __html: show?.description ?? '' }} />
      </Grid.Col>
      <Grid.Col
        span={2}
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          borderBottom: '1px solid',
        }}
      >
        <Title order={6}>
          <a href={`https://www.google.com/maps/search/${show?.location}`}>{show?.location}</a>
        </Title>
      </Grid.Col>
    </>
  );
};

const ShowList = ({ shows }: { shows: Shows }) => (
  <Text sx={{ display: 'flex', justifyContent: 'center' }}>
    <Grid sx={{ maxWidth: 1100, width: '100%' }}>
      {shows?.map((show) => (
        <ShowRow show={show} />
      ))}
    </Grid>
  </Text>
);

export default ShowList;
