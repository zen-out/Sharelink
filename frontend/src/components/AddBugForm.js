import React, { useState } from "react";

function AddBugForm() {
  const [problem, setProblem] = useState("");
  const [whatShouldBe, setWhatShouldBe] = useState("");
  const [whatActuallyIs, setWhatActuallyIs] = useState("");
  const [hypothesis, setHypothesis] = useState("");
  const [plan, setPlan] = useState("");

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
    };
    console.log(bug);
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
