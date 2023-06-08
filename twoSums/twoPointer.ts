/*** TWO POINTERS APPROACH - TC: O(nlog(n)) SC: O(n) ***/

export function twoSum(nums: number[], target: number): number[] {
  const nums2 = nums.map((num, idx) => [idx, num]);
  nums2.sort((a, b) => a[1] - b[1]);

  let left = 0;
  let right = nums.length - 1;

  while (left < right) {
    const currentSum = nums2[left][1] + nums2[right][1];

    if (currentSum === target) {
      return [nums2[left][0], nums2[right][0]];
    }

    if (currentSum < target) {
      left++;
    } else {
      right--;
    }
  }

  return [];
}
