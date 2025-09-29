'use client';

import { Box, ColorSwatch, SimpleGrid, Stack, Text } from '@mantine/core';
import { SectionWrapper } from './sectionWrapper';

type DressCodeSectionProps = {
  text: string;
  imgSrc?: string[];
};

const colors = ['#FFFFFF', '#EBDBC8', '#92735C', '#A7AD89', '#697254', '#000000'];

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
            withShadow={false}
            bdrs={100}
            bd='1px solid #d8d8d8'
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
