# robofriends-testing

To run the project:

1. Clone this repo
2. Run `npm install`
3. Run `npm start`
4. Run tests with `npm test` -- you may have to press "a" to run all tests

```
version: 2
jobs:
  build:
    docker:
      - image: circleci/node:8.9
    steps:
      - checkout
      - run: echo "npm installing"
      - run: npm install
      - run: CI=true npm run build
  test:
    docker:
      - image: circleci/node:8.9
    steps:
      - checkout
      - run: echo "testing stuff"
      - run: npm install
      - run: npm test
  hithere:
    docker:
      - image: circleci/node:8.9
    steps:
      - checkout
      - run: echo "hellllooooo!"
workflows:
  version: 2
  build_test_and_lint:
    jobs:
      - build
      - hithere
      - test:
          requires:
            - hithere
```
