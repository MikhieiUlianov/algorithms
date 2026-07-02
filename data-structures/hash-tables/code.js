function hash(key, arrayLen) {
  let total = 0;
  let WEIRD_PRIME = 31;

  for (let i = 0; i < Math.min(key.length, 100); i++) {
    let char = key[i];
    let value = char.charCodeAt(0) - 96;
    total = (total * WEIRD_PRIME + value) % arrayLen;
  }

  return total;
}

class HashTable {
  constructor(size = 53) {
    this.keyMap = new Array(size);
  }

  #hash(key) {
    let total = 0;
    let WEIRD_PRIME = 31;

    for (let i = 0; i < Math.min(key.length, 100); i++) {
      let char = key[i];
      let value = char.charCodeAt(0) - 96;
      total = (total * WEIRD_PRIME + value) % this.keyMap.length;
    }

    return total;
  }

  //   set(key, value) {
  //     const index = this.#hash(key);
  //     const item = [key, value];

  //     if (!this.keyMap[index]) this.keyMap[index] = [];

  //     this.keyMap[index].push(item);
  //   }

  set(key, value) {
    const index = this.#hash(key);

    if (!this.keyMap[index]) this.keyMap[index] = [];

    for (let i = 0; i < this.keyMap[index].length; i++)
      if (this.keyMap[index][i][0] === key) {
        this.keyMap[index][i][1] = value;
        return;
      }

    this.keyMap[index].push([key, value]);
  }

  get(key) {
    const index = this.#hash(key);
    const bucket = this.keyMap[index];

    if (!bucket) return undefined;

    for (let i = 0; i < bucket.length; i++)
      if (bucket[i][0] === key) return bucket[i][1];

    return undefined;
  }

  values() {
    const uniqueValues = new Set();

    for (let i = 0; i < this.keyMap.length; i++)
      if (this.keyMap[i])
        for (let j = 0; j < this.keyMap[i].length; j++) {
          uniqueValues.add(this.keyMap[i][j][1]);
        }

    return Array.from(uniqueValues);
  }

  keys() {
    let keysArr = [];

    for (let i = 0; i < this.keyMap.length; i++) {
      if (this.keyMap[i])
        for (let j = 0; j < this.keyMap[i].length; j++) {
          const currentKey = this.keyMap[i][j][0];

          if (!keysArr.includes(currentKey)) keysArr.push(currentKey);
        }
    }

    return keysArr;
  }
}
