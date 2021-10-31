import isEqual from "../isEqual";

export default function arrayEquals(a, b) {
    return Array.isArray(a) &&
      Array.isArray(b) &&
      a.length === b.length &&
      a.every((val, index) => {
        if (typeof val === 'object') {
          return isEqual(val, b[index])
        }
        else {
          return val === b[index]
        }
      });
}