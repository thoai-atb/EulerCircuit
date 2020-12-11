window.addEventListener("load", ioSetup);

function ioSetup() {
  document.getElementById("findbtn").addEventListener('mousedown', findButtonPressed);
  document.getElementById("animbtn").addEventListener('mousedown', toggleAnimation);
  document.getElementById("g1btn").addEventListener('mousedown', graph1);
  document.getElementById("g2btn").addEventListener('mousedown', graph2);
  document.getElementById("g3btn").addEventListener('mousedown', graph3);
  document.getElementById("g4btn").addEventListener('mousedown', graph4);
  document.getElementById("g5btn").addEventListener('mousedown', graph5);
  document.getElementById("g6btn").addEventListener('mousedown', graph6);
  document.getElementById("g7btn").addEventListener('mousedown', graph7);
  document.getElementById("g8btn").addEventListener('mousedown', graph8);

  latestFoundCircuit = null;
  animFromIndex = null;
  animToIndex = null;
  animLerping = 0;
}

function findButtonPressed() {
  stopAnimation();
  document.getElementById("result").innerHTML = findCircuit();
}

function clearGraph() {
  nodes = new Map();
  edges = [];
  document.getElementById("result").innerHTML = "-----";
  latestFoundCircuit = null;
  stopAnimation();
}

function toggleAnimation() {
  if(doingAnimation)
    stopAnimation();
  else
    startAnimation();
}

function startAnimation() {
  if(!latestFoundCircuit || latestFoundCircuit.length == 1)
    return;
  doingAnimation = true;
  document.getElementById("animbtn").innerHTML = "STOP ANIMATE";
  animLerping = 0;
  animFromIndex = 0;
  animToIndex = 1;
}

function stopAnimation() {
  doingAnimation = false;
  document.getElementById("animbtn").innerHTML = "ANIMATE TRACE";
}
