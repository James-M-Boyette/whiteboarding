/** Problem:
  * Given an array of integers nums, calculate the pivot index of this array and return the leftmost pivot index. If no such index exists, return -1.
  * Notes: 
  *  The pivot index is the index where the sum of all the numbers strictly to the left of the index is equal to the sum of all the numbers strictly to the index's right.
  * If the index is on the left edge of the array, then the left sum is 0 because there are no elements to the left. This also applies to the right edge of the array.

  * So ...
  * We're taking in an array of numbers,
  * and we want to find the number (and its index) where all numbers left of it equal the sum of one or more numbers to the right (not necessarily *all* numbers to the right)
  * I'm not sure what the second note about "left-most, zero" etc means ...
  * 
 */

// This works the way I thought it should - evaluating numbers on the right *up to* all of them
// var pivotIndex = function (nums) {
//   let leftSum = 0;
//   let rightSum = 0;
//   for (let i = 0; i < nums.length; i++) {
//     for (const el of nums.slice(i + 1)) {
//       rightSum += el;
//       if (leftSum == rightSum) {
//         return i;
//       }
//     }
//     leftSum += nums[i];
//     rightSum = 0;
//   }
//   return -1;
// };

// This works the way the problem is described
var pivotIndex = function (nums) {
  let leftSum = 0;
  for (let i = 0; i < nums.length; i++) {
    const rightSum = nums.slice(i + 1).reduce((acc, cur) => {
      return acc + cur;
    }, 0);
    if (leftSum == rightSum) {
      return i;
    }
    leftSum += nums[i];
  }
  return -1;
};

const nums1 = [1, 7, 3, 6, 5, 6];
const nums2 = [1, 2, 3];
const nums3 = [2, 1, -1];
const nums4 = [-1, -1, -1, -1, -1, -1];

console.log(pivotIndex(nums3));

/** Example 1 -
 * Input: nums = [1,7,3,6,5,6]
 * Output: 3
 * Explanation:
 *  The pivot index is 3.
 *  Left sum = nums[0] + nums[1] + nums[2] = 1 + 7 + 3 = 11
 *  Right sum = nums[4] + nums[5] = 5 + 6 = 11
 */

/** Example 2 -
 * Input: nums = [1,2,3]
 * Output: -1
 * Explanation: There is no index that satisfies the conditions in the problem statement.
 */

/** Example 3:
 * Input: nums = [2,1,-1]
 * Output: 0
 * Explanation: The pivot index is 0.
 *  Left sum = 0 (no elements to the left of index 0)
 *  Right sum = nums[1] + nums[2] = 1 + -1 = 0
 */

/** Constraints:
 * 1 <= nums.length <= 104
 * -1000 <= nums[i] <= 1000
 */
