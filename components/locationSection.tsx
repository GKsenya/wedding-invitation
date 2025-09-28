import { Box, Stack, Text } from '@mantine/core';
import { SectionWrapper } from './sectionWrapper';

type LocationSection = {
  text: string;
  address: string;
  link?: string;
};

export const LocationSection = ({ text, address, link }: LocationSection) => {
  return (
    <SectionWrapper
      titleStyle='uppercase'
      title='Локация'
      id='location'
    >
      <Stack gap={0}>
        <Text
          fw='200'
          fz={{ base: 'sm', sm: 'md' }}
        >
          {text}
        </Text>
        <Text
          fw='200'
          fz={{ base: 'sm', sm: 'md' }}
        >
          {address}
        </Text>
      </Stack>
    </SectionWrapper>
  );
};
