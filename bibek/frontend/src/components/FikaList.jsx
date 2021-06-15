import React from "react";
import { formatDate } from "../utilities/formatDate";

export default function FikaList(props) {
  const createList = props.list.map((eachList, index) => {
    console.log(eachList);
    return (
      <tr key={index}>
        <td>{index + 1}</td>
        <td>{eachList.date}</td>
        <td>{eachList.name}</td>
        <td>
          <ul>
            {eachList.foods.map((food, index) => {
              return (
                <div key={index}>
                  <span>{food.name}</span>
                </div>
              );
            })}
          </ul>
        </td>
        <td>
          <button className="btn btn-outline-dark waves-effect">
            Edit
          </button>
        </td>
        <td>
          <button className="btn btn-outline-dark waves-effect">
            Delete
          </button>
        </td>
      </tr>
    );
  });
  console.log(createList);
  return (
    <div>
      <table className="table table-striped">
        <thead>
          <tr>
            <th>#</th>
            <th>Date</th>
            <th>Name</th>
            <th>Foods</th>
            <th></th>
            <th></th>
          </tr>
        </thead>
        <tbody>{createList}</tbody>
      </table>
    </div>
  );
}
