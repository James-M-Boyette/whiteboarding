/** Problem:
 * Given an array nums ... return the "running sum" of nums.
 * Note: We define a "running sum" of an array as runningSum[i] = sum(nums[0]…nums[i]).
 * So ...
 * We want to take in an array of numbers, and the sum all of the elements in that array BUT store that sum in a new array such that el #1 + el #2 is stored in the 2nd indecy of the new array.
 */

// const runningSum = (nums) => {
const runningSum = (numsArray) => {
  let sum = 0;
  return numsArray.map((el) => {
    sum += el;
    return sum;
  });
};

nums1 = [1, 2, 3, 4];
nums2 = [1, 1, 1, 1, 1];
nums3 = [3, 1, 2, 10, 1];

console.log("runningSum = ", runningSum(nums2));

/** Example 1:
 * Input: nums = [1,2,3,4]
 * Output: [1,3,6,10]
 * Explanation: Running sum is obtained as follows: [1, 1+2, 1+2+3, 1+2+3+4].
 */

/** Example 2:
 * Input: nums = [1,1,1,1,1]
 * Output: [1,2,3,4,5]
 * Explanation: Running sum is obtained as follows: [1, 1+1, 1+1+1, 1+1+1+1, 1+1+1+1+1]..
 */

/** Example 3:
 * Input: nums = [3,1,2,10,1]
 * Output: [3,4,6,16,17]
 */

/** Constraints:
 * 1 <= nums.length <= 1000
 * -10^6 <= nums[i] <= 10^6
 */
