// components/GlobalModal.jsx
import { useDispatch, useSelector } from 'react-redux';
import { closeModal } from '../redux/reducers/modalSlice';

const GlobalModal = () => {
    const dispatch = useDispatch();
    const modalState = useSelector((state) => state.modal);

    if (!modalState?.isOpen) return null;

    const sizeClasses = {
        sm: 'max-w-sm',
        md: 'max-w-md',
        lg: 'max-w-lg',
        xl: 'max-w-2xl'
    };

    return (
        <>
            {/* Backdrop */}
            <div
                className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 z-[199]"
                onClick={() => dispatch(closeModal())}
            ></div>

            {/* Modal Content */}
            <div
                tabIndex="-1"
                aria-hidden="true"
                className="fixed top-0 right-0 left-0 z-[200] flex justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full"
            >
                <div className={`relative p-4 w-full ${sizeClasses[modalState.options.size]} max-h-full`}>
                    <div className="relative bg-white rounded-lg shadow-sm dark:bg-gray-700">
                        {/* Modal Header */}
                        <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600 border-gray-200">
                            <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                                {modalState.title}
                            </h3>
                            {modalState.options.showCloseButton && (
                                <button
                                    type="button"
                                    onClick={() => dispatch(closeModal())}
                                    className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
                                >
                                    <svg
                                        className="w-3 h-3"
                                        aria-hidden="true"
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 14 14"
                                    >
                                        <path
                                            stroke="currentColor"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                                        />
                                    </svg>
                                    <span className="sr-only">Close modal</span>
                                </button>
                            )}
                        </div>

                        {/* Modal Body */}
                        <div className="p-4 md:p-5 space-y-4">
                            {typeof modalState.content === 'function'
                                ? modalState.content()
                                : modalState.content}
                        </div>

                        {/* Modal Footer */}
                        {modalState.buttons.length > 0 && (
                            <div className="flex items-center p-4 md:p-5 border-t border-gray-200 rounded-b dark:border-gray-600">
                                {modalState.buttons.map((button, index) => (
                                    <button
                                        key={index}
                                        type="button"
                                        onClick={button.onClick}
                                        className={button.className}
                                    >
                                        {button.label}
                                    </button>
                                ))}
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </>
    );
};

export default GlobalModal;