import React from "react";
import HomeWelcome from "../components/home/HomeWelcome";
import HomeWhoWeAre from "../components/home/HomeWhoWeAre";
import HomeMission from "../components/home/HomeMission";
import HomeVision from "../components/home/HomeVision";
import HomeCommitment from "../components/home/HomeCommitment";
import HomeWhat from "../components/home/HomeWhat";
import HomeReady from "../components/home/HomeReady";
import HomeIntro from "../components/home/HomeIntro";

const Homes = () => {
  return (
    <div>
      <HomeIntro />
      <HomeWelcome />
      <HomeWhoWeAre />
      <HomeMission />
      <HomeVision />
      <HomeCommitment />
      <HomeWhat />
      <HomeReady />
    </div>
  );
};

export default Homes;
