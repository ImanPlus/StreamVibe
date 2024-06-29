import { useMediaQuery } from "react-responsive";

const useBreakpoints = () => {
  const isMobile = useMediaQuery({ query: "(max-width: 480px)" });
  const isTablet = useMediaQuery({ query: "(max-width: 768px)" });
  const isLaptop = useMediaQuery({ query: "(max-width: 1024px)" });
  const isDesktop = useMediaQuery({ query: "(max-width: 1200px)" });

  return { isMobile, isTablet, isLaptop, isDesktop };
};

export default useBreakpoints;
