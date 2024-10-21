import PropTypes from "prop-types";

const Test = ({ className, content }) => <p className={className}>{content}</p>;

Test.propTypes = {
  className: PropTypes.string,
  content: PropTypes.string,
};

export default Test;
