import { useState } from "react";

import MainComponent from "./components/MainComponent/MainComponent";
import Arrow from "./images/Arrow";

function App() {
  const [allData, setAllData] = useState({
    fontFamily: "'IBM Plex Sans', sans-serif",
    mainBg: "#fff",
    header: {
      subHeading: "VISUAL SUMMARY",
      subHeadingColor: "#7F56D9",
      heading: "Components of OKR",
      headingColor: "#000",
    },
    border: "1px solid  #D0D5DD",
    objective: {
      title: "Objective",
      titleColor: "#000",
      subTitle: "Quarterly Goal  |  What do we want to achieve?",
      subTitleColor: "#667085",
      progress: 60,
      progressColor: "#fff",
      zeroValueColor: "#98A2B3",
      progressBarBg: "#F4EBFF",
      progressBg: "#7F56D9",
    },
    keyResults: [
      {
        title: "Key Result 1",
        titleColor: "#000",
        subTitle: "Measuring Success of Objective in Percentage of A",
        subTitleColor: "#667085",
        progress: 80,
        progressColor: "#fff",
        zeroValueColor: "#98A2B3",
        progressBg: "#2970FF",
        progressBarBg: "#D1E0FF",
        bg: "#fff",
      },
      {
        title: "Key Result 2",
        titleColor: "#000",
        subTitle: "Measuring Success of Objective in Percentage of B",
        subTitleColor: "#667085",
        number: 10,
        progressColor: "#fff",
        zeroValueColor: "#98A2B3",
        progressBg: "#2970FF",
        progressBarBg: "#D1E0FF",
        bg: "#fff",
      },
      {
        title: "Key Result 3",
        titleColor: "#000",
        subTitle: "Measuring Success of Objective in Percentage of C",
        subTitleColor: "#667085",
        progress: 0,
        progressColor: "#fff",
        zeroValueColor: "#98A2B3",
        progressBg: "#2970FF",
        progressBarBg: "#EAECF0",
        bg: "#fff",
      },
    ],
    initiatives: {
      title: "Initiatives",
      titleColor: "#000",
      info: "Impactful projects on team level",
      infoColor: "#000",
      bg: "#fff",
      arrow: <Arrow color="#000" />,
      projects: [
        {
          name: "Project A",
          nameColor: "#000",
          bg: "#F9FAFB",
          border: " 1px solid #D0D5DD",
        },
        {
          name: "Project B",
          nameColor: "#000",
          bg: "#F9FAFB",
          border: " 1px solid #D0D5DD",
        },
        {
          name: "Project C",
          nameColor: "#000",
          bg: "#F9FAFB",
          border: " 1px solid #D0D5DD",
        },
      ],
    },
    weeklyPlans: {
      title: "Weekly Plans",
      titleColor: "#000",
      info: "Tasks to accomplish on individual level",
      infoColor: "#000",
      bg: "#fff",
      arrow: <Arrow color="#000" />,
      tasks: [
        {
          name: "Main Task A",
          nameColor: "#000",
          bg: "#F9FAFB",
          border: " 1px solid #D0D5DD",
        },
        {
          name: "Main Task B",
          nameColor: "#000",
          bg: "#F9FAFB",
          border: " 1px solid #D0D5DD",
        },
        {
          name: "Main Task C",
          nameColor: "#000",
          bg: "#F9FAFB",
          border: " 1px solid #D0D5DD",
        },
        {
          name: "Main Task D",
          nameColor: "#000",
          bg: "#F9FAFB",
          border: " 1px solid #D0D5DD",
        },
        {
          name: "Main Task E",
          nameColor: "#000",
          bg: "#F9FAFB",
          border: " 1px solid #D0D5DD",
        },
      ],
    },
  });

  return (
    <>
      <div
        style={{
          "--mainBg": allData.mainBg,

          fontFamily: allData.fontFamily,
        }}
      >
        <MainComponent {...allData} />
      </div>
    </>
  );
}

export default App;
