const LoadingButton = ({
    isLoading,
    children,
    loadingText = "Processing...",
}) => {
    return (
        <button disabled={isLoading} type="submit" className="button">
            {isLoading ? loadingText : children}
        </button>
    );
};

export default LoadingButton;
