'use client';

import { Box, ColorSwatch, SimpleGrid, Stack, Text } from '@mantine/core';
import { SectionWrapper } from './sectionWrapper';

type DressCodeSectionProps = {
  text: string;
  imgSrc?: string[];
};

const colors = ['#FFFFFF', '#F2E9E2', '#E5D2C5', '#CBA48B', '#997B69', '#000000'];

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
      <SimpleGrid
        cols={3}
        mt='md'
        spacing={{ base: 'md', sm: 'md' }}
      >
        {colors.map((color) => (
          <ColorSwatch
            size={60}
            color={color}
            key={color}
            mx='auto'
          />
        ))}
      </SimpleGrid>
    </SectionWrapper>
  );
};
