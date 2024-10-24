import PropTypes from "prop-types";

const RecapSection = ({
  className,
  videoLink,
  statistics,
  bgPath,
  description,
}) => {
  const paragraphs = description.split("\n").filter((p) => p);

  return (
    <div className={className}>
      <h2 className="pb-10 uppercase text-h3">The Recap</h2>
      {/* video & statistics */}
      <div className="flex flex-col md:flex-row md:space-x-3">
        {videoLink && (
          <iframe
            allowFullScreen
            className="mb-4 w-full rounded-xl aspect-video"
            src={videoLink}
            title="Video recap"
          />
        )}
        {statistics && (
          <div className="md:mt-auto mb-3 font-heading font-bold text-lg md:text-3xl text-nowrap">
            {statistics.length > 0 &&
              statistics.map(({ num, unit }) => (
                <p key={unit}>
                  <span className="text-purple-400">{num}</span> {unit}
                </p>
              ))}
          </div>
        )}
      </div>
      {/* recap description */}
      <div
        className={`bg-[url('${bgPath}')] bg-no-repeat bg-cover p-5 w-full text-black text-sm md:text-base`}
      >
        {paragraphs.map((paragraph, i) => (
          <div key={i}>
            <p>{paragraph}</p>
            <br />
          </div>
        ))}
      </div>
    </div>
  );
};

RecapSection.propTypes = {
  className: PropTypes.string,
  videoLink: PropTypes.string,
  statistics: PropTypes.arrayOf(
    PropTypes.shape({
      num: PropTypes.number.isRequired,
      unit: PropTypes.string.isRequired,
    }),
  ),
  bgPath: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default RecapSection;
