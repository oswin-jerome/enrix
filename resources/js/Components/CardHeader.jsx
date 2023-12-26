const CardHeader = ({ title, description = "", left }) => {
    return (
        <header className="flex justify-between items-center">
            <div>
                <h2 className="text-lg  font-bold text-gray-900">{title}</h2>

                <p className="mt-1 text-sm text-gray-600">{description}</p>
            </div>
            <div>{left}</div>
        </header>
    );
};

export default CardHeader;
