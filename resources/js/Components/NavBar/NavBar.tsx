import { InertiaLink } from '@inertiajs/inertia-react';
import React from 'react';
// @ts-ignore
import {
  Box,
  chakra,
  Link,
  List,
  ListIcon,
  ListItem,
  UnorderedList,
  Fade,
  useDisclosure,
  useMediaQuery,
  Icon,
  InputGroup,
  InputLeftElement,
  Input,
  Divider,
  AccordionItem,
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionPanel,
} from '@chakra-ui/react';
import { rawBreakpoints } from '@/chakra-ui/breakpoints';
import {
  Button,
  HamburgerIcon,
  ChakraHamburgerIcon,
  FadeBox,
  Logo,
  NavButton,
  ChakraSearchIcon,
} from '@/Components';
import { spacing } from '@/chakra-ui';
import { MobileNavMenuData, NavMenuData } from '@/Components/NavBar/NavData';
// import route from "ziggy-js";
import { Inertia } from '@inertiajs/inertia';
import useRoute from '@/Hooks/useRoute';
import { useLockBodyScroll } from '@/Hooks/LockBodyScroll/useLockBodyScroll';

export const navigation_height = 80;

export function NavBar() {
  const route = useRoute();
  const [base, xs_3, xs_2, xs, sm, md, lg, xl, xl_2, xl_3] = useMediaQuery([
    `(min-width: ${rawBreakpoints.base})`,
    `(min-width: ${rawBreakpoints['3xs']})`,
    `(min-width: ${rawBreakpoints['2xs']})`,
    `(min-width: ${rawBreakpoints.xs})`,
    `(min-width: ${rawBreakpoints.sm})`,
    `(min-width: ${rawBreakpoints.md})`,
    `(min-width: ${rawBreakpoints.lg})`,
    `(min-width: ${rawBreakpoints.xl})`,
    `(min-width: ${rawBreakpoints['2xl']})`,
    `(min-width: ${rawBreakpoints['3xl']})`,
  ]);

  const toLogin = () => {
    Inertia.get(route('login'));
  };

  const toRegister = () => {
    Inertia.get(route('register'));
  };

  let { isOpen, onToggle, onClose, onOpen } = useDisclosure();
  // let { isSearching, onToggle, onClose, onOpen } = useDisclosure();
  let isOpened = sm ? false : isOpen;

  return (
    <>
      <Box as={'header'} id={'__navigation'}>
        <Box
          as={'nav'}
          className={`Navigation ${
            base && !sm ? 'Navigation_mobile' : 'Navigation_desktop'
          } ${isOpened ? 'isOpen' : ''}`}
          sx={{ '--navigation-gap': '14px' }}
          height={`${isOpen ? 'auto' : navigation_height + 'px'}`}
          maxHeight={`${isOpen ? '100vh' : navigation_height + 'px'}`}
          position={'fixed'}
          zIndex={10000}
          top={0}
          left={0}
          display={'flex'}
          width={'100vw'}
          flexFlow={'column nowrap'}
          color={'var(--main-color-navigationColor)'}
          style={{ contain: 'layout' }}
        >
          <Box
            position={'absolute'}
            zIndex={0}
            top={0}
            left={0}
            width={'100%'}
            height={'100%'}
            transition={'opacity .2s'}
            _before={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              content: `''`,
              zIndex: 0,
              background: 'var(--main-color-navigation)',
              transition: 'background 0.2s',
            }}
            _after={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              content: `''`,
              zIndex: 1,
              boxShadow: '0 1px var(--main-color-navigationBorder)',
            }}
          />
          {/*Desktop Nav*/}

          {sm && <DesktopNavigation />}
          {/*Mobile Nav*/}
          {base && !sm && (
            <>
              <MobileNavigation
                isOpen={isOpen}
                onToggle={onToggle}
                onClose={onClose}
                onOpen={onOpen}
              />
              <FadeBox
                in={isOpened}
                unmountOnExit={true}
                position={'relative'}
                display={'flex'}
                maxHeight={`calc(100vh - ${navigation_height}px)`}
                flexFlow={'column nowrap'}
              >
                <HamburgerContainer />
              </FadeBox>
            </>
          )}
        </Box>
        {isOpened && (
          <chakra.button
            onClick={onClose}
            zIndex={9999}
            width={'100vw'}
            height={'100vh'}
            padding={0}
            border={'none'}
            position={'fixed'}
            top={0}
            left={0}
            background={'blackAlpha.300'}
            outline={'none'}
            cursor={'pointer'}
            transition={'background .8s'}
          />
        )}
      </Box>
    </>
  );
}

