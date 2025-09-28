import { Box, Stack, Text, Image } from '@mantine/core';
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
      bg='#193318'
      c='white'
    >
      <Stack gap='sm'>
        {renderText.map((item) => (
          <Text
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
