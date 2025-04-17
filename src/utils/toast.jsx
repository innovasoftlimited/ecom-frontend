import { toast } from 'react-toastify';

export const toastSuccess = (message) => {
    toast.success(message, {
        className: 'custom-toast-success',
        icon: () => <span className="toast-emoji">🎉</span>,
    });
};

export const toastError = (message) => {
    toast.error(message, {
        className: 'custom-toast-error',
        icon: () => <span className="toast-emoji">🔥</span>,
    });
};

export const toastWarning = (message) => {
    toast.warn(message, {
        className: 'custom-toast-warning',
        icon: () => <span className="toast-emoji">⚠️</span>,
    });
};
