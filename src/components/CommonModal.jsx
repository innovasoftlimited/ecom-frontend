
const TailwindModal = ({
    show,
    onClose,
    title,
    children,
    footer,
    closable = true,
    backdrop = 'static',
    size = 'md',
    centered = false,
}) => {

    if (!show) return null;

    const sizeClasses = {
        sm: 'max-w-sm',
        md: 'max-w-md',
        lg: 'max-w-lg',
        xl: 'max-w-xl',
        '4xl': 'max-w-4xl',
        '3xl': 'max-w-3xl',
        '2xl': 'max-w-2xl',
        full: 'max-w-full',
    };

    return (
        <div className="fixed inset-0 z-50 overflow-y-auto">
            {/* Backdrop */}
            <div
                className="fixed inset-0 bg-black/50 transition-opacity"
                onClick={backdrop === 'static' ? undefined : onClose}
            />

            {/* Modal container */}
            <div className={`flex min-h-screen items-center justify-center p-4 text-center`}>
                <div
                    className={`${sizeClasses[size]} w-full transform overflow-hidden rounded-lg bg-white text-left align-middle shadow-xl transition-all ${centered ? 'my-8' : ''
                        }`}
                >
                    {/* Modal header */}
                    {title && (
                        <div className="flex items-center justify-between border-b p-4">
                            <h3 className="text-lg font-medium text-gray-900">{title}</h3>
                            {closable && (
                                <button
                                    onClick={onClose}
                                    className="text-gray-400 hover:text-gray-500"
                                >
                                    <span className="sr-only">Close</span>
                                    <svg
                                        className="h-6 w-6"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M6 18L18 6M6 6l12 12"
                                        />
                                    </svg>
                                </button>
                            )}
                        </div>
                    )}

                    {/* Modal body */}
                    <div className="p-4">{children}</div>

                    {/* Modal footer */}
                    {footer && (
                        <div className="border-t p-4 flex justify-end space-x-2">
                            {footer}
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default TailwindModal;