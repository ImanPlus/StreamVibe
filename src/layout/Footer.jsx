import MyIcon from "../components/MyIcon";
import useBreakpoints from "../constants/breakpoints";

export default function Footer() {
  const { isDesktop } = useBreakpoints();
  let socialSize = isDesktop ? "56" : "44";

  return (
    <footer className="container mx-auto flex flex-col px-4 pt-12 pb-5 bg-black06 font-serif gap-12">
      <div>
        <div className="grid grid-cols-2 gap-7 md:grid-cols-6 sm:grid-cols-5">
          <div className="flex flex-col gap-4">
            <h2 className="text-white  text-base font-semibold">Home</h2>
            <div className="font-semibold text-gray60 text-sm flex flex-col gap-2 cursor-pointer">
              <p>Categories</p>
              <p>Devices</p>
              <p>Pricing</p>
              <p>FAQ</p>
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <h2 className="text-white text-base font-semibold">Movies</h2>
            <div className="font-semibold text-gray60 text-sm flex flex-col gap-2 cursor-pointer">
              <p>Gernes</p>
              <p>Trending</p>
              <p>New Release</p>
              <p>Popular</p>
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <h2 className="text-white text-base font-semibold">Shows</h2>
            <div className="font-semibold text-gray60 text-sm flex flex-col gap-2 cursor-pointer">
              <p>Gernes</p>
              <p>Trending</p>
              <p>New Release</p>
              <p>Popular</p>
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <h2 className="text-white text-base font-semibold">Support</h2>
            <div className="font-semibold text-gray60 text-sm flex flex-col gap-2 cursor-pointer">
              <p>Contact Us</p>
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <h2 className="text-white text-base font-semibold">Subscription</h2>
            <div className="font-semibold text-gray60 text-sm flex flex-col gap-2 cursor-pointer">
              <p>Plans</p>
              <p>Features</p>
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <h2 className="text-white text-base font-semibold">
              Connect With Us
            </h2>
            <div className="flex items-center gap-2 cursor-pointer">
              <MyIcon
                iconName="facebook"
                size={socialSize}
                className="hover:fill-red-800"
              />
              <MyIcon
                iconName="twitter"
                size={socialSize}
                className="hover:fill-red-800"
              />
              <MyIcon
                iconName="linkedin"
                size={socialSize}
                className="hover:fill-red-800"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="border-t border-t-black10 text-sm text-gray60 flex flex-col gap-5 pt-5">
        <p>@2023 streamvib, All Rights Reserved</p>
        <div className="flex items-center gap-4 cursor-pointer">
          <p>Terms of Use</p>
          <p>Privacy Policy</p>
          <p>Cookie Policy</p>
        </div>
      </div>
    </footer>
  );
}
