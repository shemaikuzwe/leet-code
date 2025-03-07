/**
 * leet code 347
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
const topKFrequent = function (nums, k) {
    const hash = new Map();
    const queque = []
    for (const num of nums) {
        if (hash.has(num)) {
            const c = hash.get(num)
            hash.set(num, c + 1);
        }
        else {
            hash.set(num, 1)
        }
    }
    const prioryQueque=new PrioryQueque()
    for (const h of hash.entries()) {
        queque.push(h)
    }
    //descending order
    queque.sort((a,b) => b[1] -a[1])
    return queque.slice(0,k).map(([num]) => num)
};

class PrioryQueque{
  constructor(){
    this.heap=[]
  }
  push(item){
    this.heap.push(item)
  }
}

console.log(topKFrequent([1, 1, 1, 2, 2, 3], 2));