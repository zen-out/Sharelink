import React, { useState, useEffect } from "react";

function BugItem(props) {
  const [problem, setProblem] = useState(props.bug.problem);
  const [whatShouldBe, setWhatShouldBe] = useState(
    props.bug.whatshouldbe
  );
  const [whatActuallyIs, setWhatActuallyIs] = useState(
    props.bug.whatactuallyis
  );
  const [hypothesis, setHypothesis] = useState(
    props.bug.hypothesis
  );
  const [plan, setPlan] = useState(props.bug.plan);
  const [tags, setTags] = useState(props.bug.tags);

  useEffect(() => {
    setProblem(props.bug.problem);
    setWhatShouldBe(props.bug.whatshouldbe);
    setWhatActuallyIs(props.bug.whatactuallyis);
    setHypothesis(props.bug.hypothesis);
    setPlan(props.bug.plan);
  }, [
    props.bug.problem,
    props.bug.whatshouldbe,
    props.bug.whatactuallyis,
    props.bug.hypothesis,
    props.bug.plan,
  ]);
  function tagOnChange(event) {
    // how do I change the logic here to ensure that it will change my tag?
  }

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
  function editBug() {
    console.log("edit bug function clicked in bug item");
    let editedBug = {
      problem: problem,
      whatshouldbe: whatShouldBe,
      whatactuallyis: whatActuallyIs,
      hypothesis: hypothesis,
      plan: plan,
    };
    console.log("id", props.bug.id);
    console.log("edited bug", editedBug);
    props.editBug(props.bug.id, editedBug);
  }
  return (
    <tr data-index={props.index} data-id={props.bug.id}>
      <th scope="row">
        index: {props.index}, id: {props.bug.id}
      </th>
      <td>
        <input
          type="text"
          value={problem}
          onChange={problemOnChange}
        />
      </td>
      <td>
        <input
          type="text"
          value={whatShouldBe}
          onChange={whatShouldBeOnChange}
        />
      </td>
      <td>
        {" "}
        <input
          type="text"
          value={whatActuallyIs}
          onChange={whatActuallyIsOnChange}
        />
      </td>
      <td>
        {" "}
        <input
          type="text"
          value={hypothesis}
          onChange={hypothesisOnChange}
        />
      </td>
      <td>
        {" "}
        <input
          type="text"
          value={plan}
          onChange={planOnChange}
        />
      </td>
      <td>
        {tags &&
          tags.map((tag, index) => {
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
          onClick={editBug}
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
