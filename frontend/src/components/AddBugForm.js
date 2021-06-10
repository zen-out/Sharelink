import React, { useState } from "react";
import { AddBugThunk } from "../redux/actions/Bug";
import { useSelector, useDispatch } from "react-redux";
import { JWT_SECRET } from "../utilities/config";
import jwt from "jwt-simple";

function AddBugForm() {
  const [problem, setProblem] = useState("");
  const [whatShouldBe, setWhatShouldBe] = useState("");
  const [whatActuallyIs, setWhatActuallyIs] = useState("");
  const [hypothesis, setHypothesis] = useState("");
  const [plan, setPlan] = useState("");
  const [tags, setTags] = useState([]);

  const addTag = () => setTags(tags.concat([{ name: "" }]));

  const onTagChange = (index, event) => {
    const newTags = tags.slice();
    newTags[index] = {
      name: event.target.value,
    };
    setTags(newTags);
  };
  // user information
  const token = localStorage.getItem("token");
  const user = token ? jwt.decode(token, JWT_SECRET) : {};
  console.log("User has token?", user);
  const user_id = user.id;
  // redux
  const dispatch = useDispatch();
  const bugStore = useSelector((state) => state.bugStore);
  console.log(bugStore);
  // deconstruct bug store here
  const { bugs, error, loading, message } = bugStore;

  function problemOnChange(event) {
    setProblem(event.target.value);
  }
  function whatShouldBeOnChange(event) {
    setWhatShouldBe(event.target.value);
  }
  function whatActuallyIsOnChange(event) {
    setWhatActuallyIs(event.target.value);
  }
  function hypothesisOnChange(event) {
    setHypothesis(event.target.value);
  }
  function planOnChange(event) {
    setPlan(event.target.value);
  }
  function formOnSubmit(event) {
    event.preventDefault();
    let bug = {
      problem: problem,
      whatshouldbe: whatShouldBe,
      whatactuallyis: whatActuallyIs,
      hypothesis: hypothesis,
      plan: plan,
      tags: tags,
    };
    console.log(bug);
    dispatch(AddBugThunk(bug, user_id));
  }
  return (
    <div>
      <div className="container my-5 py-5 z-depth-1">
        <div className="row d-flex justify-content-center">
          <form
            className="text-center"
            onSubmit={formOnSubmit}
            method="post"
          >
            <p className="h4 mb-4">Add Bug</p>
            <input
              type="text"
              value={problem}
              name="problem"
              onChange={problemOnChange}
              className="form-control mb-4"
              placeholder="Problem"
            />
            <input
              type="text"
              value={whatShouldBe}
              name="whatshouldbe"
              onChange={whatShouldBeOnChange}
              className="form-control mb-4"
              placeholder="What Should Be Happening?"
            />

            <input
              type="text"
              value={whatActuallyIs}
              name="whatactuallyis"
              onChange={whatActuallyIsOnChange}
              className="form-control mb-4"
              placeholder="What Should Be Happening?"
            />
            <input
              type="text"
              value={hypothesis}
              name="hypothesis"
              onChange={hypothesisOnChange}
              className="form-control mb-4"
              placeholder="Hypothesis"
            />
            <input
              type="text"
              value={plan}
              name="plan"
              onChange={planOnChange}
              className="form-control mb-4"
              placeholder="Plan"
            />
            {tags.map((tag, index) => {
              return (
                <input
                  key={index}
                  type="text"
                  onChange={(event) =>
                    onTagChange(index, event)
                  }
                  value={tag.name}
                />
              );
            })}
            <button
              onClick={addTag}
              className="btn btn-outline-dark waves-effect"
            >
              Add Tag
            </button>

            <br />
            <button
              type="submit"
              className="btn btn-outline-dark waves-effect"
            >
              Add Bug
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default AddBugForm;
