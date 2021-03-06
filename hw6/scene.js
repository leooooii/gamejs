/*
function sceneDesign() {

  // add obstacles to the scene
  scene.obstacles = [];
  scene.obstacles.push ( new Obstacle (new THREE.Vector3(150,0,150), 50) )
  scene.obstacles.push ( new Obstacle (new THREE.Vector3(-100,0,200), 30) )
  scene.obstacles.push ( new Obstacle (new THREE.Vector3(0,0,-100), 60) )
    
  scene.targets = [];
  scene.targets.push (new Target (1, new THREE.Vector3 (300,0,300) ));
  scene.targets.push (new Target (2, new THREE.Vector3 (-200,0,150) ));
  scene.targets.push (new Target (3, new THREE.Vector3 (250,0,-200) ));
  scene.targets.push (new Target (4, new THREE.Vector3 (0,0,-200) ));

}
*/

function sceneFromJSON () {
  const JSONStr  ='{"obstacles":[{"center":{"x":-4.883094616446471,"y":2.9310387618550925e-14,"z":-132.00225075699075},"size":20},{"center":{"x":-214.63185116815657,"y":1.207717148617292e-13,"z":-31.907450048179385},"size":20},{"center":{"x":-174.43940155437897,"y":-3.6461794953767666e-14,"z":164.2093261670475},"size":20},{"center":{"x":-71.95010315846098,"y":-3.5990569540795703e-14,"z":162.08711557277945},"size":20},{"center":{"x":103.57652212921577,"y":-3.599056954077952e-14,"z":162.08711557270658},"size":20},{"center":{"x":147.51234079642177,"y":1.1398984010337469e-13,"z":-1.3646014135806581},"size":20}],"targets":[],"targets":[{"id":0,"pos":{"x":-170.96098270075498,"y":1.4072922348060594e-13,"z":-121.78807842739616}},{"id":1,"pos":{"x":173.8093284377129,"y":3.632627064004123e-14,"z":-163.5989789182495}},{"id":2,"pos":{"x":248.1273914134486,"y":5.516543817640233e-14,"z":263.5569531850243}},{"id":3,"pos":{"x":-237.81629357811414,"y":5.1244638502615395e-14,"z":281.21466513488554}}]}';
  let myScene = JSON.parse (JSONStr);
  
  scene.obstacles = []
  myScene.obstacles.forEach (function (obs) {
  	scene.obstacles.push (new Obstacle (new THREE.Vector3 (obs.center.x, obs.center.y, obs.center.z), 30))
  })
  
  scene.targets = []
  myScene.targets.forEach (function (tt) {
    scene.targets.push (new Target (tt.id, new THREE.Vector3 (tt.pos.x, tt.pos.y, tt.pos.z) ))
  })

}