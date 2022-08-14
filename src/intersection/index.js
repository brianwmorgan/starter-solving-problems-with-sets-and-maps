function intersection(a, b) {
  const mapA = new Map();
  let setB = new Set();

  a.forEach((e) => {
    mapA.set(e, e);
  });

  b.forEach((e) => {
    const matchingValue = mapA.get(e);
    if (matchingValue) {
      setB.add(e);
    }
  });

  const result = [...setB];
  return result;
}

// another version of the above:

// function intersection(a, b) {
//   const map = new Map();
//   const results = new Set();
//   for (let e of a) {
//     map.set(e, e);
//   }

//   for (let e of b) {
//     if (map.has(e)) {
//       results.add(e);
//     }
//   }

//   return Array.from(results);
// }

module.exports = intersection;
