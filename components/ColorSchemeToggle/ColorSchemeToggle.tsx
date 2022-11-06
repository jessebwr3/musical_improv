import { ActionIcon, Group, useMantineColorScheme } from '@mantine/core';
import { IconSun, IconMoonStars } from '@tabler/icons';

export function ColorSchemeToggle() {
  const { colorScheme, toggleColorScheme } = useMantineColorScheme();

  return (
    <Group position="center">
      <ActionIcon
        onClick={() => toggleColorScheme()}
        size="xl"
        sx={(theme) => ({
          backgroundColor:
            theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.colors.pink[1],
          color: theme.colorScheme === 'dark' ? theme.colors.pink[4] : theme.colors.dark[6],
          '&:hover': {
            backgroundColor:
              theme.colorScheme === 'dark' ? theme.colors.dark[5] : theme.colors.pink[3],
          },
        })}
      >
        {colorScheme === 'dark' ? (
          <IconSun width={20} height={20} />
        ) : (
          <IconMoonStars width={20} height={20} />
        )}
      </ActionIcon>
    </Group>
  );
}
