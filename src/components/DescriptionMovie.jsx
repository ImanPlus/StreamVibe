import PropTypes from "prop-types";

export default function DescriptionMovie({ description = "---" }) {
  return (
    <div className="font-serif text-sm md:text-base xl:text-lg font-medium rounded-xl border border-black_15 p-6 md:p-10 xl:p-12 bg-black_10">
      <h1 className="text-gray_60 pb-2 md:pb-3 xl:pb-4">Description</h1>
      <p className="text-white">{description}</p>
    </div>
  );
}

DescriptionMovie.propTypes = {
  description: PropTypes.string,
};
