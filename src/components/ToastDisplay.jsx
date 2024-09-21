import { Toast } from "flowbite-react";
import PropTypes from "prop-types";
import { HiX } from "react-icons/hi";
import customTheme from "../theme/toastTheme.js";
import { useEffect } from "react";

export default function ToastDisplay({ message, onClose }) {
  useEffect(() => {
    // Set a timer to remove the toast after 4 seconds
    const timer = setTimeout(() => {
      onClose(); // Call the onClose function passed from parent
    }, 4000);

    return () => clearTimeout(timer);
  }, [onClose]);

  return (
    <Toast theme={customTheme}>
      <div className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-red-700 text-red-100">
        <HiX className="h-5 w-5" />
      </div>
      <div className="ml-3 text-sm font-normal">{message}</div>
      <Toast.Toggle />
    </Toast>
  );
}

ToastDisplay.propTypes = {
  message: PropTypes.string,
  onClose: PropTypes.func,
};
