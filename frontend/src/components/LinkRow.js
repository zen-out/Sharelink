import React from "react";

function LinkRow(props) {
  console.log(props);
  let tags = props.tags.map((tag, index) => {
    return <li key={index}>{tag}</li>;
  });
  return (
    <tr>
      <th scope="row">{props.id}</th>
      <td>{props.title}</td>
      <td>{props.url}</td>
      <td>{tags}</td>
    </tr>
  );
}

export default LinkRow;
