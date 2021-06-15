import React from "react";
import BugItem from "./BugItem";

function BugList(props) {
  return (
    <div className="container">
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
            <th scope="col">Tags</th>
          </tr>
        </thead>
        <tbody>
          {props.bugList.map((bug, index) => {
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
      <button onClick={props.getBugs}>Get Bugs</button>
    </div>
  );
}

export default BugList;
