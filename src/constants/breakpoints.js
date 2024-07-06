import { useMediaQuery } from "react-responsive";

const useBreakpoints = () => {
  const isMobile = useMediaQuery({ minWidth: 320, maxWidth: 480 });
  const isTablet = useMediaQuery({ minWidth: 481, maxWidth: 768 });
  const isLaptop = useMediaQuery({ minWidth: 769, maxWidth: 1024 });
  const isDesktop = useMediaQuery({ minWidth: 1025 });

  return { isMobile, isTablet, isLaptop, isDesktop };
};

export default useBreakpoints;
