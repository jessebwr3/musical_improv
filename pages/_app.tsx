import { useState } from 'react';
import NextApp, { AppProps, AppContext } from 'next/app';
import { getCookie, setCookie } from 'cookies-next';
import Link from 'next/link';
import Head from 'next/head';
import {
  MantineProvider,
  ColorScheme,
  ColorSchemeProvider,
  AppShell,
  Header,
  Group,
  Global,
} from '@mantine/core';
import { NotificationsProvider } from '@mantine/notifications';
import { ColorSchemeToggle } from '../components/ColorSchemeToggle/ColorSchemeToggle';

export default function App(props: AppProps & { colorScheme: ColorScheme }) {
  const { Component, pageProps } = props;
  const [colorScheme, setColorScheme] = useState<ColorScheme>(props.colorScheme);

  const toggleColorScheme = (value?: ColorScheme) => {
    const nextColorScheme = value || (colorScheme === 'dark' ? 'light' : 'dark');
    setColorScheme(nextColorScheme);
    setCookie('mantine-color-scheme', nextColorScheme, { maxAge: 60 * 60 * 24 * 30 });
  };

  return (
    <>
      <Head>
        <title>Musical Improv</title>
        <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
        <link rel="shortcut icon" href="/favicon.svg" />
      </Head>
      <ColorSchemeProvider colorScheme={colorScheme} toggleColorScheme={toggleColorScheme}>
        <MantineProvider theme={{ colorScheme }} withGlobalStyles withNormalizeCSS>
          <NotificationsProvider>
            <Global
              styles={(theme) => ({
                '*, *::before, *::after': {
                  boxSizing: 'border-box',
                },

                body: {
                  ...theme.fn.fontStyles(),
                  backgroundColor:
                    theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.colors.pink[1],
                  color: theme.colorScheme === 'dark' ? theme.colors.pink[1] : theme.colors.dark[9],
                  lineHeight: theme.lineHeight,
                },
              })}
            />
            <AppShell
              padding="md"
              header={
                <Header
                  sx={(theme) => ({
                    backgroundColor:
                      theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.colors.pink[2],
                    color:
                      theme.colorScheme === 'dark' ? theme.colors.pink[2] : theme.colors.dark[7],
                  })}
                  className="moon-header"
                  height={65}
                  p="xs"
                >
                  <Group position="apart">
                    <div>Oh yeah...</div>
                    <Link href="/">MUSICAL IMPROV</Link>
                    <ColorSchemeToggle />
                  </Group>
                </Header>
              }
            >
              <Component {...pageProps} />
            </AppShell>
          </NotificationsProvider>
        </MantineProvider>
      </ColorSchemeProvider>
    </>
  );
}

App.getInitialProps = async (appContext: AppContext) => {
  const appProps = await NextApp.getInitialProps(appContext);
  return {
    ...appProps,
    colorScheme: getCookie('mantine-color-scheme', appContext.ctx) || 'dark',
  };
};
