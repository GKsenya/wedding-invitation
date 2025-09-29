'use client';

import { Stack, Text, Image, Anchor } from '@mantine/core';
import { SectionWrapper } from './sectionWrapper';
import Link from 'next/link';

type LocationSection = {
  text?: string;
  address?: string;
  mapSrc?: string;
  mapLink?: string;
};

export const LocationSection = ({ text, address, mapLink, mapSrc }: LocationSection) => {
  return (
    <SectionWrapper
      titleStyle='uppercase'
      title='Локация'
      id='location'
      px={{ base: '0', lg: '10vw' }}
    >
      <Stack gap={0}>
        {text && (
          <Text
            fw='200'
            fz={{ base: 'sm', sm: 'md' }}
          >
            {text}
          </Text>
        )}
        {address && (
          <Text
            fw='200'
            fz={{ base: 'sm', sm: 'md' }}
          >
            {address}
          </Text>
        )}
        {mapSrc && (
          <Image
            style={{
              height: 'auto',
              overflow: 'hidden',
              cursor: 'pointer',
            }}
            src={mapSrc}
            onClick={() => {
              window.open(mapLink, '_blank');
            }}
            alt='Карта с локацией'
            mt='md'
          />
        )}
      </Stack>
    </SectionWrapper>
  );
};
