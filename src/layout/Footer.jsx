import MyIcon from "../components/MyIcon";
import useBreakpoints from "../constants/breakpoints";
import { useTranslation } from "react-i18next";

export default function Footer() {
  const { isDesktop } = useBreakpoints();
  let socialSize = isDesktop ? "56" : "44";

  const { t, i18n } = useTranslation();
  const currentLanguage = i18n.language;
  const rtlClasses = currentLanguage === "fa" ? "rtl" : "ltr";

  return (
    <footer className="bg-black_06 w-full">
      <div className="container mx-auto flex flex-col px-4 pt-12 pb-5 font-serif gap-12">
        <div>
          <div
            className="grid grid-cols-2 gap-7 md:grid-cols-6 sm:grid-cols-5"
            dir={rtlClasses}
          >
            <div className="flex flex-col gap-4">
              <h2 className="text-white  text-base font-semibold">
                {t("home")}
              </h2>
              <div className="font-semibold text-gray_60 text-sm flex flex-col gap-2 cursor-pointer">
                <p>{t("categories")}</p>
                <p>{t("devices")}</p>
                <p>{t("pricing")}</p>
                <p>{t("faq")}</p>
              </div>
            </div>
            <div className="flex flex-col gap-4">
              <h2 className="text-white text-base font-semibold">
                {t("movies")}
              </h2>
              <div className="font-semibold text-gray_60 text-sm flex flex-col gap-2 cursor-pointer">
                <p>{t("gernes")}</p>
                <p>{t("trending")}</p>
                <p>{t("newRelease")}</p>
                <p>{t("popular")}</p>
              </div>
            </div>
            <div className="flex flex-col gap-4">
              <h2 className="text-white text-base font-semibold">
                {t("shows")}
              </h2>
              <div className="font-semibold text-gray_60 text-sm flex flex-col gap-2 cursor-pointer">
                <p>{t("gernes")}</p>
                <p>{t("trending")}</p>
                <p>{t("newRelease")}</p>
                <p>{t("popular")}</p>
              </div>
            </div>
            <div className="flex flex-col gap-4">
              <h2 className="text-white text-base font-semibold">
                {t("support")}
              </h2>
              <div className="font-semibold text-gray_60 text-sm flex flex-col gap-2 cursor-pointer">
                <p>{t("contactUs")}</p>
              </div>
            </div>
            <div className="flex flex-col gap-4">
              <h2 className="text-white text-base font-semibold">
                {t("subscription")}
              </h2>
              <div className="font-semibold text-gray_60 text-sm flex flex-col gap-2 cursor-pointer">
                <p>{t("plans")}</p>
                <p>{t("features")}</p>
              </div>
            </div>
            <div className="flex flex-col gap-4">
              <h2 className="text-white text-base font-semibold">
                {t("connectWithUs")}
              </h2>
              <div className="flex items-center gap-2 cursor-pointer">
                <MyIcon
                  iconName="facebook"
                  size={socialSize}
                  className="hover:fill-red-600"
                />
                <MyIcon
                  iconName="twitter"
                  size={socialSize}
                  className="hover:fill-red-600"
                />
                <MyIcon
                  iconName="linkedin"
                  size={socialSize}
                  className="hover:fill-red-600"
                />
              </div>
            </div>
          </div>
        </div>
        <div
          className="border-t border-t-black_10 text-sm text-gray_60 flex flex-col gap-5 pt-5"
          dir={rtlClasses}
        >
          <p>
            <bdi>@2023</bdi> <bdi>streamvib</bdi> , {t("allRightsReserved")}
          </p>
          <div className="flex items-center gap-4 cursor-pointer">
            <p>{t("termsOfUse")}</p>
            <p>{t("privacyPolicy")}</p>
            <p>{t("cookiePolicy")}</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
