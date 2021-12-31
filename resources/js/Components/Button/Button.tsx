import React, { useState } from 'react';
import {
  Button as BaseButton,
  ButtonProps as BaseButtonProps,
} from '@chakra-ui/react';
import { TinyColor } from '@ctrl/tinycolor';

interface ButtonProps extends BaseButtonProps {
  children?: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({
  background,
  children,
  ...rest
}) => {
  const [hoverBackground, setHoverBackground] = useState(background);
  React.useEffect(() => {
    let buttonBackground = background ? background : '#f36';
    if (background) {
      const color1 = new TinyColor(background.toString());
      // console.log(color1.toHexString());
      const colorLuminance = color1.getBrightness();
      colorLuminance < 128
        ? setHoverBackground(color1.lighten(6).toHexString())
        : setHoverBackground(color1.darken(5).toHexString());
      // console.log(`${color1.lighten().toHexString()}, ${colorLuminance}`);
    }
  }, []);
  return (
    <BaseButton
      width={'auto'}
      // _hover={{ opacity: 0.75 }}
      //   colorScheme={'blue'}
      background={background}
      // color={'#fff'}
      fontWeight={'medium'}
      _hover={{
        background: hoverBackground,
      }}
      _active={{
        opacity: 0.8,
        textDecoration: 'none',
      }}
      _focus={{
        // background: hoverBackground,
        boxShadow: 'inset 0 0 0 2px rgba(0, 0, 0, 0.05)',
        textDecoration: 'none',
      }}
      {...rest}
    >
      {children}
    </BaseButton>
  );
};

Button.defaultProps = {
  background: '#f36',
  color: '#ffffff',
  rounded: 'xl',
};

export const NavButton: React.FC<BaseButtonProps> = ({ children, ...rest }) => {
  // const [hoverBackground, setHoverBackground] = useState(background);

  return (
    <BaseButton
      // width={'auto'}
      // _hover={{ opacity: 0.75 }}
      //   colorScheme={'blue'}
      // background={background}
      // color={'#fff'}
      // transition={'none'}
      className={'Navigation_primaryButton'}
      fontWeight={'medium'}
      _hover={{
        // background: hoverBackground,
        opacity: 0.8,
        textDecoration: 'none',
      }}
      _active={{
        opacity: 0.6,
      }}
      _focus={{
        // background: hoverBackground,
        boxShadow: 'inset 0 0 0 2px rgba(0, 0, 0, 0.05)',
        textDecoration: 'none',
      }}
      {...rest}
    >
      {children}
    </BaseButton>
  );
};

NavButton.defaultProps = {
  background: 'var(--navigation-color-primary, var(--page-color-primary))',
  // color: 'inherit',
  rounded: 'xl',
};
