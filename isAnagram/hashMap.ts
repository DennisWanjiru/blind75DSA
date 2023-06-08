/** TC: O(n) SC: O(n) **/

function _isAnagram(s: string, t: string): boolean {
  if (s.length !== t.length) return false;

  const freq1: any = {};
  const freq2: any = {};

  t.split("").forEach((l) => {
    if (l in freq1) {
      freq1[l] = freq1[l] + 1;
    } else {
      freq1[l] = 1;
    }
  });

  s.split("").forEach((l) => {
    if (l in freq2) {
      freq2[l] = freq2[l] + 1;
    } else {
      freq2[l] = 1;
    }
  });

  let isAnagram = true;

  s.split("").forEach((l) => {
    if (freq1[l] !== freq2[l]) isAnagram = false;
  });

  return isAnagram;
}
