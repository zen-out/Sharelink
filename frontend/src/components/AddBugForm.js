import React from "react";

function AddBugForm(props) {
  const inputStyle = {
    width: "60vw",
  };
  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="card">
          <div className="card-body">
            <form
              className="text-center"
              onSubmit={props.formOnSubmit}
              method="post"
            >
              <p className="h4">Add Bug</p>
              <input
                style={inputStyle}
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
              <input
                onClick={props.addTag}
                value="Add Tag"
                className="btn btn-outline-dark waves-effect"
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
    </div>
  );
}

export default AddBugForm;
