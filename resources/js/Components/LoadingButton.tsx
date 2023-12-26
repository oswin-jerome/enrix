import React from "react";

const LoadingButton = ({
    isLoading,
    children,
    className,
    loadingText = "Processing...",
}: {
    isLoading: boolean;
    children: any;
    className?: String;
    loadingText?: any;
}) => {
    return (
        <button
            disabled={isLoading}
            type="submit"
            className={"button " + className}
        >
            {isLoading ? loadingText : children}
        </button>
    );
};

export default LoadingButton;