const DesktopNavigation = () => {
  const route = useRoute();
  const [base, xs_3, xs_2, xs, sm, md, lg, xl, xl_2, xl_3] = useMediaQuery([
    `(min-width: ${rawBreakpoints.base})`,
    `(min-width: ${rawBreakpoints['3xs']})`,
    `(min-width: ${rawBreakpoints['2xs']})`,
    `(min-width: ${rawBreakpoints.xs})`,
    `(min-width: ${rawBreakpoints.sm})`,
    `(min-width: ${rawBreakpoints.md})`,
    `(min-width: ${rawBreakpoints.lg})`,
    `(min-width: ${rawBreakpoints.xl})`,
    `(min-width: ${rawBreakpoints['2xl']})`,
    `(min-width: ${rawBreakpoints['3xl']})`,
  ]);

  const toLogin = () => {
    Inertia.get(route('login'));
  };

  const toRegister = () => {
    Inertia.get(route('register'));
  };

  return (
    <Box
      height={`${navigation_height}px`}
      zIndex={1}
      position={'relative'}
      width={'100vw'}
      margin={'0 auto'}
      padding={0}
      color={'inherit'}
      background={'transparent'}
      sx={{
        '@media screen and (min-width: 1040px)': {
          '--container-gutters': 'calc(2 * 60px)',
          maxWidth: `calc(${rawBreakpoints.lg} - 40px)`,
        },
        '@media screen and (min-width: 1240px)': {
          '--container-gutters': 'calc(2 * 80px)',
          maxWidth: `calc(${rawBreakpoints.xl} - 40px)`,
        },
      }}
      maxWidth={{
        base: 'calc(100vw - var(--container-gutters))',
        lg: `calc(${rawBreakpoints.lg} - 40px)`,
        xl: `calc(${rawBreakpoints.xl} - 40px)`,
        '2xl': `calc(${rawBreakpoints['2xl']} - 40px)`,
      }}
    >
      <Box
        position={'relative'}
        className={'Navigation_main'}
        display={'flex'}
        height={'100%'}
        flexFlow={'row nowrap'}
        color={'var(--main-color-navigationThemeColor)'}
      >
        <Link
          as={InertiaLink}
          href={'/'}
          display={'inline-flex'}
          width={'auto'}
          height={'100%'}
          placeItems={'center'}
          transition={'opacity .2s'}
          textDecoration={'none'}
          padding={0}
          flex={'none'}
          color={'inherit'}
          outline={'none'}
          experimental_spaceX={3}
          _hover={{ textDecoration: 'none', opacity: '0.5' }}
        >
          <Logo width={spacing['7']} height={'auto'} />
          {md && (
            <chakra.span fontWeight={'bold'} fontSize={'lg'}>
              Clear
            </chakra.span>
          )}
        </Link>
        <UnorderedList
          width={'auto'}
          height={`${navigation_height}px`}
          flexFlow={'row nowrap'}
          margin={'0 auto 0 var(--navigation-gap)'}
          color={'var(--main-color-navigationMediumColor)'}
          position={'relative'}
          display={'flex'}
          padding={0}
          listStyleType={'none'}
        >
          {NavMenuData.map((nav: any, index: number) => (
            <ListItem
              key={index}
              display={'flex'}
              width={'inherit'}
              color={'inherit'}
              fontSize={'md'}
              fontWeight={'medium'}
              lineHeight={4}
              placeContent={'center'}
              placeItems={'center'}
            >
              <Link
                as={InertiaLink}
                href={nav.href}
                height={`${navigation_height / 2}px`}
                padding={'0 var(--navigation-gap)'}
                rounded={'xl'}
                transition={'background .2s,color .2s'}
                cursor={'pointer'}
                outline={'none'}
                textDecoration={'none'}
                position={'relative'}
                display={'inline-flex'}
                width={'inherit'}
                color={'inherit'}
                placeItems={'center'}
                maxWidth={'auto'}
                _hover={{
                  background: 'blackAlpha.100',
                  color: 'var(--main-color-navigationColor)',
                }}
              >
                {nav.label}
              </Link>
            </ListItem>
          ))}
        </UnorderedList>
        <Box
          position={'absolute'}
          top={0}
          right={0}
          display={'flex'}
          height={`${navigation_height}px`}
          flexDirection={'row'}
          padding={0}
          listStyleType={'none'}
          placeContent={'center'}
          placeItems={'center'}
          experimental_spaceX={2.5}
        >
          <Button
            onClick={toLogin}
            variant={'ghost'}
            background={'transparent'}
            color={'var(--main-color-navigationMediumColor)'}
            _hover={{
              background: 'blackAlpha.100',
              color: 'var(--main-color-navigationColor)',
            }}
          >
            Sign in
          </Button>
          <NavButton
            className={'Navigation_primaryButton'}
            onClick={toRegister}
          >
            <chakra.span lineHeight={4} whiteSpace={'nowrap'}>
              Sign up
            </chakra.span>
            {lg && (
              <chakra.span lineHeight={4} whiteSpace={'nowrap'}>
                &nbsp;for free
              </chakra.span>
            )}
          </NavButton>
        </Box>
      </Box>
    </Box>
  );
};

