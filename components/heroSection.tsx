'use client';
import { Box, Text, Image, Divider, Flex, Stack, Title, em } from '@mantine/core';
import { useMediaQuery } from '@mantine/hooks';

interface HeroSectionProps {
  names: string;
  weddingDate: string;
  phrase?: string;
  imageSrc: string;
}

export function HeroSection({ names, weddingDate, phrase, imageSrc }: HeroSectionProps) {
  const isMobile = useMediaQuery(`(max-width: ${em(767)})`);

  return (
    <Flex
      direction={{ base: 'column', xl: 'row' }}
      align='center'
      ta='center'
      gap='xs'
      px={{ base: '0', lg: '10vw' }}
      py={{ base: '0', lg: '10vh' }}
    >
      <Image
        style={{
          height: 'auto',
          overflow: 'hidden',
        }}
        maw={{ base: 'unset', xl: '50%' }}
        mah={{ base: '75vh' }}
        src={imageSrc}
        alt='Фото молодоженов'
        bdrs={{ xl: 'sm' }}
      />

      <Stack
        gap={isMobile ? 'lg' : 'xl'}
        align='stretch'
        my='64px'
        mx='auto'
      >
        {phrase && (
          <Text
            fz='md'
            c='gray.6'
          >
            {phrase}
          </Text>
        )}

        <Title
          order={isMobile ? 3 : 1}
          tt='uppercase'
        >
          {names}
        </Title>

        <Divider
          size='sm'
          color='dark.1'
        />

        <Title
          order={isMobile ? 3 : 1}
          fw={200}
        >
          {weddingDate}
        </Title>
      </Stack>
    </Flex>
  );
}
