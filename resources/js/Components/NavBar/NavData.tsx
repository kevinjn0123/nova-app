import React from 'react';
import route from 'ziggy-js';
import { chakra, Icon } from '@chakra-ui/react';
import { InfoOutlineIcon } from '@chakra-ui/icons';

const DefaultIcon = chakra(InfoOutlineIcon);
DefaultIcon.defaultProps = {
  display: 'block',
  strokeWidth: 2,
};

export interface NavMenuProps {
  label: string | any;
  href?: string | any;
  icon?: React.ReactNode | any;
  children?: Array<NavMenuProps>;
}

export const NavMenuData: Array<NavMenuProps> = [
  {
    label: 'Dashboard',
    href: route('dashboard'),
  },
  {
    label: 'Store',
    href: route('store'),
  },
  {
    label: 'Receipts',
    href: route('receipts'),
  },
];

export const MobileNavMenuData: Array<NavMenuProps> = [
  {
    label: 'Dashboard',
    href: route('dashboard'),
    icon: <DefaultIcon w={5} h={5} />,
  },
  {
    label: 'Store',
    href: route('store'),
    icon: <DefaultIcon w={5} h={5} />,
    children: [
      {
        label: 'templates',
      },
    ],
  },
  {
    label: 'Receipts',
    href: route('receipts'),
    icon: <DefaultIcon w={5} h={5} />,
  },
];
