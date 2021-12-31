// const rafThrottle = (callback: any) => {
//   let requestId: number | null = null;
//
//   let lastArgs: any[];
//
//   const later = (context: any) => () => {
//     requestId = null;
//     callback.apply(context, lastArgs);
//   };
//
//   const throttled = function (this: any, ...args: any[]) {
//     lastArgs = args;
//     if (requestId === null) {
//       requestId = requestAnimationFrame(later(this));
//     }
//   };
//
//   throttled.cancel = () => {
//     if (typeof requestId === 'number') {
//       cancelAnimationFrame(requestId);
//     }
//     requestId = null;
//   };
//
//   return throttled;
// };
//
// export default rafThrottle;
//
const createScrollManager = function () {
  let callbacks: any[] = [];
  let scrollPosition = -1;
  let animatedKilled = false;

  var stop = false;
  var frameCount = 0;
  // var $results = $('#results');
  var fps: any,
    fpsInterval: number,
    startTime: number,
    now,
    then: number,
    elapsed;

  var raf =
    window.requestAnimationFrame ||
    // initialize the timer variables and start the animation
    // @ts-ignore
    window.webkitRequestAnimationFrame ||
    // @ts-ignore
    window.mozRequestAnimationFrame ||
    // @ts-ignore
    window.msRequestAnimationFrame ||
    // @ts-ignore
    window.oRequestAnimationFrame;

  function startAnimating(fps: number) {
    fpsInterval = 1000 / fps;
    then = window.performance.now();
    startTime = then;
    // console.log(startTime);
    animate();
  }

  function initializeAnim() {
    startAnimating(144);
  }

  const animate = () => {
    if (stop) {
      return;
    }

    raf(onScroll);

    // calc elapsed time since last loop

    now = Date.now();
    elapsed = now - then;

    // if enough time has elapsed, draw the next frame

    if (elapsed > fpsInterval) {
      // Get ready for next frame by setting then=now, but also adjust for your
      // specified fpsInterval not being a multiple of RAF's interval (16.7ms)
      then = now - (elapsed % fpsInterval);
      var sinceStart = now - startTime;
      var currentFps =
        Math.round((1000 / (sinceStart / ++frameCount)) * 100) / 100;
      // console.log(`fps: ${currentFps}`);
      animate();
    }
  };

  function onScroll() {
    if (animatedKilled) return;
    if (scrollPosition !== window.scrollY) {
      window.removeEventListener('scroll', initializeAnim);
      scrollPosition = window.scrollY;
      callbacks.forEach(cb => cb(scrollPosition));
      animate();
    } else {
      window.addEventListener('scroll', initializeAnim, { passive: true });
    }
  }

  animate();

  return {
    add: function (cb: any) {
      callbacks = [...callbacks, cb];
    },
    remove: function (cb: any) {
      callbacks = callbacks.filter(value => value != cb);
    },
    destroy: function () {
      animatedKilled = true;
      window.removeEventListener('scroll', animate);
    },
  };
};

export { createScrollManager };

// const createScrollManager = function () {
//   let callbacks: any[] = [];
//   let scrollPosition = -1;
//   let animatedKilled = false;
//
//   const animate = () => {
//     requestAnimationFrame(onScroll);
//   };
//
//   function onScroll() {
//     if (animatedKilled) return;
//
//     if (scrollPosition !== window.scrollY) {
//       window.removeEventListener('scroll', animate);
//       scrollPosition = window.scrollY;
//       callbacks.forEach(cb => cb(scrollPosition));
//       animate();
//     } else {
//       window.addEventListener('scroll', animate, { passive: true });
//     }
//   }
//
//   animate();
//
//   return {
//     add: function (cb: any) {
//       callbacks = [...callbacks, cb];
//     },
//     remove: function (cb: any) {
//       callbacks = callbacks.filter(value => value != cb);
//     },
//     destroy: function () {
//       animatedKilled = true;
//       window.removeEventListener('scroll', animate);
//     },
//   };
// };
//
// export { createScrollManager };
