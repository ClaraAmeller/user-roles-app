import React from "react";

import JoinProjectForm from "./JoinProjectForm";
import UserProjectsList from "./UserProjectsList";

const Content = () => (
  <div className="min-h-screen w-full lg:static lg:max-h-full lg:overflow-visible lg:w-3/4 xl:w-4/5">
    <div>
      <div className="flex">
        <div className="mt-24 pb-8 lg:pt-28 w-full">
          <div
            className="markdown mb-6 px:3 lg:px-6 max-w-lg mx-auto lg:ml-0 lg:mr-auto xl:mx-0 xl:px-12 xl:w-3/4"
          >
            <JoinProjectForm />
            <UserProjectsList />
          </div>
        </div>
      </div>
    </div>
  </div >
);

export default Content;