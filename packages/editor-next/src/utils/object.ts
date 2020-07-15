export function shallowEqual(obj1: any = {}, obj2: any = {}) {
  const keys1 = Object.keys(obj1);
  const keys2 = Object.keys(obj2);

  return (
    keys1.length === keys2.length &&
    keys1.reduce((acc, key) => acc && obj1[key] === obj2[key], true)
  );
}
