import React from 'react';
import { chakra } from '@chakra-ui/react';

// interface HamburgerIconProps {
//   isOpen: any;
//   onToggle: any;
//   onClose: any;
//   onOpen: any;
// }

// @ts-ignore
export const HamburgerIcon = ({
  isOpen,
  ...rest
}: React.SVGProps<SVGSVGElement> & {
  isOpen?: any;
}) => (
  <svg
    // width={20}
    // height={20}
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    style={{
      transform: isOpen ? 'scale(1.12)' : 'none',
      transition: isOpen ? 'transform .2s .06s' : 'transform .2s',
    }}
    {...rest}
  >
    <g
      style={{
        transform: isOpen ? 'translateX(1.8px)' : 'none',
        transition: isOpen ? 'transform .2s .06s' : 'transform .2s',
      }}
    >
      <path
        d="M 0,0 h 12"
        strokeWidth={2}
        stroke="currentColor"
        strokeLinecap="round"
        style={{
          transform: isOpen
            ? 'translateX(4px) translateY(5.75px) rotate(45deg)'
            : 'translateX(4px) translateY(5px)',
          transformOrigin: 'top left',
          transition: isOpen
            ? 'transform .2s .06s,opacity .2s,-webkit-transform .2s .06s'
            : 'transform .2s,opacity .2s .06s',
        }}
      />
      <path
        d="M 0,0 h 12"
        strokeWidth={2}
        stroke="currentColor"
        strokeLinecap="round"
        style={{
          transform: 'translateX(4px) translateY(10px)',
          opacity: isOpen ? '0' : '1',
          transition: isOpen
            ? 'transform .2s .06s,opacity .2s,-webkit-transform .2s .06s'
            : 'transform .2s,opacity .2s .06s',
        }}
      />
      <path
        d="M 0,0 h 12"
        strokeWidth={2}
        stroke="currentColor"
        strokeLinecap="round"
        style={{
          transform: isOpen
            ? 'translateX(4px) translateY(14.25px) rotate(-45deg)'
            : 'translateX(4px) translateY(15px)',
          transformOrigin: 'top left',
          transition: isOpen
            ? 'transform .2s .06s,opacity .2s,-webkit-transform .2s .06s'
            : 'transform .2s,opacity .2s .06s',
        }}
      />
    </g>
  </svg>
);

// @ts-ignore
export const ChakraHamburgerIcon = chakra(HamburgerIcon);
// @ts-ignore
