/*** TC: 0(n), SC: O(n) ***/
function isValid(s: string): boolean {
  const brackets = {
    ")": "(",
    "}": "{",
    "]": "[",
  };

  const openingBrackets: string[] = [];

  for (let i = 0; i < s.length; i++) {
    const l = s[i];

    if (["(", "{", "["].includes(l)) {
      openingBrackets.push(l);
    } else if (openingBrackets.pop() !== brackets[l]) {
      return false;
    }
  }

  return !openingBrackets.length;
}
