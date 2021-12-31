import * as React from 'react';
import { SVGProps } from 'react';
import { chakra } from '@chakra-ui/react';

export const SearchIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    className="Navigation_searchLoupe__2sS92"
    role="presentation"
    {...props}
  >
    <path
      d="M11.4 5.9a5.5 5.5 0 110 11 5.5 5.5 0 110-11zM18 18l-2.5-2.5"
      fill="transparent"
      strokeWidth={2}
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export const ChakraSearchIcon = chakra(SearchIcon);
