import { Inertia } from '@inertiajs/inertia';

require('./bootstrap');
import '../fonts/stylesheet.css';
import React from 'react';
import { render } from 'react-dom';
import { createInertiaApp } from '@inertiajs/inertia-react';
import { InertiaProgress } from '@inertiajs/progress';
import { Box, ChakraProvider } from '@chakra-ui/react';
import theme from '@/chakra-ui/ChakraTheme';
import 'focus-visible/dist/focus-visible';

const appName =
  window.document.getElementsByTagName('title')[0]?.innerText || 'Laravel';

createInertiaApp({
  title: title => `${title} - ${appName}`,
  resolve: name => require(`./Pages/${name}.tsx`),
  setup({ el, App, props }) {
    //@ts-ignore
    const Paddle = window.Paddle;

    const paddleFunction = () => {
      Paddle.Environment.set('sandbox');
      Paddle.Setup({ vendor: 3920 });
    };

    const PaddleSetup = () => {
      let PaddleScript = document.createElement('script');
      PaddleScript.setAttribute(
        'src',
        'https://cdn.paddle.com/paddle/paddle.js',
      );
      document.head.append(PaddleScript);

      let PaddleScriptSetup = document.createElement('script');
      PaddleScriptSetup.innerHTML = `Paddle.Environment.set('sandbox');Paddle.Setup({vendor: 3920})`;
      document.head.append(PaddleScriptSetup);

      // if (Paddle !== undefined) {
      Paddle.Environment.set('sandbox');
      Paddle.Setup({ vendor: 3920 });
      // }
      // const paddleButtons = document.querySelectorAll('.paddle_button');
      // console.log(paddleButtons);
      // paddleButtons.forEach((paddleButton) => {
      //     // Paddle.Environment.set('sandbox');
      //     // Paddle.Setup({vendor: 3920});
      //     console.log(paddleButton.classList.contains('paddle_styled_button'));
      // })
    };

    PaddleSetup();
    Inertia.on('success', event => {
      console.log(`Successfully made a visit to ${event.detail.page.url}`);
      PaddleSetup();
    });

    return render(
      <ChakraProvider theme={theme}>
        <Box
          id={`__root`}
          width={'100vw'}
          display={'flex'}
          position={'relative'}
          flexFlow={'column nowrap'}
        >
          <App {...props} />
        </Box>
      </ChakraProvider>,
      el,
    );
  },
});

InertiaProgress.init({ color: '#4B5563' });
