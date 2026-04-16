'use client';

import { Stack, Text, Image, Anchor, Title } from '@mantine/core';
import { SectionWrapper } from './sectionWrapper';
import Link from 'next/link';

type LocationSection = {
  text?: string;
  address?: string;
  name?: string;
  mapSrc?: string;
  mapLink?: string;
};

export const LocationSection = ({ text, address, name, mapLink, mapSrc }: LocationSection) => {
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
        {name && (
          <Text
            fw='200'
            fz={{ base: 'md', sm: 'lg' }}
          >
            {name}
          </Text>
        )}
        {address && (
          <Text
            fw='200'
            fz={{ base: 'xs', sm: 'sm' }}
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
