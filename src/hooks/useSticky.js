import { useState, useEffect, useRef } from "react";

const useSticky = () => {
  const [isSticky, setIsSticky] = useState(false);
  const elementRef = useRef(null);
  const topRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsSticky(!entry.isIntersecting);
      },
      { threshold: [1] }
    );

    if (topRef.current) {
      observer.observe(topRef.current);
    }

    return () => {
      if (topRef.current) {
        observer.unobserve(topRef.current);
      }
    };
  }, []);

  return { isSticky, elementRef, topRef };
};

export default useSticky;
