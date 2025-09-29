import { Box, Stack, Text, Image, Flex } from '@mantine/core';
import { SectionWrapper } from './sectionWrapper';

type IntroSectionProps = {
  text: string | string[];
  title: string;
};

export const InfoSection = ({ title, text }: IntroSectionProps) => {
  const renderText = Array.isArray(text) ? text : [text];
  return (
    <SectionWrapper
      title={title}
      id='intro'
      bg='#cba48b'
      c='white'
    >
      <Stack gap='sm'>
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
    </SectionWrapper>
  );
};
