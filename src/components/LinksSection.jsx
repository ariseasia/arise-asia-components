import PropTypes from "prop-types";

const LinksSection = ({ className, linksList }) => {
  return (
    <div className={className}>
      <h2 className="pb-10 uppercase text-h3">Links</h2>
      <div className="flex flex-col gap-y-5 gap-x-10 w-full lg:flex-row">
        {linksList.map(({ title, target }) => (
          <a
            className="flex py-2 px-5 mx-auto text-center rounded-lg border-4 border-orange-500 shadow-md hover:bg-orange-500 hover:border-orange-500 font-heading min-w-fit"
            href={target}
            key={title}
            rel="noreferrer noopener"
            target="_blank"
          >
            {title}
          </a>
        ))}
      </div>
    </div>
  );
};

LinksSection.propTypes = {
  className: PropTypes.string,
  linksList: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      target: PropTypes.string.isRequired,
    }),
  ).isRequired,
};

export default LinksSection;
