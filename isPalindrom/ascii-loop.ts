/*** TC: 0(n), SC: O(n) ***/

function isPalindrome(s: string): boolean {
  const str = s
    .toLowerCase()
    .split("")
    .filter((l) => {
      const code = l.charCodeAt(0);

      if ((code > 47 && code < 58) || (code > 96 && code < 123)) return l;
    })
    .join("");

  const strReverse = str.split("").reverse().join("");

  return str === strReverse;
}
