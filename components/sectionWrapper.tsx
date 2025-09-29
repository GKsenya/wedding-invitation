'use client';

import { Box, BoxProps, em, Flex, Title, TitleProps } from '@mantine/core';
import { useMediaQuery } from '@mantine/hooks';

import { ReactNode } from 'react';

type SectionWrapperProps = {
  titleStyle?: TitleProps['tt'];
  title: string;
  id: string;
  children: ReactNode;
  contentProps?: BoxProps;
} & BoxProps;

export const SectionWrapper = ({ title, titleStyle, children, id, contentProps, ...props }: SectionWrapperProps) => {
  const isMobile = useMediaQuery(`(max-width: ${em(767)})`);

  return (
    <Flex
      w='100vw'
      direction='column'
      px={{ base: '14vw', lg: '10vw' }}
      py={{ base: '72px', xs: '88x', sm: '104px', md: '120px', lg: '160px' }}
      ta='center'
      bdrs='lg'
      align='center'
      gap='lg'
      id={id}
      {...props}
    >
      <Title
        maw={isMobile ? 280 : undefined}
        order={isMobile ? 3 : 2}
        tt={titleStyle}
      >
        {title}
      </Title>
      <Box
        maw='680px'
        {...contentProps}
      >
        {children}
      </Box>
    </Flex>
  );
};
