// 1. Import `extendTheme`
import {extendTheme} from '@chakra-ui/react';
import sizes, {container} from '@/chakra-ui/sizes';
import breakpoints from '@/chakra-ui/breakpoints';
import colors from '@/chakra-ui/color';


import {mergeThemeOverride, ThemeExtension} from '@chakra-ui/react'

const withFocusVisible = (): ThemeExtension =>
    mergeThemeOverride({
        styles: {
            global: {
                '.js-focus-visible :focus:not(.focus-visible), .js-focus-visible :focus:not(.focus-visible) + [data-focus]':
                    {outline: 'none', shadow: 'none'},
            },
        },
    })

const theme = extendTheme({
    breakpoints,
    sizes,
    colors,
    fonts: {
        heading: 'GT Walsheim Pro',
        body: 'GT Walsheim Pro',
    },
    styles: {
        global: {
            '.js-focus-visible :focus:not(.focus-visible), .js-focus-visible :focus:not(.focus-visible) + [data-focus]':
                {outline: 'none', shadow: 'none'},
        },
    },
});

/**
 * @deprecated
 * You can derive the Foundations type from the DefaultChakraTheme
 *
 * type Foundations = Pick<
 *   DefaultChakraTheme,
 *   | "breakpoints"
 *   | "zIndices"
 *   | "radii"
 *   | "colors"
 *   | "letterSpacings"
 *   | "lineHeights"
 *   | "fontWeights"
 *   | "fonts"
 *   | "fontSizes"
 *   | "sizes"
 *   | "shadows"
 *   | "space"
 *   | "borders"
 *   | "transition"
 *  >
 */

export default theme;
