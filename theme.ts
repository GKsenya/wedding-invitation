'use client';

import { createTheme, rem } from '@mantine/core';

export const theme = createTheme({
  headings: {
    fontFamily: 'NotoSerif, serif',
    // fontFamily: 'GoodVibes, serif',
    fontWeight: '300',
    sizes: {
      h1: {
        fontSize: rem(52),
        lineHeight: rem(68),
      },
      h2: {
        fontSize: rem(40),
        lineHeight: rem(52),
      },
      h3: {
        fontSize: rem(32),
        lineHeight: rem(44),
      },
      h4: { fontSize: rem(24), lineHeight: rem(28) },
      h5: { fontSize: rem(20), lineHeight: rem(20) },
      h6: { fontSize: rem(18), lineHeight: rem(18) },
    },
  },
  fontSizes: {
    xs: rem(18),
    sm: rem(20),
    md: rem(26),
    lg: rem(34),
    xl: rem(42),
  },
  spacing: {
    xs: rem(12),
    sm: rem(20),
    md: rem(32),
    lg: rem(48),
    xl: rem(68),
    xxl: rem(92),
  },
  fontFamily: 'NotoSans, serif',
});
