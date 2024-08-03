"use client";

import { Link, Navbar, NavbarBrand, NavbarContent, NavbarItem, NavbarMenu, NavbarMenuItem, NavbarMenuToggle } from "@nextui-org/react";
import { ThemeSwitcher } from "./ThemeSwitcher";
import { Brand } from "./Brand";
import { useState } from "react";
import { ArrowRightEndOnRectangleIcon, BeakerIcon, ExclamationCircleIcon, LightBulbIcon, LinkIcon } from "@heroicons/react/24/outline";

const links: LinkHeaderProps[] = [
  {
    href: '#',
    name: 'Start',
    icon: <LightBulbIcon className="size-6" />,
  },
  {
    href: '#installation',
    name: 'Installation',
    icon: <ArrowRightEndOnRectangleIcon className="size-6" />,
  },
  {
    href: '#how-to-use',
    name: 'How to use',
    icon: <ExclamationCircleIcon className="size-6" />,
  },
  {
    href: '#references',
    name: 'References',
    icon: <LinkIcon className="size-6" />,
  }
];

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  return (
    <Navbar isBordered maxWidth="full" onMenuOpenChange={setIsMenuOpen} className="justify-between">
      <NavbarContent justify="start">
        <NavbarMenuToggle className="md:hidden" aria-label={isMenuOpen ? 'Close menu' : 'Open menu'} />
        <NavbarBrand>
          <Brand />
        </NavbarBrand>
      </NavbarContent>
      <NavbarContent justify="center" className="hidden md:flex">
        {links.map((link) => (
          <NavbarItem key={link.name}>
            <LinkHeader {...link} />
          </NavbarItem>
        ))}
      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem>
          <ThemeSwitcher />
        </NavbarItem>
      </NavbarContent>
      <NavbarMenu>
        {links.map((link) => (
          <NavbarMenuItem key={link.name}>
            <LinkHeader {...link} />
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
};

interface LinkHeaderProps {
  href: string;
  name: string;
  icon: React.ReactNode;
}

const LinkHeader = ({ href, name, icon }: LinkHeaderProps) => {
  return (
    <Link href={href} className="flex items-center gap-2">
      {icon} {name}
    </Link>
  );
}