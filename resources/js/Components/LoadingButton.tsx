import React from "react";

const LoadingButton = ({
    isLoading,
    children,
    className,
    loadingText = "Processing...",
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
