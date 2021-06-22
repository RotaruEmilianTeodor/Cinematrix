import React, { useEffect, useState } from "react"
import { BsFileArrowUp } from "react-icons/bs"

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
  }, []);

  return (
    <div className="scrollTopButton">
      {isVisible && 
        <div onClick={scrollToTop}>
          <BsFileArrowUp className = 'BsFileArrowUp' style = {{width: '40px', height: '40px'}}></BsFileArrowUp>
        </div>}
    </div>
  );
}