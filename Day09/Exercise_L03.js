import { products, countries } from "./Countries.js";

/** Task 01 */
// console.log(countries.sort((a, b) => a.name.localeCompare(b.name)));
// console.log(countries.sort((a, b) => a.capital.localeCompare(b.capital)));
// console.log(countries.sort((a, b) => a.population - b.population));

/** Task 02 */
function mostSpokenLanguages(arr, num) {
  let result = [];
  Object.entries(
    arr
      .map((c) => c.languages)
      .flat()
      // .reduce((a, b) => `${a},${b}`)
      // .split(",")
      .reduce((acc, cur) => {
        acc[cur] = acc[cur] + 1 || 1;
        return acc;
      }, {})
  ).forEach((element) => {
    result.push({ language: element[0], count: element[1] });
  });
  return result
    .sort((a, b) => a.count - b.count)
    .slice(result.length - num)
    .reverse();
}
console.log(mostSpokenLanguages(countries, 3));

/** Task 03 */
function mostPopulatedCountries(arr, num) {
  let result = [];
  arr.forEach((element) => {
    result.push({ country: element.name, population: element.population });
  });
  return result
    .sort((a, b) => a.population - b.population)
    .slice(result.length - num)
    .reverse();
}
console.log(mostPopulatedCountries(countries, 3));

/** Task 04 */
const ages = [
  31, 26, 34, 37, 27, 26, 32, 32, 26, 27, 27, 24, 32, 33, 27, 25, 26, 38, 37,
  31, 34, 24, 33, 29, 26,
];

const statistics = {
  count: function () {
    return ages.length;
  },
  sum: () => {
    return ages.reduce((a, b) => a + b, 0);
  },
  min: () => {
    return ages.sort((a, b) => a - b)[0];
  },
  max: () => {
    return ages.sort((a, b) => a - b)[ages.length - 1];
  },
  range: () => {
    return statistics.max() - statistics.min();
  },
  mean: () => {
    return statistics.sum() / statistics.count();
  },
  median: () => {
    return ages.sort((a, b) => a - b)[parseInt(ages.length / 2)];
  },
  mode: () => {
    let result = Object.entries(
      ages.reduce((acc, cur) => {
        acc[cur] = acc[cur] + 1 || 1;
        return acc;
      }, {})
    )
      .sort((a, b) => a[1] - b[1])
      .reverse()[0];

    return { mode: result[0], count: result[1] };
  },
  var: () => {
    return (
      ages.reduce((a, b) => a + (b - statistics.mean()) ** 2, 0) /
      statistics.count()
    );
  },
  std: () => {
    return Math.sqrt(statistics.var(), 2).toFixed(2);
  },

  freqDist: () => {
    return ages.reduce((acc, cur) => {
      acc[cur] = acc[cur] + 1 || 1;
      return acc;
    }, {});
  },
  describe: () => {
    return `
    Count: ${statistics.count()}
    Sum: ${statistics.sum()}
    Min: ${statistics.min()}
    Max: ${statistics.max()}
    Range: ${statistics.range()}
    Mean: ${statistics.mean()}
    Median: ${statistics.median()}
    Mode: ${statistics.mode()}
    Variance: ${statistics.var()}
    Standard Deviation: ${statistics.std()}
    Frequency Distribution: ${statistics.freqDist()}
    `;
  },
};

console.log("Count:", statistics.count()); // 25
console.log("Sum: ", statistics.sum()); // 744
console.log("Min: ", statistics.min()); // 24
console.log("Max: ", statistics.max()); // 38
console.log("Range: ", statistics.range()); // 14
console.log("Mean: ", statistics.mean()); // 30
console.log("Median: ", statistics.median()); // 29
console.log("Mode: ", statistics.mode()); // {'mode': 26, 'count': 5}
console.log("Variance: ", statistics.var()); // 17.5
console.log("Standard Deviation: ", statistics.std()); // 4.2
console.log("Frequency Distribution: ", statistics.freqDist()); // [(20.0, 26), (16.0, 27), (12.0, 32), (8.0, 37), (8.0, 34), (8.0, 33), (8.0, 31), (8.0, 24), (4.0, 38), (4.0, 29), (4.0, 25)]
console.log(statistics.describe());
