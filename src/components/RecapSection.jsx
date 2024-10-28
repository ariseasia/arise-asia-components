import PropTypes from "prop-types";

const RecapSection = ({
  className,
  bgSrc,
  description,
  quantityColor,
  statistics,
  videoSrc,
}) => {
  const paragraphs = description.split("\n").filter((p) => p);

  return (
    <div className={className}>
      <h2 className="pb-10 uppercase text-h3">The Recap</h2>
      <div className="flex flex-col md:flex-row md:space-x-3">
        {videoSrc && (
          <iframe
            allowFullScreen
            className="mb-4 w-full rounded-xl aspect-video"
            src={videoSrc}
            title="Video recap"
          />
        )}
        {statistics && (
          <div className="md:mt-auto mb-3 font-heading font-bold text-lg md:text-3xl text-nowrap">
            {statistics?.map(({ quantity, quantifier }) => (
              <p key={quantifier}>
                <span className={quantityColor}>{quantity}</span> {quantifier}
              </p>
            ))}
          </div>
        )}
      </div>
      <div
        className={`bg-[url('${bgSrc}')] bg-no-repeat bg-cover p-5 w-full text-black text-sm md:text-base`}
      >
        {paragraphs.map((paragraph, i) => (
          <article key={i} className="prose lg:prose-lg">
            <p>{paragraph}</p>
          </article>
        ))}
      </div>
    </div>
  );
};

RecapSection.propTypes = {
  className: PropTypes.string,
  bgSrc: PropTypes.string,
  description: PropTypes.string.isRequired,
  quantityColor: PropTypes.string.isRequired,
  statistics: PropTypes.arrayOf(
    PropTypes.shape({
      num: PropTypes.number.isRequired,
      item: PropTypes.string.isRequired,
    }),
  ),
  videoSrc: PropTypes.string,
};

export default RecapSection;
