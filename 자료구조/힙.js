class MinHeap {
  constructor() {
    this.heap = [];
  }
  size() {
    return this.heap.length;
  }
  swap(i, j) {
    [this.heap[i], this.heap[j]] = [this.heap[j], this.heap[i]];
  }
  getParentIndex(index) {
    return Math.floor((index - 1) / 2);
  }
  getLeftChild(index) {
    return 2 * index + 1;
  }
  getRightChild(index) {
    return 2 * index + 2;
  }
  push(value) {
    this.heap.push(value);
    this.bubbleUp();
  }
  pop() {
    if (this.size() === 0) return null;

    const min = this.heap[0];
    const last = this.heap.pop();

    if (this.size() !== 0) {
      this.heap[0] = last;
      this.bubbleDown();
    }

    return min;
  }

  bubbleUp() {
    let index = this.size() - 1; //리프 노드
    let parentIndex = this.getParentIndex(index); //부모 노드

    while (index > 0 && this.heap[parentIndex] > this.heap[index]) {
      this.swap(index, parentIndex);
      index = parentIndex;
      parentIndex = this.getParentIndex(index);
    }
  }
  bubbleDown() {
    let index = 0;
    let length = this.size();
    let element = this.heap[0];

    while (1) {
      const leftChildIndex = this.getLeftChild(index);
      const rightChildIndex = this.getRightChild(index);
      let leftChild, rightChild;
      let swapIndex = null;

      //현재 요소보다 왼쪽 자식이 더 작은지
      if (leftChildIndex < length) {
        leftChild = this.heap[leftChildIndex];
        if (leftChild < element) {
          swapIndex = leftChildIndex;
        }
      }

      //현재 요소보다 오른쪽 자식이 더 작은지
      if (rightChildIndex < length) {
        rightChild = this.heap[rightChildIndex];
        if (
          (swapIndex === null && rightChild < element) ||
          (swapIndex !== null && rightChild < leftChild)
        )
          swapIndex = rightChildIndex;
      }

      if (swapIndex === null) break;

      this.swap(index, swapIndex);
      index = swapIndex;
    }
  }
}
const minHeap = new MinHeap();
minHeap.push(5);
minHeap.push(3);
minHeap.push(8);
minHeap.push(1);
console.log('Heap after pushing elements:', minHeap.heap); // [1, 3, 8, 5]

console.log('Popped:', minHeap.pop()); // 1
console.log('Heap after pop:', minHeap.heap); // [3, 5, 8]

console.log('Popped:', minHeap.pop()); // 3
console.log('Heap after pop:', minHeap.heap); // [5, 8]
