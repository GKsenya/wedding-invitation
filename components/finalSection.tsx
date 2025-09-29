'use client';
import { Text, Image, Flex, Stack } from '@mantine/core';
import { SectionWrapper } from './sectionWrapper';

interface HeroSectionProps {
  text: string | string[];
  title: string;
  imageSrc: string;
}

export function FinalSection({ text, title, imageSrc }: HeroSectionProps) {
  const renderText = Array.isArray(text) ? text : [text];
  return (
    <SectionWrapper
      title={title}
      id='intro'
      bg='#cba48b'
      c='white'
      px={{ base: '0', lg: '14vw' }}
      pb={{ base: '0', lg: '10vh' }}
      contentProps={{ maw: 'unset' }}
    >
      <Flex
        direction={{ base: 'column-reverse', xl: 'row' }}
        align='center'
        ta='center'
        gap='md'
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
          gap='sm'
          maw={{ base: 480, xl: '50%' }}
          px={{ base: '10vw', lg: '4vw' }}
        >
          {renderText.map((item, index) => (
            <Text
              key={index}
              fz={{ base: 'sm', sm: 'md' }}
              fw={200}
            >
              {item}
            </Text>
          ))}
        </Stack>
      </Flex>
    </SectionWrapper>
  );
}
