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
