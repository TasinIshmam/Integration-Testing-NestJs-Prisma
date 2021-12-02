## E2E Testing with NestJS and Prisma

A small example to demonstrate end to end testing with NestJS and Prisma. A temporary postgres instance is created using Docker to encapsulate a database and the test data. 

Largely based on [this repo by Brendan-Stubbs](https://github.com/Brendan-Stubbs/prisma-connection-bug-reproduction)


#### Instructions

- `npm install` to install dependencies
- `npm run test:e2e` to run the integration test