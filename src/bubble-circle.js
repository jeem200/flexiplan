const BubbleCircle = ({ bblItem, unit, onClick, isSelected , isDisabled }) => {
    const formatValue = (value, unit) =>
        unit === "GB" ? (value >= 1024 ? `${value / 1024} GB` : `${value} MB`) : value;

    return (
        <div
             className={`${isSelected ? "selected" : ""} ${isDisabled ? "disabled" : "circle"}`}
             onClick={!isDisabled ? onClick : undefined}
        >
            {formatValue(bblItem, unit)}
        </div>
    );
};

export default BubbleCircle;
