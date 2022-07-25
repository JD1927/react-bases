import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';

const MAX_COUNT: number = 10;

export const CounterEffect = () => {
  const [counter, setCounter] = useState<number>(5);
  const counterElement = useRef<HTMLHeadingElement>(null);

  const handleClick = (): void => {
    setCounter(prev => Math.min(prev + 1, MAX_COUNT));
  };
  // * useLayoutEffect can be used as well - After HTML rendered
  useEffect(() => {
    if (counter < 10) return;
    console.log('%cMáx value reached', 'color: tomato; background-color: black;');

    const tl = gsap.timeline();

    tl
      .to(counterElement.current, { y: -10, duration: 0.2, ease: 'ease.out' })
      .to(counterElement.current, { y: 0, duration: 1, ease: 'bounce.out' });

  }, [counter]);

  return (
    <>
      <h1>Counter Effect</h1>
      <h2 ref={counterElement} className="mi-objeto">{counter}</h2>
      <button onClick={handleClick}>+1</button>
    </>
  );
};
