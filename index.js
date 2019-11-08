function getPerm(str) {
  if (str.length <= 1) {
    let newSet = new Set([str]);
    return newSet;
  }
  const allCharsExceptLast = str.slice(0, -1);
  const lastChar = str.slice(-1);
  const permutationsOfAllExceptLast = getPerm(allCharsExceptLast);
  const results = new Set();
  permutationsOfAllExceptLast.forEach(perm => {
    for (let i = 0; i <= allCharsExceptLast.length; i++) {
      const permutation = perm.slice(0, i) + lastChar + perm.slice(i);
      results.add(permutation);
    }
  });
  return results;
}

getPerm('abc');
