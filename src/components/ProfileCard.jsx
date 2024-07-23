import defaultPicture from "../assets/director.png";
import PropTypes from "prop-types";

export default function ProfileCard({ title, name, country, img }) {
  return (
    <div className="flex flex-col gap-2">
      <h1>{title}</h1>
      <div className="rounded-xl border border-black_15 bg-black_08 py-2 px-3 text-white flex">
        <img
          src={!img ? defaultPicture : img}
          alt="director"
          width={50}
          height={50}
        />
        <div className="flex flex-col pl-2 justify-center">
          <h2 className="text-base">{name}</h2>
          <p className="text-gray_60">From {country}</p>
        </div>
      </div>
    </div>
  );
}

ProfileCard.propTypes = {
  title: PropTypes.string,
  name: PropTypes.string,
  country: PropTypes.string,
  img: PropTypes.string,
};
