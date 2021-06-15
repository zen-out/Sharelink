import React from "react";

function BugItem(props) {
  return (
    <tr data-index={props.index} data-id={props.bug.id}>
      <th scope="row">
        index: {props.index}, id: {props.bug.id}
      </th>
      <td>{props.bug.problem}</td>
      <td>{props.bug.whatshouldbe}</td>
      <td>{props.bug.whatactuallyis}</td>
      <td>{props.bug.hypothesis}</td>
      <td>{props.bug.plan}</td>
      <td>
        {props.bug.tags &&
          props.bug.tags.map((tag, index) => {
            return <li key={index}>{tag.name}</li>;
          })}
      </td>
    </tr>
  );
}
export default BugItem;
