const nums = [1, 242545, 233, 4, 55, 32, 6, 7, 5432, 567, 221, 65, 4];

const linerSearch = (arr, value) => {
  //O(n)
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === value) {
      return i;
    }
  }
  return -1;
};

const createMultTable = (limit) => {
  //O(n^2)
  const table = [];

  for (let i = 1; i < limit; i++) {
    for (let j = 1; j < limit; j++) {
      table.push(`${i}*${j} = ${i * j}`);
    }
  }
  return table;
};

const sortMass = [1, 3, 4, 6, 7, 8, 9, 10, 11, 40];

const binarySearch = (arr, value) => {
  //O(log n)
  let start = 0;
  let end = arr.length - 1;
  let middle = Math.round((start + end) / 2);

  while (true) {
    if (arr[middle] === value) {
      return middle;
    }
    if (arr[middle] > value) {
      end = middle;
      middle = Math.ceil((end + start) / 2);
    } else {
      start = middle;
      middle = Math.floor((end + start) / 2);
    }
  }
};
