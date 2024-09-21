import { useRouteError } from "react-router-dom";
import error404 from "../assets/404-computer.svg";
import getToastService from "../services/toastService";
import ToastDisplay from "../components/ToastDisplay";
import { useEffect, useState } from "react";

export default function ErrorPage() {
  const errorPage = useRouteError();
  const { status, statusText, data, message } = errorPage;

  const [toastMessage, setToastMessage] = useState("");
  const toastService = getToastService();
  useEffect(() => {
    toastService.init(setToastMessage); // Initialize toast service with the setToastMessage function
    toastService.show("Page Not Found!");
  }, [toastService]);

  const handleCloseToast = () => {
    setToastMessage(""); // Clear the toast message
  };

  return (
    <div className="bg-blue-950 flex flex-col justify-center items-center h-screen">
      <div className="w-200 h-150">
        <img src={error404} alt="error 404" />
      </div>
      <h2 className="text-blue-700 font-bold text-4xl">
        {status ? `${status} ${statusText}` : message}
      </h2>
      <h1 className="text-2xl md:text-5xl text-red-500 text-center ">{data}</h1>

      <div className="flex justify-end w-full p-4">
        {toastMessage && (
          <ToastDisplay message={toastMessage} onClose={handleCloseToast} />
        )}
      </div>
    </div>
  );
}
