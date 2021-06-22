const {Graph, Vertex, Edge} = require('./graph');

const graph = new Graph();

const a = new Vertex('a');
const b = new Vertex('b');
const c = new Vertex('c');
const d = new Vertex('d');
const e = new Vertex('e');
const f = new Vertex('f');

graph.addNode(a);
graph.addNode(b);
graph.addNode(c);
graph.addNode(d);
graph.addNode(e);
graph.addNode(f);

graph.addEdge(a, b);
graph.addEdge(b, c);
graph.addEdge(c, a);

describe('Graph Tests', () => {
  it('Node can be successfully added to the graph', () => {
   
  });

  it('An edge can be successfully added to the graph', () => {
  });

  it('// A collection of all nodes can be properly retrieved from the graph', () => {
    expect(graph.getNodes().length).toBe(6)
  });


  it('// Neighbors are returned with the weight between nodes included', () => {
    let naebers = graph.getNeybers(a)
    expect(naebers[0].weight).toBe(Number())
  });

  it('// The proper size is returned, representing the number of nodes in the graph', () => {
    expect(graph.size()).toBe(6)
  });

  it('// A graph with only one node and edge can be properly returned', () => {
    let newGraph = new Graph()
    newGraph.addNode(a);
    newGraph.addEdge(a, a);
    expect(newGraph).toBeTruthy()
  });

  it('// An empty graph properly returns null', () => {
    let newGraph = new Graph()
    expect(newGraph.size()).toBe(null)
  });

});








