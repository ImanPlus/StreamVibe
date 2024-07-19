import { Button } from "flowbite-react";

export default function PromoSection() {
  return (
    <div className=" py-12">
      <div className="relative border border-black_15 rounded-xl">
        <img
          src="src/assets/PromoSection-mobile.png"
          alt="PromoSection-mobile"
          className="rounded-xl object-cover"
        />
        <div className="absolute inset-0 font-serif flex flex-col justify-center items-center gap-12 py-12 px-8">
          <div className="flex flex-col justify-between items-center text-center gap-3">
            <h1 className="font-bold text-2xl text-white">
              Start your free trial today!
            </h1>
            <p className="text-sm text-gray_60">
              This is a clear and concise call to action that encourages users
              to sign up for a free trial of StreamVibe.
            </p>
          </div>
          <Button className="p-1 bg-red_45 hover:bg-red-400 font-semibold">
            Start a Free Trail
          </Button>
        </div>
      </div>
    </div>
  );
}
