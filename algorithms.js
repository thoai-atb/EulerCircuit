function findCircuit() {
  latestFoundCircuit = null;
  let field = document.getElementById("result");
  if(!graphIsConnected()){
    return "The graph is not connected";
  }
  let odd = graphHasOddDegrees();
  if(odd){
    return "Vertex " + odd + " has an odd degree, so there is no Euler Circuit";
  }

  let unusedEdges = [...edges];
  let paths = [];
  while(unusedEdges.length != 0) {
    let index = Math.floor(Math.random() * unusedEdges.length);
    let startEdge = unusedEdges[index];
    unusedEdges.splice(index, 1);
    let path = [];
    path.push(startEdge.a.label);
    path.push(startEdge.b.label);
    while(path[0] != path[path.length-1]){
      for(let i = unusedEdges.length - 1; i>=0; i--){
        if(unusedEdges[i].a.label == path[path.length-1]){
          path.push(unusedEdges[i].b.label);
          unusedEdges.splice(i, 1);
        } else if (unusedEdges[i].b.label == path[path.length-1]) {
          path.push(unusedEdges[i].a.label);
          unusedEdges.splice(i, 1);
        }
      }
    }
    path.pop();
    paths.push(path);
  }

  // Joining loops
  while(paths.length > 1){
    let firstPath = paths[0]; // we only check path 1 with from path 2 - end because at least 1 will match
    for(let i = 1; i<paths.length; i++){
      let indexP1 = -1, indexP2 = -1;
      for(let v1 of firstPath){
        let found = false;
        for(let v2 of paths[i]){
          if(v1 == v2){
            found = true;
            indexP1 = firstPath.indexOf(v1);
            indexP2 = paths[i].indexOf(v2);
            break;
          }
        }
        if(found)
          break;
      }
      if(indexP1 == -1 || indexP2 == -1)
        continue;
      // this is when we know the indices where to join the 2 paths
      let resultPath = firstPath.slice(0, indexP1);
      for(let j = 0; j < paths[i].length; j++){
        let indexNext = (j + indexP2)%paths[i].length;
        resultPath.push(paths[i][indexNext]);
      }
      resultPath = resultPath.concat(firstPath.slice(indexP1, firstPath.length));
      paths.splice(i, 1);
      paths[0] = resultPath;
      break;
    }
  }

  latestFoundCircuit = [...paths[0]];
  let message = "";
  for(let i = 0; i<paths[0].length; i++){
    message += paths[0][i];
    message += " - ";
  }
  message += paths[0][0];
  return message;
}

function graphHasOddDegrees(){
  let degrees = new Map();
  for(let v of nodes.values()){
    degrees.set(v.label, 0);
  }
  for(let e of edges){
    degrees.set(e.a.label, degrees.get(e.a.label) + 1);
    degrees.set(e.b.label, degrees.get(e.b.label) + 1);
  }
  for (let [key, value] of degrees) {
    if(value % 2 == 1)
      return key;
  }
  return null;
}

function graphIsConnected() {
  let set = new Set();
  set.add(nodes.values().next().value.label);
  let noMoreNodes = false;
  while(!noMoreNodes){
    noMoreNodes = true;
    for(let e of edges){
      if(set.has(e.b.label) && !set.has(e.a.label)){
        noMoreNodes = false;
        set.add(e.a.label);
      }
      if(set.has(e.a.label) && !set.has(e.b.label)){
        noMoreNodes = false;
        set.add(e.b.label);
      }
    }
  }
  return set.size == nodes.size;
}
