window.addEventListener("load", setup);

function setup() {
  // INITIALIZE VARIABLES
  doingAnimation = false;
  canvas = document.getElementById("canvas");
  ctx = canvas.getContext("2d");
  dimension = 10;
  unit = canvas.width/dimension;

  // Default Graph
  graph1();

  window.requestAnimationFrame(draw);
}

function draw() {
  background();
  for(let e of edges)
    e.display();
  displayAnimation();
  for(let n of nodes.values())
    n.display();
  window.requestAnimationFrame(draw);
}

function background() {
  ctx.fillStyle = "white";
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  for(let i = 1; i < dimension; i++){
    ctx.strokeStyle = "rgba(0, 0, 0, 0.2)";
    ctx.setLineDash([5, 5]);
    ctx.beginPath();
    ctx.moveTo(i * unit, 0);
    ctx.lineTo(i * unit, canvas.height);
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(0, i * unit);
    ctx.lineTo(canvas.width, i * unit);
    ctx.stroke();
    ctx.setLineDash([]);
  }
}

function displayAnimation() {
  if(!doingAnimation)
    return
  ctx.lineWidth = 5;
  ctx.strokeStyle = "rgb(255, 0, 0)";

  // Walked lines
  for(let i = 0; i<animFromIndex; i++){
    let vA = nodes.get(latestFoundCircuit[i]);
    let vB = nodes.get(latestFoundCircuit[i+1]);
    ctx.beginPath();
    ctx.moveTo(vA.x, vA.y);
    ctx.lineTo(vB.x, vB.y);
    ctx.stroke();
  }

  // Walking line
  let from = nodes.get(latestFoundCircuit[animFromIndex]);
  let to = nodes.get(latestFoundCircuit[0]);
  if(animToIndex < latestFoundCircuit.length)
    to = nodes.get(latestFoundCircuit[animToIndex]);
  let currentX = lerp(from.x, to.x, animLerping);
  let currentY = lerp(from.y, to.y, animLerping);
  ctx.beginPath();
  ctx.moveTo(from.x, from.y);
  ctx.lineTo(currentX, currentY);
  ctx.stroke();
  animLerping = lerp(animLerping, 1, 0.1);
  if(1 - animLerping < 0.001){
    animLerping = 0;
    animFromIndex ++;
    animToIndex ++;
    if(animFromIndex == latestFoundCircuit.length)
      stopAnimation();
  }
}

function lerp(value1, value2, amount) {
	amount = amount < 0 ? 0 : amount;
	amount = amount > 1 ? 1 : amount;
	return value1 + (value2 - value1) * amount;
}

function createNode(coordX, coordY, label){
  nodes.set(label, new Node(coordX * unit, canvas.width - coordY * unit, label));
}

function Node(x, y, label){
  this.x = x;
  this.y = y;
  this.label = label;
  this.display = function() {
    ctx.fillStyle = "blue";
    ctx.strokeStyle = "black";
    ctx.lineWidth = 1;
    ctx.beginPath();
    ctx.arc(this.x, this.y, 20, 0, 2 * Math.PI);
    ctx.stroke();
    ctx.fill();
    ctx.fillStyle = "black";
    ctx.font = "20px Arial";
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    ctx.fillText(this.label, this.x, this.y);
  }
}


function Edge(labelA, labelB){
  this.a = nodes.get(labelA);
  this.b = nodes.get(labelB);
  this.display = function() {
    ctx.lineWidth = 1;
    ctx.strokeStyle = "black";
    ctx.beginPath();
    ctx.moveTo(this.a.x, this.a.y);
    ctx.lineTo(this.b.x, this.b.y);
    ctx.stroke();
  }
}
