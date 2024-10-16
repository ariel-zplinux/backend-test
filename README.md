# Backend test with Node

## Stack

- Node
- Koa
- Sequelize
- Postgresql

## Quick Start

### Install application.

```shell
git clone https://github.com/ariel-zplinux/backend-test.git
cd backend-test
npm install
npm start
```

## API endpoints

|HTTP Method|Url|Parameters|Description|
|---|---|---|---|
|GET|/users| |Retrieve list of users|

## output

```shell
noshir@fedora:~/dev/backend-test$ curl http://localhost:3000/users | jq

[
  {
    "id": 1,
    "firstName": "jaane",
    "lastName": "doe",
    "createdAt": "2024-10-16T09:25:45.799Z",
    "updatedAt": "2024-10-16T09:25:45.799Z"
  }
]
```

## Resources

- https://koajs.com/
- https://sequelize.org/
- https://github.com/ariel-zplinux/backend-test
