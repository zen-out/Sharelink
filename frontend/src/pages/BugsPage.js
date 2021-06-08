import React from "react";
import BugList from "../components/BugList";
import AddBugForm from "../components/AddBugForm";
const BugsPage = () => {
  return (
    <div>
      <AddBugForm />
      <BugList />
    </div>
  );
};

export default BugsPage;