interface MobileNavigationProps {
  isOpen: any;
  onToggle: any;
  onClose: any;
  onOpen: any;
}

const MobileNavigation: React.FC<MobileNavigationProps> = ({
  isOpen,
  onToggle,
  onClose,
  onOpen,
}) => {
  const route = useRoute();
  const [base, xs_3, xs_2, xs, sm, md, lg, xl, xl_2, xl_3] = useMediaQuery([
    `(min-width: ${rawBreakpoints.base})`,
    `(min-width: ${rawBreakpoints['3xs']})`,
    `(min-width: ${rawBreakpoints['2xs']})`,
    `(min-width: ${rawBreakpoints.xs})`,
    `(min-width: ${rawBreakpoints.sm})`,
    `(min-width: ${rawBreakpoints.md})`,
    `(min-width: ${rawBreakpoints.lg})`,
    `(min-width: ${rawBreakpoints.xl})`,
    `(min-width: ${rawBreakpoints['2xl']})`,
    `(min-width: ${rawBreakpoints['3xl']})`,
  ]);

  const toLogin = () => {
    Inertia.get(route('login'));
  };

  const toRegister = () => {
    Inertia.get(route('register'));
  };

  return (
    <>
      <Box
        height={`${navigation_height}px`}
        zIndex={1}
        position={'relative'}
        width={'100vw'}
        margin={'0 auto'}
        flex={'none'}
        padding={0}
        color={`${
          isOpen ? 'inherit' : 'var(--main-color-navigationThemeColor)'
        }`}
        background={'transparent'}
        maxWidth={{
          base: 'calc(100vw - var(--container-gutters))',
        }}
      >
        <Button
          className={'Navigation_hamburger'}
          onClick={onToggle}
          width={'40px'}
          height={'40px'}
          padding={0}
          rounded={'full'}
          position={'absolute'}
          top={'20px'}
          left={0}
          background={'blackAlpha.100'}
          color={'var(--main-color-navigationMediumColor)'}
          _hover={{
            opacity: '0.5',
          }}
          _focus={{
            opacity: '0.5',
          }}
        >
          {/*<Icon as={HamburgerIcon} width={5} height={5} />*/}
          <ChakraHamburgerIcon width={5} height={5} isOpen={isOpen} />
        </Button>
        <Link
          as={InertiaLink}
          href={'/'}
          position={'absolute'}
          top={0}
          left={'50%'}
          transform={'translateX(-50%)'}
          display={'inline-flex'}
          width={'auto'}
          height={'100%'}
          placeItems={'center'}
          transition={'opacity .2s'}
          textDecoration={'none'}
          padding={0}
          flex={'none'}
          color={'inherit'}
          outline={'none'}
          experimental_spaceX={3}
          _hover={{ textDecoration: 'none', opacity: '0.5' }}
        >
          <Logo width={spacing['7']} height={'auto'} />
          <chakra.span fontWeight={'bold'} fontSize={'lg'}>
            Clear
          </chakra.span>
        </Link>
        <NavButton
          className={'Navigation_primaryButton'}
          onClick={toRegister}
          position={'absolute'}
          top={'20px'}
          right={0}
        >
          <chakra.span lineHeight={4} whiteSpace={'nowrap'}>
            Sign up
          </chakra.span>
        </NavButton>
      </Box>
    </>
  );
};

