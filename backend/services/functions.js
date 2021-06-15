const bugs = [
  {
    id: 62,
    problem: "asdf",
    whatshouldbe: "asdfasdfa",
    whatactuallyis: "asdf",
    hypothesis: "asdf",
    plan: "asdfasdf",
    tags: [
      {
        name: "asdf",
      },
      {
        name: "asdf",
      },
    ],
  },
  {
    id: 62,
    problem: "asdf",
    whatshouldbe: "asdfasdfa",
    whatactuallyis: "asdf",
    hypothesis: "asdf",
    plan: "asdfasdf",
    tags: [
      {
        name: "asdf",
      },
      {
        name: "asdf",
      },
    ],
  },
  {
    id: 63,
    problem: "asdfasdf",
    whatshouldbe: "asdfasdfa",
    whatactuallyis: "asdf",
    hypothesis: "asdf",
    plan: "asdfasdf",
    tags: [
      {
        name: "asdf",
      },
      {
        name: "asdf",
      },
    ],
  },
  {
    id: 63,
    problem: "asdfasdf",
    whatshouldbe: "asdfasdfa",
    whatactuallyis: "asdf",
    hypothesis: "asdf",
    plan: "asdfasdf",
    tags: [
      {
        name: "asdf",
      },
      {
        name: "asdf",
      },
    ],
  },
  {
    id: 64,
    problem: "asdffdafds",
    whatshouldbe: "fdsadfasd",
    whatactuallyis: "fyckk",
    hypothesis: "",
    plan: "",
    tags: [
      {
        name: "",
      },
    ],
  },
];

const res = [
  ...bugs
    .reduce((a, c) => {
      a.set(c.id, c);
      return a;
    }, new Map())
    .values(),
];

console.log(res);
