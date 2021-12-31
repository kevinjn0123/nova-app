import React from 'react';
// @ts-ignore
import { Head, InertiaLink } from '@inertiajs/inertia-react';
import { NavBar } from '@/Components';
import { Box } from '@chakra-ui/react';
import { colors } from '@/chakra-ui';
import { useAccentColor } from '@/Hooks/AccentColor/useAccentColor';

export default function Welcome() {
  const [ref, accentColor] = useAccentColor(true, colors.ocean['300']);
  const [ref2, accentColor2] = useAccentColor(
    true,
    colors.redAlt['300'],
    'primary',
  );
  const [ref3, accentColor3] = useAccentColor(true, colors.yellowAlt['300']);

  return (
    <>
      <Head title={'Welcome'} />
      <NavBar />
      <Box>
        <Box h={'100vh'} bg={'white'}>
          Home
        </Box>
        <Box ref={ref} h={'80vh'} bg={accentColor}>
          Home
        </Box>
        <Box h={'100vh'} bg={'white'}>
          Home
        </Box>
        <Box h={'80vh'} bg={colors.ocean['300']}>
          Home
        </Box>
        <Box h={'100vh'} bg={'white'}>
          Home
        </Box>
        <Box ref={ref2} h={'80vh'} bg={accentColor2}>
          Home
        </Box>
        <Box ref={ref3} h={'80vh'} bg={accentColor3}>
          Home
        </Box>
        <Box h={'100vh'} bg={'white'}>
          Home
        </Box>
        <Box h={'100vh'} bg={'white'}>
          Home
        </Box>
      </Box>
    </>
  );
}
