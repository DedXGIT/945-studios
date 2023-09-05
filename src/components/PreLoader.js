import React, { useEffect } from "react";
import { preLoaderAnim } from "../animations/index";

import './Preloader.css'

const PreLoader = () => {
  useEffect(() => {
    preLoaderAnim();
  }, []);
  return (
    <div className="preloader">
      <div className="texts-container">
        <span>Welcome</span>
        <span>to</span>
        <span>945 Studios</span>
      </div>
    </div>
  );
};

export default PreLoader;