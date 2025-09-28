import '@mantine/core/styles.css';
import './global.css';
import { MantineProvider } from '@mantine/core';
import { theme } from '../theme';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body>
        <MantineProvider theme={theme}>{children}</MantineProvider>
      </body>
    </html>
  );
}
