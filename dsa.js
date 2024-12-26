// Max Heap
class MaxHeap {
  constructor() {
    this.heap = []
  }

  insert(value) {
    this.heap.push(value)
    this.heapifyUp(this.heap.length - 1)
  }

  buildHeap(arr) {
    this.heap = [...arr]
    for (let i = Math.floor((arr.length - 2) / 2); i >= 0; i--) {
      this.heapifyDown(i)
    }
  }

  remove() {
    if (this.heap.length === 0) return null
    let target = this.heap[0]
    let end = this.heap.pop()

    if (this.heap.length > 0) {
      this.heap[0] = end
      this.heapifyDown(0)
    }
    return target
  }

  heapifyUp(i) {
    let parent = Math.floor((i - 1) / 2)

    if (parent >= 0 && this.heap[parent] < this.heap[i]) {
      [this.heap[parent], this.heap[i]] = [this.heap[i], this.heap[parent]]
      this.heapifyUp(parent)
    }
  }

  heapifyDown(i, size = this.heap.length) {
    let largest = i
    let left = 2 * i + 1
    let right = 2 * i + 2

    if (left < size && this.heap[left] > this.heap[largest]) largest = left
    if (right < size && this.heap[right] > this.heap[largest]) largest = right
    if (largest !== i) {
      [this.heap[largest], this.heap[i]] = [this.heap[i], this.heap[largest]]
      this.heapifyDown(largest)
    }
  }
}

//Min Heap
class MinHeap {
  constructor() {
    this.heap = []
  }

  insert(value) {
    this.heap.push(value)
    this.heapifyUp(this.heap.length - 1)
  }

  buildHeap(arr) {
    this.heap = [...arr]
    for (let i = Math.floor((arr.length - 2) / 2); i >= 0; i--) {
      this.heapifyDown(i)
    }
  }

  remove() {
    if (this.heap.length === 0) return null

    let target = this.heap[0]
    let end = this.heap.pop()

    if (this.heap.length > 0) {
      this.heap[0] = end
      this.heapifyDown(0)
    }
    return target
  }

  heapifyUp(i) {
    let parent = Math.floor((i - 1) / 2)

    if (parent >= 0 && this.heap[parent] > this.heap[i]) {
      [this.heap[parent], this.heap[i]] = [this.heap[i], this.heap[parent]]
      this.heapifyUp(parent)
    }
  }

  heapifyDown(i, size = this.heap.length) {
    let smallest = i
    let left = 2 * i + 1
    let right = 2 * i + 2

    if (left < size && this.heap[left] < this.heap[smallest]) smallest = left
    if (right < size && this.heap[right] < this.heap[smallest]) smallest = right
    if (smallest !== i) {
      [this.heap[smallest], this.heap[i]] = [this.heap[i], this.heap[smallest]]
      this.heapifyDown(smallest)
    }
  }
}

//Node
class Node {
  constructor(value) {
    this.value = value
    this.left = null
    this.right = null
  }
}

//BST
class BST {
  constructor() {
    this.root = null
  }

  insert(value) {
    let node = new Node(value)

    if (!this.root) this.root = node
    this.insertHelper(node)
  }

  insertHelper(node, cur = this.root) {
    if (!cur) cur = node
    if (node.value < cur.value) this.insertHelper(node, cur.left)
    if (cur.value < node.value) this.insertHelper(node, cur.right)
  }

  search(target) {
    if (!this.root) return 'bst nor exist'
    return this.contains(target)
  }

  contains(target,  cur = this.root){
        
  }





  // remove
  // inorder
  // preorder
  // postorder
  // findClosestValue
  // isBST
  // countLeaf
}