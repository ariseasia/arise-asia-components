import PropTypes from "prop-types";
import Go123Box from "./Go123Box";
import SummaryBox from "./SummaryBox";

const SummarySection = ({ className, gridClassName, summaryList }) => {
  return (
    <div className={className}>
      <div className={`grid ${gridClassName}`}>
        {summaryList.map(
          ({
            className,
            quantity,
            quantifier,
            description,
            bgColor,
            textColor,
          }) =>
            quantity && quantity != null ? (
              <SummaryBox
                key={quantifier}
                className={className}
                quantity={quantity}
                quantifier={quantifier}
                bgColor={bgColor}
                textColor={textColor}
              />
            ) : (
              <Go123Box
                key={quantifier}
                className={className}
                description={description}
                bgColor={bgColor}
                textColor={textColor}
              />
            ),
        )}
      </div>
    </div>
  );
};

SummarySection.propTypes = {
  className: PropTypes.string,
  gridClassName: PropTypes.string.isRequired,
  summaryList: PropTypes.arrayOf(
    PropTypes.shape({
      className: PropTypes.string,
      description: PropTypes.string,
      quantity: PropTypes.string,
      quantifier: PropTypes.string,
      bgColor: PropTypes.string.isRequired,
      textColor: PropTypes.string.isRequired,
    }),
  ).isRequired,
};

export default SummarySection;
