import React from "react";

function AddBugForm(props) {
  return (
    <div>
      <div className="container my-5 py-5 z-depth-1">
        <div className="row d-flex justify-content-center">
          <form
            className="text-center"
            onSubmit={props.formOnSubmit}
            method="post"
          >
            <p className="h4 mb-4">Add Bug</p>
            <input
              type="text"
              value={props.problem}
              name="problem"
              onChange={props.problemOnChange}
              className="form-control mb-4"
              placeholder="Problem"
            />
            <input
              type="text"
              value={props.whatShouldBe}
              name="whatshouldbe"
              onChange={props.whatShouldBeOnChange}
              className="form-control mb-4"
              placeholder="What Should Be Happening?"
            />

            <input
              type="text"
              value={props.whatActuallyIs}
              name="whatactuallyis"
              onChange={props.whatActuallyIsOnChange}
              className="form-control mb-4"
              placeholder="What Should Be Happening?"
            />
            <input
              type="text"
              value={props.hypothesis}
              name="hypothesis"
              onChange={props.hypothesisOnChange}
              className="form-control mb-4"
              placeholder="Hypothesis"
            />
            <input
              type="text"
              value={props.plan}
              name="plan"
              onChange={props.planOnChange}
              className="form-control mb-4"
              placeholder="Plan"
            />
            {props.tags.map((tag, index) => {
              return (
                <input
                  key={index}
                  type="text"
                  onChange={(event) =>
                    props.onTagChange(index, event)
                  }
                  value={tag.name}
                />
              );
            })}
            <button
              onClick={props.addTag}
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
