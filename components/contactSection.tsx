import { Box, Button, ButtonProps, Stack, Text } from '@mantine/core';
import { SectionWrapper } from './sectionWrapper';

type ContactSectionProps = {
  text: string | string[];
  buttonProps?: {
    title: string;
    href: string;
  };
};

export const ContactSection = ({ text, buttonProps }: ContactSectionProps) => {
  const renderText = Array.isArray(text) ? text : [text];
  return (
    <SectionWrapper
      titleStyle='uppercase'
      title='Свяжитесь с нами'
      id='contacts'
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
      {buttonProps && (
        <Button
          size='lg'
          mt='lg'
          color='green.9'
          variant='outline'
          component='a'
          href={buttonProps.href}
          fz={{ base: 'sm', sm: 'md' }}
          fw={200}
        >
          {buttonProps.title}
        </Button>
      )}
    </SectionWrapper>
  );
};
