import React, { useEffect, useState } from "react";

import classes from "./ProgressBar.module.css";

const ProgressBar = ({
  progress,
  number,
  progressBarBg,
  progressBg,
  progressColor,
  className,
  objective,
  zeroValueColor,
}) => {
  const [progressValue, setProgressValue] = useState(0);
  const progressPercentage = progressValue + "%";

  const progressStyle = {
    width: progressPercentage,
    background: progressBg,
  };
  useEffect(() => {
    setProgressValue(progress ? progress : number ? number : 0);
  }, [progress, number]);
  return (
    <>
      <div
        className={[classes.progressBar, className].join(" ")}
        style={{ background: progressBarBg }}
      >
        {" "}
        {progressValue <= 0 && (
          <p
            className={[
              classes.percentage,
              classes.noProgress,
              objective && classes.objectivePercentage,
            ].join(" ")}
            style={{ "--color": zeroValueColor }}
          >
            {number ? number : progressPercentage}
          </p>
        )}
        <div className={classes.progress} style={progressStyle}>
          {progressValue > 0 && (
            <p
              className={[
                classes.percentage,
                objective && classes.objectivePercentage,
              ].join(" ")}
              style={{ "--color": progressColor }}
            >
              {number ? number : progressPercentage}
            </p>
          )}
        </div>
      </div>
    </>
  );
};

export default ProgressBar;
