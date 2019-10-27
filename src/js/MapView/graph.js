public class Graph {

    private LinkedList<Edge>[] adjLists;
    private HashMap<Integer, Integer> indegrees;
    private HashMap<Integer, Integer> parents;
    private int vertexCount;

    /* add all vertices to a graph and for each vertex create a list to represent its edges */
    /* Initializes a graph with NUMVERTICES vertices and no Edges. */
    public Graph(int numVertices) {
        adjLists = (LinkedList<Edge>[]) new LinkedList[numVertices];
        indegrees = new HashMap<>();
        parents = new HashMap<>();
        for (int k = 0; k < numVertices; k++) {
            adjLists[k] = new LinkedList<Edge>();
            indegrees.put(k, 0);
            parents.put(k, -1);
        }
        vertexCount = numVertices;
    }


    /* Adds a directed Edge (V1, V2) to the graph. */
    public void addEdge(int v1, int v2) {
        addEdge(v1, v2, 0);
    }

    /* Adds an undirected Edge (V1, V2) to the graph. */
    // public void addUndirectedEdge(int v1, int v2) {
    //     addUndirectedEdge(v1, v2, 0);
    // }

    /* Adds a directed Edge (V1, V2) to the graph with weight WEIGHT. If the
       Edge already exists, replaces the current Edge with a new Edge with
       weight WEIGHT. */
    public void addEdge(int v1, int v2, int weight) {
        Edge newEdge = new Edge(v1, v2, weight);
        for (Edge e: adjLists[v1]) {
            if (e.to == v2) {
                adjLists[v1].remove(e);
                indegrees.put(v2, indegrees.get(v2) - 1);
            }
        }
        indegrees.put(v2, indegrees.get(v2) + 1);
        adjLists[v1].add(newEdge);
    }

    /* Adds an undirected Edge (V1, V2) to the graph with weight WEIGHT. If the
       Edge already exists, replaces the current Edge with a new Edge with
       weight WEIGHT. */
    // public void addUndirectedEdge(int v1, int v2, int weight) {
    //     Edge edgeFromV1 = new Edge(v1, v2, weight);
    //     Edge edgeFromV2 = new Edge(v2, v1, weight);
    //     for (Edge e: adjLists[v1]) {
    //         if (e.to == v2) {
    //             adjLists[v1].remove(e);
    //             indegrees.replace(v2, indegrees.get(v2) - 1);
    //         }
    //     }
    //     for (Edge e: adjLists[v2]) {
    //         if (e.to == v1) {
    //             adjLists[v2].remove(e);
    //             indegrees.replace(v1, indegrees.get(v1) - 1);
    //         }
    //     }
    //     adjLists[v1].add(edgeFromV1);
    //     indegrees.put(v2, indegrees.get(v2) + 1);
    //     adjLists[v2].add(edgeFromV2);
    //     indegrees.put(v1, indegrees.get(v1) + 1);
    // }

    /* Returns true if there exists an Edge from vertex FROM to vertex TO.
       Returns false otherwise. */
    public boolean isAdjacent(int from, int to) {
        for (Edge e: adjLists[from]) {
            if (e.to == to) {
                return true;
            }
        }
        return false;
    }

    /* remove edge: DFS on the current node until it reaches the node you want to remove from parent *;

    /* Returns a list of all the vertices u such that the Edge (v, u)
       exists in the graph. */
    public List<Integer> neighbors(int v) {
        List<Integer> neighborsList = new ArrayList<>();
        for (Edge e: adjLists[v]) {
            neighborsList.add(e.to);
        }
        return neighborsList;
    }
    /* Returns the number of incoming Edges for vertex V. */
    public int inDegree(int v) {
        return indegrees.get(v);
    }

    /* instead of edge class use list with 3 elems */
        private class Edge {

        private int from;
        private int to;
        private int weight;

        Edge(int from, int to, int weight) {
            this.from = from;
            this.to = to;
            this.weight = weight;
        }

        public String toString() {
            return "(" + from + ", " + to + ", weight = " + weight + ")";
        }

    }