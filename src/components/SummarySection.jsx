import PropTypes from "prop-types";
import Go123Box from "./Go123Box";
import SummaryBox from "./SummaryBox";

const SummarySection = ({ className, gridClassName, summaryList }) => {
  return (
    <div className={className}>
      <h2 className="pb-10 uppercase text-h3">The Summary</h2>
      <div className={`grid ${gridClassName}`}>
        {summaryList.map((item, i) =>
          Object.prototype.hasOwnProperty.call(item, "quantity") ? (
            <SummaryBox
              key={i}
              className={item.className}
              quantity={item.quantity}
              quantifier={item.quantifier}
              bgColor={item.bgColor}
              textColor={item.textColor}
            />
          ) : (
            <Go123Box
              key={i}
              className={item.className}
              description={item.description}
              bgColor={item.bgColor}
              textColor={item.textColor}
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
