import React from 'react';
import ReactDOM from 'react-dom';

import { containerId, contentId } from '../constants';
import { PortalProps } from '../types';

const getBody = (): HTMLElement => {
  if (document && document.body) {
    return document.body;
  }
  throw new Error('`document.body` not found.');
};

const createContainer = (zIndex: number | string): HTMLElement => {
  const container = document.createElement(`div`);
  container.setAttribute(`id`, contentId);
  container.setAttribute(`style`, `z-index: ${zIndex};`);
  return container;
};

const getPortalParent = (): Element => {
  const parentElement = document.querySelector(`body > #${containerId}`);
  if (!parentElement) {
    const parent = document.createElement(`div`);
    parent.setAttribute(`id`, containerId);
    getBody().appendChild(parent);
    return parent;
  }
  return parentElement;
};

export const Portal: React.FC<PortalProps> = ({ children, zIndex }) => {
  const [state, setState] = React.useState({
    container: createContainer(zIndex),
    isPortalMounted: false,
  });

  React.useEffect(() => {
    const { container } = state;
    if (container) getPortalParent().appendChild(container);
    setState((prevState) => ({ ...prevState, isPortalMounted: true }));
    return () => {
      if (container) {
        getPortalParent().removeChild(container);
        const portals = !!document.querySelector(
          `body > #${containerId} > #${contentId}`,
        );
        if (!portals) getBody().removeChild(getPortalParent());
      }
    };
  }, []);

  const { container, isPortalMounted } = state;

  if (container && isPortalMounted) {
    return ReactDOM.createPortal(children, container);
  }

  return null;
};
