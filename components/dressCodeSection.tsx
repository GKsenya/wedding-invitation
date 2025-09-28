import { Box, Stack, Text } from '@mantine/core';
import { SectionWrapper } from './sectionWrapper';

type DressCodeSectionProps = {
  text: string;
  imgSrc?: string[];
};

export const DressCodeSection = ({ text }: DressCodeSectionProps) => {
  return (
    <SectionWrapper
      titleStyle='uppercase'
      title='Дресс-код'
      id='location'
    >
      <Stack>
        <Text
          fz={{ base: 'sm', sm: 'md' }}
          fw={200}
        >
          {text}
        </Text>
      </Stack>
    </SectionWrapper>
  );
};
