import { useEffect } from "react";
import { useLocation } from "react-router-dom";

/**
 * Scrolls to the element matching the URL hash whenever the route/hash
 * changes (nav links use "/#section", including from other pages), and
 * scrolls to top on a plain route change with no hash.
 */
const ScrollToHash = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const el = document.querySelector(location.hash);
      if (el) {
        requestAnimationFrame(() => {
          el.scrollIntoView({ behavior: "smooth", block: "start" });
        });
        return;
      }
    }
    window.scrollTo({ top: 0, behavior: "auto" });
  }, [location]);

  return null;
};

export default ScrollToHash;
