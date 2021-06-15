## Users

POST /api/signup

```
{
    "name": "lesley",
    "username": "lezzles16",
    "password": "orange"
}
```

response

```
{
    "token": "tokenNumber"
}
```

POST /api/login

```
{
    "username": "lezzles15",
    "password": "orange"
}

```

```
{
    "token": "tokenNumber"
}

```

GET /api/users

```
[ {
        "id": 1,
        "name": "lesley",
        "username": "lezzles11",
        "password": "$2b$10$QCH.8Qedlja83YVozP8X.unJBiM1hGYfpC4UcZqAfVs5wJLJc2LwO",
        "created_at": "2021-06-08T09:51:56.314Z",
        "updated_at": "2021-06-08T09:51:56.314Z"
    },]
```

GET /api/users/26

```
{
    "id": 26,
    "name": "lesley",
    "username": "lezzles15",
    "password": "$2b$10$.HVNxPCZBsGw8zjAAs/KUeHsFhjUnrZ4hahY34BQXwWPK.njEl6CK",
    "created_at": "2021-06-10T06:16:11.139Z",
    "updated_at": "2021-06-10T06:16:11.139Z"
}
```

PUT /api/users/26

```
{
    "name": "ryan",
    "username": "ryry",
    "password": "newPassword"
}

```

DELETE /api/users/26

## Bugs

GET /api/bugs

```
[
    {
        "id": 49,
        "problem": "asdf",
        "whatactuallyis": "easy",
        "whatshouldbe": "asdfasdf",
        "hypothesis": "fuck",
        "plan": "yolo",
        "created_at": "2021-06-10T04:28:09.841Z",
        "updated_at": "2021-06-10T04:28:09.841Z"
    }
]
```

GET /api/users/:userId/bugs

```
[
    {
        "id": 58,
        "problem": null,
        "whatshouldbe": null,
        "whatactuallyis": null,
        "hypothesis": null,
        "plan": null
    },
]
```

GET /api/bugs/:id

```
{
    "id": 58,
    "problem": null,
    "whatactuallyis": null,
    "whatshouldbe": null,
    "hypothesis": null,
    "plan": null,
    "created_at": "2021-06-10T05:27:44.442Z",
    "updated_at": "2021-06-10T05:27:44.442Z"
}
```

POST /api/bugs/:userId

GET /api/search/:userId/:search

```
[
     {
        "id": 62,
        "problem": "asdf",
        "whatshouldbe": "asdfasdfa",
        "whatactuallyis": "asdf",
        "hypothesis": "asdf",
        "plan": "asdfasdf",
        "tags": [
            {
                "name": "asdf"
            },
            {
                "name": "asdf"
            }
        ]
    },
]
```

PUT /api/bugs/:id

```
{
    "problem": "new problem",
    "whatactuallyis": "new what actually is",
    "whatshouldbe": "new what should be",
    "hypothesis": "new hypothesis",
    "plan": "new plan"
}
```

return "edited"

DELETE /api/bugs/:id

```
"deleted from three tables"
```
