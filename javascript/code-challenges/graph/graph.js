'use strict';

// Node
class Vertex {
  constructor(value) {
    this.value = value;
  }
}

//Links nodes
class Edge {
  constructor(vertex, weight) {
    this.vertex = vertex;
    this.weight = weight;
  }
}

class Graph {

  constructor() {
    this.naeberList = new Map(); 
  }

  addNode(vertex) {
    this.naeberList.set(vertex, []);
    return vertex
  }

  addEdge(start, end, weight = 0) {
    let links = this.naeberList.get(start);
    links.push(new Edge(end, weight)); // adds edge to connect a set of verticies
  }

  getNodes() {
    let Collective = [];
    [...this.naeberList].map(node => Collective.push(node[0]))
    return Collective
  }

  getNeybers(vertex) {
    return [...this.naeberList.get(vertex)]
  }

  size() {
    return [...this.naeberList].length === 0 ? null : [...this.naeberList].length
  }
}

module.exports = {
  Graph: Graph,
  Vertex: Vertex,
  Edge: Edge,
}
