import { toast } from 'react-toastify';

export const warningNotify = (message, closingDelay = 5000, position = 'top-right') =>
  toast.warn(message, {
    position: position,
    autoClose: closingDelay,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
  });