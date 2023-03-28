# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).



### `bai 1`
1.Javascript algorithm
###
###`1.1`
`function mostCommonLength(strings) {
  let lengths = {};
  for (let i = 0; i < strings.length; i++) {
    let length = strings[i].length;
    if (length in lengths) {
      lengths[length] += 1;
    } else {
      lengths[length] = 1;
    }
  }
  let maxCount = Math.max(...Object.values(lengths));
  return Object.keys(lengths).filter(length => lengths[length] === maxCount).map(Number);
}


function testMostCommonLength() {
  assertArrayEquals(mostCommonLength([]), []);
  assertArrayEquals(mostCommonLength(['a']), [1]);
  assertArrayEquals(mostCommonLength(['a', 'b']), [1]);
  assertArrayEquals(mostCommonLength(['a', 'ab', 'abc', 'cd', 'def', 'gh']), [2, 3]);
  assertArrayEquals(mostCommonLength(['a', 'b', 'cc', 'dddd']), [2]);
  assertArrayEquals(mostCommonLength(['aa', 'bbb', 'cc']), [3]);
  assertArrayEquals(mostCommonLength(['aaa', 'bb', 'c', 'dddd']), [1, 3]);
  assertArrayEquals(mostCommonLength(['aa', 'bb', 'c', 'dddd']), [2]);
  console.log('All test cases pass');
}

function assertArrayEquals(actual, expected) {
  if (actual.length !== expected.length) {
    console.error('Arrays have different lengths');
    console.error('Actual:', actual);
    console.error('Expected:', expected);
  } else {
    for (let i = 0; i < actual.length; i++) {
      if (actual[i] !== expected[i]) {
        console.error('Arrays differ at index', i);
        console.error('Actual:', actual);
        console.error('Expected:', expected);
        return;
      }
    }
    console.log('Arrays are equal:', actual);
  }
}

testMostCommonLength();`

###
###`1.2`
```function sumTopTwoIntegers(arr) {

  if (arr.length < 2) {
    throw new Error('Array must have at least two elements');
  }

  const sorted = arr.sort((a, b) => b - a);

  return sorted[0] + sorted[1];
}


function testSumTopTwoIntegers() {
  let arr = [1, 4, 2, 3, 5];
  let expected = 9;
  let result = sumTopTwoIntegers(arr);
  assertEqual(result, expected, arr);

  arr = [-3, -1, -5, -2, -4];
  expected = -3;
  result = sumTopTwoIntegers(arr);
  assertEqual(result, expected, arr);

  arr = [1, -2, 3, -4, 5];
  expected = 6;
  result = sumTopTwoIntegers(arr);
  assertEqual(result, expected, arr);

 
  arr = [1, 4, 2, 3, 4];
  expected = 8;
  result = sumTopTwoIntegers(arr);
  assertEqual(result, expected, arr);

  arr = [1, 1];
  expected = 2;
  result = sumTopTwoIntegers(arr);
  assertEqual(result, expected, arr);

  arr = [1];
  try {
    sumTopTwoIntegers(arr);
    console.error('Test case failed: array has length 1');
  } catch (e) {
    console.log('Test passed: array has length 1');
  }
  
  arr = [];
  try {
    sumTopTwoIntegers(arr);
    console.error('Test case failed: array is empty');
  } catch (e) {
    console.log('Test passed: array is empty');
  }

  console.log('All test cases pass');
}

function assertEqual(actual, expected, input) {
  if (actual !== expected) {
    console.error(`Test case failed: expected ${expected}, but got ${actual} for input ${input}`);
  } else {
    console.log(`Test passed: result is ${actual} for input ${input}`);
  }
}

testSumTopTwoIntegers();

```
### `bai 2 `
React 
this project is for bai2



## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.


## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
