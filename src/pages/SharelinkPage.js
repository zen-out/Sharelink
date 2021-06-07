import React, { useState, useEffect } from "react";
import AddLinkForm from "../components/AddLinkForm";
import LinkRow from "../components/LinkRow";
function LinkTable(props) {
  return (
    <div>
      <table className="table table-striped">
        <thead>
          <tr>
            <th scope="col">id</th>
            <th scope="col">Title</th>
            <th scope="col">Link</th>
            <th scope="col">Tags</th>
          </tr>
        </thead>
        <tbody>
          {props.links.map((link, index) => {
            return (
              <LinkRow
                key={index}
                id={index}
                title={link.title}
                url={link.url}
                tags={link.tags}
              />
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

function FilterInput(props) {
  return (
    <div className="md-form form-group mt-5">
      <input
        type="text"
        value={props.filter}
        onChange={props.filterOnChange}
        className="form-control"
        id="formGroupExampleInput2MD"
        placeholder="Filter"
      />
    </div>
  );
}

function SharelinkPage() {
  const [title, setTitle] = useState("");
  const [url, setUrl] = useState("");
  const [tag, setTag] = useState("");
  const [filter, setFilter] = useState("");
  const [links, setLinks] = useState([
    {
      title: "Reddit",
      url: "www.reddit.com",
      tags: ["socialmedia", "fun"],
    },
  ]);

  function titleOnChange(event) {
    setTitle(event.target.value);
  }
  function urlOnChange(event) {
    setUrl(event.target.value);
  }
  function tagOnChange(event) {
    setTag(event.target.value);
  }
  function filterOnChange(event) {
    setFilter(event.target.value);
  }
  // filter function here
  function filterLinks(filter) {
    const lowerSearch = filter.toLowerCase();
    return links.filter((link) => {
      return (
        link.title.toLowerCase().indexOf(lowerSearch) >
          -1 ||
        link.url.toLowerCase().indexOf(lowerSearch) > -1 ||
        link.tags
          .map((tag) => {
            return (
              tag.toLowerCase().indexOf(lowerSearch) > -1
            );
          })
          .indexOf(true) > -1
      );
    });
  }

  function sepTags(string) {
    let newArr = string.split(",");
    for (let i = 0; i < newArr.length; i++) {
      newArr[i] = newArr[i].trim();
    }
    return newArr;
  }

  function linkOnSubmit(event) {
    event.preventDefault();
    // break up link
    let tags = sepTags(tag);
    let newLink = {
      title: title,
      url: url,
      tags: tags,
    };
    let newLinks = links.concat(newLink);
    setLinks(newLinks);
    setTitle("");
    setUrl("");
    setTag("");
  }
  return (
    <div className="container">
      <h1>Sharelink Page</h1>

      <AddLinkForm
        linkOnSubmit={linkOnSubmit}
        titleOnChange={titleOnChange}
        title={title}
        urlOnChange={urlOnChange}
        url={url}
        tagOnChange={tagOnChange}
        tag={tag}
      />
      <FilterInput
        filter={filter}
        filterOnChange={filterOnChange}
      />
      <LinkTable links={filterLinks(filter)} />
    </div>
  );
}

export default SharelinkPage;
