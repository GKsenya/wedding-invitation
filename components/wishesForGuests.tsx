import { Box, Button, ButtonProps, Stack, Text } from '@mantine/core';
import { SectionWrapper } from './sectionWrapper';

type WishesForGuestsProps = {
  text: string | string[];
};

export const WishesForGuests = ({ text }: WishesForGuestsProps) => {
  const renderText = Array.isArray(text) ? text : [text];
  return (
    <SectionWrapper
      titleStyle='uppercase'
      title='Пожелания для гостей'
      id='wishes-for-guests'
    >
      <Stack gap='xs'>
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
