import useEventListener from '../utils/useEventListener';
import React from 'react';

const EventListener = ({ show = false, onClose = () => null }) => {
  // Event listener to close dialog on click outside element
  useEventListener('mousedown', event => {
    // Do nothing if the event was already processed
    if (event.defaultPrevented) {
      return;
    }
    // Check if click is outside the dialog
    // if (!target?.current?.contains(event.target)) {
    //   onClose();
    // }
  });

  // Renders dailog
  return show ? React.createPortal(<div>...</div>, document.body) : null;
};

export default EventListener;