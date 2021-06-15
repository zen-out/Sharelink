import React from "react";

function BugItem(props) {
  return (
    <tr data-index={props.index} data-id={props.bug.id}>
      <th scope="row">
        index: {props.index}, id: {props.bug.id}
      </th>
      <td>
        <input type="text" value={props.bug.problem} />
      </td>
      <td>
        <input type="text" value={props.bug.whatshouldbe} />
      </td>
      <td>
        {" "}
        <input
          type="text"
          value={props.bug.whatactuallyis}
        />
      </td>
      <td>
        {" "}
        <input type="text" value={props.bug.hypothesis} />
      </td>
      <td>
        {" "}
        <input type="text" value={props.bug.plan} />
      </td>
      <td>
        {props.bug.tags &&
          props.bug.tags.map((tag, index) => {
            return (
              <input
                type="text"
                key={index}
                value={tag.name}
              />
            );
          })}
      </td>
      <td>
        <button
          type="button"
          className="btn btn-outline-dark waves-effect"
        >
          Edit
        </button>
        <button
          type="button"
          onClick={() => props.deleteBug(props.bug.id)}
          className="btn btn-outline-dark waves-effect"
        >
          Delete
        </button>
      </td>
    </tr>
  );
}
export default BugItem;
