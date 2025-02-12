import PropTypes from "prop-types";
import valuePath from "../assets/ARISE-values.png";

const ValuesSection = ({ className }) => {
  return (
    <div className={className}>
      <h2 className="pb-10 uppercase text-h3">The Arise Values</h2>
      <img src={valuePath} alt="Arise Values" className="rounded-[20px]" />
    </div>
  );
};

ValuesSection.propTypes = {
  className: PropTypes.string,
};

export default ValuesSection;
