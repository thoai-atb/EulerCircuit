function graph1 () {
  clearGraph();
  createNode(2, 8, 'a');
  createNode(8, 8, 'b');
  createNode(8, 2, 'c');
  createNode(2, 2, 'd');
  createNode(4, 3, 'e');
  createNode(6, 3, 'f');
  createNode(6, 7, 'g');
  createNode(4, 7, 'h');
  edges.push(new Edge('a', 'b'));
  edges.push(new Edge('b', 'c'));
  edges.push(new Edge('c', 'd'));
  edges.push(new Edge('a', 'd'));
  edges.push(new Edge('a', 'e'));
  edges.push(new Edge('b', 'f'));
  edges.push(new Edge('d', 'h'));
  edges.push(new Edge('c', 'g'));
  edges.push(new Edge('e', 'f'));
  edges.push(new Edge('g', 'h'));
  edges.push(new Edge('a', 'h'));
  edges.push(new Edge('b', 'g'));
  edges.push(new Edge('c', 'h'));
  edges.push(new Edge('d', 'g'));
}

function graph2() {
  clearGraph();
  createNode(1, 9, 'a');
  createNode(1, 7, 'b');
  createNode(3, 7, 'c');
  createNode(1, 5, 'd');
  createNode(3, 5, 'e');
  createNode(5, 5, 'f');
  createNode(1, 3, 'g');
  createNode(3, 3, 'h');
  createNode(5, 3, 'i');
  createNode(7, 3, 'j');
  createNode(1, 1, 'k');
  createNode(3, 1, 'l');
  createNode(5, 1, 'm');
  createNode(7, 1, 'n');
  createNode(9, 1, 'o');
  edges.push(new Edge('a', 'b'));
  edges.push(new Edge('a', 'c'));
  edges.push(new Edge('b', 'c'));
  edges.push(new Edge('b', 'd'));
  edges.push(new Edge('b', 'e'));
  edges.push(new Edge('c', 'e'));
  edges.push(new Edge('c', 'f'));
  edges.push(new Edge('d', 'e'));
  edges.push(new Edge('d', 'g'));
  edges.push(new Edge('d', 'h'));
  edges.push(new Edge('e', 'f'));
  edges.push(new Edge('e', 'h'));
  edges.push(new Edge('e', 'i'));
  edges.push(new Edge('f', 'i'));
  edges.push(new Edge('f', 'j'));
  edges.push(new Edge('g', 'h'));
  edges.push(new Edge('g', 'k'));
  edges.push(new Edge('g', 'l'));
  edges.push(new Edge('h', 'i'));
  edges.push(new Edge('h', 'l'));
  edges.push(new Edge('h', 'm'));
  edges.push(new Edge('i', 'j'));
  edges.push(new Edge('i', 'm'));
  edges.push(new Edge('i', 'n'));
  edges.push(new Edge('j', 'n'));
  edges.push(new Edge('j', 'o'));
  edges.push(new Edge('k', 'l'));
  edges.push(new Edge('l', 'm'));
  edges.push(new Edge('m', 'n'));
  edges.push(new Edge('n', 'o'));
}

function graph3(){
  clearGraph();
  createNode(2, 8, 'a');
  createNode(8, 8, 'b');
  createNode(8, 2, 'c');
  createNode(2, 2, 'd');
  edges.push(new Edge('a', 'b'));
  edges.push(new Edge('b', 'c'));
  edges.push(new Edge('c', 'd'));
  edges.push(new Edge('d', 'a'));
  edges.push(new Edge('c', 'a'));
  edges.push(new Edge('b', 'd'));
}

function graph4() {
  clearGraph();
  createNode(2, 8, 'a');
  createNode(6, 8, 'b');
  createNode(2, 4, 'c');
  createNode(4, 2, 'd');
  createNode(8, 6, 'e');
  createNode(8, 2, 'f');
  edges.push(new Edge('a', 'b'));
  edges.push(new Edge('b', 'c'));
  edges.push(new Edge('c', 'a'));
  edges.push(new Edge('d', 'e'));
  edges.push(new Edge('e', 'f'));
  edges.push(new Edge('f', 'd'));
}

