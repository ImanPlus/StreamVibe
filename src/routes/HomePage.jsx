import Banner from "../components/Banner";

export default function HomePage() {
  return (
    <div className="container mx-auto min-h-screen flex flex-col px-4 pt-10 bg-black_08 mt-20">
      <Banner />
      <div className="text-white text-2xl">Home Page</div>
    </div>
  );
}
