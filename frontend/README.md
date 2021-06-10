# Sharelink Assignment

The purpose of this assignment is to create a fullstack application utilizing react, redux and postgres.

## Technologies implemented

- [ ] react
- [ ] react-redux
- [ ] jwt
- [ ] redux-thunk
- [ ] redux-logger
- [ ] redux

### Potential Problems:

- Parameters (when creating actions, reducers, knowing what gets passed in and what comes out)
- Checking for conditions (useSelector)
- Confusing knex queries
- Planning with backend - thunk axios - whenever we post, dispatch anything, what would we expect back? Being clear about that - having a graphic organizer for that.

### Thunks:

##### GetBugsThunk(search, userId)

1. dispatches GetBugsRequest(search, userId)
2. Calls axios get request
   1. BACKEND:
      1. hits "api/search/:userId/:search"
      2. get search (request.params.search)
      3. get userId (request.params.userId)
      4. Call this.bugService.getSearchedBugs(search, userId)
      5. In SERVICE:
         1. Calls this.searchQuery(search, userId)
            1. selects bugs.id, bugs.problem, bugs.whatshouldbe, bugs.whatactuallyis, bugs.hypothesis, bugs.plan from bugs (join users_bugs, and users)
            2. Loop through searchQuery
               1. this.getTags(searchQuery[i].id)
               2. Gets all tags where bugs_tags.tag_id = tags.id
               3. and where bugs_tags.bugid = searchQuery[i].id
            3. Push that query and tags as an array into searchedArray
            4. Return searchedArray
      6. Then respond with that searched array
3. dispatches GetBugsSuccess(response.data)
   1. Respond with that data
4. (if error) dispatches GetBugsFailure(error)

##### AddBugThunk(bug, userId)

1.  Calls axios post request (/api/bugs/:userId/)

    1. Posts {bug: bug, userId, userId}
       1. BACKEND:
          1. hits "/api/bugs/:userId"
          2. gets the body (request.body.bug)
          3. gets the userId (request.params.userId)
          4. calls this.bugService.postBug(bug, userId)
          5. calls three knex methods
             1. add bug into bugs table
             2. add bug_id, user_id into users_bugs table
             3. add bug.tags.name into tags table (checks for existence)
             4. add bug_id and tag_id into bugs_tags table
             5. returns "done"
          6. sends response back
          7. #TODO: (maybe should send the latest bugs back instead) - call the list method from the router class

2.  dispatches AddBugSuccess(bug, userId)
    1.  which would concat the newest bug onto the current store
    2.  #TODO: does the store update?
3.  (if error) dispatches AddBugFailure(error)

##### SignupThunk (name, username, password)

1. dispatches SignupRequest(name, username, password)
2. posts axios - /api/signup, {name, username, password}
   1. BACKEND:
      1. Call this.userService.signup(name, username, password)
      2. Checks if username exists - if not, hash password then insert into users table
      3. Get the id back and create payload -
      4. Encode payload with secret and return token
3. Post request returns data - localStorage.setItem("token", data.token)
4. dispatches SignupSuccess(token)
5. (if error) dispatches SignupFailure(error)

##### LoginThunk (username, password)

1. dispatches LoginRequest(username, password)
2. posts axios (/api/login) - username, password
   1. BACKEND:
      1. Call this.userService.login(username, password)
      2. Checks for username and password
      3. Grabs user - if there is no user with that username, throw error.
      4. Else, check password
      5. Create payload, deleting password
      6. encode token and return it
   2. should return token
   3. set local storage
3. dispatch LoginSuccess(token)
4. (if error) dispatch LoginFailure(error)
