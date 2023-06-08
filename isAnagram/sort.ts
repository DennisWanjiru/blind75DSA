/** TC: O(nlogn) SC: O(n) **/

function isAnagram(s: string, t: string): boolean {
  return s.split("").sort().join("") === t.split("").sort().join("");
}
