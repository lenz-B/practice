// Max Heap
class MaxHeap {
  constructor() {
    this.heap = []
  }

  insert(value) {
    this.heap.push(value)
  }

  buildHeap(arr) {
    this.heap = arr
    for (let i = Math.floor((arr.length -2)/2); i >= 0; i--){
      heapifyUp(i)
    }
  }

  heapifyUp(i){

  }
}