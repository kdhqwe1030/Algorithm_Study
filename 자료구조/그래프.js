// 그래프 클래스 (인접 리스트 방식)
class Graph {
  constructor(isDirected = false) {
    this.isDirected = isDirected; // 방향 그래프 여부
    this.adjacencyList = new Map(); // 인접 리스트
  }

  // 정점 추가
  addVertex(vertex) {
    if (!this.adjacencyList.has(vertex)) {
      this.adjacencyList.set(vertex, []);
    }
  }

  // 간선 추가
  addEdge(vertex1, vertex2) {
    // 정점이 존재하지 않으면 추가
    if (!this.adjacencyList.has(vertex1)) {
      this.addVertex(vertex1);
    }
    if (!this.adjacencyList.has(vertex2)) {
      this.addVertex(vertex2);
    }

    // vertex1 -> vertex2 간선 추가
    this.adjacencyList.get(vertex1).push(vertex2);

    // 무방향 그래프인 경우 양방향으로 간선 추가
    if (!this.isDirected) {
      this.adjacencyList.get(vertex2).push(vertex1);
    }
  }

  // 간선 제거
  removeEdge(vertex1, vertex2) {
    if (this.adjacencyList.has(vertex1) && this.adjacencyList.has(vertex2)) {
      // vertex1 -> vertex2 간선 제거
      this.adjacencyList.set(
        vertex1,
        this.adjacencyList.get(vertex1).filter((v) => v !== vertex2)
      );

      // 무방향 그래프인 경우 양방향 간선 제거
      if (!this.isDirected) {
        this.adjacencyList.set(
          vertex2,
          this.adjacencyList.get(vertex2).filter((v) => v !== vertex1)
        );
      }
    }
  }

  // 정점 제거 (연결된 모든 간선도 제거)
  removeVertex(vertex) {
    if (!this.adjacencyList.has(vertex)) return;

    // 해당 정점과 연결된 다른 정점들의 간선 제거
    for (const adjacentVertex of this.adjacencyList.get(vertex)) {
      this.removeEdge(adjacentVertex, vertex);
    }

    // 정점 제거
    this.adjacencyList.delete(vertex);
  }

  // 그래프 출력
  printGraph() {
    for (const [vertex, edges] of this.adjacencyList.entries()) {
      console.log(`${vertex} -> ${edges.join(', ')}`);
    }
  }
}

// 사용 예제
const graph = new Graph();

// 정점 추가
graph.addVertex('A');
graph.addVertex('B');
graph.addVertex('C');
graph.addVertex('D');

// 간선 추가
graph.addEdge('A', 'B');
graph.addEdge('A', 'C');
graph.addEdge('B', 'D');
graph.addEdge('C', 'D');

// 그래프 출력
console.log('그래프:');
graph.printGraph();

// 방향 그래프 예제
const directedGraph = new Graph(true);
directedGraph.addVertex('X');
directedGraph.addVertex('Y');
directedGraph.addVertex('Z');

directedGraph.addEdge('X', 'Y');
directedGraph.addEdge('Y', 'Z');

console.log('\n방향 그래프:');
directedGraph.printGraph();
