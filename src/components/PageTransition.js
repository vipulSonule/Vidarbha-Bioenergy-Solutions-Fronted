import { useEffect } from "react";
import gsap from "gsap";

const PageTransition = () => {
  useEffect(() => {
    gsap.fromTo(
      ".page",
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 1, ease: "power3.out" }
    );
  }, []);

  return null;
}

export default PageTransition;
