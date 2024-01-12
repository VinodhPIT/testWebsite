import { useState, useEffect, useRef } from "react";

export function useToggle(initialValue = false) {
  const [toggle, setToggle] = useState(initialValue);
  const [toggleLocation, setToggleLocation] = useState(initialValue);


  useEffect(() => {
    if (toggle || toggleLocation) {
      document.body.classList.add("toggleModel");
    } else {
      document.body.classList.remove("toggleModel");
    }

    return () => {
      document.body.classList.remove("toggleModel");
    };
  }, [toggle, toggleLocation]);

  const onToggle = () => {
    setToggle(!toggle);
    setToggleLocation(false);
  };

  const onToggleLoc = () => {
    setToggleLocation(!toggleLocation);
    setToggle(false);
  };

  return [toggle, onToggle, onToggleLoc, toggleLocation,];
}
