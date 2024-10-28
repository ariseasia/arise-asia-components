import PropTypes from "prop-types";

const SummaryBox = ({
  className,
  quantity,
  quantifier,
  bgColor,
  textColor,
}) => {
  return (
    <div className={className}>
      <div
        className={`${bgColor} ${textColor} flex flex-col justify-center items-center py-5 px-2 rounded-lg text-center h-full`}
      >
        <p className="text-3xl font-bold md:text-4xl font-heading">
          {quantity}
        </p>
        <p className="text-sm md:text-base">{quantifier}</p>
      </div>
    </div>
  );
};

SummaryBox.propTypes = {
  className: PropTypes.string,
  quantity: PropTypes.number.isRequired,
  quantifier: PropTypes.string.isRequired,
  bgColor: PropTypes.string.isRequired,
  textColor: PropTypes.string.isRequired,
};

export default SummaryBox;
