import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { GetBugsThunk } from "../redux/actions/Bug";
import BugItem from "./BugItem";

function BugList() {
  const bugStore = useSelector((state) => state.bugStore);
  const bugList = bugStore.bugs;
  console.log("Bug list", bugList);
  const dispatch = useDispatch();

  function getBugs() {
    dispatch(GetBugsThunk());
  }
  return (
    <div>
      <h1>Bug List</h1>
      <table className="table table-striped">
        <thead>
          <tr>
            <th scope="col">Id</th>
            <th scope="col">Problem</th>
            <th scope="col">What should be happening</th>
            <th scope="col">What actually is</th>
            <th scope="col">Hypothesis</th>
            <th scope="col">Plan</th>
          </tr>
        </thead>
        <tbody>
          {bugList.map((bug, index) => {
            return (
              <BugItem
                key={index}
                index={index}
                bug={bug}
              />
            );
          })}
        </tbody>
      </table>
      <button onClick={getBugs}>Get Bugs</button>
    </div>
  );
}

export default BugList;
