import React from "react";
import AuthorizationBlock from "../../components/AuthorizationBlock";
import DefaultLayout from "../Layout";

const AuthorizationPage = () => {
  return (
      <DefaultLayout>
        <div>
          <AuthorizationBlock />
        </div>
      </DefaultLayout>
  )
};

export default AuthorizationPage;