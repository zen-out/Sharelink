import React from "react";

function BugItem(props) {
  return (
    <tr data-index={props.index} data-id={props.id}>
      <th scope="row">
        index: {props.index}, id: {props.id}
      </th>
      <td>{props.bug.problem}</td>
      <td>{props.bug.whatshouldbe}</td>
      <td>{props.bug.whatactuallyis}</td>
      <td>{props.bug.hypothesis}</td>
      <td>{props.bug.plan}</td>
    </tr>
  );
}
export default BugItem;
