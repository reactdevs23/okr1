import React from "react";
import classes from "./MainComponent.module.css";
import ProgressBar from "../ProgressBar/ProgressBar";

const MainComponent = ({
  header,
  objective,
  keyResults,
  initiatives,
  weeklyPlans,
  border,
}) => {
  return (
    <div
      className="min-h-screen flex items-center justify-center w-full"
      style={{ background: "var(--mainBg)", "--border": border }}
    >
      <div className={classes.wrapper}>
        <div className={classes.headingContainer}>
          <h3
            className={classes.subHeading}
            style={{ "--color": header.subHeadingColor }}
          >
            {header.subHeading}
          </h3>
          <h1
            className={classes.heading}
            style={{ "--color": header.headingColor }}
          >
            {header.heading}
          </h1>
        </div>
        <div className={[classes.objective].join(" ")}>
          <div className={classes.titleContainer}>
            <h3
              className={classes.title}
              style={{ "--color": objective.titleColor }}
            >
              {objective.title}
            </h3>
            <h1
              className={classes.subTitle}
              style={{ "--color": objective.subTitleColor }}
            >
              {objective.subTitle}
            </h1>
          </div>
          <ProgressBar
            progress={objective.progress}
            progressColor={objective.progressColor}
            progressBg={objective.progressBg}
            progressBarBg={objective.progressBarBg}
            className={[classes.progressBar].join(" ")}
            objective
            zeroValueColor={objective.zeroValueColor}
          />
        </div>

        <div className={classes.keyResults}>
          {keyResults.map((keyResult, i) => (
            <div
              className={[classes.keyResult].join(" ")}
              key={i}
              style={{ "--bg": keyResult.bg }}
            >
              <div className={classes.titleContainer}>
                <h3
                  className={classes.title}
                  style={{ "--color": keyResult.titleColor }}
                >
                  {keyResult.title}
                </h3>
                <h1
                  className={classes.subTitle}
                  style={{ "--color": keyResult.subTitleColor }}
                >
                  {keyResult.subTitle}
                </h1>
              </div>
              <ProgressBar
                number={keyResult.number && keyResult.number}
                progress={keyResult.progress && keyResult.progress}
                progressColor={keyResult.progressColor}
                progressBg={keyResult.progressBg}
                progressBarBg={keyResult.progressBarBg}
                zeroValueColor={keyResult.zeroValueColor}
              />
            </div>
          ))}
        </div>

        <div className={classes.initiativesAndWeeklyPlans}>
          <div className={classes.initiatives}>
            <div className={classes.arrowContainer}>{initiatives.arrow}</div>
            <div className={classes.topHeader}>
              {" "}
              <h4
                className={classes.title}
                style={{ "--color": initiatives.titleColor }}
              >
                {initiatives.title}
              </h4>
              <p
                className={classes.info}
                style={{ "--color": initiatives.infoColor }}
              >
                {initiatives.info}
              </p>
            </div>
            <div className={classes.projects}>
              {initiatives.projects.map((project, i) => (
                <div
                  key={i}
                  className={classes.project}
                  style={{ "--border": project.border, "--bg": project.bg }}
                >
                  <p
                    className={classes.projectName}
                    style={{ "--color": project.nameColor }}
                  >
                    {project.name}
                  </p>
                </div>
              ))}
            </div>
          </div>{" "}
          <div className={classes.weeklyPlans}>
            <div className={classes.arrowContainer}>{weeklyPlans.arrow}</div>
            <div className={classes.topHeader}>
              {" "}
              <h4
                className={classes.title}
                style={{ "--color": weeklyPlans.titleColor }}
              >
                {weeklyPlans.title}
              </h4>
              <p
                className={classes.info}
                style={{ "--color": weeklyPlans.infoColor }}
              >
                {weeklyPlans.info}
              </p>
            </div>
            <div className={classes.projects}>
              {weeklyPlans.tasks.map((task, i) => (
                <div
                  key={i}
                  className={classes.task}
                  style={{ "--border": task.border, "--bg": task.bg }}
                >
                  <p
                    className={classes.taskName}
                    style={{ "--color": task.nameColor }}
                  >
                    {task.name}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainComponent;
