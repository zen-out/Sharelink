const bugRoutesInfo = [
  {
    link: "/api/bugs",
    type: "GET",
    get: true,
    template: "/api/bugs",
    purpose: "gets all bugs",
    backendtest: "yes",
    frontendconnect: "BugsPage",
    notes: "implemented in",
  },
  {
    link: "/api/users/2/bugs",
    type: "GET",
    get: true,
    template: "/api/users/:userId/bugs",
    purpose: "Get users bugs",
    backendtest: "yes",
    frontendconnect: "no",
    notes: "implemented in",
  },
  {
    link: "/api/bugs/2",
    type: "GET",
    get: true,
    template: "/api/bugs/:id",
    purpose: "get specific bug",
    backendtest: "yes",
    notes: "implemented in",
  },
  {
    link: "/api/bugs/2",
    type: "POST",
    template: "/api/bugs/:userId",
    purpose: "post bugs",
    backendtest: "yes",
    notes:
      "how does this one work? how do they login then also pass the url in?",
  },
  {
    link: "/api/users/2/search/asdf",
    type: "GET",
    get: true,
    template: "/api/users/:userId/search/:search",
    purpose: "gets search content",
    backendtest: "yes",
    notes: "implemented in",
  },
  {
    link: "/api/users/2/search",
    type: "GET",
    get: true,
    template: "/api/users/:userId/search",
    purpose: "gets initial search content",
    backendtest: "yes",
    notes: "implemented in",
  },
  {
    link: "/api/bugs/2",
    type: "DELETE",
    template: "/api/bugs/:id",
    purpose: "delete bug",
    backendtest: "yes",
    frontendconnect: "no",
    notes: "implemented in",
  },
];

const userRoutesInfo = [
  {
    link: "/api/users",
    type: "GET",
    get: true,
    template: "/api/users",
    purpose: "gets all users",
    backendtest: "yes",
    notes: "implemented in",
  },
  {
    link: "/api/signup",
    type: "POST",
    template: "/api/signup",
    purpose: "post user",
    backendtest: "yes",
    notes: "implemented in",
  },
  {
    link: "/api/login",
    type: "POST",
    template: "/api/login",
    purpose: "login user",
    backendtest: "yes",
    notes: "implemented in",
  },
  {
    link: "/api/users/2",
    get: true,
    type: "GET",
    template: "/api/users/:id",
    purpose: "get specific user",
    backendtest: "yes",
    notes: "implemented in",
  },
  {
    link: "/api/users/2",
    type: "DELETE",
    template: "/api/users/:id",
    purpose: "delete specific user",
    backendtest: "yes",
    notes: "implemented in",
  },
];

module.exports = { bugRoutesInfo, userRoutesInfo };
