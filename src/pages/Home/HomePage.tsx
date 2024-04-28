import React from "react";

import HomeBlock from "../../components/HomeBlock";
import DefaultLayout from "../Layout";

const HomePage = () => {
  return (
      <DefaultLayout>
        <div>
          <HomeBlock />
        </div>
      </DefaultLayout>
  )
};

export default HomePage;