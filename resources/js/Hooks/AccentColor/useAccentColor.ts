import React from 'react';
import { createScrollManager } from './rafThrottle';
import { navigation_height } from '@/Components';
import { findCssSelector } from '@/Hooks/AccentColor/dom-el-path';

// COMPLETED
// data-navigation-color-primary
// data-navigation-variant

// FOR ROOT & FOR REF
// data-navigation-color-primary //
// data-navigation-variant //
// data-navigation-color-theme => light | dark => color .. not bg

// FOR ROOT
// data-navigation-color-primary //
// data-navigation-variant //
// data-navigation-color-theme => light | dark => color .. not bg
//// data-navigation-theme => light | dark => bg .. AND color !!!! color changes light and dark acc. to background
//// data-theme // for whole site dark-mode. => light | dark
//// data-navigation-background-primary // for gradient header bg

// FOR REF
// data-navigation-color-primary //
// data-navigation-variant //
// data-navigation-color-theme => light | dark
//// data-theme // for only section dark-mode. => light | dark
//// data-background-theme // same^^^^(not sure) => light | dark

const sections: any = [];
const accentEnabled: boolean = true;
export const useAccentColor = (
  enabled: boolean = accentEnabled,
  accentColor: string | any = '#FFFFFF',
  navigationVariant: 'default' | 'primary' = 'default',
  setDefault: 'default' | 'primary' = 'default', // The Main Nav Variant for the PAGE. Default Set Attribute on ROOT ('#__root');
) => {
  const scrollManager = createScrollManager();

  const ref = React.useCallback(node => {
    if (enabled && accentEnabled) {
      if (node !== null) {
        sections.push(node);
        // console.log(findCssSelector(node) === '');
        // CONSTANTS REQUIRED FOR SCROLL FUNCTION
        //const navigation = document.querySelector('#__navigation nav');
        const root = document.querySelector('#__root');

        // @ts-ignore
        root?.style.setProperty(
          '--navigation-color-primary',
          'var(--main-color-primary)',
        );

        if (setDefault) {
          root?.setAttribute('data-navigation-variant', setDefault);
        } else {
          root?.setAttribute('data-navigation-variant', 'default');
        }
        // console.log(root?.getAttribute('data-navigation-variant'));
        // SCROLL FUNCTION. i.e EXECUTED ON SCROLL.
        const scrollFunction = () => {
          const result = sections.filter((section: any) => {
            // const currentSection =
            //     section === document.querySelector(findCssSelector(section));

            const conditionStop =
              section.getBoundingClientRect().height +
              section.getBoundingClientRect().top;
            const conditionStart = section.getBoundingClientRect().top;

            return (
              conditionStart <= navigation_height &&
              conditionStop >= navigation_height
              // currentSection
            );
          });

          if (result.length !== 0) {
            let themeAccentColor = result[0].getAttribute(
              'data-navigation-color-primary',
            );
            let themeNavVariant = result[0].getAttribute(
              'data-navigation-variant',
            );
            if (navigationVariant === 'primary') {
              root?.setAttribute(
                'data-navigation-color-primary',
                themeAccentColor,
              );
            }
            root?.setAttribute('data-navigation-variant', themeNavVariant);

            // @ts-ignore
            root?.style.setProperty(
              '--navigation-color-primary',
              themeAccentColor,
            );
          } else if (result.length === 0) {
            root?.removeAttribute('data-navigation-color-primary');
            // if (setDefault !== 'default' && setDefault !== 'primary') {
            //   root?.removeAttribute('data-navigation-variant');
            // }
            // @ts-ignore
            root?.style.setProperty(
              '--navigation-color-primary',
              'var(--main-color-primary)',
            );
          }

          if (
            result.length === 0 &&
            root?.getAttribute('data-navigation-variant') !== setDefault
          ) {
            root?.setAttribute('data-navigation-variant', setDefault);
          }

          for (let i = 0; i < sections.length; i++) {
            if (sections[i] === node) {
              sections[i].setAttribute(
                'data-navigation-color-primary',
                accentColor,
              );
              sections[i].setAttribute(
                'data-navigation-variant',
                navigationVariant,
              );
            }
          }
        };

        scrollManager.add(scrollFunction);
        window.addEventListener('resize', scrollFunction, {
          passive: true,
          capture: true,
        });
        return function cleanupListener() {
          window.removeEventListener('resize', scrollFunction);
        };
      }
    }
  }, []);

  return [ref, accentColor, navigationVariant];
};

// USE LOGIC LIKE
// FIRST FILTER THE ACTIVE ELEMENT FROM THE ARRAY AND THEN EXECUTE THE FUNCTION.
// FOR PERFORMANCE.
