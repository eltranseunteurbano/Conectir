
import React from "react";
import "./index.scss";

const ProgressBar = ({ className = "", value = 0, max = 5 }) => {

    return <div className={`ProgressBar ` + (className && "")}>
        <progress className="ProgressBar__progress" max={max} value={value} />
    </div>;

}

export default ProgressBar;