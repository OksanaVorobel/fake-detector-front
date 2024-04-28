import React from "react";

import DetectImage from "../../components/DetectImage";
import DefaultLayout from "../Layout";

const DetectImagePage = () => {
  return (
      <DefaultLayout>
        <div>
          <DetectImage />
        </div>
      </DefaultLayout>
  )
};

export default DetectImagePage;