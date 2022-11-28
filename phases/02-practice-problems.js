function anagrams(str1, str2) {
  // Your code here
}


function commonElements(arr1, arr2) {
  // Your code here
  let res = []
  const mySet = new Set(arr1)

  for (let num of arr2) {
    if (mySet.has(num)) {
      res.push(num)
    }
  }
  return res;
};


function duplicate(arr) {
  // Your code here
}


function twoSum(nums, target) {
  // Your code here
}


function wordPattern(pattern, strings) {
  // Your code here
}


module.exports = [anagrams, commonElements, duplicate, twoSum, wordPattern];
