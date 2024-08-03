'use client';

import { ThemeProvider } from 'next-themes';
import { NextUIProvider } from '@nextui-org/react';
import { useRouter } from 'next/navigation';

interface AppProps {
  children: React.ReactNode;
}

export function Providers({ children }: AppProps) {
  const router = useRouter();
  return (
    <NextUIProvider navigate={router.push}>
      <ThemeProvider attribute="class" defaultTheme='system'>
        {children}
      </ThemeProvider>
    </NextUIProvider>
  );
}