import React, { useEffect, useRef } from "react";

interface CloseOnOutsideClickProps {
  onClose: () => void;
  children: React.ReactNode;
}

const CloseOnOutsideClick: React.FC<CloseOnOutsideClickProps> = ({
  onClose,
  children,
}) => {
  const ref = useRef<HTMLDivElement>(null);

  const handleClickOutside = (event: MouseEvent) => {
    if (ref.current && !ref.current.contains(event.target as Node)) {
     onClose(); // Call the onClose function when clicked outside
    }
  };

  useEffect(() => {
    // Attach event listener when component mounts
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      // Clean up event listener when component unmounts
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []); // Run this effect only once (on mount)
  
  return <div ref={ref}>{children}</div>;
};

export default CloseOnOutsideClick;
