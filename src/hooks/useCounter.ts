import { useEffect, useLayoutEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';

const MAX_COUNT: number = 10;

interface Props {
  maxCount?: number;
}

export const useCounter = ({ maxCount = MAX_COUNT }: Props) => {
  const [counter, setCounter] = useState<number>(1);
  const elementToAnimate = useRef<any>(null);
  const tl = useRef(gsap.timeline());

  const handleClick = (): void => {
    setCounter((prev) => Math.min(prev + 1, maxCount));
  };
  // * useLayoutEffect can be used as well - After HTML rendered
  useLayoutEffect(() => {
    if (!elementToAnimate.current) return;

    tl.current
      .to(elementToAnimate.current, { y: -10, duration: 0.2, ease: 'ease.out' })
      .to(elementToAnimate.current, { y: 0, duration: 1, ease: 'bounce.out' })
      .pause();

  }, []);

  useEffect(() => {
    // if (counter < maxCount) return;
    tl.current.play(0);
  }, [counter]);

  return {
    counter,
    handleClick,
    elementToAnimate,
  };
};
