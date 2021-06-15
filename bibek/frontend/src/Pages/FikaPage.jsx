import React, { useState } from "react";
import Form from "../components/Form";
import FikaList from "../components/FikaList";
import { formatDate } from "../utilities/formatDate";
import { useSelector, useDispatch } from "react-redux";
import { AddFikaEventThunk } from "../redux/actions/Fika";

const FikaPage = () => {
  const [date, setDate] = useState(
    new Date("June 11, 2021")
  );
  const [name, setName] = useState("");
  const [foods, setFoods] = useState([]);
  const [list, setList] = useState([
    {
      id: 1,
      name: "Bibek",
      date: "2021-06-11",
      foods: [{ name: "pizza" }, { name: "dumplings" }],
    },
    {
      id: 2,
      name: "Lesley",
      date: "2021-06-18",
      foods: [{ name: "crackers" }, { name: "mango" }],
    },
  ]);

  const dispatch = useDispatch();
  function addFikaEvent(event) {
    event.preventDefault();
    let newFikaEvent = {
      name: name,
      date: date,
      foods: foods,
    };
    let newList = list.concat(newFikaEvent);
    setList(newList);
    dispatch(AddFikaEventThunk(newFikaEvent));
  }

  function addFood() {
    setFoods(foods.concat([{ name: "" }]));
  }

  function onFoodChange(index, event) {
    const newFoods = foods.slice();
    newFoods[index] = {
      name: event.target.value,
    };
    setFoods(newFoods);
  }

  function dateOnChange(event) {
    console.log("Date", event.target.value);
    setDate(event.target.value);
  }

  function nameOnChange(event) {
    setName(event.target.value);
  }

  return (
    <div>
      <Form
        addFikaEvent={addFikaEvent}
        name={name}
        date={date}
        foods={foods}
        addFood={addFood}
        dateOnChange={dateOnChange}
        onFoodChange={onFoodChange}
        nameOnChange={nameOnChange}
      />
      <FikaList list={list} />
    </div>
  );
};

export default FikaPage;
