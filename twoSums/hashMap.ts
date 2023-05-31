export function twoSum(nums: number[], target: number): number[] {
  /*** HASH MAP APPROACH - TC: O(n) SC: O(n)***/
  const obj = {};
  let i = 0;

  while (i < nums.length) {
    const missing = target - nums[i];

    if (obj[missing]) {
      return [Number(obj[missing]), i];
    }

    obj[nums[i]] = String(i);
    i++;
  }

  return [];
}
