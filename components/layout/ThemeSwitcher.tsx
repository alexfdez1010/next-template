'use client';

import React, { useEffect } from 'react';
import { Button } from '@nextui-org/button';
import { useTheme } from 'next-themes';
import { MoonIcon, SunIcon } from '@heroicons/react/24/outline';
import { Skeleton } from '@nextui-org/react';

export const ThemeSwitcher = () => {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = React.useState(false);

  useEffect(() => setMounted(true), []);

  if (!mounted) {
    return (
      <Skeleton className="size-8 rounded-full" />
    )
  }

  const changeTheme = () => {
    setTheme(resolvedTheme === 'light' ? 'dark' : 'light');
  };

  return (
    <Button
      isIconOnly
      variant="light"
      type="submit"
      color="default"
      radius='full'
      aria-label="Change theme"
      onPress={changeTheme}
    >
      {resolvedTheme === 'light' ? (
        <MoonIcon className="size-7" />
      ) : (
        <SunIcon className="size-7" />
      )}
    </Button>
  );
}
