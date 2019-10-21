# Backend test with Node

## Stack
-----

- Node
- Koa
- Jest
- Docker

## Quick Start
-----------

### Install application.

```shell
git clone https://github.com/ariel-zplinux/backend-test.git
cd backend-test
npm install
npm start
```

### Launch unit tests

```shell
npm test
```

### Run with Docker in local

```shell
git clone https://github.com/ariel-zplinux/zp-boilerplate.git
cd backend-test
docker build -t "zplinuxoss/backend-test" .
docker run -p 3000:3000 zplinuxoss/backend-test
```

### To deploy from Docker Hub (Task 4)

```shell
docker pull zplinuxoss/backend-test
docker run -p 3000:3000 zplinuxoss/backend-test
```

## API endpoints
-------------

|HTTP Method|Url|Parameters|Description|
|---|---|---|---|
|GET|/players| |Retrieve list of players sorted by id|
|GET|/players/:id||Retrieve a player by id|

## Unit tests output

```shell
npm test

> backend-test@1.0.0 test /home/noshir/dev/backend-test
> NODE_ENV=test jest

 PASS  ./tasks.test.js
  Task 1 - viewAllPlayers
    ✓ should return a sorted array of players (93ms)
  Task 2 - viewPlayerById
    ✓ should return a single player if id is matching (23ms)
    ✓ should return 404 http code status if id is not matching (27ms)
  Task 3 - fetch content
    ✓ should fetch players list when calling "/players" endpoint (25ms)
    ✓ should fetch players list when calling "/players/:id" endpoint (22ms)

Test Suites: 1 passed, 1 total
Tests:       5 passed, 5 total
Snapshots:   0 total
Time:        1.507s, estimated 2s
Ran all test suites.
```

## Resources

- https://koajs.com/
- https://jestjs.io/en/
- https://github.com/ariel-zplinux/zp-boilerplate
- https://stackoverflow.com/questions/53833139/check-array-in-js-is-list-sorted/53833620#53833620