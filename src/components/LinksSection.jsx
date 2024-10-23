import PropTypes from "prop-types";

const LinkButton = ({ title, target }) => (
  <a
    className={`flex items-center justify-center py-2 px-5 rounded-lg font-heading font-normal text-center border-4 border-orange-600 shadow-md hover:bg-orange-600 hover:border-orange-600 w-full text-nowrap`}
    href={title}
    rel="noreferrer noopener"
    target="_blank"
  >
    {target}
  </a>
);

LinkButton.propTypes = {
  title: PropTypes.string,
  target: PropTypes.string,
};

const LinksSection = ({ className, linksList }) => {
  return (
    <div className={className}>
      <h3 className="pb-10 text-2xl font-bold uppercase font-heading">Links</h3>

      <div className="flex flex-col gap-5 justify-center items-center w-full lg:flex-row lg:gap-10">
        {linksList.map(({ title, target }) => (
          <LinkButton key={title} title={title} target={target} />
        ))}
      </div>
    </div>
  );
};

LinksSection.propTypes = {
  className: PropTypes.string,
  linksList: PropTypes.arrayOf(
    PropTypes.shape({ title: PropTypes.string, target: PropTypes.string }),
  ),
};

export default LinksSection;