// const HamburgerContainer = () => {
//   const route = useRoute();
//   const [base, xs_3, xs_2, xs, sm, md, lg, xl, xl_2, xl_3] = useMediaQuery([
//     `(min-width: ${rawBreakpoints.base})`,
//     `(min-width: ${rawBreakpoints['3xs']})`,
//     `(min-width: ${rawBreakpoints['2xs']})`,
//     `(min-width: ${rawBreakpoints.xs})`,
//     `(min-width: ${rawBreakpoints.sm})`,
//     `(min-width: ${rawBreakpoints.md})`,
//     `(min-width: ${rawBreakpoints.lg})`,
//     `(min-width: ${rawBreakpoints.xl})`,
//     `(min-width: ${rawBreakpoints['2xl']})`,
//     `(min-width: ${rawBreakpoints['3xl']})`,
//   ]);
//
//   const toLogin = () => {
//     Inertia.get(route('login'));
//   };
//
//   const toRegister = () => {
//     Inertia.get(route('register'));
//   };
//   return (
//     <>
//       <Box
//         zIndex={1}
//         height={'60px'}
//         flex={'none'}
//         padding={'4px 0 0'}
//         boxShadow={'0 1px 0 var(--main-color-navigationBorder)'}
//       >
//         <Box
//           display={'flex'}
//           flexFlow={'row nowrap'}
//           position={'relative'}
//           width={'100vw'}
//           maxWidth={'calc(100vw - var(--container-gutters))'}
//           margin={'0 auto'}
//           color={'inherit'}
//           background={'transparent'}
//           padding={0}
//         >
//           <Box
//             as={InputGroup}
//             position={'relative'}
//             display={'flex'}
//             width={'100%'}
//             height={'40px'}
//             flexFlow={'row nowrap'}
//             rounded={'xl'}
//             background={'var(--main-color-navigationLight)'}
//           >
//             <InputLeftElement
//               pointerEvents="none"
//               children={
//                 <ChakraSearchIcon
//                   width={'26px'}
//                   position={'absolute'}
//                   top={'6px'}
//                   left={'8px'}
//                   color={'var(--main-color-navigationMediumColor)'}
//                   pointerEvents={'none'}
//                 />
//               }
//             />
//             <Input
//               variant="unstyled"
//               type="search"
//               name={'search'}
//               autoComplete={'off'}
//               placeholder="Search"
//               sx={{
//                 '--scale-ratio': 'calc(16 / 14)',
//                 '--scale-offset': 'calc(-1 * (var(--scale-ratio) - 1) / 2)',
//               }}
//               width={'calc(100% * var(--scale-ratio))'}
//               height={'calc(100% * var(--scale-ratio))'}
//               flex={'none'}
//               padding={
//                 '0 calc(15px * var(--scale-ratio)) 0 calc(40px * var(--scale-ratio))'
//               }
//               border={'none'}
//               appearance={'textfield'}
//               background={'transparent'}
//               color={'inherit'}
//               fontFamily={'inherit'}
//               fontSize={'16px'}
//               fontWeight={'normal'}
//               lineHeight={4}
//               outline={'none'}
//               transform={
//                 'scale(calc(1 / var(--scale-ratio))) translateX(calc(var(--scale-offset) * 100%)) translateY(calc(var(--scale-offset) * 100%))'
//               }
//             />
//           </Box>
//         </Box>
//       </Box>
//       <Box overflowY={'auto'}>
//         <Box
//           flexFlow={'column nowrap'}
//           position={'relative'}
//           display={'flex'}
//           padding={0}
//           listStyleType={'none'}
//           width={'100vw'}
//           maxWidth={'calc(100vw - var(--container-gutters))'}
//           margin={'0 auto'}
//           color={'inherit'}
//           background={'transparent'}
//         >
//           {MobileNavMenuData.map((mobile_nav: any, index: number) => (
//             <React.Fragment key={index}>
//               <chakra.li
//                 // key={index}
//                 display={'flex'}
//                 width={'100%'}
//                 flex={'none'}
//                 color={'inherit'}
//                 fontSize={
//                   'min(calc(1rem * (16 / (var(--main-dimension-fontSizeDynamic) + .333 * var(--main-dimension-fontSizeDifference)))),16px)'
//                 }
//                 fontWeight={'medium'}
//                 lineHeight={4}
//                 placeContent={'center'}
//                 placeItems={'center'}
//               >
//                 <Link
//                   as={InertiaLink}
//                   href={mobile_nav.href}
//                   padding={'1.2em 0 1em'}
//                   transition={'background .2s,color .2s'}
//                   cursor={'pointer'}
//                   outline={'none'}
//                   textDecoration={'none'}
//                   position={'relative'}
//                   display={'inline-flex'}
//                   width={'inherit'}
//                   color={'inherit'}
//                   placeItems={'center'}
//                   maxWidth={'auto'}
//                 >
//                   {mobile_nav.label}
//                 </Link>
//               </chakra.li>
//               {index + 1 === MobileNavMenuData.length ? null : (
//                 <Divider orientation="horizontal" />
//               )}
//             </React.Fragment>
//           ))}
//         </Box>
//       </Box>
//       <Box
//         zIndex={1}
//         flex={'none'}
//         padding={'20px 0'}
//         boxShadow={'0 -1px 0 var(--main-color-navigationBorder)'}
//       >
//         <Box
//           position={'relative'}
//           width={'100vw'}
//           maxWidth={'calc(100vw - var(--container-gutters))'}
//           margin={'0 auto'}
//         >
//           <NavButton
//             className={'Navigation_primaryInlineButton'}
//             width={'100%'}
//             onClick={toLogin}
//             transition={'background 0.4s'}
//           >
//             <chakra.span lineHeight={4} whiteSpace={'nowrap'}>
//               Sign In
//             </chakra.span>
//           </NavButton>
//         </Box>
//       </Box>
//     </>
//   );
// };

