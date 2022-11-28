class KeyValuePair {
  constructor(key, value) {
    this.key = key;
    this.value = value;
    this.next = null;
  }
}

class HashTable { // get O(1), set O(1), deleteKey O(1)

  constructor(numBuckets = 8) {
    // Initialize your buckets here
    this.count = 0
    this.capacity = numBuckets
    this.data = new Array(this.capacity).fill(null)

  }

  hash(key) {
    let hashValue = 0;

    for (let i = 0; i < key.length; i++) {
      hashValue += key.charCodeAt(i);
    }

    return hashValue;
  }

  hashMod(key) {
    // Get index after hashing
    return this.hash(key) % this.capacity;
  }


  insert(key, value) {
    // Your code here
    if(this.count/this.data.length>0.7) this.resize()
    let idx = this.hashMod(key)

    let currentPair = this.data[idx]
    // console.log(this.data[idx])

    while(currentPair && currentPair.key !== key) {
      currentPair = currentPair.next
    }
    if (currentPair) {
      currentPair.value = value
      return this;
    }
    const newPair = new KeyValuePair(key, value)

    if (this.data[idx]) {
      newPair.next = this.data[idx]
    }
    this.data[idx] = newPair
    this.count++
  }


  read(key) {
    // Your code here
    let ind = this.hashMod(key);
    let currentPair = this.data[ind]
    while(currentPair && currentPair.key !== key){
      currentPair=currentPair.next
    }
    if(currentPair){
      return currentPair.value
    }
    return undefined
  }


  resize() {
    // Your code here
    let old = this.data

   this.capacity *= 2

   let newData = new Array(this.capacity).fill(null)
   this.data = newData
    this.count = 0
    for (let i = 0; i < old.length; i++) {
        let current = old[i]
        while(current) {
          this.insert(current.key, current.value)
          current = current.next
        }
    }
  }


  delete(key) {
    // Your code here
    let ind = this.hashMod(key)
    let currentPair = this.data[ind]
    let prev;
    while(currentPair && currentPair.key!==key){
      prev = currentPair
      currentPair=currentPair.next
    }
    if(currentPair){
      if(prev){
      
        prev.next = currentPair.next
    }else{
      this.data[ind]=currentPair.next
    }
    this.count--;
    }
    
    if (!currentPair) return "Key not found"
  }
}


module.exports = HashTable;
