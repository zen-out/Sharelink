import React from "react";

function AddLinkForm(props) {
  return (
    <div>
      <div className="container my-5 py-5 z-depth-1">
        <section className="px-md-5 mx-md-5 text-center text-lg-left dark-grey-text">
          <div className="row d-flex justify-content-center">
            <form
              className="text-center"
              onSubmit={props.linkOnSubmit}
              method="post"
            >
              <p className="h4 mb-4">Add Link</p>
              <input
                type="text"
                name="title"
                onChange={props.titleOnChange}
                value={props.title}
                className="form-control mb-4"
                placeholder="Title"
              />
              <input
                type="text"
                name="url"
                onChange={props.urlOnChange}
                value={props.url}
                placeholder="URL"
                className="form-control mb-4"
              />
              <input
                type="text"
                name="tag"
                onChange={props.tagOnChange}
                value={props.tag}
                placeholder="Tag(s)"
                className="form-control mb-4"
              />
              <br />
              <button
                type="submit"
                className="btn btn-outline-dark waves-effect"
              >
                Add Link
              </button>
            </form>
          </div>
        </section>
      </div>
    </div>
  );
}

export default AddLinkForm;
