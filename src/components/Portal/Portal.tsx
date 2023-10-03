import { ReactNode, useEffect, useState } from 'react';
import { createPortal } from 'react-dom';

interface Props {
  children: ReactNode;
}

function Portal({ children }: Props) {
  const body = document.querySelector('body');
  const [node, setNode] = useState<HTMLDivElement | null>(null);

  useEffect(() => {
    const popover = document.createElement('div');
    popover.setAttribute(
      'style',
      'position:fixed; top:0; bottom:0; left:0; right:0; z-index:1888',
    );
    body?.appendChild(popover);
    setNode(popover);

    return () => {
      body?.removeChild(popover);
    };
  }, [body]);

  if (!node) return null;
  return createPortal(children, node);
}

export default Portal;
