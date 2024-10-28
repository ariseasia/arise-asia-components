import PropTypes from "prop-types";
import logoPath from "../assets/respond-aa2023.svg";

const Go123Box = ({ className, description, bgColor, textColor }) => {
  return (
    <div className={className}>
      <div
        className={`${bgColor} flex flex-col justify-center items-center py-5 px-2 rounded-lg text-center h-full`}
      >
        <p className={`text-center text-p ${textColor}`}>{description}</p>
        <img src={logoPath} alt="Arise Asia response logo" className="w-36" />
      </div>
    </div>
  );
};

Go123Box.propTypes = {
  className: PropTypes.string,
  description: PropTypes.string,
  bgColor: PropTypes.string.isRequired,
  textColor: PropTypes.string.isRequired,
};

export default Go123Box;
