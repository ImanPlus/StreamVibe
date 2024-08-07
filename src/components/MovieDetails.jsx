import ProfileCard from "../components/ProfileCard";
import TitleIcon from "../components/TitleIcon";
import Badge from "../components/Badge";

export default function MovieDetails() {
  return (
    <div className="font-serif text-sm font-medium text-gray_60 rounded-xl border border-black_15 p-6 md:p-7 xl:p-12 flex flex-col gap-5 md:gap-6 xl:gap-8 bg-black_10">
      <div>
        <TitleIcon iconName="date" title="Released Year" />
        <p className="font-semibold text-base text-white">2022</p>
      </div>

      <div>
        <TitleIcon iconName="lan" title="Available Languages" />
        <div className="flex flex-wrap mt-1 gap-2">
          <Badge label="English" />
          <Badge label="Hindi" />
          <Badge label="Tamil" />
          <Badge label="Telegu" />
          <Badge label="Kannada" />
        </div>
      </div>

      <div>
        <TitleIcon iconName="empty-star" title="Ratings" />
        <div className="flex mt-1 justify-between flex-wrap gap-4">
          <Badge label="IMDb" rate="4.5" />
          <Badge label="Streamvibe" rate="4" />
        </div>
      </div>

      <div>
        <TitleIcon iconName="squares-2x2" title="Gernes" />
        <div className="flex flex-wrap mt-1 gap-2">
          <Badge label="Action" />
          <Badge label="Adventure" />
        </div>
      </div>

      <ProfileCard
        title="Director"
        name="Rishab Shetty"
        country="India"
        // img="../assets/director.png"
      />

      <ProfileCard
        title="Music"
        name="B. Ajaneesh Loknath"
        country="India"
        // img="../assets/director.png"
      />
    </div>
  );
}
