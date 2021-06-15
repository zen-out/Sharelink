import React from "react";

export default function Form(props) {
  return (
    <div>
      <form
        onSubmit={props.addFikaEvent}
        className="text-center border border-light p-5"
      >
        <label htmlFor="date">Date</label>
        <br />
        <input
          name="date"
          type="date"
          placeholder="Date"
          value={props.date}
          onChange={props.dateOnChange}
        />
        <br />
        <label htmlFor="text">Name</label>
        <br />
        <input
          name="name"
          type="text"
          placeholder="Name"
          value={props.name}
          onChange={props.nameOnChange}
        />
        <br />
        {props.foods.map((food, index) => {
          return (
            <input
              key={index}
              type="text"
              placeholder="Food"
              onChange={(event) =>
                props.onFoodChange(index, event)
              }
              value={food.name}
            />
          );
        })}
        <br />
        <button
          type="button"
          className="btn btn-outline-dark waves-effect"
          onClick={props.addFood}
        >
          Add Food
        </button>
        <br />
        <button
          type="submit"
          className="btn btn-outline-dark waves-effect"
        >
          Submit
        </button>
      </form>
    </div>
  );
}
