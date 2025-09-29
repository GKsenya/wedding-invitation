import { Divider, Group, Stack, Text, Title } from '@mantine/core';
import { ReactElement } from 'react';

export type TimingItemProps = {
  time: string;
  title: string | ReactElement;
  description: string;
};

export const TimingItem = ({ time, title, description }: TimingItemProps) => {
  return (
    <Group
      gap='xs'
      wrap='nowrap'
      ta='start'
    >
      <Title
        order={3}
        style={{ transform: 'rotate(-90deg) translateX(-20px)' }}
        w={32}
      >
        {time}
      </Title>
      <Divider
        color='dark.1'
        orientation='vertical'
      />
      <Stack gap='xs'>
        <Title order={4}>{title}</Title>
        <Text
          size='xs'
          lh='1.2'
          fw='200'
        >
          {description}
        </Text>
      </Stack>
    </Group>
  );
};
