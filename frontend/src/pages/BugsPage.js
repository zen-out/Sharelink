import React, { useState, useEffect } from "react";
import jwt from "jwt-simple";
import BugList from "../components/BugList";
import AddBugForm from "../components/AddBugForm";
import { useSelector, useDispatch } from "react-redux";
import {
  GetBugsThunk,
  AddBugThunk,
} from "../redux/actions/Bug";
import { JWT_SECRET } from "../utilities/config";
function BugsPage() {
  const bugStore = useSelector((state) => state.bugStore);
  const bugList = bugStore.bugs;
  // deconstruct bug store here
  const { bugs, error, loading, message } = bugStore;
  const dispatch = useDispatch();
  const token = localStorage.getItem("token");
  const user = token ? jwt.decode(token, JWT_SECRET) : {};
  console.log("User has token?", user);
  const user_id = user.id;

  useEffect(() => {
    dispatch(GetBugsThunk("a", user_id));
  }, []);
  function getBugs() {
    dispatch(GetBugsThunk(filter, user_id));
  }
  const [filter, setFilter] = useState("");
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
    console.log("frontend bug and user id", bug, user_id);
    dispatch(AddBugThunk({ bug }, user_id));
  }
  function filterOnChange(event) {
    setFilter(event.target.value);
  }

  return (
    <div>
      <AddBugForm
        formOnSubmit={formOnSubmit}
        problem={problem}
        problemOnChange={problemOnChange}
        whatShouldBe={whatShouldBe}
        whatShouldBeOnChange={whatShouldBeOnChange}
        whatActuallyIs={whatActuallyIs}
        whatActuallyIsOnChange={whatActuallyIsOnChange}
        hypothesis={hypothesis}
        hypothesisOnChange={hypothesisOnChange}
        plan={plan}
        planOnChange={planOnChange}
        tags={tags}
        onTagChange={onTagChange}
        addTag={addTag}
      />
      <input
        type="text"
        value={filter}
        onChange={filterOnChange}
        placeholder="Search"
      />
      <button onClick={getBugs}>Find bugs</button>
      <BugList bugList={bugList} getBugs={getBugs} />
    </div>
  );
}
export default BugsPage;