function graph5() {
  clearGraph();
  createNode(5, 9, 'a');
  createNode(7, 7, 'b');
  createNode(5, 5, 'c');
  createNode(3, 3, 'd');
  createNode(5, 1, 'e');
  createNode(7, 3, 'f');
  createNode(3, 7, 'g');
  edges.push(new Edge('a', 'b'));
  edges.push(new Edge('b', 'c'));
  edges.push(new Edge('c', 'd'));
  edges.push(new Edge('d', 'e'));
  edges.push(new Edge('e', 'f'));
  edges.push(new Edge('f', 'c'));
  edges.push(new Edge('c', 'g'));
  edges.push(new Edge('g', 'a'));
}

function graph6() {
  clearGraph();
  createNode(2, 8, 'a');
  createNode(5, 8, 'b');
  createNode(8, 8, 'c');
  createNode(8, 5, 'd');
  createNode(8, 2, 'e');
  createNode(5, 2, 'f');
  createNode(2, 2, 'g');
  createNode(2, 5, 'h');
  createNode(5, 5, 'i');
  edges.push(new Edge('a', 'b'));
  edges.push(new Edge('b', 'c'));
  edges.push(new Edge('c', 'd'));
  edges.push(new Edge('d', 'e'));
  edges.push(new Edge('e', 'f'));
  edges.push(new Edge('f', 'g'));
  edges.push(new Edge('g', 'h'));
  edges.push(new Edge('h', 'a'));
  edges.push(new Edge('b', 'i'));
  edges.push(new Edge('d', 'i'));
  edges.push(new Edge('f', 'i'));
  edges.push(new Edge('h', 'i'));
  edges.push(new Edge('b', 'd'));
  edges.push(new Edge('h', 'f'));
}

function graph7() {
  clearGraph();
  createNode(2, 8, 'a');
  createNode(4, 8, 'b');
  createNode(4, 6, 'c');
  createNode(2, 6, 'd');
  createNode(6, 8, 'e');
  createNode(8, 8, 'f');
  createNode(8, 6, 'g');
  createNode(6, 6, 'h');
  createNode(4, 5, 'i');
  createNode(3, 5, 'j');
  createNode(3, 2, 'k');
  createNode(4, 2, 'l');
  createNode(4, 3, 'm');
  createNode(6, 3, 'n');
  createNode(6, 2, 'o');
  createNode(7, 2, 'p');
  createNode(7, 5, 'q');
  createNode(6, 5, 'r');
  edges.push(new Edge('a', 'b'));
  edges.push(new Edge('b', 'c'));
  edges.push(new Edge('c', 'd'));
  edges.push(new Edge('d', 'a'));
  edges.push(new Edge('e', 'f'));
  edges.push(new Edge('f', 'g'));
  edges.push(new Edge('g', 'h'));
  edges.push(new Edge('h', 'e'));
  edges.push(new Edge('i', 'j'));
  edges.push(new Edge('j', 'k'));
  edges.push(new Edge('k', 'l'));
  edges.push(new Edge('l', 'm'));
  edges.push(new Edge('m', 'n'));
  edges.push(new Edge('n', 'o'));
  edges.push(new Edge('o', 'p'));
  edges.push(new Edge('p', 'q'));
  edges.push(new Edge('q', 'r'));
  edges.push(new Edge('r', 'h'));
  edges.push(new Edge('h', 'c'));
  edges.push(new Edge('c', 'i'));
}

function graph8() {
  clearGraph();
  createNode(2, 8, 'a');
  createNode(8, 8, 'b');
  createNode(2, 5, 'c');
  createNode(8, 5, 'd');
  createNode(2, 2, 'e');
  createNode(8, 2, 'f');
  edges.push(new Edge('a', 'b'));
  edges.push(new Edge('c', 'd'));
  edges.push(new Edge('e', 'f'));
}
