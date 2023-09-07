/* eslint-disable array-callback-return */
/* eslint-disable consistent-return */
/* eslint-disable guard-for-in */
/* eslint-disable no-restricted-syntax */
/* eslint-disable no-unused-vars */

export default function sorting(obj, array) {
  const result = [];
  const copyObj = { ...obj };

  array.forEach((elem) => {
    result.push({ key: elem, value: copyObj[elem] });
    delete copyObj[elem];
  });

  const temp = [];
  for (const key in copyObj) {
    temp.push({ key, value: copyObj[key] });
  }

  temp.sort((a, b) => {
    if (a.key < b.key) return -1;
    if (a.key > b.key) return 1;
  });

  const arrKeys = Object.keys(copyObj).sort();
  arrKeys.forEach((elem) => {
    result.push({ key: elem, value: copyObj[elem] });
  });

  return result;
}
