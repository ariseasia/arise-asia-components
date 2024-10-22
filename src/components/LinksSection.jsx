import PropTypes from "prop-types";

const LinkButton = ({ text, link }) => (
  <a
    className={`flex items-center justify-center py-2 px-5 rounded-lg font-heading font-normal text-center border-4 border-orange-600 shadow-md hover:bg-orange-600 hover:border-orange-600 w-full text-nowrap`}
    href={link}
    rel="noreferrer noopener"
    target="_blank"
  >
    {text}
  </a>
);

LinkButton.propTypes = {
  text: PropTypes.string,
  link: PropTypes.string,
};

const LinksSection = ({ className, linksList }) => {
  return (
    <div className={className}>
      <h3 className="text-2xl uppercase font-bold font-heading pb-10">Links</h3>

      <div className="flex flex-col gap-5 lg:flex-row lg:gap-10 items-center justify-center w-full">
        {linksList.map(({ text, link }) => (
          <LinkButton key={text} text={text} link={link} />
        ))}
      </div>
    </div>
  );
};

LinksSection.propTypes = {
  className: PropTypes.string,
  linksList: PropTypes.arrayOf(
    PropTypes.shape({ text: PropTypes.string, link: PropTypes.string }),
  ),
};

export default LinksSection;
