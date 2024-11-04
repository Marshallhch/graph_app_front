import React from "react";
import Sales from "./Sales";
import Visitors from "./Visitors";

const DashboardScreen = () => {
  return (
    <div className="contents-area ml-[calc(20%+14px)] w-[calc(80%-28px)] mt-[14px]">
      <div className="area-row are-one mt-[14px] grid grid-cols-[4fr_3fr] gap-x-[14px]">
        <Sales />
        <Visitors />
      </div>
    </div>
  );
};

export default DashboardScreen;