const HamburgerContainer = () => {
  useLockBodyScroll();
  const route = useRoute();
  const [base, xs_3, xs_2, xs, sm, md, lg, xl, xl_2, xl_3] = useMediaQuery([
    `(min-width: ${rawBreakpoints.base})`,
    `(min-width: ${rawBreakpoints['3xs']})`,
    `(min-width: ${rawBreakpoints['2xs']})`,
    `(min-width: ${rawBreakpoints.xs})`,
    `(min-width: ${rawBreakpoints.sm})`,
    `(min-width: ${rawBreakpoints.md})`,
    `(min-width: ${rawBreakpoints.lg})`,
    `(min-width: ${rawBreakpoints.xl})`,
    `(min-width: ${rawBreakpoints['2xl']})`,
    `(min-width: ${rawBreakpoints['3xl']})`,
  ]);

  const toLogin = () => {
    Inertia.get(route('login'));
  };

  const toRegister = () => {
    Inertia.get(route('register'));
  };
  return (
    <>
      <Box
        zIndex={1}
        height={'60px'}
        flex={'none'}
        padding={'4px 0 0'}
        boxShadow={'0 1px 0 var(--main-color-navigationBorder)'}
      >
        <Box
          display={'flex'}
          flexFlow={'row nowrap'}
          position={'relative'}
          width={'100vw'}
          maxWidth={'calc(100vw - var(--container-gutters))'}
          margin={'0 auto'}
          color={'inherit'}
          background={'transparent'}
          padding={0}
        >
          <Box
            as={InputGroup}
            position={'relative'}
            display={'flex'}
            width={'100%'}
            height={'40px'}
            flexFlow={'row nowrap'}
            rounded={'xl'}
            background={'var(--main-color-navigationLight)'}
          >
            <InputLeftElement
              pointerEvents="none"
              children={
                <ChakraSearchIcon
                  width={'26px'}
                  position={'absolute'}
                  top={'6px'}
                  left={'8px'}
                  color={'var(--main-color-navigationMediumColor)'}
                  pointerEvents={'none'}
                />
              }
            />
            <Input
              variant="unstyled"
              type="search"
              name={'search'}
              autoComplete={'off'}
              placeholder="Search"
              sx={{
                '--scale-ratio': 'calc(16 / 14)',
                '--scale-offset': 'calc(-1 * (var(--scale-ratio) - 1) / 2)',
              }}
              width={'calc(100% * var(--scale-ratio))'}
              height={'calc(100% * var(--scale-ratio))'}
              flex={'none'}
              padding={
                '0 calc(15px * var(--scale-ratio)) 0 calc(40px * var(--scale-ratio))'
              }
              border={'none'}
              appearance={'textfield'}
              background={'transparent'}
              color={'inherit'}
              fontFamily={'inherit'}
              fontSize={'16px'}
              fontWeight={'normal'}
              lineHeight={4}
              outline={'none'}
              transform={
                'scale(calc(1 / var(--scale-ratio))) translateX(calc(var(--scale-offset) * 100%)) translateY(calc(var(--scale-offset) * 100%))'
              }
            />
          </Box>
        </Box>
      </Box>
      <Box overflowY={'auto'}>
        <Box
          flexFlow={'column nowrap'}
          position={'relative'}
          display={'flex'}
          padding={0}
          listStyleType={'none'}
          width={'100vw'}
          maxWidth={'calc(100vw - var(--container-gutters))'}
          margin={'0 auto'}
          color={'inherit'}
          background={'transparent'}
        >
          <Accordion allowToggle>
            {MobileNavMenuData.map((mobile_nav: any, index: number) => (
              <React.Fragment key={index}>
                {/*<chakra.li*/}
                {/*  // key={index}*/}
                {/*  display={'flex'}*/}
                {/*  width={'100%'}*/}
                {/*  flex={'none'}*/}
                {/*  color={'inherit'}*/}
                {/*  fontSize={*/}
                {/*    'min(calc(1rem * (16 / (var(--main-dimension-fontSizeDynamic) + .333 * var(--main-dimension-fontSizeDifference)))),16px)'*/}
                {/*  }*/}
                {/*  fontWeight={'medium'}*/}
                {/*  lineHeight={4}*/}
                {/*  placeContent={'center'}*/}
                {/*  placeItems={'center'}*/}
                {/*>*/}
                {/*  <Link*/}
                {/*    as={InertiaLink}*/}
                {/*    href={mobile_nav.href}*/}
                {/*    padding={'1.2em 0 1em'}*/}
                {/*    transition={'background .2s,color .2s'}*/}
                {/*    cursor={'pointer'}*/}
                {/*    outline={'none'}*/}
                {/*    textDecoration={'none'}*/}
                {/*    position={'relative'}*/}
                {/*    display={'inline-flex'}*/}
                {/*    width={'inherit'}*/}
                {/*    color={'inherit'}*/}
                {/*    placeItems={'center'}*/}
                {/*    maxWidth={'auto'}*/}
                {/*  >*/}
                {/*    {mobile_nav.label}*/}
                {/*  </Link>*/}
                {/*</chakra.li>*/}

                {mobile_nav.children ? (
                  <AccordionItem
                    borderTopWidth={0}
                    borderBottomWidth={0}
                    border={0}
                    borderColor={'transparent'}
                  >
                    <AccordionButton
                      padding={'1.5em 0 1.5em'}
                      display={'flex'}
                      width={'100%'}
                      flex={'none'}
                      color={'inherit'}
                      fontSize={
                        'min(calc(1rem * (16 / (var(--main-dimension-fontSizeDynamic) + .333 * var(--main-dimension-fontSizeDifference)))),16px)'
                      }
                      fontWeight={'medium'}
                      lineHeight={4}
                      placeContent={'center'}
                      placeItems={'center'}
                      experimental_spaceX={3}
                      _hover={{ background: 'none', color: '#09f' }}
                      _expanded={{ background: 'none', color: '#09f' }}
                    >
                      {mobile_nav.icon && (
                        <chakra.span>{mobile_nav.icon}</chakra.span>
                      )}
                      <chakra.span flex="1" textAlign="left" lineHeight={4}>
                        {mobile_nav.label}
                      </chakra.span>
                      {mobile_nav.children && <AccordionIcon />}
                    </AccordionButton>
                    {mobile_nav.children && (
                      <AccordionPanel pb={4}>
                        {mobile_nav.children.map(
                          (mobile_nav_children: any, index: number) => (
                            <React.Fragment key={index}>
                              {mobile_nav_children.label}
                            </React.Fragment>
                          ),
                        )}
                      </AccordionPanel>
                    )}
                  </AccordionItem>
                ) : (
                  <Box
                    display={'flex'}
                    width={'100%'}
                    flex={'none'}
                    color={'inherit'}
                    fontSize={
                      'min(calc(1rem * (16 / (var(--main-dimension-fontSizeDynamic) + .333 * var(--main-dimension-fontSizeDifference)))),16px)'
                    }
                    fontWeight={'medium'}
                    lineHeight={4}
                    placeContent={'center'}
                    placeItems={'center'}
                    _hover={{ background: 'none', color: '#09f' }}
                  >
                    <Link
                      as={InertiaLink}
                      href={mobile_nav.href}
                      padding={'1.5em 0 1.5em'}
                      transition={'background .2s,color .2s'}
                      cursor={'pointer'}
                      outline={'none'}
                      textDecoration={'none'}
                      position={'relative'}
                      display={'inline-flex'}
                      width={'inherit'}
                      color={'inherit'}
                      placeItems={'center'}
                      maxWidth={'auto'}
                      experimental_spaceX={3}
                      _hover={{
                        textDecoration: 'none',
                      }}
                    >
                      {mobile_nav.icon && (
                        <chakra.span>{mobile_nav.icon}</chakra.span>
                      )}
                      <chakra.span>{mobile_nav.label}</chakra.span>
                    </Link>
                  </Box>
                )}
                {index + 1 === MobileNavMenuData.length ? null : (
                  <Divider orientation="horizontal" />
                )}
              </React.Fragment>
            ))}
          </Accordion>
        </Box>
      </Box>
      <Box
        zIndex={1}
        flex={'none'}
        padding={'20px 0'}
        boxShadow={'0 -1px 0 var(--main-color-navigationBorder)'}
      >
        <Box
          position={'relative'}
          width={'100vw'}
          maxWidth={'calc(100vw - var(--container-gutters))'}
          margin={'0 auto'}
        >
          <NavButton
            className={'Navigation_primaryInlineButton'}
            width={'100%'}
            onClick={toLogin}
            transition={'background 0.4s'}
          >
            <chakra.span lineHeight={4} whiteSpace={'nowrap'}>
              Sign In
            </chakra.span>
          </NavButton>
        </Box>
      </Box>
    </>
  );
};
