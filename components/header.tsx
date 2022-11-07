import { Burger, Group, Header, Menu, Stack } from '@mantine/core';
import { IconAddressBook, IconCornerDownLeftDouble, IconMusic, IconUsers } from '@tabler/icons';
import Link from 'next/link';
import { useState } from 'react';
import { ColorSchemeToggle } from './ColorSchemeToggle/ColorSchemeToggle';
import { FacebookIcon, InstagramIcon, TikTokIcon } from './Icons/socialMediaIcons';

const AppMenu = () => {
  const [opened, setOpened] = useState(false);

  return (
    <Menu
      shadow="md"
      width={200}
      opened={opened}
      onClose={() => setOpened(false)}
      closeOnClickOutside
      closeOnItemClick
    >
      <Menu.Target>
        <Burger opened={opened} onClick={() => setOpened((currOpen) => !currOpen)} />
      </Menu.Target>

      <Menu.Dropdown
        sx={(theme) => ({
          backgroundColor:
            theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.colors.pink[1],
          color: theme.colorScheme === 'dark' ? theme.colors.pink[4] : theme.colors.dark[6],
        })}
      >
        <Menu.Item icon={<IconUsers size={14} />}>Who are we?</Menu.Item>
        <Menu.Item icon={<IconMusic size={14} />}>Upcoming Shows</Menu.Item>
        <Menu.Item icon={<IconCornerDownLeftDouble size={14} />}>Previous Shows</Menu.Item>
        <Menu.Item icon={<IconAddressBook size={14} />}>Contact Us!</Menu.Item>
      </Menu.Dropdown>
    </Menu>
  );
};

export const AppHeader = () => (
  <Header
    sx={(theme) => ({
      backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.colors.pink[2],
      color: theme.colorScheme === 'dark' ? theme.colors.pink[2] : theme.colors.dark[7],
    })}
    className="moon-header"
    height={65}
    p="xs"
  >
    <Group position="apart">
      <AppMenu />
      <Link href="/">MUSICAL IMPROV</Link>
      <Group>
        <Group style={{ gap: 0 }}>
          <TikTokIcon />
          <Stack style={{ gap: 0 }}>
            <FacebookIcon />
            <InstagramIcon />
          </Stack>
        </Group>
        <ColorSchemeToggle />
      </Group>
    </Group>
  </Header>
);
