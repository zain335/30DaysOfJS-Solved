const a = [4, 5, 8, 9];
const b = [3, 4, 5, 7];

/** Task 01 */
let c = [...a, ...b];
const aUnionB = new Set(c);
console.log(aUnionB);

/** Task 02 */
c = a.filter((a) => b.includes(a));
const aIntersectionB = new Set(c);
console.log(aIntersectionB);
