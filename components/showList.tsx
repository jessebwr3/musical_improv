import dayjs from 'dayjs';
import { Grid, Title, Stack, Text, Divider } from '@mantine/core';
import { Shows, OneItemShow } from '../cms/directus';

const ShowRow = ({ show }: { show: OneItemShow }) => {
  const datetime = dayjs(show?.date);

  return (
    <>
      <Grid.Col
        id={`${show?.id}`}
        span={3}
        sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}
      >
        <Stack style={{ gap: 0 }}>
          <Title order={1}>{datetime.date()}</Title>
          <Title order={4}>{datetime.format('MMMM')}</Title>
          <Title order={6}>{datetime.format('hh:mm A')}</Title>
        </Stack>
      </Grid.Col>
      <Grid.Col id={`${show?.id}`} span={7}>
        <Title order={4}>{show?.title}</Title>
        <Text dangerouslySetInnerHTML={{ __html: show?.description ?? '' }} />
      </Grid.Col>
      <Grid.Col span={2} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <Title order={6}>{show?.location}</Title>
      </Grid.Col>
    </>
  );
};

const ShowList = ({ shows }: { shows: Shows }) => {
  console.log('moo');
  return (
    <Text sx={{ display: 'flex', justifyContent: 'center' }}>
      <Grid sx={{ maxWidth: 1100, width: '100%' }}>
        {shows?.map((show) => (
          <>
            <ShowRow show={show} />
            <Divider my="sm" />
          </>
        ))}
      </Grid>
    </Text>
  );
};

export default ShowList;
