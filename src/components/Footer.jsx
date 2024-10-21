import PropTypes from "prop-types";
import { MdOutlineMail } from "react-icons/md";

import logo from "../assets/logo.svg";

const Footer = ({ title, contactUsText, copyrightText }) => {
  return (
    <footer className="bg-white">
      <div className="container flex flex-col justify-between p-12 sm:flex-row sm:px-20">
        <div className="flex flex-col justify-between items-center text-center sm:items-start sm:text-left">
          <div className="flex flex-col">
            <h2 className="text-orange-500 text-h3">{title}</h2>
            <a
              className="flex flex-row gap-x-2 items-center mx-auto sm:mx-0 text-p"
              href="mailto:info@ariseasia.org"
              rel="noopener noreferrer"
              target="_blank"
            >
              <MdOutlineMail className="text-orange-500" size={24} />
              <p className="underline hover:text-orange-500">
                info@ariseasia.org
              </p>
            </a>
            <a
              className="py-2 px-6 my-2 mx-auto text-white bg-gray-900 rounded-full sm:mx-0 hover:bg-gray-700 w-fit"
              href="mailto:info@ariseasia.org"
              rel="noopener noreferrer"
              target="_blank"
            >
              {contactUsText}
            </a>
          </div>
          <p className="italic text-p">{copyrightText}</p>
        </div>
        <div className="flex flex-col items-center">
          <img alt="Arise logo" className="mt-6 w-24" src={logo} />
          <p className="-mt-6 text-center text-orange-500 uppercase text-h4">
            Arise Asia
          </p>
        </div>
      </div>
    </footer>
  );
};

Footer.propTypes = {
  title: PropTypes.string,
  contactUsText: PropTypes.string,
  copyrightText: PropTypes.string,
};

export default Footer;
