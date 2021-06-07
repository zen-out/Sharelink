# debug assignment (sharelink)

Users will be able to signup.
Users will be able to login.
Users will be able to login via facebook.
Users will be able to add a bug.
Users will be able to add a tag to the bug.
Users will be able to query for tags and bugs.
Users will be able to edit bugs.
Users will be able to delete bugs.
Users will be able to edit tags.
Users will be able to delete tags.
Users will be able to search bugs based on tags.

### queries

```
 getAllBugs() {} /api/bugs
  getUserBugs(id) {} /api/users/:id/bugs
  getTagBugs(id) {} /api/tags/:id/bugs
  getBug(id) {} /api/bugs/:id
  postBug(bug) {} /api/bugs
  editBug(id, newBug) {} /api/bugs/:id
  deleteBug(id) {} /api/bugs/:id
```

```
 getAllUsers() {} /api/users
  signup(username, password) {} /signup
  login(username, password) {} /login
  getUser(id) {} /api/users/:id
  editUser(id) {} /api/users/:id
  deleteUser(id) {} /api/users/:id
```

### routes

```

```

### questions

### database

users:

- id
- username
- password

bugs

- id
- user_id
- problem
- whatactuallyis
- whatshouldbe
- hypothesis
- plan

tags

- id
- user_id
- name

bugs_tags

- id
- user_id
- bug_id
- tag_id

### steps

1. Integrate bcrypt
2. Signup Route
3. Login Route

### Additional Features

timer

- id
- predicted_start_time
- predicted_end_time
- start_time
- end_time

```

```
