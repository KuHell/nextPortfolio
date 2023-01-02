import { useRef } from 'react';

const useScrollMove = () => {
  const element = useRef<HTMLElement>();
  const onMoveToElement = () => {
    element.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };
  return { element, onMoveToElement };
};

export default useScrollMove;
