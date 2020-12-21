// primer ejercicio con three.js
// crear una geometria teniendo en cuenta el orden de los vértices
var camera, scene, renderer;
var cameraControls;
var clock = new THREE.Clock();
var ambientLight, light;


function init() {
	var canvasWidth = window.innerWidth ;
	var canvasHeight = window.innerHeight ;

	// CAMERA

	camera = new THREE.PerspectiveCamera( 50, window.innerWidth / window.innerHeight, 0.1, 80000 );
	camera.position.set(20,50,100);

	camera.lookAt(0,0,0);

	// LIGHTS

	light = new THREE.DirectionalLight( 0xffffff, 0.7 );
	light.position.set( 0,0,0);
	light.target.position.set(0, 0, 0);
	light.target.updateMatrixWorld()
    camera.add(light);


	var ambientLight = new THREE.AmbientLight(0x111111);

	// RENDERER
	renderer = new THREE.WebGLRenderer( { antialias: true } );
	renderer.setSize( canvasWidth, canvasHeight );
	renderer.setClearColor( 0xAAAAAA, 0.5 );

	renderer.gammaInput = true;
	renderer.gammaOutput = true;

	// Add to DOM
	var container = document.getElementById('container');
	container.appendChild( renderer.domElement );

	// CONTROLS
	cameraControls = new THREE.OrbitControls( camera, renderer.domElement );
	cameraControls.target.set(0, 0, 0);

	

	// piso Dirección de Carrera
    
    var migeometria = new THREE.Geometry();
	migeometria.vertices.push( new THREE.Vector3( -5, -25, -10) );//0
	migeometria.vertices.push( new THREE.Vector3( -5, 25, -10) );//1
	migeometria.vertices.push( new THREE.Vector3( -27, -25,-10 ));//2
    migeometria.vertices.push( new THREE.Vector3( -27, 25, -10 ));//3
    
    migeometria.vertices.push( new THREE.Vector3( -27, 10, -10) );//4
    migeometria.vertices.push( new THREE.Vector3( -50, 10, -10) );//5
    migeometria.vertices.push( new THREE.Vector3( -50, -25,-10 ));//6
   

    migeometria.faces.push(new THREE.Face3( 0,1,2 ) );
    migeometria.faces.push(new THREE.Face3( 2,1,0 ) );

    migeometria.faces.push(new THREE.Face3( 3,2,1 ) );
    migeometria.faces.push(new THREE.Face3( 1,2,3 ) );

    migeometria.faces.push(new THREE.Face3( 2,4,5 ) );
    migeometria.faces.push(new THREE.Face3( 5,4,2 ) );

    migeometria.faces.push(new THREE.Face3( 6,2,5 ) );
    migeometria.faces.push(new THREE.Face3( 5,2,6 ) );

    var material1 = new THREE.MeshBasicMaterial( { color: 0xA47F4D } ); // cafe
    var piso1 = new THREE.Mesh (migeometria, material1); // Crea el objeto


    // piso Labo4
    
    var milabo = new THREE.Geometry();
    milabo.vertices.push( new THREE.Vector3( 70, -25, -10) );//0
    milabo.vertices.push( new THREE.Vector3( 25, -25, -10) );//1
    milabo.vertices.push( new THREE.Vector3( 25, 25,-10 ));//2
    milabo.vertices.push( new THREE.Vector3( 70, 25, -10 ));//3
    
   

    milabo.faces.push(new THREE.Face3( 0,1,2 ) );
    milabo.faces.push(new THREE.Face3( 2,1,0 ) );

    milabo.faces.push(new THREE.Face3( 3,0,2 ) );
    milabo.faces.push(new THREE.Face3( 2,0,3 ) );


    var pisolab = new THREE.Mesh (milabo, material1); // Crea el objeto

    // puerta1
    
    var mipuerta1 = new THREE.Geometry();
    mipuerta1.vertices.push( new THREE.Vector3( -5, 0, -10) );//0
    mipuerta1.vertices.push( new THREE.Vector3( -5, 0, 5) );//1
    mipuerta1.vertices.push( new THREE.Vector3( -12, -7, 5 ));//2
    mipuerta1.vertices.push( new THREE.Vector3( -12, -7, -10 ));//3
    
    mipuerta1.faces.push(new THREE.Face3( 1,0,3 ) );
    mipuerta1.faces.push(new THREE.Face3( 3,0,1 ) );

    mipuerta1.faces.push(new THREE.Face3( 2,1,3 ) );
    mipuerta1.faces.push(new THREE.Face3( 3,1,2 ) );

    var matpuerta = new THREE.MeshBasicMaterial( { color: 0x872514 } ); // color
    var puerta1 = new THREE.Mesh (mipuerta1, matpuerta); // Crea el objeto

    // puerta2
    
    var mipuerta2 = new THREE.Geometry();
    mipuerta2.vertices.push( new THREE.Vector3( -27, -20, -10) );//0
    mipuerta2.vertices.push( new THREE.Vector3( -27, -20, 5) );//1
    mipuerta2.vertices.push( new THREE.Vector3( -34, -14, 5 ));//2
    mipuerta2.vertices.push( new THREE.Vector3( -34, -14, -10 ));//3
    
    mipuerta2.faces.push(new THREE.Face3( 1,0,3 ) );
    mipuerta2.faces.push(new THREE.Face3( 3,0,1 ) );

    mipuerta2.faces.push(new THREE.Face3( 2,1,3 ) );
    mipuerta2.faces.push(new THREE.Face3( 3,1,2 ) );

    var puerta2 = new THREE.Mesh (mipuerta2, matpuerta); // Crea el objeto


    // puerta3
    
    var mipuerta3 = new THREE.Geometry();
    mipuerta3.vertices.push( new THREE.Vector3( 25, 10, -10) );//0
    mipuerta3.vertices.push( new THREE.Vector3( 25, 10, 5) );//1
    mipuerta3.vertices.push( new THREE.Vector3( 32, 3, 5 ));//2
    mipuerta3.vertices.push( new THREE.Vector3( 32, 3, -10 ));//3
    
    mipuerta3.faces.push(new THREE.Face3( 1,0,3 ) );
    mipuerta3.faces.push(new THREE.Face3( 3,0,1 ) );

    mipuerta3.faces.push(new THREE.Face3( 2,1,3 ) );
    mipuerta3.faces.push(new THREE.Face3( 3,1,2 ) );

    var puerta3 = new THREE.Mesh (mipuerta3, matpuerta); // Crea el objeto


    // puerta4
    
    var mipuerta4 = new THREE.Geometry();
    mipuerta4.vertices.push( new THREE.Vector3( 25, -10, -10) );//0
    mipuerta4.vertices.push( new THREE.Vector3( 25, -10, 5) );//1
    mipuerta4.vertices.push( new THREE.Vector3( 32, -3, 5 ));//2
    mipuerta4.vertices.push( new THREE.Vector3( 32, -3, -10 ));//3
    
    mipuerta4.faces.push(new THREE.Face3( 1,0,3 ) );
    mipuerta4.faces.push(new THREE.Face3( 3,0,1 ) );

    mipuerta4.faces.push(new THREE.Face3( 2,1,3 ) );
    mipuerta4.faces.push(new THREE.Face3( 3,1,2 ) );

    var puerta4 = new THREE.Mesh (mipuerta4, matpuerta); // Crea el objeto


    // paredesbajas Dirección de Carrera
    
    var pared1 = new THREE.Geometry();
    pared1.vertices.push( new THREE.Vector3( -5, 0, -10) );//0
    pared1.vertices.push( new THREE.Vector3( -5, 25, -10) );//1
    pared1.vertices.push( new THREE.Vector3( -27, -25,-10 ));//2
    pared1.vertices.push( new THREE.Vector3( -27, 25, -10 ));//3
    
    pared1.vertices.push( new THREE.Vector3( -27, 10, -10) );//4
    pared1.vertices.push( new THREE.Vector3( -50, 10, -10) );//5
    pared1.vertices.push( new THREE.Vector3( -50, -25,-10 ));//6

    pared1.vertices.push( new THREE.Vector3( -5, 0, 0) );//7
    pared1.vertices.push( new THREE.Vector3( -5, 25, 0) );//8
    pared1.vertices.push( new THREE.Vector3( -27, -25,0 ));//9
    pared1.vertices.push( new THREE.Vector3( -27, 25, 0 ));//10
    
    pared1.vertices.push( new THREE.Vector3( -27, 10, 0) );//11
    pared1.vertices.push( new THREE.Vector3( -50, 10, 0) );//12
    pared1.vertices.push( new THREE.Vector3( -50, -25,0 ));//13
    
    pared1.vertices.push( new THREE.Vector3( -5, -10, -10) );//14
    pared1.vertices.push( new THREE.Vector3( -5, -10, 0) );//15
    pared1.vertices.push( new THREE.Vector3( -5, -25, -10) );//16
    pared1.vertices.push( new THREE.Vector3( -5, -25, 0) );//17

    pared1.vertices.push( new THREE.Vector3( -27, -10, -10) );//18
    pared1.vertices.push( new THREE.Vector3( -27, -10, 0) );//19
    pared1.vertices.push( new THREE.Vector3( -27, -20, -10) );//20
    pared1.vertices.push( new THREE.Vector3( -27, -20, 0) );//21

    pared1.faces.push(new THREE.Face3( 8,1,0 ) );
    pared1.faces.push(new THREE.Face3( 0,1,8 ) );
    pared1.faces.push(new THREE.Face3( 7,8,0 ) );
    pared1.faces.push(new THREE.Face3( 0,8,7 ) );

    pared1.faces.push(new THREE.Face3( 10,3,1 ) );
    pared1.faces.push(new THREE.Face3( 1,3,10 ) );
    pared1.faces.push(new THREE.Face3( 8,10,1 ) );
    pared1.faces.push(new THREE.Face3( 1,10,8 ) );

    pared1.faces.push(new THREE.Face3( 11,3,4 ) );
    pared1.faces.push(new THREE.Face3( 4,3,11 ) );
    pared1.faces.push(new THREE.Face3( 10,11,3 ) );
    pared1.faces.push(new THREE.Face3( 3,11,10 ) );

    pared1.faces.push(new THREE.Face3( 12,5,4 ) );
    pared1.faces.push(new THREE.Face3( 4,5,12 ) );
    pared1.faces.push(new THREE.Face3( 11,12,4 ) );
    pared1.faces.push(new THREE.Face3( 4,12,11 ) );

    pared1.faces.push(new THREE.Face3( 13,6,5 ) );
    pared1.faces.push(new THREE.Face3( 5,6,13 ) );
    pared1.faces.push(new THREE.Face3( 12,13,5 ) );
    pared1.faces.push(new THREE.Face3( 5,13,12 ) );

    pared1.faces.push(new THREE.Face3( 13,16,6 ) );
    pared1.faces.push(new THREE.Face3( 6,16,13 ) );
    pared1.faces.push(new THREE.Face3( 17,16,13 ) );
    pared1.faces.push(new THREE.Face3( 13,16,17 ) );

    pared1.faces.push(new THREE.Face3( 15,16,14 ) );
    pared1.faces.push(new THREE.Face3( 14,16,15 ) );
    pared1.faces.push(new THREE.Face3( 17,15,16 ) );
    pared1.faces.push(new THREE.Face3( 16,15,17 ) );

    pared1.faces.push(new THREE.Face3( 19,18,4 ) );
    pared1.faces.push(new THREE.Face3( 4,18,19 ) );
    pared1.faces.push(new THREE.Face3( 11,4,19 ) );
    pared1.faces.push(new THREE.Face3( 19,4,11 ) );

    pared1.faces.push(new THREE.Face3( 21,20,2 ) );
    pared1.faces.push(new THREE.Face3( 2,20,21 ) );
    pared1.faces.push(new THREE.Face3( 9,21,2 ) );
    pared1.faces.push(new THREE.Face3( 2,21,9 ) );

    var materialpared1 = new THREE.MeshBasicMaterial( { color: 0x3E3220 } ); // paredbaja
    var pareda = new THREE.Mesh (pared1, materialpared1); // Crea el objeto


    // pared2
    
    var pared2 = new THREE.Geometry();
    pared2.vertices.push( new THREE.Vector3( -5, 0, 0) );//0
    pared2.vertices.push( new THREE.Vector3( -5, 25, 0) );//1
    pared2.vertices.push( new THREE.Vector3( -27, -25, 0 ));//2
    pared2.vertices.push( new THREE.Vector3( -27, 25, 0 ));//3
    
    pared2.vertices.push( new THREE.Vector3( -27, 10, 0) );//4
    pared2.vertices.push( new THREE.Vector3( -50, 10, 0) );//5
    pared2.vertices.push( new THREE.Vector3( -50, -25, 0 ));//6

    pared2.vertices.push( new THREE.Vector3( -5, 0, 15) );//7
    pared2.vertices.push( new THREE.Vector3( -5, 25, 15) );//8
    pared2.vertices.push( new THREE.Vector3( -27, -25,15 ));//9
    pared2.vertices.push( new THREE.Vector3( -27, 25, 15 ));//10
    
    pared2.vertices.push( new THREE.Vector3( -27, 10, 15) );//11
    pared2.vertices.push( new THREE.Vector3( -50, 10, 15) );//12
    pared2.vertices.push( new THREE.Vector3( -50, -25, 15));//13

    pared2.vertices.push( new THREE.Vector3( -5, -10, 0) );//14
    pared2.vertices.push( new THREE.Vector3( -5, -10, 15) );//15
    pared2.vertices.push( new THREE.Vector3( -5, -25, 0) );//16
    pared2.vertices.push( new THREE.Vector3( -5, -25, 15) );//17

    pared2.vertices.push( new THREE.Vector3( -27, -10, 0) );//18
    pared2.vertices.push( new THREE.Vector3( -27, -10, 15) );//19
    pared2.vertices.push( new THREE.Vector3( -27, -20, 0) );//20
    pared2.vertices.push( new THREE.Vector3( -27, -20, 15) );//21

    pared2.vertices.push( new THREE.Vector3( -27, -10, 5) );//22
    pared2.vertices.push( new THREE.Vector3( -27, -20, 5) );//23  

    pared2.vertices.push( new THREE.Vector3( -5, 0, 5) );//24
    pared2.vertices.push( new THREE.Vector3( -5, -10, 5) );//25

    pared2.faces.push(new THREE.Face3( 8,1,0 ) );
    pared2.faces.push(new THREE.Face3( 0,1,8 ) );
    pared2.faces.push(new THREE.Face3( 7,8,0 ) );
    pared2.faces.push(new THREE.Face3( 0,8,7 ) );

    pared2.faces.push(new THREE.Face3( 10,3,1 ) );
    pared2.faces.push(new THREE.Face3( 1,3,10 ) );
    pared2.faces.push(new THREE.Face3( 8,10,1 ) );
    pared2.faces.push(new THREE.Face3( 1,10,8 ) );

    pared2.faces.push(new THREE.Face3( 11,3,4 ) );
    pared2.faces.push(new THREE.Face3( 4,3,11 ) );
    pared2.faces.push(new THREE.Face3( 10,11,3 ) );
    pared2.faces.push(new THREE.Face3( 3,11,10 ) );

    pared2.faces.push(new THREE.Face3( 12,5,4 ) );
    pared2.faces.push(new THREE.Face3( 4,5,12 ) );
    pared2.faces.push(new THREE.Face3( 11,12,4 ) );
    pared2.faces.push(new THREE.Face3( 4,12,11 ) );

    pared2.faces.push(new THREE.Face3( 13,6,5 ) );
    pared2.faces.push(new THREE.Face3( 5,6,13 ) );
    pared2.faces.push(new THREE.Face3( 12,13,5 ) );
    pared2.faces.push(new THREE.Face3( 5,13,12 ) );

    pared2.faces.push(new THREE.Face3( 13,16,6 ) );
    pared2.faces.push(new THREE.Face3( 6,16,13 ) );
    pared2.faces.push(new THREE.Face3( 17,16,13 ) );
    pared2.faces.push(new THREE.Face3( 13,16,17 ) );

    pared2.faces.push(new THREE.Face3( 15,16,14 ) );
    pared2.faces.push(new THREE.Face3( 14,16,15 ) );
    pared2.faces.push(new THREE.Face3( 17,15,16 ) );
    pared2.faces.push(new THREE.Face3( 16,15,17 ) );

    pared2.faces.push(new THREE.Face3( 19,18,4 ) );
    pared2.faces.push(new THREE.Face3( 4,18,19 ) );
    pared2.faces.push(new THREE.Face3( 11,4,19 ) );
    pared2.faces.push(new THREE.Face3( 19,4,11 ) );

    pared2.faces.push(new THREE.Face3( 21,20,2 ) );
    pared2.faces.push(new THREE.Face3( 2,20,21 ) );
    pared2.faces.push(new THREE.Face3( 9,21,2 ) );
    pared2.faces.push(new THREE.Face3( 2,21,9 ) );

    pared2.faces.push(new THREE.Face3( 22,19,21 ) );
    pared2.faces.push(new THREE.Face3( 21,19,22 ) );
    pared2.faces.push(new THREE.Face3( 23,22,21 ) );
    pared2.faces.push(new THREE.Face3( 21,22,23 ) );

    pared2.faces.push(new THREE.Face3( 7,24,25 ) );
    pared2.faces.push(new THREE.Face3( 25,24,7 ) );
    pared2.faces.push(new THREE.Face3( 15,7,25 ) );
    pared2.faces.push(new THREE.Face3( 25,7,15 ) );

    var materialpr2 = new THREE.MeshBasicMaterial( { color: 0xf3ff7a } ); // paredbaja
    var paredb = new THREE.Mesh (pared2, materialpr2); // Crea el objeto
    
// pared3
    
    var pared3 = new THREE.Geometry();
    pared3.vertices.push( new THREE.Vector3( 70, -25, -10) );//0
    pared3.vertices.push( new THREE.Vector3( 25, -25, -10) );//1
    pared3.vertices.push( new THREE.Vector3( 25, -10,-10 ));//2
    pared3.vertices.push( new THREE.Vector3( 25, 10, -10 ));//3

    pared3.vertices.push( new THREE.Vector3( 25, 25, -10) );//4
    pared3.vertices.push( new THREE.Vector3( 70, 25, -10) );//5
    pared3.vertices.push( new THREE.Vector3( 70, -25, 0 ));//6

    pared3.vertices.push( new THREE.Vector3( 25, -25, 0) );//7
    pared3.vertices.push( new THREE.Vector3( 25, -10, 0) );//8
    pared3.vertices.push( new THREE.Vector3( 25, 10, 0 ));//9
    pared3.vertices.push( new THREE.Vector3( 25, 25, 0 ));//10
    
    pared3.vertices.push( new THREE.Vector3( 70, 25, 0) );//11


    pared3.faces.push(new THREE.Face3( 6,0,1 ) );
    pared3.faces.push(new THREE.Face3( 1,0,6 ) );
    pared3.faces.push(new THREE.Face3( 7,6,1 ) );
    pared3.faces.push(new THREE.Face3( 1,6,7 ) );

    pared3.faces.push(new THREE.Face3( 7,1,2 ) );
    pared3.faces.push(new THREE.Face3( 2,1,7 ) );
    pared3.faces.push(new THREE.Face3( 8,7,2 ) );
    pared3.faces.push(new THREE.Face3( 2,7,8 ) );

    pared3.faces.push(new THREE.Face3( 9,3,4 ) );
    pared3.faces.push(new THREE.Face3( 4,3,9 ) );
    pared3.faces.push(new THREE.Face3( 10,9,4 ) );
    pared3.faces.push(new THREE.Face3( 4,9,10 ) );

    pared3.faces.push(new THREE.Face3( 10,4,5 ) );
    pared3.faces.push(new THREE.Face3( 5,4,10 ) );
    pared3.faces.push(new THREE.Face3( 11,10,5 ) );
    pared3.faces.push(new THREE.Face3( 5,10,11 ) );

    pared3.faces.push(new THREE.Face3( 11,5,0 ) );
    pared3.faces.push(new THREE.Face3( 0,5,11 ) );
    pared3.faces.push(new THREE.Face3( 6,11,0 ) );
    pared3.faces.push(new THREE.Face3( 0,11,6 ) );


    var pareda4 = new THREE.Mesh (pared3, materialpared1); // Crea el objeto

// pared4
    
    var pared4 = new THREE.Geometry();
    pared4.vertices.push( new THREE.Vector3( 70, -25, 0) );//0
    pared4.vertices.push( new THREE.Vector3( 25, -25, 0) );//1
    pared4.vertices.push( new THREE.Vector3( 25, -10,0 ));//2
    pared4.vertices.push( new THREE.Vector3( 25, 10, 0 ));//3

    pared4.vertices.push( new THREE.Vector3( 25, 25, 0) );//4
    pared4.vertices.push( new THREE.Vector3( 70, 25, 0) );//5
    pared4.vertices.push( new THREE.Vector3( 70, -25, 15 ));//6

    pared4.vertices.push( new THREE.Vector3( 25, -25, 15) );//7
    pared4.vertices.push( new THREE.Vector3( 25, -10, 15) );//8
    pared4.vertices.push( new THREE.Vector3( 25, 10, 15 ));//9
    pared4.vertices.push( new THREE.Vector3( 25, 25, 15 ));//10
    
    pared4.vertices.push( new THREE.Vector3( 70, 25, 15) );//11

    pared4.vertices.push( new THREE.Vector3( 25, 10, 5) );//12
    pared4.vertices.push( new THREE.Vector3( 25, -10, 5 ));//13

    pared4.faces.push(new THREE.Face3( 6,0,1 ) );
    pared4.faces.push(new THREE.Face3( 1,0,6 ) );
    pared4.faces.push(new THREE.Face3( 7,6,1 ) );
    pared4.faces.push(new THREE.Face3( 1,6,7 ) );

    pared4.faces.push(new THREE.Face3( 7,1,2 ) );
    pared4.faces.push(new THREE.Face3( 2,1,7 ) );
    pared4.faces.push(new THREE.Face3( 8,7,2 ) );
    pared4.faces.push(new THREE.Face3( 2,7,8 ) );

    pared4.faces.push(new THREE.Face3( 9,3,4 ) );
    pared4.faces.push(new THREE.Face3( 4,3,9 ) );
    pared4.faces.push(new THREE.Face3( 10,9,4 ) );
    pared4.faces.push(new THREE.Face3( 4,9,10 ) );

    pared4.faces.push(new THREE.Face3( 10,4,5 ) );
    pared4.faces.push(new THREE.Face3( 5,4,10 ) );
    pared4.faces.push(new THREE.Face3( 11,10,5 ) );
    pared4.faces.push(new THREE.Face3( 5,10,11 ) );

    pared4.faces.push(new THREE.Face3( 11,5,0 ) );
    pared4.faces.push(new THREE.Face3( 0,5,11 ) );
    pared4.faces.push(new THREE.Face3( 6,11,0 ) );
    pared4.faces.push(new THREE.Face3( 0,11,6 ) );

    pared4.faces.push(new THREE.Face3( 9,12,13 ) );
    pared4.faces.push(new THREE.Face3( 13,12,9 ) );
    pared4.faces.push(new THREE.Face3( 8,9,13 ) );
    pared4.faces.push(new THREE.Face3( 13,9,8 ) );


    var paredb4 = new THREE.Mesh (pared4, materialpr2); // Crea el objeto

   // LINEAS
    var linea1 = new THREE.Geometry();
    linea1.vertices.push( new THREE.Vector3( 0, 0, 0 ) );
    linea1.vertices.push( new THREE.Vector3( 0, 100, 0 ) );
    linea1.vertices.push( new THREE.Vector3( 20, 0, 0 ) );
    linea1.vertices.push( new THREE.Vector3( 20, 100, 0 ) );

    var material = new THREE.LineBasicMaterial({color: 0x000000});
    var line = new THREE.Line( linea1, material );
    

    //pasillo
    var mipasillo = new THREE.Geometry();
    mipasillo.vertices.push( new THREE.Vector3( 25, -25, -10) );//0
    mipasillo.vertices.push( new THREE.Vector3( 25, 25, -10) );//1
    mipasillo.vertices.push( new THREE.Vector3( -5, -25,-10 ));//2
    mipasillo.vertices.push( new THREE.Vector3( -5, 25, -10 ));//3

    mipasillo.faces.push(new THREE.Face3( 0,1,2 ) );
    mipasillo.faces.push(new THREE.Face3( 2,1,0 ) );

    mipasillo.faces.push(new THREE.Face3( 3,2,1 ) );
    mipasillo.faces.push(new THREE.Face3( 1,2,3 ) );

    var material2 = new THREE.MeshBasicMaterial( { color: 0xE3BCE4 } ); // e
    var piso2 = new THREE.Mesh (mipasillo, material2); // Crea el objeto

    // Ventana1
    
    var mivent1 = new THREE.Geometry();
    mivent1.vertices.push( new THREE.Vector3( -10, 24.9, 1) );//0
    mivent1.vertices.push( new THREE.Vector3( -22, 24.9, 1) );//1
    mivent1.vertices.push( new THREE.Vector3( -22, 24.9, 10 ));//2
    mivent1.vertices.push( new THREE.Vector3( -10, 24.9, 10 ));//3

    mivent1.vertices.push( new THREE.Vector3( -10, 25.01, 1) );//4
    mivent1.vertices.push( new THREE.Vector3( -22, 25.01, 1) );//5
    mivent1.vertices.push( new THREE.Vector3( -22, 25.01, 10 ));//6
    mivent1.vertices.push( new THREE.Vector3( -10, 25.01, 10 ));//7

    mivent1.faces.push(new THREE.Face3( 0,1,2 ) );
    mivent1.faces.push(new THREE.Face3( 2,1,0 ) );

    mivent1.faces.push(new THREE.Face3( 3,0,2 ) );
    mivent1.faces.push(new THREE.Face3( 2,0,3 ) );

    mivent1.faces.push(new THREE.Face3( 4,5,6 ) );
    mivent1.faces.push(new THREE.Face3( 6,5,4 ) );

    mivent1.faces.push(new THREE.Face3( 7,4,6 ) );
    mivent1.faces.push(new THREE.Face3( 6,4,7 ) );

    var materiavent = new THREE.MeshBasicMaterial( { color: 0x00ffff } ); // e
    var ventana1 = new THREE.Mesh (mivent1, materiavent); // Crea el objeto

    var lin1a = new THREE.Geometry();
    lin1a.vertices.push( new THREE.Vector3( -10, 24.89, 5.5 ) );
    lin1a.vertices.push( new THREE.Vector3( -22, 24.89, 5.5 ) );
    var linea1a = new THREE.Line( lin1a, material );

    var lin1b = new THREE.Geometry();
    lin1b.vertices.push( new THREE.Vector3( -16, 24.89, 1 ) );
    lin1b.vertices.push( new THREE.Vector3( -16, 24.89, 10 ) );
    var linea1b = new THREE.Line( lin1b, material );


    // Ventana2
    
    var mivent2 = new THREE.Geometry();
    mivent2.vertices.push( new THREE.Vector3( 30, 24.9, 1) );//0
    mivent2.vertices.push( new THREE.Vector3( 45, 24.9, 1) );//1
    mivent2.vertices.push( new THREE.Vector3( 45, 24.9, 10 ));//2
    mivent2.vertices.push( new THREE.Vector3( 30, 24.9, 10 ));//3

    mivent2.vertices.push( new THREE.Vector3( 30, 25.01, 1) );//4
    mivent2.vertices.push( new THREE.Vector3( 45, 25.01, 1) );//5
    mivent2.vertices.push( new THREE.Vector3( 45, 25.01, 10 ));//6
    mivent2.vertices.push( new THREE.Vector3( 30, 25.01, 10 ));//7

    mivent2.faces.push(new THREE.Face3( 0,1,2 ) );
    mivent2.faces.push(new THREE.Face3( 2,1,0 ) );

    mivent2.faces.push(new THREE.Face3( 3,0,2 ) );
    mivent2.faces.push(new THREE.Face3( 2,0,3 ) );

    mivent2.faces.push(new THREE.Face3( 4,5,6 ) );
    mivent2.faces.push(new THREE.Face3( 6,5,4 ) );

    mivent2.faces.push(new THREE.Face3( 7,4,6 ) );
    mivent2.faces.push(new THREE.Face3( 6,4,7 ) );

    var ventana2 = new THREE.Mesh (mivent2, materiavent); // Crea el objeto

    var lin2a = new THREE.Geometry();
    lin2a.vertices.push( new THREE.Vector3( 30, 24.89, 5.5 ) );
    lin2a.vertices.push( new THREE.Vector3( 45, 24.89, 5.5 ) );
    var linea2a = new THREE.Line( lin2a, material );

    var lin2b = new THREE.Geometry();
    lin2b.vertices.push( new THREE.Vector3( 37.5, 24.89, 1 ) );
    lin2b.vertices.push( new THREE.Vector3( 37.5, 24.89, 10 ) );
    var linea2b = new THREE.Line( lin2b, material );


    // Ventana3
    
    var mivent3 = new THREE.Geometry();
    mivent3.vertices.push( new THREE.Vector3( 50, 24.9, 1) );//0
    mivent3.vertices.push( new THREE.Vector3( 65, 24.9, 1) );//1
    mivent3.vertices.push( new THREE.Vector3( 65, 24.9, 10 ));//2
    mivent3.vertices.push( new THREE.Vector3( 50, 24.9, 10 ));//3

    mivent3.vertices.push( new THREE.Vector3( 50, 25.01, 1) );//4
    mivent3.vertices.push( new THREE.Vector3( 65, 25.01, 1) );//5
    mivent3.vertices.push( new THREE.Vector3( 65, 25.01, 10 ));//6
    mivent3.vertices.push( new THREE.Vector3( 50, 25.01, 10 ));//7

    mivent3.faces.push(new THREE.Face3( 0,1,2 ) );
    mivent3.faces.push(new THREE.Face3( 2,1,0 ) );

    mivent3.faces.push(new THREE.Face3( 3,0,2 ) );
    mivent3.faces.push(new THREE.Face3( 2,0,3 ) );

    mivent3.faces.push(new THREE.Face3( 4,5,6 ) );
    mivent3.faces.push(new THREE.Face3( 6,5,4 ) );

    mivent3.faces.push(new THREE.Face3( 7,4,6 ) );
    mivent3.faces.push(new THREE.Face3( 6,4,7 ) );

    var ventana3 = new THREE.Mesh (mivent3, materiavent); // Crea el objeto

    var lin3a = new THREE.Geometry();
    lin3a.vertices.push( new THREE.Vector3( 50, 24.89, 5.5 ) );
    lin3a.vertices.push( new THREE.Vector3( 65, 24.89, 5.5 ) );
    var linea3a = new THREE.Line( lin3a, material );

    var lin3b = new THREE.Geometry();
    lin3b.vertices.push( new THREE.Vector3( 57.5, 24.89, 1 ) );
    lin3b.vertices.push( new THREE.Vector3( 57.5, 24.89, 10 ) );
    var linea3b = new THREE.Line( lin3b, material );

	
    // Ventana4
    
    var mivent4 = new THREE.Geometry();
    mivent4.vertices.push( new THREE.Vector3( 40, -24.9, 1) );//0
    mivent4.vertices.push( new THREE.Vector3( 55, -24.9, 1) );//1
    mivent4.vertices.push( new THREE.Vector3( 55, -24.9, 10 ));//2
    mivent4.vertices.push( new THREE.Vector3( 40, -24.9, 10 ));//3

    mivent4.vertices.push( new THREE.Vector3( 40, -25.01, 1) );//4
    mivent4.vertices.push( new THREE.Vector3( 55, -25.01, 1) );//5
    mivent4.vertices.push( new THREE.Vector3( 55, -25.01, 10 ));//6
    mivent4.vertices.push( new THREE.Vector3( 40, -25.01, 10 ));//7

    mivent4.faces.push(new THREE.Face3( 0,1,2 ) );
    mivent4.faces.push(new THREE.Face3( 2,1,0 ) );

    mivent4.faces.push(new THREE.Face3( 3,0,2 ) );
    mivent4.faces.push(new THREE.Face3( 2,0,3 ) );

    mivent4.faces.push(new THREE.Face3( 4,5,6 ) );
    mivent4.faces.push(new THREE.Face3( 6,5,4 ) );

    mivent4.faces.push(new THREE.Face3( 7,4,6 ) );
    mivent4.faces.push(new THREE.Face3( 6,4,7 ) );

    var ventana4 = new THREE.Mesh (mivent4, materiavent); // Crea el objeto

    var lin4a = new THREE.Geometry();
    lin4a.vertices.push( new THREE.Vector3( 40, -24.89, 5.5 ) );
    lin4a.vertices.push( new THREE.Vector3( 55, -24.89, 5.5 ) );
    var linea4a = new THREE.Line( lin4a, material );

    var lin4b = new THREE.Geometry();
    lin4b.vertices.push( new THREE.Vector3( 47.5, -24.89, 1 ) );
    lin4b.vertices.push( new THREE.Vector3( 47.5, -24.89, 10 ) );
    var linea4b = new THREE.Line( lin4b, material );


    // Ventana5
    
    var mivent5 = new THREE.Geometry();
    mivent5.vertices.push( new THREE.Vector3( 69.9, -5, 1) );//0
    mivent5.vertices.push( new THREE.Vector3( 69.9, -20, 1) );//1
    mivent5.vertices.push( new THREE.Vector3( 69.9, -20, 10 ));//2
    mivent5.vertices.push( new THREE.Vector3( 69.9, -5, 10 ));//3

    mivent5.vertices.push( new THREE.Vector3( 70.01, -5, 1) );//4
    mivent5.vertices.push( new THREE.Vector3( 70.01, -20, 1) );//5
    mivent5.vertices.push( new THREE.Vector3( 70.01, -20, 10 ));//6
    mivent5.vertices.push( new THREE.Vector3( 70.01, -5, 10 ));//7

    mivent5.faces.push(new THREE.Face3( 0,1,2 ) );
    mivent5.faces.push(new THREE.Face3( 2,1,0 ) );

    mivent5.faces.push(new THREE.Face3( 3,0,2 ) );
    mivent5.faces.push(new THREE.Face3( 2,0,3 ) );

    mivent5.faces.push(new THREE.Face3( 4,5,6 ) );
    mivent5.faces.push(new THREE.Face3( 6,5,4 ) );

    mivent5.faces.push(new THREE.Face3( 7,4,6 ) );
    mivent5.faces.push(new THREE.Face3( 6,4,7 ) );

    var ventana5 = new THREE.Mesh (mivent5, materiavent); // Crea el objeto

    var lin5a = new THREE.Geometry();
    lin5a.vertices.push( new THREE.Vector3( 69.9, -5, 5.5 ) );
    lin5a.vertices.push( new THREE.Vector3( 69.9, -20, 5.5 ) );
    var linea5a = new THREE.Line( lin5a, material );

    var lin5b = new THREE.Geometry();
    lin5b.vertices.push( new THREE.Vector3( 69.9, -12.5, 1 ) );
    lin5b.vertices.push( new THREE.Vector3( 69.9, -12.5, 10 ) );
    var linea5b = new THREE.Line( lin5b, material );


    // Ventana6
    
    var mivent6 = new THREE.Geometry();
    mivent6.vertices.push( new THREE.Vector3( 69.9, 20, 1) );//0
    mivent6.vertices.push( new THREE.Vector3( 69.9, 5, 1) );//1
    mivent6.vertices.push( new THREE.Vector3( 69.9, 5, 10 ));//2
    mivent6.vertices.push( new THREE.Vector3( 69.9, 20, 10 ));//3

    mivent6.vertices.push( new THREE.Vector3( 70.01, 20, 1) );//4
    mivent6.vertices.push( new THREE.Vector3( 70.01, 5, 1) );//5
    mivent6.vertices.push( new THREE.Vector3( 70.01, 5, 10 ));//6
    mivent6.vertices.push( new THREE.Vector3( 70.01, 20, 10 ));//7

    mivent6.faces.push(new THREE.Face3( 0,1,2 ) );
    mivent6.faces.push(new THREE.Face3( 2,1,0 ) );

    mivent6.faces.push(new THREE.Face3( 3,0,2 ) );
    mivent6.faces.push(new THREE.Face3( 2,0,3 ) );

    mivent6.faces.push(new THREE.Face3( 4,5,6 ) );
    mivent6.faces.push(new THREE.Face3( 6,5,4 ) );

    mivent6.faces.push(new THREE.Face3( 7,4,6 ) );
    mivent6.faces.push(new THREE.Face3( 6,4,7 ) );

    var ventana6 = new THREE.Mesh (mivent6, materiavent); // Crea el objeto

    var lin6a = new THREE.Geometry();
    lin6a.vertices.push( new THREE.Vector3( 69.9, 20, 5.5 ) );
    lin6a.vertices.push( new THREE.Vector3( 69.9, 5, 5.5 ) );
    var linea6a = new THREE.Line( lin6a, material );

    var lin6b = new THREE.Geometry();
    lin6b.vertices.push( new THREE.Vector3( 69.9, 12.5, 1 ) );
    lin6b.vertices.push( new THREE.Vector3( 69.9, 12.5, 10 ) );
    var linea6b = new THREE.Line( lin6b, material );


    // Ventana7
    
    var mivent7 = new THREE.Geometry();
    mivent7.vertices.push( new THREE.Vector3( -32, 9.9, 1) );//0
    mivent7.vertices.push( new THREE.Vector3( -47, 9.9, 1) );//1
    mivent7.vertices.push( new THREE.Vector3( -47, 9.9, 10 ));//2
    mivent7.vertices.push( new THREE.Vector3( -32, 9.9, 10 ));//3

    mivent7.vertices.push( new THREE.Vector3( -32, 10.01, 1) );//4
    mivent7.vertices.push( new THREE.Vector3( -47, 10.01, 1) );//5
    mivent7.vertices.push( new THREE.Vector3( -47, 10.01, 10 ));//6
    mivent7.vertices.push( new THREE.Vector3( -32, 10.01, 10 ));//7

    mivent7.faces.push(new THREE.Face3( 0,1,2 ) );
    mivent7.faces.push(new THREE.Face3( 2,1,0 ) );

    mivent7.faces.push(new THREE.Face3( 3,0,2 ) );
    mivent7.faces.push(new THREE.Face3( 2,0,3 ) );

    mivent7.faces.push(new THREE.Face3( 4,5,6 ) );
    mivent7.faces.push(new THREE.Face3( 6,5,4 ) );

    mivent7.faces.push(new THREE.Face3( 7,4,6 ) );
    mivent7.faces.push(new THREE.Face3( 6,4,7 ) );

    var ventana7 = new THREE.Mesh (mivent7, materiavent); // Crea el objeto

    var lin7a = new THREE.Geometry();
    lin7a.vertices.push( new THREE.Vector3( -32, 9.89, 5.5 ) );
    lin7a.vertices.push( new THREE.Vector3( -47, 9.89, 5.5 ) );
    var linea7a = new THREE.Line( lin7a, material );

    var lin7b = new THREE.Geometry();
    lin7b.vertices.push( new THREE.Vector3( -39.5, 9.89, 1 ) );
    lin7b.vertices.push( new THREE.Vector3( -39.5, 9.89, 10 ) );
    var linea7b = new THREE.Line( lin7b, material );


    // Ventana8
    
    var mivent8 = new THREE.Geometry();
    mivent8.vertices.push( new THREE.Vector3( -49.9, -5, 1) );//0
    mivent8.vertices.push( new THREE.Vector3( -49.9, -20, 1) );//1
    mivent8.vertices.push( new THREE.Vector3( -49.9, -20, 10 ));//2
    mivent8.vertices.push( new THREE.Vector3( -49.9, -5, 10 ));//3

    mivent8.vertices.push( new THREE.Vector3( -50.01, -5, 1) );//4
    mivent8.vertices.push( new THREE.Vector3( -50.01, -20, 1) );//5
    mivent8.vertices.push( new THREE.Vector3( -50.01, -20, 10 ));//6
    mivent8.vertices.push( new THREE.Vector3( -50.01, -5, 10 ));//7

    mivent8.faces.push(new THREE.Face3( 0,1,2 ) );
    mivent8.faces.push(new THREE.Face3( 2,1,0 ) );

    mivent8.faces.push(new THREE.Face3( 3,0,2 ) );
    mivent8.faces.push(new THREE.Face3( 2,0,3 ) );

    mivent8.faces.push(new THREE.Face3( 4,5,6 ) );
    mivent8.faces.push(new THREE.Face3( 6,5,4 ) );

    mivent8.faces.push(new THREE.Face3( 7,4,6 ) );
    mivent8.faces.push(new THREE.Face3( 6,4,7 ) );

    var ventana8 = new THREE.Mesh (mivent8, materiavent); // Crea el objeto

    var lin8a = new THREE.Geometry();
    lin8a.vertices.push( new THREE.Vector3( -49.9, -5, 5.5 ) );
    lin8a.vertices.push( new THREE.Vector3( -49.9, -20, 5.5 ) );
    var linea8a = new THREE.Line( lin8a, material );

    var lin8b = new THREE.Geometry();
    lin8b.vertices.push( new THREE.Vector3( -49.9, -12.5, 1 ) );
    lin8b.vertices.push( new THREE.Vector3( -49.9, -12.5, 10 ) );
    var linea8b = new THREE.Line( lin8b, material );

    // monitor1
    
    var monitor1 = new THREE.Geometry();
    monitor1.vertices.push( new THREE.Vector3( 27, -23, -1) );//0
    monitor1.vertices.push( new THREE.Vector3( 27, -22, -1) );//1
    monitor1.vertices.push( new THREE.Vector3( 32, -22, -1 ));//2
    monitor1.vertices.push( new THREE.Vector3( 32, -23, -1 ));//3

    monitor1.vertices.push( new THREE.Vector3( 27, -23, -4) );//4
    monitor1.vertices.push( new THREE.Vector3( 27, -22, -4) );//5
    monitor1.vertices.push( new THREE.Vector3( 32, -22, -4 ));//6
    monitor1.vertices.push( new THREE.Vector3( 32, -23, -4 ));//7

    monitor1.faces.push(new THREE.Face3( 1,0,3 ) );
    monitor1.faces.push(new THREE.Face3( 3,0,1 ) );
    monitor1.faces.push(new THREE.Face3( 2,1,3 ) );
    monitor1.faces.push(new THREE.Face3( 3,1,2 ) );

    monitor1.faces.push(new THREE.Face3( 0,4,7 ) );
    monitor1.faces.push(new THREE.Face3( 7,4,0 ) );
    monitor1.faces.push(new THREE.Face3( 3,0,7 ) );
    monitor1.faces.push(new THREE.Face3( 7,0,3 ) );

    monitor1.faces.push(new THREE.Face3( 1,5,4 ) );
    monitor1.faces.push(new THREE.Face3( 4,5,1 ) );
    monitor1.faces.push(new THREE.Face3( 0,1,4 ) );
    monitor1.faces.push(new THREE.Face3( 4,1,0 ) );

    monitor1.faces.push(new THREE.Face3( 5,1,2 ) );
    monitor1.faces.push(new THREE.Face3( 2,1,5 ) );
    monitor1.faces.push(new THREE.Face3( 6,5,2 ) );
    monitor1.faces.push(new THREE.Face3( 2,5,6 ) );

    monitor1.faces.push(new THREE.Face3( 2,6,7 ) );
    monitor1.faces.push(new THREE.Face3( 7,6,2 ) );
    monitor1.faces.push(new THREE.Face3( 3,2,7 ) );
    monitor1.faces.push(new THREE.Face3( 7,2,3 ) );

    var materialmonitor = new THREE.MeshBasicMaterial( { color: 0x000000 } ); // e

    var monit1 = new THREE.Mesh (monitor1, materialmonitor); // Crea el objeto

    var pantalla1 = new THREE.Geometry();
    
    pantalla1.vertices.push( new THREE.Vector3( 27.5, -21.99, -1.5) );//1
    pantalla1.vertices.push( new THREE.Vector3( 31.5, -21.99, -1.5 ));//2
    pantalla1.vertices.push( new THREE.Vector3( 27.5, -21.99, -3.5) );//5
    pantalla1.vertices.push( new THREE.Vector3( 31.5, -21.99, -3.5 ));//6

    pantalla1.faces.push(new THREE.Face3( 2,0,1 ) );
    pantalla1.faces.push(new THREE.Face3( 1,0,2 ) );
    pantalla1.faces.push(new THREE.Face3( 3,2,1 ) );
    pantalla1.faces.push(new THREE.Face3( 1,2,3 ) );

    var pant1 = new THREE.Mesh (pantalla1, materiavent); // Crea el objeto


    // monitor2
    
    var monitor2 = new THREE.Geometry();
    monitor2.vertices.push( new THREE.Vector3( 35, -23, -1) );//0
    monitor2.vertices.push( new THREE.Vector3( 35, -22, -1) );//1
    monitor2.vertices.push( new THREE.Vector3( 40, -22, -1 ));//2
    monitor2.vertices.push( new THREE.Vector3( 40, -23, -1 ));//3

    monitor2.vertices.push( new THREE.Vector3( 35, -23, -4) );//4
    monitor2.vertices.push( new THREE.Vector3( 35, -22, -4) );//5
    monitor2.vertices.push( new THREE.Vector3( 40, -22, -4 ));//6
    monitor2.vertices.push( new THREE.Vector3( 40, -23, -4 ));//7

    monitor2.faces.push(new THREE.Face3( 1,0,3 ) );
    monitor2.faces.push(new THREE.Face3( 3,0,1 ) );
    monitor2.faces.push(new THREE.Face3( 2,1,3 ) );
    monitor2.faces.push(new THREE.Face3( 3,1,2 ) );

    monitor2.faces.push(new THREE.Face3( 0,4,7 ) );
    monitor2.faces.push(new THREE.Face3( 7,4,0 ) );
    monitor2.faces.push(new THREE.Face3( 3,0,7 ) );
    monitor2.faces.push(new THREE.Face3( 7,0,3 ) );

    monitor2.faces.push(new THREE.Face3( 1,5,4 ) );
    monitor2.faces.push(new THREE.Face3( 4,5,1 ) );
    monitor2.faces.push(new THREE.Face3( 0,1,4 ) );
    monitor2.faces.push(new THREE.Face3( 4,1,0 ) );

    monitor2.faces.push(new THREE.Face3( 5,1,2 ) );
    monitor2.faces.push(new THREE.Face3( 2,1,5 ) );
    monitor2.faces.push(new THREE.Face3( 6,5,2 ) );
    monitor2.faces.push(new THREE.Face3( 2,5,6 ) );

    monitor2.faces.push(new THREE.Face3( 2,6,7 ) );
    monitor2.faces.push(new THREE.Face3( 7,6,2 ) );
    monitor2.faces.push(new THREE.Face3( 3,2,7 ) );
    monitor2.faces.push(new THREE.Face3( 7,2,3 ) );

    var monit2 = new THREE.Mesh (monitor2, materialmonitor); // Crea el objeto

    var pantalla2 = new THREE.Geometry();
    
    pantalla2.vertices.push( new THREE.Vector3( 35.5, -21.99, -1.5) );//1
    pantalla2.vertices.push( new THREE.Vector3( 39.5, -21.99, -1.5 ));//2
    pantalla2.vertices.push( new THREE.Vector3( 35.5, -21.99, -3.5) );//5
    pantalla2.vertices.push( new THREE.Vector3( 39.5, -21.99, -3.5 ));//6

    pantalla2.faces.push(new THREE.Face3( 2,0,1 ) );
    pantalla2.faces.push(new THREE.Face3( 1,0,2 ) );
    pantalla2.faces.push(new THREE.Face3( 3,2,1 ) );
    pantalla2.faces.push(new THREE.Face3( 1,2,3 ) );

    var pant2 = new THREE.Mesh (pantalla2, materiavent); // Crea el objeto

    // monitor3
    
    var monitor3 = new THREE.Geometry();
    monitor3.vertices.push( new THREE.Vector3( 43, -23, -1) );//0
    monitor3.vertices.push( new THREE.Vector3( 43, -22, -1) );//1
    monitor3.vertices.push( new THREE.Vector3( 48, -22, -1 ));//2
    monitor3.vertices.push( new THREE.Vector3( 48, -23, -1 ));//3

    monitor3.vertices.push( new THREE.Vector3( 43, -23, -4) );//4
    monitor3.vertices.push( new THREE.Vector3( 43, -22, -4) );//5
    monitor3.vertices.push( new THREE.Vector3( 48, -22, -4 ));//6
    monitor3.vertices.push( new THREE.Vector3( 48, -23, -4 ));//7

    monitor3.faces.push(new THREE.Face3( 1,0,3 ) );
    monitor3.faces.push(new THREE.Face3( 3,0,1 ) );
    monitor3.faces.push(new THREE.Face3( 2,1,3 ) );
    monitor3.faces.push(new THREE.Face3( 3,1,2 ) );

    monitor3.faces.push(new THREE.Face3( 0,4,7 ) );
    monitor3.faces.push(new THREE.Face3( 7,4,0 ) );
    monitor3.faces.push(new THREE.Face3( 3,0,7 ) );
    monitor3.faces.push(new THREE.Face3( 7,0,3 ) );

    monitor3.faces.push(new THREE.Face3( 1,5,4 ) );
    monitor3.faces.push(new THREE.Face3( 4,5,1 ) );
    monitor3.faces.push(new THREE.Face3( 0,1,4 ) );
    monitor3.faces.push(new THREE.Face3( 4,1,0 ) );

    monitor3.faces.push(new THREE.Face3( 5,1,2 ) );
    monitor3.faces.push(new THREE.Face3( 2,1,5 ) );
    monitor3.faces.push(new THREE.Face3( 6,5,2 ) );
    monitor3.faces.push(new THREE.Face3( 2,5,6 ) );

    monitor3.faces.push(new THREE.Face3( 2,6,7 ) );
    monitor3.faces.push(new THREE.Face3( 7,6,2 ) );
    monitor3.faces.push(new THREE.Face3( 3,2,7 ) );
    monitor3.faces.push(new THREE.Face3( 7,2,3 ) );

    var monit3 = new THREE.Mesh (monitor3, materialmonitor); // Crea el objeto

    var pantalla3 = new THREE.Geometry();
    
    pantalla3.vertices.push( new THREE.Vector3( 43.5, -21.99, -1.5) );//1
    pantalla3.vertices.push( new THREE.Vector3( 47.5, -21.99, -1.5 ));//2
    pantalla3.vertices.push( new THREE.Vector3( 43.5, -21.99, -3.5) );//5
    pantalla3.vertices.push( new THREE.Vector3( 47.5, -21.99, -3.5 ));//6

    pantalla3.faces.push(new THREE.Face3( 2,0,1 ) );
    pantalla3.faces.push(new THREE.Face3( 1,0,2 ) );
    pantalla3.faces.push(new THREE.Face3( 3,2,1 ) );
    pantalla3.faces.push(new THREE.Face3( 1,2,3 ) );

    var pant3 = new THREE.Mesh (pantalla3, materiavent); // Crea el objeto


    // monitor4
    
    var monitor4 = new THREE.Geometry();
    monitor4.vertices.push( new THREE.Vector3( 51, -23, -1) );//0
    monitor4.vertices.push( new THREE.Vector3( 51, -22, -1) );//1
    monitor4.vertices.push( new THREE.Vector3( 56, -22, -1 ));//2
    monitor4.vertices.push( new THREE.Vector3( 56, -23, -1 ));//3

    monitor4.vertices.push( new THREE.Vector3( 51, -23, -4) );//4
    monitor4.vertices.push( new THREE.Vector3( 51, -22, -4) );//5
    monitor4.vertices.push( new THREE.Vector3( 56, -22, -4 ));//6
    monitor4.vertices.push( new THREE.Vector3( 56, -23, -4 ));//7

    monitor4.faces.push(new THREE.Face3( 1,0,3 ) );
    monitor4.faces.push(new THREE.Face3( 3,0,1 ) );
    monitor4.faces.push(new THREE.Face3( 2,1,3 ) );
    monitor4.faces.push(new THREE.Face3( 3,1,2 ) );

    monitor4.faces.push(new THREE.Face3( 0,4,7 ) );
    monitor4.faces.push(new THREE.Face3( 7,4,0 ) );
    monitor4.faces.push(new THREE.Face3( 3,0,7 ) );
    monitor4.faces.push(new THREE.Face3( 7,0,3 ) );

    monitor4.faces.push(new THREE.Face3( 1,5,4 ) );
    monitor4.faces.push(new THREE.Face3( 4,5,1 ) );
    monitor4.faces.push(new THREE.Face3( 0,1,4 ) );
    monitor4.faces.push(new THREE.Face3( 4,1,0 ) );

    monitor4.faces.push(new THREE.Face3( 5,1,2 ) );
    monitor4.faces.push(new THREE.Face3( 2,1,5 ) );
    monitor4.faces.push(new THREE.Face3( 6,5,2 ) );
    monitor4.faces.push(new THREE.Face3( 2,5,6 ) );

    monitor4.faces.push(new THREE.Face3( 2,6,7 ) );
    monitor4.faces.push(new THREE.Face3( 7,6,2 ) );
    monitor4.faces.push(new THREE.Face3( 3,2,7 ) );
    monitor4.faces.push(new THREE.Face3( 7,2,3 ) );

    var monit4 = new THREE.Mesh (monitor4, materialmonitor); // Crea el objeto

    var pantalla4 = new THREE.Geometry();
    
    pantalla4.vertices.push( new THREE.Vector3( 51.5, -21.99, -1.5) );//1
    pantalla4.vertices.push( new THREE.Vector3( 55.5, -21.99, -1.5 ));//2
    pantalla4.vertices.push( new THREE.Vector3( 51.5, -21.99, -3.5) );//5
    pantalla4.vertices.push( new THREE.Vector3( 55.5, -21.99, -3.5 ));//6

    pantalla4.faces.push(new THREE.Face3( 2,0,1 ) );
    pantalla4.faces.push(new THREE.Face3( 1,0,2 ) );
    pantalla4.faces.push(new THREE.Face3( 3,2,1 ) );
    pantalla4.faces.push(new THREE.Face3( 1,2,3 ) );

    var pant4 = new THREE.Mesh (pantalla4, materiavent); // Crea el objeto

    // monitor5
    
    var monitor5 = new THREE.Geometry();
    monitor5.vertices.push( new THREE.Vector3( 59, -23, -1) );//0
    monitor5.vertices.push( new THREE.Vector3( 59, -22, -1) );//1
    monitor5.vertices.push( new THREE.Vector3( 64, -22, -1 ));//2
    monitor5.vertices.push( new THREE.Vector3( 64, -23, -1 ));//3

    monitor5.vertices.push( new THREE.Vector3( 59, -23, -4) );//4
    monitor5.vertices.push( new THREE.Vector3( 59, -22, -4) );//5
    monitor5.vertices.push( new THREE.Vector3( 64, -22, -4 ));//6
    monitor5.vertices.push( new THREE.Vector3( 64, -23, -4 ));//7

    monitor5.faces.push(new THREE.Face3( 1,0,3 ) );
    monitor5.faces.push(new THREE.Face3( 3,0,1 ) );
    monitor5.faces.push(new THREE.Face3( 2,1,3 ) );
    monitor5.faces.push(new THREE.Face3( 3,1,2 ) );

    monitor5.faces.push(new THREE.Face3( 0,4,7 ) );
    monitor5.faces.push(new THREE.Face3( 7,4,0 ) );
    monitor5.faces.push(new THREE.Face3( 3,0,7 ) );
    monitor5.faces.push(new THREE.Face3( 7,0,3 ) );

    monitor5.faces.push(new THREE.Face3( 1,5,4 ) );
    monitor5.faces.push(new THREE.Face3( 4,5,1 ) );
    monitor5.faces.push(new THREE.Face3( 0,1,4 ) );
    monitor5.faces.push(new THREE.Face3( 4,1,0 ) );

    monitor5.faces.push(new THREE.Face3( 5,1,2 ) );
    monitor5.faces.push(new THREE.Face3( 2,1,5 ) );
    monitor5.faces.push(new THREE.Face3( 6,5,2 ) );
    monitor5.faces.push(new THREE.Face3( 2,5,6 ) );

    monitor5.faces.push(new THREE.Face3( 2,6,7 ) );
    monitor5.faces.push(new THREE.Face3( 7,6,2 ) );
    monitor5.faces.push(new THREE.Face3( 3,2,7 ) );
    monitor5.faces.push(new THREE.Face3( 7,2,3 ) );

    var monit5= new THREE.Mesh (monitor5, materialmonitor); // Crea el objeto

    var pantalla5 = new THREE.Geometry();
    
    pantalla5.vertices.push( new THREE.Vector3( 59.5, -21.99, -1.5) );//1
    pantalla5.vertices.push( new THREE.Vector3( 63.5, -21.99, -1.5 ));//2
    pantalla5.vertices.push( new THREE.Vector3( 59.5, -21.99, -3.5) );//5
    pantalla5.vertices.push( new THREE.Vector3( 63.5, -21.99, -3.5 ));//6

    pantalla5.faces.push(new THREE.Face3( 2,0,1 ) );
    pantalla5.faces.push(new THREE.Face3( 1,0,2 ) );
    pantalla5.faces.push(new THREE.Face3( 3,2,1 ) );
    pantalla5.faces.push(new THREE.Face3( 1,2,3 ) );

    var pant5 = new THREE.Mesh (pantalla5, materiavent); // Crea el objeto


    // monitor6
    
    var monitor6 = new THREE.Geometry();
    monitor6.vertices.push( new THREE.Vector3( 27, 23, -1) );//0
    monitor6.vertices.push( new THREE.Vector3( 27, 22, -1) );//1
    monitor6.vertices.push( new THREE.Vector3( 32, 22, -1 ));//2
    monitor6.vertices.push( new THREE.Vector3( 32, 23, -1 ));//3

    monitor6.vertices.push( new THREE.Vector3( 27, 23, -4) );//4
    monitor6.vertices.push( new THREE.Vector3( 27, 22, -4) );//5
    monitor6.vertices.push( new THREE.Vector3( 32, 22, -4 ));//6
    monitor6.vertices.push( new THREE.Vector3( 32, 23, -4 ));//7

    monitor6.faces.push(new THREE.Face3( 1,0,3 ) );
    monitor6.faces.push(new THREE.Face3( 3,0,1 ) );
    monitor6.faces.push(new THREE.Face3( 2,1,3 ) );
    monitor6.faces.push(new THREE.Face3( 3,1,2 ) );

    monitor6.faces.push(new THREE.Face3( 0,4,7 ) );
    monitor6.faces.push(new THREE.Face3( 7,4,0 ) );
    monitor6.faces.push(new THREE.Face3( 3,0,7 ) );
    monitor6.faces.push(new THREE.Face3( 7,0,3 ) );

    monitor6.faces.push(new THREE.Face3( 1,5,4 ) );
    monitor6.faces.push(new THREE.Face3( 4,5,1 ) );
    monitor6.faces.push(new THREE.Face3( 0,1,4 ) );
    monitor6.faces.push(new THREE.Face3( 4,1,0 ) );

    monitor6.faces.push(new THREE.Face3( 5,1,2 ) );
    monitor6.faces.push(new THREE.Face3( 2,1,5 ) );
    monitor6.faces.push(new THREE.Face3( 6,5,2 ) );
    monitor6.faces.push(new THREE.Face3( 2,5,6 ) );

    monitor6.faces.push(new THREE.Face3( 2,6,7 ) );
    monitor6.faces.push(new THREE.Face3( 7,6,2 ) );
    monitor6.faces.push(new THREE.Face3( 3,2,7 ) );
    monitor6.faces.push(new THREE.Face3( 7,2,3 ) );

    var monit6 = new THREE.Mesh (monitor6, materialmonitor); // Crea el objeto

    var pantalla6 = new THREE.Geometry();
    
    pantalla6.vertices.push( new THREE.Vector3( 27.5, 21.99, -1.5) );//1
    pantalla6.vertices.push( new THREE.Vector3( 31.5, 21.99, -1.5 ));//2
    pantalla6.vertices.push( new THREE.Vector3( 27.5, 21.99, -3.5) );//5
    pantalla6.vertices.push( new THREE.Vector3( 31.5, 21.99, -3.5 ));//6

    pantalla6.faces.push(new THREE.Face3( 2,0,1 ) );
    pantalla6.faces.push(new THREE.Face3( 1,0,2 ) );
    pantalla6.faces.push(new THREE.Face3( 3,2,1 ) );
    pantalla6.faces.push(new THREE.Face3( 1,2,3 ) );

    var pant6 = new THREE.Mesh (pantalla6, materiavent); // Crea el objeto


    // monitor7
    
    var monitor7 = new THREE.Geometry();
    monitor7.vertices.push( new THREE.Vector3( 35, 23, -1) );//0
    monitor7.vertices.push( new THREE.Vector3( 35, 22, -1) );//1
    monitor7.vertices.push( new THREE.Vector3( 40, 22, -1 ));//2
    monitor7.vertices.push( new THREE.Vector3( 40, 23, -1 ));//3

    monitor7.vertices.push( new THREE.Vector3( 35, 23, -4) );//4
    monitor7.vertices.push( new THREE.Vector3( 35, 22, -4) );//5
    monitor7.vertices.push( new THREE.Vector3( 40, 22, -4 ));//6
    monitor7.vertices.push( new THREE.Vector3( 40, 23, -4 ));//7

    monitor7.faces.push(new THREE.Face3( 1,0,3 ) );
    monitor7.faces.push(new THREE.Face3( 3,0,1 ) );
    monitor7.faces.push(new THREE.Face3( 2,1,3 ) );
    monitor7.faces.push(new THREE.Face3( 3,1,2 ) );

    monitor7.faces.push(new THREE.Face3( 0,4,7 ) );
    monitor7.faces.push(new THREE.Face3( 7,4,0 ) );
    monitor7.faces.push(new THREE.Face3( 3,0,7 ) );
    monitor7.faces.push(new THREE.Face3( 7,0,3 ) );

    monitor7.faces.push(new THREE.Face3( 1,5,4 ) );
    monitor7.faces.push(new THREE.Face3( 4,5,1 ) );
    monitor7.faces.push(new THREE.Face3( 0,1,4 ) );
    monitor7.faces.push(new THREE.Face3( 4,1,0 ) );

    monitor7.faces.push(new THREE.Face3( 5,1,2 ) );
    monitor7.faces.push(new THREE.Face3( 2,1,5 ) );
    monitor7.faces.push(new THREE.Face3( 6,5,2 ) );
    monitor7.faces.push(new THREE.Face3( 2,5,6 ) );

    monitor7.faces.push(new THREE.Face3( 2,6,7 ) );
    monitor7.faces.push(new THREE.Face3( 7,6,2 ) );
    monitor7.faces.push(new THREE.Face3( 3,2,7 ) );
    monitor7.faces.push(new THREE.Face3( 7,2,3 ) );

    var monit7 = new THREE.Mesh (monitor7, materialmonitor); // Crea el objeto

    var pantalla7 = new THREE.Geometry();
    
    pantalla7.vertices.push( new THREE.Vector3( 35.5, 21.99, -1.5) );//1
    pantalla7.vertices.push( new THREE.Vector3( 39.5, 21.99, -1.5 ));//2
    pantalla7.vertices.push( new THREE.Vector3( 35.5, 21.99, -3.5) );//5
    pantalla7.vertices.push( new THREE.Vector3( 39.5, 21.99, -3.5 ));//6

    pantalla7.faces.push(new THREE.Face3( 2,0,1 ) );
    pantalla7.faces.push(new THREE.Face3( 1,0,2 ) );
    pantalla7.faces.push(new THREE.Face3( 3,2,1 ) );
    pantalla7.faces.push(new THREE.Face3( 1,2,3 ) );

    var pant7 = new THREE.Mesh (pantalla7, materiavent); // Crea el objeto

    // monitor8
    
    var monitor8 = new THREE.Geometry();
    monitor8.vertices.push( new THREE.Vector3( 43, 23, -1) );//0
    monitor8.vertices.push( new THREE.Vector3( 43, 22, -1) );//1
    monitor8.vertices.push( new THREE.Vector3( 48, 22, -1 ));//2
    monitor8.vertices.push( new THREE.Vector3( 48, 23, -1 ));//3

    monitor8.vertices.push( new THREE.Vector3( 43, 23, -4) );//4
    monitor8.vertices.push( new THREE.Vector3( 43, 22, -4) );//5
    monitor8.vertices.push( new THREE.Vector3( 48, 22, -4 ));//6
    monitor8.vertices.push( new THREE.Vector3( 48, 23, -4 ));//7

    monitor8.faces.push(new THREE.Face3( 1,0,3 ) );
    monitor8.faces.push(new THREE.Face3( 3,0,1 ) );
    monitor8.faces.push(new THREE.Face3( 2,1,3 ) );
    monitor8.faces.push(new THREE.Face3( 3,1,2 ) );

    monitor8.faces.push(new THREE.Face3( 0,4,7 ) );
    monitor8.faces.push(new THREE.Face3( 7,4,0 ) );
    monitor8.faces.push(new THREE.Face3( 3,0,7 ) );
    monitor8.faces.push(new THREE.Face3( 7,0,3 ) );

    monitor8.faces.push(new THREE.Face3( 1,5,4 ) );
    monitor8.faces.push(new THREE.Face3( 4,5,1 ) );
    monitor8.faces.push(new THREE.Face3( 0,1,4 ) );
    monitor8.faces.push(new THREE.Face3( 4,1,0 ) );

    monitor8.faces.push(new THREE.Face3( 5,1,2 ) );
    monitor8.faces.push(new THREE.Face3( 2,1,5 ) );
    monitor8.faces.push(new THREE.Face3( 6,5,2 ) );
    monitor8.faces.push(new THREE.Face3( 2,5,6 ) );

    monitor8.faces.push(new THREE.Face3( 2,6,7 ) );
    monitor8.faces.push(new THREE.Face3( 7,6,2 ) );
    monitor8.faces.push(new THREE.Face3( 3,2,7 ) );
    monitor8.faces.push(new THREE.Face3( 7,2,3 ) );

    var monit8 = new THREE.Mesh (monitor8, materialmonitor); // Crea el objeto

    var pantalla8 = new THREE.Geometry();
    
    pantalla8.vertices.push( new THREE.Vector3( 43.5, 21.99, -1.5) );//1
    pantalla8.vertices.push( new THREE.Vector3( 47.5, 21.99, -1.5 ));//2
    pantalla8.vertices.push( new THREE.Vector3( 43.5, 21.99, -3.5) );//5
    pantalla8.vertices.push( new THREE.Vector3( 47.5, 21.99, -3.5 ));//6

    pantalla8.faces.push(new THREE.Face3( 2,0,1 ) );
    pantalla8.faces.push(new THREE.Face3( 1,0,2 ) );
    pantalla8.faces.push(new THREE.Face3( 3,2,1 ) );
    pantalla8.faces.push(new THREE.Face3( 1,2,3 ) );

    var pant8 = new THREE.Mesh (pantalla8, materiavent); // Crea el objeto


    // monitor9
    
    var monitor9 = new THREE.Geometry();
    monitor9.vertices.push( new THREE.Vector3( 51, 23, -1) );//0
    monitor9.vertices.push( new THREE.Vector3( 51, 22, -1) );//1
    monitor9.vertices.push( new THREE.Vector3( 56, 22, -1 ));//2
    monitor9.vertices.push( new THREE.Vector3( 56, 23, -1 ));//3

    monitor9.vertices.push( new THREE.Vector3( 51, 23, -4) );//4
    monitor9.vertices.push( new THREE.Vector3( 51, 22, -4) );//5
    monitor9.vertices.push( new THREE.Vector3( 56, 22, -4 ));//6
    monitor9.vertices.push( new THREE.Vector3( 56, 23, -4 ));//7

    monitor9.faces.push(new THREE.Face3( 1,0,3 ) );
    monitor9.faces.push(new THREE.Face3( 3,0,1 ) );
    monitor9.faces.push(new THREE.Face3( 2,1,3 ) );
    monitor9.faces.push(new THREE.Face3( 3,1,2 ) );

    monitor9.faces.push(new THREE.Face3( 0,4,7 ) );
    monitor9.faces.push(new THREE.Face3( 7,4,0 ) );
    monitor9.faces.push(new THREE.Face3( 3,0,7 ) );
    monitor9.faces.push(new THREE.Face3( 7,0,3 ) );

    monitor9.faces.push(new THREE.Face3( 1,5,4 ) );
    monitor9.faces.push(new THREE.Face3( 4,5,1 ) );
    monitor9.faces.push(new THREE.Face3( 0,1,4 ) );
    monitor9.faces.push(new THREE.Face3( 4,1,0 ) );

    monitor9.faces.push(new THREE.Face3( 5,1,2 ) );
    monitor9.faces.push(new THREE.Face3( 2,1,5 ) );
    monitor9.faces.push(new THREE.Face3( 6,5,2 ) );
    monitor9.faces.push(new THREE.Face3( 2,5,6 ) );

    monitor9.faces.push(new THREE.Face3( 2,6,7 ) );
    monitor9.faces.push(new THREE.Face3( 7,6,2 ) );
    monitor9.faces.push(new THREE.Face3( 3,2,7 ) );
    monitor9.faces.push(new THREE.Face3( 7,2,3 ) );

    var monit9 = new THREE.Mesh (monitor9, materialmonitor); // Crea el objeto

    var pantalla9 = new THREE.Geometry();
    
    pantalla9.vertices.push( new THREE.Vector3( 51.5, 21.99, -1.5) );//1
    pantalla9.vertices.push( new THREE.Vector3( 55.5, 21.99, -1.5 ));//2
    pantalla9.vertices.push( new THREE.Vector3( 51.5, 21.99, -3.5) );//5
    pantalla9.vertices.push( new THREE.Vector3( 55.5, 21.99, -3.5 ));//6

    pantalla9.faces.push(new THREE.Face3( 2,0,1 ) );
    pantalla9.faces.push(new THREE.Face3( 1,0,2 ) );
    pantalla9.faces.push(new THREE.Face3( 3,2,1 ) );
    pantalla9.faces.push(new THREE.Face3( 1,2,3 ) );

    var pant9 = new THREE.Mesh (pantalla9, materiavent); // Crea el objeto

    // monitor10
    
    var monitor10 = new THREE.Geometry();
    monitor10.vertices.push( new THREE.Vector3( 59, 23, -1) );//0
    monitor10.vertices.push( new THREE.Vector3( 59, 22, -1) );//1
    monitor10.vertices.push( new THREE.Vector3( 64, 22, -1 ));//2
    monitor10.vertices.push( new THREE.Vector3( 64, 23, -1 ));//3

    monitor10.vertices.push( new THREE.Vector3( 59, 23, -4) );//4
    monitor10.vertices.push( new THREE.Vector3( 59, 22, -4) );//5
    monitor10.vertices.push( new THREE.Vector3( 64, 22, -4 ));//6
    monitor10.vertices.push( new THREE.Vector3( 64, 23, -4 ));//7

    monitor10.faces.push(new THREE.Face3( 1,0,3 ) );
    monitor10.faces.push(new THREE.Face3( 3,0,1 ) );
    monitor10.faces.push(new THREE.Face3( 2,1,3 ) );
    monitor10.faces.push(new THREE.Face3( 3,1,2 ) );

    monitor10.faces.push(new THREE.Face3( 0,4,7 ) );
    monitor10.faces.push(new THREE.Face3( 7,4,0 ) );
    monitor10.faces.push(new THREE.Face3( 3,0,7 ) );
    monitor10.faces.push(new THREE.Face3( 7,0,3 ) );

    monitor10.faces.push(new THREE.Face3( 1,5,4 ) );
    monitor10.faces.push(new THREE.Face3( 4,5,1 ) );
    monitor10.faces.push(new THREE.Face3( 0,1,4 ) );
    monitor10.faces.push(new THREE.Face3( 4,1,0 ) );

    monitor10.faces.push(new THREE.Face3( 5,1,2 ) );
    monitor10.faces.push(new THREE.Face3( 2,1,5 ) );
    monitor10.faces.push(new THREE.Face3( 6,5,2 ) );
    monitor10.faces.push(new THREE.Face3( 2,5,6 ) );

    monitor10.faces.push(new THREE.Face3( 2,6,7 ) );
    monitor10.faces.push(new THREE.Face3( 7,6,2 ) );
    monitor10.faces.push(new THREE.Face3( 3,2,7 ) );
    monitor10.faces.push(new THREE.Face3( 7,2,3 ) );

    var monit10= new THREE.Mesh (monitor10, materialmonitor); // Crea el objeto

    var pantalla10 = new THREE.Geometry();
    
    pantalla10.vertices.push( new THREE.Vector3( 59.5, 21.99, -1.5) );//1
    pantalla10.vertices.push( new THREE.Vector3( 63.5, 21.99, -1.5 ));//2
    pantalla10.vertices.push( new THREE.Vector3( 59.5, 21.99, -3.5) );//5
    pantalla10.vertices.push( new THREE.Vector3( 63.5, 21.99, -3.5 ));//6

    pantalla10.faces.push(new THREE.Face3( 2,0,1 ) );
    pantalla10.faces.push(new THREE.Face3( 1,0,2 ) );
    pantalla10.faces.push(new THREE.Face3( 3,2,1 ) );
    pantalla10.faces.push(new THREE.Face3( 1,2,3 ) );

    var pant10 = new THREE.Mesh (pantalla10, materiavent); // Crea el objeto


    // cpu1
    
    var cpu1 = new THREE.Geometry();
    cpu1.vertices.push( new THREE.Vector3( 26.5, -23, -7) );//0
    cpu1.vertices.push( new THREE.Vector3( 26.5, -20, -7) );//1
    cpu1.vertices.push( new THREE.Vector3( 28.5, -20, -7 ));//2
    cpu1.vertices.push( new THREE.Vector3( 28.5, -23, -7 ));//3

    cpu1.vertices.push( new THREE.Vector3( 26.5, -23, -10) );//4
    cpu1.vertices.push( new THREE.Vector3( 26.5, -20, -10) );//5
    cpu1.vertices.push( new THREE.Vector3( 28.5, -20, -10 ));//6
    cpu1.vertices.push( new THREE.Vector3( 28.5, -23, -10 ));//7

    cpu1.faces.push(new THREE.Face3( 1,0,3 ) );
    cpu1.faces.push(new THREE.Face3( 3,0,1 ) );
    cpu1.faces.push(new THREE.Face3( 2,1,3 ) );
    cpu1.faces.push(new THREE.Face3( 3,1,2 ) );

    cpu1.faces.push(new THREE.Face3( 0,4,7 ) );
    cpu1.faces.push(new THREE.Face3( 7,4,0 ) );
    cpu1.faces.push(new THREE.Face3( 3,0,7 ) );
    cpu1.faces.push(new THREE.Face3( 7,0,3 ) );

    cpu1.faces.push(new THREE.Face3( 1,5,4 ) );
    cpu1.faces.push(new THREE.Face3( 4,5,1 ) );
    cpu1.faces.push(new THREE.Face3( 0,1,4 ) );
    cpu1.faces.push(new THREE.Face3( 4,1,0 ) );

    cpu1.faces.push(new THREE.Face3( 5,1,2 ) );
    cpu1.faces.push(new THREE.Face3( 2,1,5 ) );
    cpu1.faces.push(new THREE.Face3( 6,5,2 ) );
    cpu1.faces.push(new THREE.Face3( 2,5,6 ) );

    cpu1.faces.push(new THREE.Face3( 2,6,7 ) );
    cpu1.faces.push(new THREE.Face3( 7,6,2 ) );
    cpu1.faces.push(new THREE.Face3( 3,2,7 ) );
    cpu1.faces.push(new THREE.Face3( 7,2,3 ) );

    var materialcpu = new THREE.MeshBasicMaterial( { color: 0x000000 } ); // e

    var compu1 = new THREE.Mesh (cpu1, materialcpu); // Crea el objeto


    // cpu2
    
    var cpu2 = new THREE.Geometry();
    cpu2.vertices.push( new THREE.Vector3( 34.5, -23, -7) );//0
    cpu2.vertices.push( new THREE.Vector3( 34.5, -20, -7) );//1
    cpu2.vertices.push( new THREE.Vector3( 36.5, -20, -7 ));//2
    cpu2.vertices.push( new THREE.Vector3( 36.5, -23, -7 ));//3

    cpu2.vertices.push( new THREE.Vector3( 34.5, -23, -10) );//4
    cpu2.vertices.push( new THREE.Vector3( 34.5, -20, -10) );//5
    cpu2.vertices.push( new THREE.Vector3( 36.5, -20, -10 ));//6
    cpu2.vertices.push( new THREE.Vector3( 36.5, -23, -10 ));//7

    cpu2.faces.push(new THREE.Face3( 1,0,3 ) );
    cpu2.faces.push(new THREE.Face3( 3,0,1 ) );
    cpu2.faces.push(new THREE.Face3( 2,1,3 ) );
    cpu2.faces.push(new THREE.Face3( 3,1,2 ) );

    cpu2.faces.push(new THREE.Face3( 0,4,7 ) );
    cpu2.faces.push(new THREE.Face3( 7,4,0 ) );
    cpu2.faces.push(new THREE.Face3( 3,0,7 ) );
    cpu2.faces.push(new THREE.Face3( 7,0,3 ) );

    cpu2.faces.push(new THREE.Face3( 1,5,4 ) );
    cpu2.faces.push(new THREE.Face3( 4,5,1 ) );
    cpu2.faces.push(new THREE.Face3( 0,1,4 ) );
    cpu2.faces.push(new THREE.Face3( 4,1,0 ) );

    cpu2.faces.push(new THREE.Face3( 5,1,2 ) );
    cpu2.faces.push(new THREE.Face3( 2,1,5 ) );
    cpu2.faces.push(new THREE.Face3( 6,5,2 ) );
    cpu2.faces.push(new THREE.Face3( 2,5,6 ) );

    cpu2.faces.push(new THREE.Face3( 2,6,7 ) );
    cpu2.faces.push(new THREE.Face3( 7,6,2 ) );
    cpu2.faces.push(new THREE.Face3( 3,2,7 ) );
    cpu2.faces.push(new THREE.Face3( 7,2,3 ) );


    var compu2 = new THREE.Mesh (cpu2, materialcpu); // Crea el objeto


    // cpu3
    
    var cpu3 = new THREE.Geometry();
    cpu3.vertices.push( new THREE.Vector3( 42.5, -23, -7) );//0
    cpu3.vertices.push( new THREE.Vector3( 42.5, -20, -7) );//1
    cpu3.vertices.push( new THREE.Vector3( 44.5, -20, -7 ));//2
    cpu3.vertices.push( new THREE.Vector3( 44.5, -23, -7 ));//3

    cpu3.vertices.push( new THREE.Vector3( 42.5, -23, -10) );//4
    cpu3.vertices.push( new THREE.Vector3( 42.5, -20, -10) );//5
    cpu3.vertices.push( new THREE.Vector3( 44.5, -20, -10 ));//6
    cpu3.vertices.push( new THREE.Vector3( 44.5, -23, -10 ));//7

    cpu3.faces.push(new THREE.Face3( 1,0,3 ) );
    cpu3.faces.push(new THREE.Face3( 3,0,1 ) );
    cpu3.faces.push(new THREE.Face3( 2,1,3 ) );
    cpu3.faces.push(new THREE.Face3( 3,1,2 ) );

    cpu3.faces.push(new THREE.Face3( 0,4,7 ) );
    cpu3.faces.push(new THREE.Face3( 7,4,0 ) );
    cpu3.faces.push(new THREE.Face3( 3,0,7 ) );
    cpu3.faces.push(new THREE.Face3( 7,0,3 ) );

    cpu3.faces.push(new THREE.Face3( 1,5,4 ) );
    cpu3.faces.push(new THREE.Face3( 4,5,1 ) );
    cpu3.faces.push(new THREE.Face3( 0,1,4 ) );
    cpu3.faces.push(new THREE.Face3( 4,1,0 ) );

    cpu3.faces.push(new THREE.Face3( 5,1,2 ) );
    cpu3.faces.push(new THREE.Face3( 2,1,5 ) );
    cpu3.faces.push(new THREE.Face3( 6,5,2 ) );
    cpu3.faces.push(new THREE.Face3( 2,5,6 ) );

    cpu3.faces.push(new THREE.Face3( 2,6,7 ) );
    cpu3.faces.push(new THREE.Face3( 7,6,2 ) );
    cpu3.faces.push(new THREE.Face3( 3,2,7 ) );
    cpu3.faces.push(new THREE.Face3( 7,2,3 ) );


    var compu3 = new THREE.Mesh (cpu3, materialcpu); // Crea el objeto


    // cpu4
    
    var cpu4 = new THREE.Geometry();
    cpu4.vertices.push( new THREE.Vector3( 50.5, -23, -7) );//0
    cpu4.vertices.push( new THREE.Vector3( 50.5, -20, -7) );//1
    cpu4.vertices.push( new THREE.Vector3( 52.5, -20, -7 ));//2
    cpu4.vertices.push( new THREE.Vector3( 52.5, -23, -7 ));//3

    cpu4.vertices.push( new THREE.Vector3( 50.5, -23, -10) );//4
    cpu4.vertices.push( new THREE.Vector3( 50.5, -20, -10) );//5
    cpu4.vertices.push( new THREE.Vector3( 52.5, -20, -10 ));//6
    cpu4.vertices.push( new THREE.Vector3( 52.5, -23, -10 ));//7

    cpu4.faces.push(new THREE.Face3( 1,0,3 ) );
    cpu4.faces.push(new THREE.Face3( 3,0,1 ) );
    cpu4.faces.push(new THREE.Face3( 2,1,3 ) );
    cpu4.faces.push(new THREE.Face3( 3,1,2 ) );

    cpu4.faces.push(new THREE.Face3( 0,4,7 ) );
    cpu4.faces.push(new THREE.Face3( 7,4,0 ) );
    cpu4.faces.push(new THREE.Face3( 3,0,7 ) );
    cpu4.faces.push(new THREE.Face3( 7,0,3 ) );

    cpu4.faces.push(new THREE.Face3( 1,5,4 ) );
    cpu4.faces.push(new THREE.Face3( 4,5,1 ) );
    cpu4.faces.push(new THREE.Face3( 0,1,4 ) );
    cpu4.faces.push(new THREE.Face3( 4,1,0 ) );

    cpu4.faces.push(new THREE.Face3( 5,1,2 ) );
    cpu4.faces.push(new THREE.Face3( 2,1,5 ) );
    cpu4.faces.push(new THREE.Face3( 6,5,2 ) );
    cpu4.faces.push(new THREE.Face3( 2,5,6 ) );

    cpu4.faces.push(new THREE.Face3( 2,6,7 ) );
    cpu4.faces.push(new THREE.Face3( 7,6,2 ) );
    cpu4.faces.push(new THREE.Face3( 3,2,7 ) );
    cpu4.faces.push(new THREE.Face3( 7,2,3 ) );


    var compu4 = new THREE.Mesh (cpu4, materialcpu); // Crea el objeto


    // cpu5
    
    var cpu5 = new THREE.Geometry();
    cpu5.vertices.push( new THREE.Vector3( 58.5, -23, -7) );//0
    cpu5.vertices.push( new THREE.Vector3( 58.5, -20, -7) );//1
    cpu5.vertices.push( new THREE.Vector3( 60.5, -20, -7 ));//2
    cpu5.vertices.push( new THREE.Vector3( 60.5, -23, -7 ));//3

    cpu5.vertices.push( new THREE.Vector3( 58.5, -23, -10) );//4
    cpu5.vertices.push( new THREE.Vector3( 58.5, -20, -10) );//5
    cpu5.vertices.push( new THREE.Vector3( 60.5, -20, -10 ));//6
    cpu5.vertices.push( new THREE.Vector3( 60.5, -23, -10 ));//7

    cpu5.faces.push(new THREE.Face3( 1,0,3 ) );
    cpu5.faces.push(new THREE.Face3( 3,0,1 ) );
    cpu5.faces.push(new THREE.Face3( 2,1,3 ) );
    cpu5.faces.push(new THREE.Face3( 3,1,2 ) );

    cpu5.faces.push(new THREE.Face3( 0,4,7 ) );
    cpu5.faces.push(new THREE.Face3( 7,4,0 ) );
    cpu5.faces.push(new THREE.Face3( 3,0,7 ) );
    cpu5.faces.push(new THREE.Face3( 7,0,3 ) );

    cpu5.faces.push(new THREE.Face3( 1,5,4 ) );
    cpu5.faces.push(new THREE.Face3( 4,5,1 ) );
    cpu5.faces.push(new THREE.Face3( 0,1,4 ) );
    cpu5.faces.push(new THREE.Face3( 4,1,0 ) );

    cpu5.faces.push(new THREE.Face3( 5,1,2 ) );
    cpu5.faces.push(new THREE.Face3( 2,1,5 ) );
    cpu5.faces.push(new THREE.Face3( 6,5,2 ) );
    cpu5.faces.push(new THREE.Face3( 2,5,6 ) );

    cpu5.faces.push(new THREE.Face3( 2,6,7 ) );
    cpu5.faces.push(new THREE.Face3( 7,6,2 ) );
    cpu5.faces.push(new THREE.Face3( 3,2,7 ) );
    cpu5.faces.push(new THREE.Face3( 7,2,3 ) );


    var compu5 = new THREE.Mesh (cpu5, materialcpu); // Crea el objeto


    // cpu6
    
    var cpu6 = new THREE.Geometry();
    cpu6.vertices.push( new THREE.Vector3( 30.5, 20, -7) );//0
    cpu6.vertices.push( new THREE.Vector3( 30.5, 23, -7) );//1
    cpu6.vertices.push( new THREE.Vector3( 32.5, 23, -7 ));//2
    cpu6.vertices.push( new THREE.Vector3( 32.5, 20, -7 ));//3

    cpu6.vertices.push( new THREE.Vector3( 30.5, 20, -10) );//4
    cpu6.vertices.push( new THREE.Vector3( 30.5, 23, -10) );//5
    cpu6.vertices.push( new THREE.Vector3( 32.5, 23, -10 ));//6
    cpu6.vertices.push( new THREE.Vector3( 32.5, 20, -10 ));//7

    cpu6.faces.push(new THREE.Face3( 1,0,3 ) );
    cpu6.faces.push(new THREE.Face3( 3,0,1 ) );
    cpu6.faces.push(new THREE.Face3( 2,1,3 ) );
    cpu6.faces.push(new THREE.Face3( 3,1,2 ) );

    cpu6.faces.push(new THREE.Face3( 0,4,7 ) );
    cpu6.faces.push(new THREE.Face3( 7,4,0 ) );
    cpu6.faces.push(new THREE.Face3( 3,0,7 ) );
    cpu6.faces.push(new THREE.Face3( 7,0,3 ) );

    cpu6.faces.push(new THREE.Face3( 1,5,4 ) );
    cpu6.faces.push(new THREE.Face3( 4,5,1 ) );
    cpu6.faces.push(new THREE.Face3( 0,1,4 ) );
    cpu6.faces.push(new THREE.Face3( 4,1,0 ) );

    cpu6.faces.push(new THREE.Face3( 5,1,2 ) );
    cpu6.faces.push(new THREE.Face3( 2,1,5 ) );
    cpu6.faces.push(new THREE.Face3( 6,5,2 ) );
    cpu6.faces.push(new THREE.Face3( 2,5,6 ) );

    cpu6.faces.push(new THREE.Face3( 2,6,7 ) );
    cpu6.faces.push(new THREE.Face3( 7,6,2 ) );
    cpu6.faces.push(new THREE.Face3( 3,2,7 ) );
    cpu6.faces.push(new THREE.Face3( 7,2,3 ) );


    var compu6 = new THREE.Mesh (cpu6, materialcpu); // Crea el objeto


    // cpu7
    
    var cpu7 = new THREE.Geometry();
    cpu7.vertices.push( new THREE.Vector3( 38.5, 20, -7) );//0
    cpu7.vertices.push( new THREE.Vector3( 38.5, 23, -7) );//1
    cpu7.vertices.push( new THREE.Vector3( 40.5, 23, -7 ));//2
    cpu7.vertices.push( new THREE.Vector3( 40.5, 20, -7 ));//3

    cpu7.vertices.push( new THREE.Vector3( 38.5, 20, -10) );//4
    cpu7.vertices.push( new THREE.Vector3( 38.5, 23, -10) );//5
    cpu7.vertices.push( new THREE.Vector3( 40.5, 23, -10 ));//6
    cpu7.vertices.push( new THREE.Vector3( 40.5, 20, -10 ));//7

    cpu7.faces.push(new THREE.Face3( 1,0,3 ) );
    cpu7.faces.push(new THREE.Face3( 3,0,1 ) );
    cpu7.faces.push(new THREE.Face3( 2,1,3 ) );
    cpu7.faces.push(new THREE.Face3( 3,1,2 ) );

    cpu7.faces.push(new THREE.Face3( 0,4,7 ) );
    cpu7.faces.push(new THREE.Face3( 7,4,0 ) );
    cpu7.faces.push(new THREE.Face3( 3,0,7 ) );
    cpu7.faces.push(new THREE.Face3( 7,0,3 ) );

    cpu7.faces.push(new THREE.Face3( 1,5,4 ) );
    cpu7.faces.push(new THREE.Face3( 4,5,1 ) );
    cpu7.faces.push(new THREE.Face3( 0,1,4 ) );
    cpu7.faces.push(new THREE.Face3( 4,1,0 ) );

    cpu7.faces.push(new THREE.Face3( 5,1,2 ) );
    cpu7.faces.push(new THREE.Face3( 2,1,5 ) );
    cpu7.faces.push(new THREE.Face3( 6,5,2 ) );
    cpu7.faces.push(new THREE.Face3( 2,5,6 ) );

    cpu7.faces.push(new THREE.Face3( 2,6,7 ) );
    cpu7.faces.push(new THREE.Face3( 7,6,2 ) );
    cpu7.faces.push(new THREE.Face3( 3,2,7 ) );
    cpu7.faces.push(new THREE.Face3( 7,2,3 ) );


    var compu7 = new THREE.Mesh (cpu7, materialcpu); // Crea el objeto

    // cpu8
    
    var cpu8 = new THREE.Geometry();
    cpu8.vertices.push( new THREE.Vector3( 46.5, 20, -7) );//0
    cpu8.vertices.push( new THREE.Vector3( 46.5, 23, -7) );//1
    cpu8.vertices.push( new THREE.Vector3( 48.5, 23, -7 ));//2
    cpu8.vertices.push( new THREE.Vector3( 48.5, 20, -7 ));//3

    cpu8.vertices.push( new THREE.Vector3( 46.5, 20, -10) );//4
    cpu8.vertices.push( new THREE.Vector3( 46.5, 23, -10) );//5
    cpu8.vertices.push( new THREE.Vector3( 48.5, 23, -10 ));//6
    cpu8.vertices.push( new THREE.Vector3( 48.5, 20, -10 ));//7

    cpu8.faces.push(new THREE.Face3( 1,0,3 ) );
    cpu8.faces.push(new THREE.Face3( 3,0,1 ) );
    cpu8.faces.push(new THREE.Face3( 2,1,3 ) );
    cpu8.faces.push(new THREE.Face3( 3,1,2 ) );

    cpu8.faces.push(new THREE.Face3( 0,4,7 ) );
    cpu8.faces.push(new THREE.Face3( 7,4,0 ) );
    cpu8.faces.push(new THREE.Face3( 3,0,7 ) );
    cpu8.faces.push(new THREE.Face3( 7,0,3 ) );

    cpu8.faces.push(new THREE.Face3( 1,5,4 ) );
    cpu8.faces.push(new THREE.Face3( 4,5,1 ) );
    cpu8.faces.push(new THREE.Face3( 0,1,4 ) );
    cpu8.faces.push(new THREE.Face3( 4,1,0 ) );

    cpu8.faces.push(new THREE.Face3( 5,1,2 ) );
    cpu8.faces.push(new THREE.Face3( 2,1,5 ) );
    cpu8.faces.push(new THREE.Face3( 6,5,2 ) );
    cpu8.faces.push(new THREE.Face3( 2,5,6 ) );

    cpu8.faces.push(new THREE.Face3( 2,6,7 ) );
    cpu8.faces.push(new THREE.Face3( 7,6,2 ) );
    cpu8.faces.push(new THREE.Face3( 3,2,7 ) );
    cpu8.faces.push(new THREE.Face3( 7,2,3 ) );


    var compu8 = new THREE.Mesh (cpu8, materialcpu); // Crea el objeto


    // cpu9
    
    var cpu9 = new THREE.Geometry();
    cpu9.vertices.push( new THREE.Vector3( 54.5, 20, -7) );//0
    cpu9.vertices.push( new THREE.Vector3( 54.5, 23, -7) );//1
    cpu9.vertices.push( new THREE.Vector3( 56.5, 23, -7 ));//2
    cpu9.vertices.push( new THREE.Vector3( 56.5, 20, -7 ));//3

    cpu9.vertices.push( new THREE.Vector3( 54.5, 20, -10) );//4
    cpu9.vertices.push( new THREE.Vector3( 54.5, 23, -10) );//5
    cpu9.vertices.push( new THREE.Vector3( 56.5, 23, -10 ));//6
    cpu9.vertices.push( new THREE.Vector3( 56.5, 20, -10 ));//7

    cpu9.faces.push(new THREE.Face3( 1,0,3 ) );
    cpu9.faces.push(new THREE.Face3( 3,0,1 ) );
    cpu9.faces.push(new THREE.Face3( 2,1,3 ) );
    cpu9.faces.push(new THREE.Face3( 3,1,2 ) );

    cpu9.faces.push(new THREE.Face3( 0,4,7 ) );
    cpu9.faces.push(new THREE.Face3( 7,4,0 ) );
    cpu9.faces.push(new THREE.Face3( 3,0,7 ) );
    cpu9.faces.push(new THREE.Face3( 7,0,3 ) );

    cpu9.faces.push(new THREE.Face3( 1,5,4 ) );
    cpu9.faces.push(new THREE.Face3( 4,5,1 ) );
    cpu9.faces.push(new THREE.Face3( 0,1,4 ) );
    cpu9.faces.push(new THREE.Face3( 4,1,0 ) );

    cpu9.faces.push(new THREE.Face3( 5,1,2 ) );
    cpu9.faces.push(new THREE.Face3( 2,1,5 ) );
    cpu9.faces.push(new THREE.Face3( 6,5,2 ) );
    cpu9.faces.push(new THREE.Face3( 2,5,6 ) );

    cpu9.faces.push(new THREE.Face3( 2,6,7 ) );
    cpu9.faces.push(new THREE.Face3( 7,6,2 ) );
    cpu9.faces.push(new THREE.Face3( 3,2,7 ) );
    cpu9.faces.push(new THREE.Face3( 7,2,3 ) );


    var compu9 = new THREE.Mesh (cpu9, materialcpu); // Crea el objeto

    // cpu10
    
    var cpu10 = new THREE.Geometry();
    cpu10.vertices.push( new THREE.Vector3( 62.5, 20, -7) );//0
    cpu10.vertices.push( new THREE.Vector3( 62.5, 23, -7) );//1
    cpu10.vertices.push( new THREE.Vector3( 64.5, 23, -7 ));//2
    cpu10.vertices.push( new THREE.Vector3( 64.5, 20, -7 ));//3

    cpu10.vertices.push( new THREE.Vector3( 62.5, 20, -10) );//4
    cpu10.vertices.push( new THREE.Vector3( 62.5, 23, -10) );//5
    cpu10.vertices.push( new THREE.Vector3( 64.5, 23, -10 ));//6
    cpu10.vertices.push( new THREE.Vector3( 64.5, 20, -10 ));//7

    cpu10.faces.push(new THREE.Face3( 1,0,3 ) );
    cpu10.faces.push(new THREE.Face3( 3,0,1 ) );
    cpu10.faces.push(new THREE.Face3( 2,1,3 ) );
    cpu10.faces.push(new THREE.Face3( 3,1,2 ) );

    cpu10.faces.push(new THREE.Face3( 0,4,7 ) );
    cpu10.faces.push(new THREE.Face3( 7,4,0 ) );
    cpu10.faces.push(new THREE.Face3( 3,0,7 ) );
    cpu10.faces.push(new THREE.Face3( 7,0,3 ) );

    cpu10.faces.push(new THREE.Face3( 1,5,4 ) );
    cpu10.faces.push(new THREE.Face3( 4,5,1 ) );
    cpu10.faces.push(new THREE.Face3( 0,1,4 ) );
    cpu10.faces.push(new THREE.Face3( 4,1,0 ) );

    cpu10.faces.push(new THREE.Face3( 5,1,2 ) );
    cpu10.faces.push(new THREE.Face3( 2,1,5 ) );
    cpu10.faces.push(new THREE.Face3( 6,5,2 ) );
    cpu10.faces.push(new THREE.Face3( 2,5,6 ) );

    cpu10.faces.push(new THREE.Face3( 2,6,7 ) );
    cpu10.faces.push(new THREE.Face3( 7,6,2 ) );
    cpu10.faces.push(new THREE.Face3( 3,2,7 ) );
    cpu10.faces.push(new THREE.Face3( 7,2,3 ) );


    var compu10 = new THREE.Mesh (cpu10, materialcpu); // Crea el objeto

    // mesa1
    
    var mesa1 = new THREE.Geometry();
    mesa1.vertices.push( new THREE.Vector3( 26, -24, -5) );//0
    mesa1.vertices.push( new THREE.Vector3( 26, -20, -5) );//1
    mesa1.vertices.push( new THREE.Vector3( 33, -20, -5 ));//2
    mesa1.vertices.push( new THREE.Vector3( 33, -24, -5 ));//3

    mesa1.vertices.push( new THREE.Vector3( 26, -24, -10) );//4
    mesa1.vertices.push( new THREE.Vector3( 26, -20, -10) );//5
    mesa1.vertices.push( new THREE.Vector3( 33, -20, -10 ));//6
    mesa1.vertices.push( new THREE.Vector3( 33, -24, -10 ));//7

    mesa1.vertices.push( new THREE.Vector3( 26, -22, -6) );//8
    mesa1.vertices.push( new THREE.Vector3( 26, -19, -6) );//9
    mesa1.vertices.push( new THREE.Vector3( 33, -19, -6 ));//10
    mesa1.vertices.push( new THREE.Vector3( 33, -22, -6 ));//11
    
    mesa1.faces.push(new THREE.Face3( 1,0,3 ) );
    mesa1.faces.push(new THREE.Face3( 3,0,1 ) );
    mesa1.faces.push(new THREE.Face3( 2,1,3 ) );
    mesa1.faces.push(new THREE.Face3( 3,1,2 ) );

    mesa1.faces.push(new THREE.Face3( 9,8,11 ) );
    mesa1.faces.push(new THREE.Face3( 11,8,9 ) );
    mesa1.faces.push(new THREE.Face3( 10,9,11 ) );
    mesa1.faces.push(new THREE.Face3( 11,9,10 ) );

    mesa1.faces.push(new THREE.Face3( 1,5,4 ) );
    mesa1.faces.push(new THREE.Face3( 4,5,1 ) );
    mesa1.faces.push(new THREE.Face3( 0,1,4 ) );
    mesa1.faces.push(new THREE.Face3( 4,1,0 ) );

    mesa1.faces.push(new THREE.Face3( 2,6,7 ) );
    mesa1.faces.push(new THREE.Face3( 7,6,2 ) );
    mesa1.faces.push(new THREE.Face3( 3,2,7 ) );
    mesa1.faces.push(new THREE.Face3( 7,2,3 ) );

    var materialmesa = new THREE.MeshBasicMaterial( { color: 0x3b0b0b } ); // e

    var mesaa1 = new THREE.Mesh (mesa1, materialmesa); // Crea el objeto

    var lineamesa1 = new THREE.Geometry();
    lineamesa1.vertices.push( new THREE.Vector3( 26, -24, -5) );//0
    lineamesa1.vertices.push( new THREE.Vector3( 26, -20, -5) );//1
    lineamesa1.vertices.push( new THREE.Vector3( 33, -20, -5 ));//2
    lineamesa1.vertices.push( new THREE.Vector3( 33, -24, -5 ));//3
    lineamesa1.vertices.push( new THREE.Vector3( 26, -24, -5) );//0
    var lmesa1 = new THREE.Line( lineamesa1, materialcpu );

     // mesa2
    
    var mesa2 = new THREE.Geometry();
    mesa2.vertices.push( new THREE.Vector3( 34, -24, -5) );//0
    mesa2.vertices.push( new THREE.Vector3( 34, -20, -5) );//1
    mesa2.vertices.push( new THREE.Vector3( 41, -20, -5 ));//2
    mesa2.vertices.push( new THREE.Vector3( 41, -24, -5 ));//3

    mesa2.vertices.push( new THREE.Vector3( 34, -24, -10) );//4
    mesa2.vertices.push( new THREE.Vector3( 34, -20, -10) );//5
    mesa2.vertices.push( new THREE.Vector3( 41, -20, -10 ));//6
    mesa2.vertices.push( new THREE.Vector3( 41, -24, -10 ));//7

    mesa2.vertices.push( new THREE.Vector3( 34, -22, -6) );//8
    mesa2.vertices.push( new THREE.Vector3( 34, -19, -6) );//9
    mesa2.vertices.push( new THREE.Vector3( 41, -19, -6 ));//10
    mesa2.vertices.push( new THREE.Vector3( 41, -22, -6 ));//11
    
    mesa2.faces.push(new THREE.Face3( 1,0,3 ) );
    mesa2.faces.push(new THREE.Face3( 3,0,1 ) );
    mesa2.faces.push(new THREE.Face3( 2,1,3 ) );
    mesa2.faces.push(new THREE.Face3( 3,1,2 ) );

    mesa2.faces.push(new THREE.Face3( 9,8,11 ) );
    mesa2.faces.push(new THREE.Face3( 11,8,9 ) );
    mesa2.faces.push(new THREE.Face3( 10,9,11 ) );
    mesa2.faces.push(new THREE.Face3( 11,9,10 ) );

    mesa2.faces.push(new THREE.Face3( 1,5,4 ) );
    mesa2.faces.push(new THREE.Face3( 4,5,1 ) );
    mesa2.faces.push(new THREE.Face3( 0,1,4 ) );
    mesa2.faces.push(new THREE.Face3( 4,1,0 ) );

    mesa2.faces.push(new THREE.Face3( 2,6,7 ) );
    mesa2.faces.push(new THREE.Face3( 7,6,2 ) );
    mesa2.faces.push(new THREE.Face3( 3,2,7 ) );
    mesa2.faces.push(new THREE.Face3( 7,2,3 ) );

    var mesaa2 = new THREE.Mesh (mesa2, materialmesa); // Crea el objeto

    var lineamesa2 = new THREE.Geometry();
    lineamesa2.vertices.push( new THREE.Vector3( 34, -24, -5) );//0
    lineamesa2.vertices.push( new THREE.Vector3( 34, -20, -5) );//1
    lineamesa2.vertices.push( new THREE.Vector3( 41, -20, -5 ));//2
    lineamesa2.vertices.push( new THREE.Vector3( 41, -24, -5 ));//3
    lineamesa2.vertices.push( new THREE.Vector3( 34, -24, -5) );//0
    var lmesa2 = new THREE.Line( lineamesa2, materialcpu );

    // mesa3
    
    var mesa3 = new THREE.Geometry();
    mesa3.vertices.push( new THREE.Vector3( 42, -24, -5) );//0
    mesa3.vertices.push( new THREE.Vector3( 42, -20, -5) );//1
    mesa3.vertices.push( new THREE.Vector3( 49, -20, -5 ));//2
    mesa3.vertices.push( new THREE.Vector3( 49, -24, -5 ));//3

    mesa3.vertices.push( new THREE.Vector3( 42, -24, -10) );//4
    mesa3.vertices.push( new THREE.Vector3( 42, -20, -10) );//5
    mesa3.vertices.push( new THREE.Vector3( 49, -20, -10 ));//6
    mesa3.vertices.push( new THREE.Vector3( 49, -24, -10 ));//7

    mesa3.vertices.push( new THREE.Vector3( 42, -22, -6) );//8
    mesa3.vertices.push( new THREE.Vector3( 42, -19, -6) );//9
    mesa3.vertices.push( new THREE.Vector3( 49, -19, -6 ));//10
    mesa3.vertices.push( new THREE.Vector3( 49, -22, -6 ));//11
    
    mesa3.faces.push(new THREE.Face3( 1,0,3 ) );
    mesa3.faces.push(new THREE.Face3( 3,0,1 ) );
    mesa3.faces.push(new THREE.Face3( 2,1,3 ) );
    mesa3.faces.push(new THREE.Face3( 3,1,2 ) );

    mesa3.faces.push(new THREE.Face3( 9,8,11 ) );
    mesa3.faces.push(new THREE.Face3( 11,8,9 ) );
    mesa3.faces.push(new THREE.Face3( 10,9,11 ) );
    mesa3.faces.push(new THREE.Face3( 11,9,10 ) );

    mesa3.faces.push(new THREE.Face3( 1,5,4 ) );
    mesa3.faces.push(new THREE.Face3( 4,5,1 ) );
    mesa3.faces.push(new THREE.Face3( 0,1,4 ) );
    mesa3.faces.push(new THREE.Face3( 4,1,0 ) );

    mesa3.faces.push(new THREE.Face3( 2,6,7 ) );
    mesa3.faces.push(new THREE.Face3( 7,6,2 ) );
    mesa3.faces.push(new THREE.Face3( 3,2,7 ) );
    mesa3.faces.push(new THREE.Face3( 7,2,3 ) );

    var mesaa3 = new THREE.Mesh (mesa3, materialmesa); // Crea el objeto

    var lineamesa3 = new THREE.Geometry();
    lineamesa3.vertices.push( new THREE.Vector3( 42, -24, -5) );//0
    lineamesa3.vertices.push( new THREE.Vector3( 42, -20, -5) );//1
    lineamesa3.vertices.push( new THREE.Vector3( 49, -20, -5 ));//2
    lineamesa3.vertices.push( new THREE.Vector3( 49, -24, -5 ));//3
    lineamesa3.vertices.push( new THREE.Vector3( 42, -24, -5) );//0
    var lmesa3 = new THREE.Line( lineamesa3, materialcpu );

    // mesa4
    
    var mesa4 = new THREE.Geometry();
    mesa4.vertices.push( new THREE.Vector3( 50, -24, -5) );//0
    mesa4.vertices.push( new THREE.Vector3( 50, -20, -5) );//1
    mesa4.vertices.push( new THREE.Vector3( 57, -20, -5 ));//2
    mesa4.vertices.push( new THREE.Vector3( 57, -24, -5 ));//3

    mesa4.vertices.push( new THREE.Vector3( 50, -24, -10) );//4
    mesa4.vertices.push( new THREE.Vector3( 50, -20, -10) );//5
    mesa4.vertices.push( new THREE.Vector3( 57, -20, -10 ));//6
    mesa4.vertices.push( new THREE.Vector3( 57, -24, -10 ));//7

    mesa4.vertices.push( new THREE.Vector3( 50, -22, -6) );//8
    mesa4.vertices.push( new THREE.Vector3( 50, -19, -6) );//9
    mesa4.vertices.push( new THREE.Vector3( 57, -19, -6 ));//10
    mesa4.vertices.push( new THREE.Vector3( 57, -22, -6 ));//11
    
    mesa4.faces.push(new THREE.Face3( 1,0,3 ) );
    mesa4.faces.push(new THREE.Face3( 3,0,1 ) );
    mesa4.faces.push(new THREE.Face3( 2,1,3 ) );
    mesa4.faces.push(new THREE.Face3( 3,1,2 ) );

    mesa4.faces.push(new THREE.Face3( 9,8,11 ) );
    mesa4.faces.push(new THREE.Face3( 11,8,9 ) );
    mesa4.faces.push(new THREE.Face3( 10,9,11 ) );
    mesa4.faces.push(new THREE.Face3( 11,9,10 ) );

    mesa4.faces.push(new THREE.Face3( 1,5,4 ) );
    mesa4.faces.push(new THREE.Face3( 4,5,1 ) );
    mesa4.faces.push(new THREE.Face3( 0,1,4 ) );
    mesa4.faces.push(new THREE.Face3( 4,1,0 ) );

    mesa4.faces.push(new THREE.Face3( 2,6,7 ) );
    mesa4.faces.push(new THREE.Face3( 7,6,2 ) );
    mesa4.faces.push(new THREE.Face3( 3,2,7 ) );
    mesa4.faces.push(new THREE.Face3( 7,2,3 ) );

    var mesaa4 = new THREE.Mesh (mesa4, materialmesa); // Crea el objeto

    var lineamesa4 = new THREE.Geometry();
    lineamesa4.vertices.push( new THREE.Vector3( 50, -24, -5) );//0
    lineamesa4.vertices.push( new THREE.Vector3( 50, -20, -5) );//1
    lineamesa4.vertices.push( new THREE.Vector3( 57, -20, -5 ));//2
    lineamesa4.vertices.push( new THREE.Vector3( 57, -24, -5 ));//3
    lineamesa4.vertices.push( new THREE.Vector3( 50, -24, -5) );//0
    var lmesa4 = new THREE.Line( lineamesa4, materialcpu );

    // mesa5
    
    var mesa5 = new THREE.Geometry();
    mesa5.vertices.push( new THREE.Vector3( 58, -24, -5) );//0
    mesa5.vertices.push( new THREE.Vector3( 58, -20, -5) );//1
    mesa5.vertices.push( new THREE.Vector3( 65, -20, -5 ));//2
    mesa5.vertices.push( new THREE.Vector3( 65, -24, -5 ));//3

    mesa5.vertices.push( new THREE.Vector3( 58, -24, -10) );//4
    mesa5.vertices.push( new THREE.Vector3( 58, -20, -10) );//5
    mesa5.vertices.push( new THREE.Vector3( 65, -20, -10 ));//6
    mesa5.vertices.push( new THREE.Vector3( 65, -24, -10 ));//7

    mesa5.vertices.push( new THREE.Vector3( 58, -22, -6) );//8
    mesa5.vertices.push( new THREE.Vector3( 58, -19, -6) );//9
    mesa5.vertices.push( new THREE.Vector3( 65, -19, -6 ));//10
    mesa5.vertices.push( new THREE.Vector3( 65, -22, -6 ));//11
    
    mesa5.faces.push(new THREE.Face3( 1,0,3 ) );
    mesa5.faces.push(new THREE.Face3( 3,0,1 ) );
    mesa5.faces.push(new THREE.Face3( 2,1,3 ) );
    mesa5.faces.push(new THREE.Face3( 3,1,2 ) );

    mesa5.faces.push(new THREE.Face3( 9,8,11 ) );
    mesa5.faces.push(new THREE.Face3( 11,8,9 ) );
    mesa5.faces.push(new THREE.Face3( 10,9,11 ) );
    mesa5.faces.push(new THREE.Face3( 11,9,10 ) );

    mesa5.faces.push(new THREE.Face3( 1,5,4 ) );
    mesa5.faces.push(new THREE.Face3( 4,5,1 ) );
    mesa5.faces.push(new THREE.Face3( 0,1,4 ) );
    mesa5.faces.push(new THREE.Face3( 4,1,0 ) );

    mesa5.faces.push(new THREE.Face3( 2,6,7 ) );
    mesa5.faces.push(new THREE.Face3( 7,6,2 ) );
    mesa5.faces.push(new THREE.Face3( 3,2,7 ) );
    mesa5.faces.push(new THREE.Face3( 7,2,3 ) );

    var mesaa5 = new THREE.Mesh (mesa5, materialmesa); // Crea el objeto

    var lineamesa5 = new THREE.Geometry();
    lineamesa5.vertices.push( new THREE.Vector3( 58, -24, -5) );//0
    lineamesa5.vertices.push( new THREE.Vector3( 58, -20, -5) );//1
    lineamesa5.vertices.push( new THREE.Vector3( 65, -20, -5 ));//2
    lineamesa5.vertices.push( new THREE.Vector3( 65, -24, -5 ));//3
    lineamesa5.vertices.push( new THREE.Vector3( 58, -24, -5) );//0
    var lmesa5 = new THREE.Line( lineamesa5, materialcpu );

    // mesa6
    
    var mesa6 = new THREE.Geometry();
    mesa6.vertices.push( new THREE.Vector3( 26, 24, -5) );//0
    mesa6.vertices.push( new THREE.Vector3( 26, 20, -5) );//1
    mesa6.vertices.push( new THREE.Vector3( 33, 20, -5 ));//2
    mesa6.vertices.push( new THREE.Vector3( 33, 24, -5 ));//3

    mesa6.vertices.push( new THREE.Vector3( 26, 24, -10) );//4
    mesa6.vertices.push( new THREE.Vector3( 26, 20, -10) );//5
    mesa6.vertices.push( new THREE.Vector3( 33, 20, -10 ));//6
    mesa6.vertices.push( new THREE.Vector3( 33, 24, -10 ));//7

    mesa6.vertices.push( new THREE.Vector3( 26, 22, -6) );//8
    mesa6.vertices.push( new THREE.Vector3( 26, 19, -6) );//9
    mesa6.vertices.push( new THREE.Vector3( 33, 19, -6 ));//10
    mesa6.vertices.push( new THREE.Vector3( 33, 22, -6 ));//11
    
    mesa6.faces.push(new THREE.Face3( 1,0,3 ) );
    mesa6.faces.push(new THREE.Face3( 3,0,1 ) );
    mesa6.faces.push(new THREE.Face3( 2,1,3 ) );
    mesa6.faces.push(new THREE.Face3( 3,1,2 ) );

    mesa6.faces.push(new THREE.Face3( 9,8,11 ) );
    mesa6.faces.push(new THREE.Face3( 11,8,9 ) );
    mesa6.faces.push(new THREE.Face3( 10,9,11 ) );
    mesa6.faces.push(new THREE.Face3( 11,9,10 ) );

    mesa6.faces.push(new THREE.Face3( 1,5,4 ) );
    mesa6.faces.push(new THREE.Face3( 4,5,1 ) );
    mesa6.faces.push(new THREE.Face3( 0,1,4 ) );
    mesa6.faces.push(new THREE.Face3( 4,1,0 ) );

    mesa6.faces.push(new THREE.Face3( 2,6,7 ) );
    mesa6.faces.push(new THREE.Face3( 7,6,2 ) );
    mesa6.faces.push(new THREE.Face3( 3,2,7 ) );
    mesa6.faces.push(new THREE.Face3( 7,2,3 ) );

    var mesaa6 = new THREE.Mesh (mesa6, materialmesa); // Crea el objeto

    var lineamesa6 = new THREE.Geometry();
    lineamesa6.vertices.push( new THREE.Vector3( 26, 24, -5) );//0
    lineamesa6.vertices.push( new THREE.Vector3( 26, 20, -5) );//1
    lineamesa6.vertices.push( new THREE.Vector3( 33, 20, -5 ));//2
    lineamesa6.vertices.push( new THREE.Vector3( 33, 24, -5 ));//3
    lineamesa6.vertices.push( new THREE.Vector3( 26, 24, -5) );//0
    var lmesa6 = new THREE.Line( lineamesa6, materialcpu );

     // mesa7
    
    var mesa7 = new THREE.Geometry();
    mesa7.vertices.push( new THREE.Vector3( 34, 24, -5) );//0
    mesa7.vertices.push( new THREE.Vector3( 34, 20, -5) );//1
    mesa7.vertices.push( new THREE.Vector3( 41, 20, -5 ));//2
    mesa7.vertices.push( new THREE.Vector3( 41, 24, -5 ));//3

    mesa7.vertices.push( new THREE.Vector3( 34, 24, -10) );//4
    mesa7.vertices.push( new THREE.Vector3( 34, 20, -10) );//5
    mesa7.vertices.push( new THREE.Vector3( 41, 20, -10 ));//6
    mesa7.vertices.push( new THREE.Vector3( 41, 24, -10 ));//7

    mesa7.vertices.push( new THREE.Vector3( 34, 22, -6) );//8
    mesa7.vertices.push( new THREE.Vector3( 34, 19, -6) );//9
    mesa7.vertices.push( new THREE.Vector3( 41, 19, -6 ));//10
    mesa7.vertices.push( new THREE.Vector3( 41, 22, -6 ));//11
    
    mesa7.faces.push(new THREE.Face3( 1,0,3 ) );
    mesa7.faces.push(new THREE.Face3( 3,0,1 ) );
    mesa7.faces.push(new THREE.Face3( 2,1,3 ) );
    mesa7.faces.push(new THREE.Face3( 3,1,2 ) );

    mesa7.faces.push(new THREE.Face3( 9,8,11 ) );
    mesa7.faces.push(new THREE.Face3( 11,8,9 ) );
    mesa7.faces.push(new THREE.Face3( 10,9,11 ) );
    mesa7.faces.push(new THREE.Face3( 11,9,10 ) );

    mesa7.faces.push(new THREE.Face3( 1,5,4 ) );
    mesa7.faces.push(new THREE.Face3( 4,5,1 ) );
    mesa7.faces.push(new THREE.Face3( 0,1,4 ) );
    mesa7.faces.push(new THREE.Face3( 4,1,0 ) );

    mesa7.faces.push(new THREE.Face3( 2,6,7 ) );
    mesa7.faces.push(new THREE.Face3( 7,6,2 ) );
    mesa7.faces.push(new THREE.Face3( 3,2,7 ) );
    mesa7.faces.push(new THREE.Face3( 7,2,3 ) );

    var mesaa7 = new THREE.Mesh (mesa7, materialmesa); // Crea el objeto

    var lineamesa7 = new THREE.Geometry();
    lineamesa7.vertices.push( new THREE.Vector3( 34, 24, -5) );//0
    lineamesa7.vertices.push( new THREE.Vector3( 34, 20, -5) );//1
    lineamesa7.vertices.push( new THREE.Vector3( 41, 20, -5 ));//2
    lineamesa7.vertices.push( new THREE.Vector3( 41, 24, -5 ));//3
    lineamesa7.vertices.push( new THREE.Vector3( 34, 24, -5) );//0
    var lmesa7 = new THREE.Line( lineamesa7, materialcpu );

    // mesa8
    
    var mesa8 = new THREE.Geometry();
    mesa8.vertices.push( new THREE.Vector3( 42, 24, -5) );//0
    mesa8.vertices.push( new THREE.Vector3( 42, 20, -5) );//1
    mesa8.vertices.push( new THREE.Vector3( 49, 20, -5 ));//2
    mesa8.vertices.push( new THREE.Vector3( 49, 24, -5 ));//3

    mesa8.vertices.push( new THREE.Vector3( 42, 24, -10) );//4
    mesa8.vertices.push( new THREE.Vector3( 42, 20, -10) );//5
    mesa8.vertices.push( new THREE.Vector3( 49, 20, -10 ));//6
    mesa8.vertices.push( new THREE.Vector3( 49, 24, -10 ));//7

    mesa8.vertices.push( new THREE.Vector3( 42, 22, -6) );//8
    mesa8.vertices.push( new THREE.Vector3( 42, 19, -6) );//9
    mesa8.vertices.push( new THREE.Vector3( 49, 19, -6 ));//10
    mesa8.vertices.push( new THREE.Vector3( 49, 22, -6 ));//11
    
    mesa8.faces.push(new THREE.Face3( 1,0,3 ) );
    mesa8.faces.push(new THREE.Face3( 3,0,1 ) );
    mesa8.faces.push(new THREE.Face3( 2,1,3 ) );
    mesa8.faces.push(new THREE.Face3( 3,1,2 ) );

    mesa8.faces.push(new THREE.Face3( 9,8,11 ) );
    mesa8.faces.push(new THREE.Face3( 11,8,9 ) );
    mesa8.faces.push(new THREE.Face3( 10,9,11 ) );
    mesa8.faces.push(new THREE.Face3( 11,9,10 ) );

    mesa8.faces.push(new THREE.Face3( 1,5,4 ) );
    mesa8.faces.push(new THREE.Face3( 4,5,1 ) );
    mesa8.faces.push(new THREE.Face3( 0,1,4 ) );
    mesa8.faces.push(new THREE.Face3( 4,1,0 ) );

    mesa8.faces.push(new THREE.Face3( 2,6,7 ) );
    mesa8.faces.push(new THREE.Face3( 7,6,2 ) );
    mesa8.faces.push(new THREE.Face3( 3,2,7 ) );
    mesa8.faces.push(new THREE.Face3( 7,2,3 ) );

    var mesaa8 = new THREE.Mesh (mesa8, materialmesa); // Crea el objeto

    var lineamesa8 = new THREE.Geometry();
    lineamesa8.vertices.push( new THREE.Vector3( 42, 24, -5) );//0
    lineamesa8.vertices.push( new THREE.Vector3( 42, 20, -5) );//1
    lineamesa8.vertices.push( new THREE.Vector3( 49, 20, -5 ));//2
    lineamesa8.vertices.push( new THREE.Vector3( 49, 24, -5 ));//3
    lineamesa8.vertices.push( new THREE.Vector3( 42, 24, -5) );//0
    var lmesa8 = new THREE.Line( lineamesa8, materialcpu );

    // mesa9
    
    var mesa9 = new THREE.Geometry();
    mesa9.vertices.push( new THREE.Vector3( 50, 24, -5) );//0
    mesa9.vertices.push( new THREE.Vector3( 50, 20, -5) );//1
    mesa9.vertices.push( new THREE.Vector3( 57, 20, -5 ));//2
    mesa9.vertices.push( new THREE.Vector3( 57, 24, -5 ));//3

    mesa9.vertices.push( new THREE.Vector3( 50, 24, -10) );//4
    mesa9.vertices.push( new THREE.Vector3( 50, 20, -10) );//5
    mesa9.vertices.push( new THREE.Vector3( 57, 20, -10 ));//6
    mesa9.vertices.push( new THREE.Vector3( 57, 24, -10 ));//7

    mesa9.vertices.push( new THREE.Vector3( 50, 22, -6) );//8
    mesa9.vertices.push( new THREE.Vector3( 50, 19, -6) );//9
    mesa9.vertices.push( new THREE.Vector3( 57, 19, -6 ));//10
    mesa9.vertices.push( new THREE.Vector3( 57, 22, -6 ));//11
    
    mesa9.faces.push(new THREE.Face3( 1,0,3 ) );
    mesa9.faces.push(new THREE.Face3( 3,0,1 ) );
    mesa9.faces.push(new THREE.Face3( 2,1,3 ) );
    mesa9.faces.push(new THREE.Face3( 3,1,2 ) );

    mesa9.faces.push(new THREE.Face3( 9,8,11 ) );
    mesa9.faces.push(new THREE.Face3( 11,8,9 ) );
    mesa9.faces.push(new THREE.Face3( 10,9,11 ) );
    mesa9.faces.push(new THREE.Face3( 11,9,10 ) );

    mesa9.faces.push(new THREE.Face3( 1,5,4 ) );
    mesa9.faces.push(new THREE.Face3( 4,5,1 ) );
    mesa9.faces.push(new THREE.Face3( 0,1,4 ) );
    mesa9.faces.push(new THREE.Face3( 4,1,0 ) );

    mesa9.faces.push(new THREE.Face3( 2,6,7 ) );
    mesa9.faces.push(new THREE.Face3( 7,6,2 ) );
    mesa9.faces.push(new THREE.Face3( 3,2,7 ) );
    mesa9.faces.push(new THREE.Face3( 7,2,3 ) );

    var mesaa9 = new THREE.Mesh (mesa9, materialmesa); // Crea el objeto

    var lineamesa9 = new THREE.Geometry();
    lineamesa9.vertices.push( new THREE.Vector3( 50, 24, -5) );//0
    lineamesa9.vertices.push( new THREE.Vector3( 50, 20, -5) );//1
    lineamesa9.vertices.push( new THREE.Vector3( 57, 20, -5 ));//2
    lineamesa9.vertices.push( new THREE.Vector3( 57, 24, -5 ));//3
    lineamesa9.vertices.push( new THREE.Vector3( 50, 24, -5) );//0
    var lmesa9 = new THREE.Line( lineamesa9, materialcpu );

    // mesa10
    
    var mesa10 = new THREE.Geometry();
    mesa10.vertices.push( new THREE.Vector3( 58, 24, -5) );//0
    mesa10.vertices.push( new THREE.Vector3( 58, 20, -5) );//1
    mesa10.vertices.push( new THREE.Vector3( 65, 20, -5 ));//2
    mesa10.vertices.push( new THREE.Vector3( 65, 24, -5 ));//3

    mesa10.vertices.push( new THREE.Vector3( 58, 24, -10) );//4
    mesa10.vertices.push( new THREE.Vector3( 58, 20, -10) );//5
    mesa10.vertices.push( new THREE.Vector3( 65, 20, -10 ));//6
    mesa10.vertices.push( new THREE.Vector3( 65, 24, -10 ));//7

    mesa10.vertices.push( new THREE.Vector3( 58, 22, -6) );//8
    mesa10.vertices.push( new THREE.Vector3( 58, 19, -6) );//9
    mesa10.vertices.push( new THREE.Vector3( 65, 19, -6 ));//10
    mesa10.vertices.push( new THREE.Vector3( 65, 22, -6 ));//11
    
    mesa10.faces.push(new THREE.Face3( 1,0,3 ) );
    mesa10.faces.push(new THREE.Face3( 3,0,1 ) );
    mesa10.faces.push(new THREE.Face3( 2,1,3 ) );
    mesa10.faces.push(new THREE.Face3( 3,1,2 ) );

    mesa10.faces.push(new THREE.Face3( 9,8,11 ) );
    mesa10.faces.push(new THREE.Face3( 11,8,9 ) );
    mesa10.faces.push(new THREE.Face3( 10,9,11 ) );
    mesa10.faces.push(new THREE.Face3( 11,9,10 ) );

    mesa10.faces.push(new THREE.Face3( 1,5,4 ) );
    mesa10.faces.push(new THREE.Face3( 4,5,1 ) );
    mesa10.faces.push(new THREE.Face3( 0,1,4 ) );
    mesa10.faces.push(new THREE.Face3( 4,1,0 ) );

    mesa10.faces.push(new THREE.Face3( 2,6,7 ) );
    mesa10.faces.push(new THREE.Face3( 7,6,2 ) );
    mesa10.faces.push(new THREE.Face3( 3,2,7 ) );
    mesa10.faces.push(new THREE.Face3( 7,2,3 ) );

    var mesaa10 = new THREE.Mesh (mesa10, materialmesa); // Crea el objeto

    var lineamesa10 = new THREE.Geometry();
    lineamesa10.vertices.push( new THREE.Vector3( 58, 24, -5) );//0
    lineamesa10.vertices.push( new THREE.Vector3( 58, 20, -5) );//1
    lineamesa10.vertices.push( new THREE.Vector3( 65, 20, -5 ));//2
    lineamesa10.vertices.push( new THREE.Vector3( 65, 24, -5 ));//3
    lineamesa10.vertices.push( new THREE.Vector3( 58, 24, -5) );//4
    var lmesa10 = new THREE.Line( lineamesa10, materialcpu );

   //teclado1
    var tecl1 = new THREE.Geometry();
    tecl1.vertices.push( new THREE.Vector3( 58.5, 21, -5.9) );//0
    tecl1.vertices.push( new THREE.Vector3( 58.5, 19.5, -5.9) );//1
    tecl1.vertices.push( new THREE.Vector3( 64.5, 19.5, -5.9 ));//2
    tecl1.vertices.push( new THREE.Vector3( 64.5, 21, -5.9 ));//3

    tecl1.vertices.push( new THREE.Vector3( 60, 23, -4.9) );//4
    tecl1.vertices.push( new THREE.Vector3( 60, 22, -4.9) );//5
    tecl1.vertices.push( new THREE.Vector3( 62.5, 22, -4.9 ));//6
    tecl1.vertices.push( new THREE.Vector3( 62.5, 23, -4.9 ));//7

    tecl1.vertices.push( new THREE.Vector3( 60, 23, -4) );//8
    tecl1.vertices.push( new THREE.Vector3( 62.5, 23, -4 ));//9

    tecl1.faces.push(new THREE.Face3( 1,0,3 ) );
    tecl1.faces.push(new THREE.Face3( 3,0,1 ) );
    tecl1.faces.push(new THREE.Face3( 2,1,3 ) );
    tecl1.faces.push(new THREE.Face3( 3,1,2 ) );

    tecl1.faces.push(new THREE.Face3( 5,4,7 ) );
    tecl1.faces.push(new THREE.Face3( 7,4,5 ) );
    tecl1.faces.push(new THREE.Face3( 6,5,7 ) );
    tecl1.faces.push(new THREE.Face3( 7,5,6 ) );

    tecl1.faces.push(new THREE.Face3( 4,8,9 ) );
    tecl1.faces.push(new THREE.Face3( 9,8,4 ) );
    tecl1.faces.push(new THREE.Face3( 7,4,9 ) );
    tecl1.faces.push(new THREE.Face3( 9,4,7 ) );

    var materialtcl = new THREE.MeshBasicMaterial( { color: 0xAAAAAA } ); // e
    var teclado1 = new THREE.Mesh (tecl1, materialtcl); // Crea el objeto

   //teclado2
    var tecl2 = new THREE.Geometry();
    tecl2.vertices.push( new THREE.Vector3( 50.5, 21, -5.9) );//0
    tecl2.vertices.push( new THREE.Vector3( 50.5, 19.5, -5.9) );//1
    tecl2.vertices.push( new THREE.Vector3( 56.5, 19.5, -5.9 ));//2
    tecl2.vertices.push( new THREE.Vector3( 56.5, 21, -5.9 ));//3

    tecl2.vertices.push( new THREE.Vector3( 52, 23, -4.9) );//4
    tecl2.vertices.push( new THREE.Vector3( 52, 22, -4.9) );//5
    tecl2.vertices.push( new THREE.Vector3( 54.5, 22, -4.9 ));//6
    tecl2.vertices.push( new THREE.Vector3( 54.5, 23, -4.9 ));//7

    tecl2.vertices.push( new THREE.Vector3( 52, 23, -4) );//8
    tecl2.vertices.push( new THREE.Vector3( 54.5, 23, -4 ));//9

    tecl2.faces.push(new THREE.Face3( 1,0,3 ) );
    tecl2.faces.push(new THREE.Face3( 3,0,1 ) );
    tecl2.faces.push(new THREE.Face3( 2,1,3 ) );
    tecl2.faces.push(new THREE.Face3( 3,1,2 ) );

    tecl2.faces.push(new THREE.Face3( 5,4,7 ) );
    tecl2.faces.push(new THREE.Face3( 7,4,5 ) );
    tecl2.faces.push(new THREE.Face3( 6,5,7 ) );
    tecl2.faces.push(new THREE.Face3( 7,5,6 ) );

    tecl2.faces.push(new THREE.Face3( 4,8,9 ) );
    tecl2.faces.push(new THREE.Face3( 9,8,4 ) );
    tecl2.faces.push(new THREE.Face3( 7,4,9 ) );
    tecl2.faces.push(new THREE.Face3( 9,4,7 ) );

    var materialtcl = new THREE.MeshBasicMaterial( { color: 0xAAAAAA } ); // e
    var teclado2 = new THREE.Mesh (tecl2, materialtcl); // Crea el objeto

   //teclado3
    var tecl3 = new THREE.Geometry();
    tecl3.vertices.push( new THREE.Vector3( 42.5, 21, -5.9) );//0
    tecl3.vertices.push( new THREE.Vector3( 42.5, 19.5, -5.9) );//1
    tecl3.vertices.push( new THREE.Vector3( 48.5, 19.5, -5.9 ));//2
    tecl3.vertices.push( new THREE.Vector3( 48.5, 21, -5.9 ));//3

    tecl3.vertices.push( new THREE.Vector3( 44, 23, -4.9) );//4
    tecl3.vertices.push( new THREE.Vector3( 44, 22, -4.9) );//5
    tecl3.vertices.push( new THREE.Vector3( 46.5, 22, -4.9 ));//6
    tecl3.vertices.push( new THREE.Vector3( 46.5, 23, -4.9 ));//7

    tecl3.vertices.push( new THREE.Vector3( 44, 23, -4) );//8
    tecl3.vertices.push( new THREE.Vector3( 46.5, 23, -4 ));//9

    tecl3.faces.push(new THREE.Face3( 1,0,3 ) );
    tecl3.faces.push(new THREE.Face3( 3,0,1 ) );
    tecl3.faces.push(new THREE.Face3( 2,1,3 ) );
    tecl3.faces.push(new THREE.Face3( 3,1,2 ) );

    tecl3.faces.push(new THREE.Face3( 5,4,7 ) );
    tecl3.faces.push(new THREE.Face3( 7,4,5 ) );
    tecl3.faces.push(new THREE.Face3( 6,5,7 ) );
    tecl3.faces.push(new THREE.Face3( 7,5,6 ) );

    tecl3.faces.push(new THREE.Face3( 4,8,9 ) );
    tecl3.faces.push(new THREE.Face3( 9,8,4 ) );
    tecl3.faces.push(new THREE.Face3( 7,4,9 ) );
    tecl3.faces.push(new THREE.Face3( 9,4,7 ) );

    var materialtcl = new THREE.MeshBasicMaterial( { color: 0xAAAAAA } ); // e
    var teclado3 = new THREE.Mesh (tecl3, materialtcl); // Crea el objeto

   //teclado4
    var tecl4 = new THREE.Geometry();
    tecl4.vertices.push( new THREE.Vector3( 34.5, 21, -5.9) );//0
    tecl4.vertices.push( new THREE.Vector3( 34.5, 19.5, -5.9) );//1
    tecl4.vertices.push( new THREE.Vector3( 40.5, 19.5, -5.9 ));//2
    tecl4.vertices.push( new THREE.Vector3( 40.5, 21, -5.9 ));//3

    tecl4.vertices.push( new THREE.Vector3( 36, 23, -4.9) );//4
    tecl4.vertices.push( new THREE.Vector3( 36, 22, -4.9) );//5
    tecl4.vertices.push( new THREE.Vector3( 38.5, 22, -4.9 ));//6
    tecl4.vertices.push( new THREE.Vector3( 38.5, 23, -4.9 ));//7

    tecl4.vertices.push( new THREE.Vector3( 36, 23, -4) );//8
    tecl4.vertices.push( new THREE.Vector3( 38.5, 23, -4 ));//9

    tecl4.faces.push(new THREE.Face3( 1,0,3 ) );
    tecl4.faces.push(new THREE.Face3( 3,0,1 ) );
    tecl4.faces.push(new THREE.Face3( 2,1,3 ) );
    tecl4.faces.push(new THREE.Face3( 3,1,2 ) );

    tecl4.faces.push(new THREE.Face3( 5,4,7 ) );
    tecl4.faces.push(new THREE.Face3( 7,4,5 ) );
    tecl4.faces.push(new THREE.Face3( 6,5,7 ) );
    tecl4.faces.push(new THREE.Face3( 7,5,6 ) );

    tecl4.faces.push(new THREE.Face3( 4,8,9 ) );
    tecl4.faces.push(new THREE.Face3( 9,8,4 ) );
    tecl4.faces.push(new THREE.Face3( 7,4,9 ) );
    tecl4.faces.push(new THREE.Face3( 9,4,7 ) );

    var teclado4 = new THREE.Mesh (tecl4, materialtcl); // Crea el objeto

   //teclado5
    var tecl5 = new THREE.Geometry();
    tecl5.vertices.push( new THREE.Vector3( 26.5, 21, -5.9) );//0
    tecl5.vertices.push( new THREE.Vector3( 26.5, 19.5, -5.9) );//1
    tecl5.vertices.push( new THREE.Vector3( 32.5, 19.5, -5.9 ));//2
    tecl5.vertices.push( new THREE.Vector3( 32.5, 21, -5.9 ));//3

    tecl5.vertices.push( new THREE.Vector3( 28, 23, -4.9) );//4
    tecl5.vertices.push( new THREE.Vector3( 28, 22, -4.9) );//5
    tecl5.vertices.push( new THREE.Vector3( 30.5, 22, -4.9 ));//6
    tecl5.vertices.push( new THREE.Vector3( 30.5, 23, -4.9 ));//7

    tecl5.vertices.push( new THREE.Vector3( 28, 23, -4) );//8
    tecl5.vertices.push( new THREE.Vector3( 30.5, 23, -4 ));//9

    tecl5.faces.push(new THREE.Face3( 1,0,3 ) );
    tecl5.faces.push(new THREE.Face3( 3,0,1 ) );
    tecl5.faces.push(new THREE.Face3( 2,1,3 ) );
    tecl5.faces.push(new THREE.Face3( 3,1,2 ) );

    tecl5.faces.push(new THREE.Face3( 5,4,7 ) );
    tecl5.faces.push(new THREE.Face3( 7,4,5 ) );
    tecl5.faces.push(new THREE.Face3( 6,5,7 ) );
    tecl5.faces.push(new THREE.Face3( 7,5,6 ) );

    tecl5.faces.push(new THREE.Face3( 4,8,9 ) );
    tecl5.faces.push(new THREE.Face3( 9,8,4 ) );
    tecl5.faces.push(new THREE.Face3( 7,4,9 ) );
    tecl5.faces.push(new THREE.Face3( 9,4,7 ) );

    var teclado5 = new THREE.Mesh (tecl5, materialtcl); // Crea el objeto

   //teclado6
    var tecl6 = new THREE.Geometry();
    tecl6.vertices.push( new THREE.Vector3( 58.5, -21, -5.9) );//0
    tecl6.vertices.push( new THREE.Vector3( 58.5, -19.5, -5.9) );//1
    tecl6.vertices.push( new THREE.Vector3( 64.5, -19.5, -5.9 ));//2
    tecl6.vertices.push( new THREE.Vector3( 64.5, -21, -5.9 ));//3

    tecl6.vertices.push( new THREE.Vector3( 60, -23, -4.9) );//4
    tecl6.vertices.push( new THREE.Vector3( 60, -22, -4.9) );//5
    tecl6.vertices.push( new THREE.Vector3( 62.5, -22, -4.9 ));//6
    tecl6.vertices.push( new THREE.Vector3( 62.5, -23, -4.9 ));//7

    tecl6.vertices.push( new THREE.Vector3( 60, -23, -4) );//8
    tecl6.vertices.push( new THREE.Vector3( 62.5, -23, -4 ));//9

    tecl6.faces.push(new THREE.Face3( 1,0,3 ) );
    tecl6.faces.push(new THREE.Face3( 3,0,1 ) );
    tecl6.faces.push(new THREE.Face3( 2,1,3 ) );
    tecl6.faces.push(new THREE.Face3( 3,1,2 ) );

    tecl6.faces.push(new THREE.Face3( 5,4,7 ) );
    tecl6.faces.push(new THREE.Face3( 7,4,5 ) );
    tecl6.faces.push(new THREE.Face3( 6,5,7 ) );
    tecl6.faces.push(new THREE.Face3( 7,5,6 ) );

    tecl6.faces.push(new THREE.Face3( 4,8,9 ) );
    tecl6.faces.push(new THREE.Face3( 9,8,4 ) );
    tecl6.faces.push(new THREE.Face3( 7,4,9 ) );
    tecl6.faces.push(new THREE.Face3( 9,4,7 ) );

    var teclado6 = new THREE.Mesh (tecl6, materialtcl); // Crea el objeto

   //teclado7
    var tecl7 = new THREE.Geometry();
    tecl7.vertices.push( new THREE.Vector3( 50.5, -21, -5.9) );//0
    tecl7.vertices.push( new THREE.Vector3( 50.5, -19.5, -5.9) );//1
    tecl7.vertices.push( new THREE.Vector3( 56.5, -19.5, -5.9 ));//2
    tecl7.vertices.push( new THREE.Vector3( 56.5, -21, -5.9 ));//3

    tecl7.vertices.push( new THREE.Vector3( 52, -23, -4.9) );//4
    tecl7.vertices.push( new THREE.Vector3( 52, -22, -4.9) );//5
    tecl7.vertices.push( new THREE.Vector3( 54.5, -22, -4.9 ));//6
    tecl7.vertices.push( new THREE.Vector3( 54.5, -23, -4.9 ));//7

    tecl7.vertices.push( new THREE.Vector3( 52, -23, -4) );//8
    tecl7.vertices.push( new THREE.Vector3( 54.5, -23, -4 ));//9

    tecl7.faces.push(new THREE.Face3( 1,0,3 ) );
    tecl7.faces.push(new THREE.Face3( 3,0,1 ) );
    tecl7.faces.push(new THREE.Face3( 2,1,3 ) );
    tecl7.faces.push(new THREE.Face3( 3,1,2 ) );

    tecl7.faces.push(new THREE.Face3( 5,4,7 ) );
    tecl7.faces.push(new THREE.Face3( 7,4,5 ) );
    tecl7.faces.push(new THREE.Face3( 6,5,7 ) );
    tecl7.faces.push(new THREE.Face3( 7,5,6 ) );

    tecl7.faces.push(new THREE.Face3( 4,8,9 ) );
    tecl7.faces.push(new THREE.Face3( 9,8,4 ) );
    tecl7.faces.push(new THREE.Face3( 7,4,9 ) );
    tecl7.faces.push(new THREE.Face3( 9,4,7 ) );

    var teclado7 = new THREE.Mesh (tecl7, materialtcl); // Crea el objeto

   //teclado8
    var tecl8 = new THREE.Geometry();
    tecl8.vertices.push( new THREE.Vector3( 42.5, -21, -5.9) );//0
    tecl8.vertices.push( new THREE.Vector3( 42.5, -19.5, -5.9) );//1
    tecl8.vertices.push( new THREE.Vector3( 48.5, -19.5, -5.9 ));//2
    tecl8.vertices.push( new THREE.Vector3( 48.5, -21, -5.9 ));//3

    tecl8.vertices.push( new THREE.Vector3( 44, -23, -4.9) );//4
    tecl8.vertices.push( new THREE.Vector3( 44, -22, -4.9) );//5
    tecl8.vertices.push( new THREE.Vector3( 46.5, -22, -4.9 ));//6
    tecl8.vertices.push( new THREE.Vector3( 46.5, -23, -4.9 ));//7

    tecl8.vertices.push( new THREE.Vector3( 44, -23, -4) );//8
    tecl8.vertices.push( new THREE.Vector3( 46.5, -23, -4 ));//9

    tecl8.faces.push(new THREE.Face3( 1,0,3 ) );
    tecl8.faces.push(new THREE.Face3( 3,0,1 ) );
    tecl8.faces.push(new THREE.Face3( 2,1,3 ) );
    tecl8.faces.push(new THREE.Face3( 3,1,2 ) );

    tecl8.faces.push(new THREE.Face3( 5,4,7 ) );
    tecl8.faces.push(new THREE.Face3( 7,4,5 ) );
    tecl8.faces.push(new THREE.Face3( 6,5,7 ) );
    tecl8.faces.push(new THREE.Face3( 7,5,6 ) );

    tecl8.faces.push(new THREE.Face3( 4,8,9 ) );
    tecl8.faces.push(new THREE.Face3( 9,8,4 ) );
    tecl8.faces.push(new THREE.Face3( 7,4,9 ) );
    tecl8.faces.push(new THREE.Face3( 9,4,7 ) );

    var teclado8 = new THREE.Mesh (tecl8, materialtcl); // Crea el objeto

   //teclado9
    var tecl9 = new THREE.Geometry();
    tecl9.vertices.push( new THREE.Vector3( 34.5, -21, -5.9) );//0
    tecl9.vertices.push( new THREE.Vector3( 34.5, -19.5, -5.9) );//1
    tecl9.vertices.push( new THREE.Vector3( 40.5, -19.5, -5.9 ));//2
    tecl9.vertices.push( new THREE.Vector3( 40.5, -21, -5.9 ));//3

    tecl9.vertices.push( new THREE.Vector3( 36, -23, -4.9) );//4
    tecl9.vertices.push( new THREE.Vector3( 36, -22, -4.9) );//5
    tecl9.vertices.push( new THREE.Vector3( 38.5, -22, -4.9 ));//6
    tecl9.vertices.push( new THREE.Vector3( 38.5, -23, -4.9 ));//7

    tecl9.vertices.push( new THREE.Vector3( 36, -23, -4) );//8
    tecl9.vertices.push( new THREE.Vector3( 38.5, -23, -4 ));//9

    tecl9.faces.push(new THREE.Face3( 1,0,3 ) );
    tecl9.faces.push(new THREE.Face3( 3,0,1 ) );
    tecl9.faces.push(new THREE.Face3( 2,1,3 ) );
    tecl9.faces.push(new THREE.Face3( 3,1,2 ) );

    tecl9.faces.push(new THREE.Face3( 5,4,7 ) );
    tecl9.faces.push(new THREE.Face3( 7,4,5 ) );
    tecl9.faces.push(new THREE.Face3( 6,5,7 ) );
    tecl9.faces.push(new THREE.Face3( 7,5,6 ) );

    tecl9.faces.push(new THREE.Face3( 4,8,9 ) );
    tecl9.faces.push(new THREE.Face3( 9,8,4 ) );
    tecl9.faces.push(new THREE.Face3( 7,4,9 ) );
    tecl9.faces.push(new THREE.Face3( 9,4,7 ) );

    var teclado9 = new THREE.Mesh (tecl9, materialtcl); // Crea el objeto

   //teclado10
    var tecl10 = new THREE.Geometry();
    tecl10.vertices.push( new THREE.Vector3( 26.5, -21, -5.9) );//0
    tecl10.vertices.push( new THREE.Vector3( 26.5, -19.5, -5.9) );//1
    tecl10.vertices.push( new THREE.Vector3( 32.5, -19.5, -5.9 ));//2
    tecl10.vertices.push( new THREE.Vector3( 32.5, -21, -5.9 ));//3

    tecl10.vertices.push( new THREE.Vector3( 28, -23, -4.9) );//4
    tecl10.vertices.push( new THREE.Vector3( 28, -22, -4.9) );//5
    tecl10.vertices.push( new THREE.Vector3( 30.5, -22, -4.9 ));//6
    tecl10.vertices.push( new THREE.Vector3( 30.5, -23, -4.9 ));//7

    tecl10.vertices.push( new THREE.Vector3( 28, -23, -4) );//8
    tecl10.vertices.push( new THREE.Vector3( 30.5, -23, -4 ));//9

    tecl10.faces.push(new THREE.Face3( 1,0,3 ) );
    tecl10.faces.push(new THREE.Face3( 3,0,1 ) );
    tecl10.faces.push(new THREE.Face3( 2,1,3 ) );
    tecl10.faces.push(new THREE.Face3( 3,1,2 ) );

    tecl10.faces.push(new THREE.Face3( 5,4,7 ) );
    tecl10.faces.push(new THREE.Face3( 7,4,5 ) );
    tecl10.faces.push(new THREE.Face3( 6,5,7 ) );
    tecl10.faces.push(new THREE.Face3( 7,5,6 ) );

    tecl10.faces.push(new THREE.Face3( 4,8,9 ) );
    tecl10.faces.push(new THREE.Face3( 9,8,4 ) );
    tecl10.faces.push(new THREE.Face3( 7,4,9 ) );
    tecl10.faces.push(new THREE.Face3( 9,4,7 ) );

    var teclado10 = new THREE.Mesh (tecl10, materialtcl); // Crea el objeto

   // Escritorio1
    
    var escrit1 = new THREE.Geometry();
    escrit1.vertices.push( new THREE.Vector3( -25, 0, -5) );//0
    escrit1.vertices.push( new THREE.Vector3( -25, 10, -5) );//1
    escrit1.vertices.push( new THREE.Vector3( -10, 10, -5 ));//2
    escrit1.vertices.push( new THREE.Vector3( -10, 0, -5 ));//3

    escrit1.vertices.push( new THREE.Vector3( -25, 0, -10) );//0
    escrit1.vertices.push( new THREE.Vector3( -25, 10, -10) );//1
    escrit1.vertices.push( new THREE.Vector3( -10, 10, -10 ));//2
    escrit1.vertices.push( new THREE.Vector3( -10, 0, -10 ));//3
    
    escrit1.faces.push(new THREE.Face3( 1,0,3 ) );
    escrit1.faces.push(new THREE.Face3( 3,0,1 ) );
    escrit1.faces.push(new THREE.Face3( 2,1,3 ) );
    escrit1.faces.push(new THREE.Face3( 3,1,2 ) );

    escrit1.faces.push(new THREE.Face3( 0,4,7 ) );
    escrit1.faces.push(new THREE.Face3( 7,4,0 ) );
    escrit1.faces.push(new THREE.Face3( 3,0,7 ) );
    escrit1.faces.push(new THREE.Face3( 7,0,3 ) );

    escrit1.faces.push(new THREE.Face3( 1,5,4 ) );
    escrit1.faces.push(new THREE.Face3( 4,5,1 ) );
    escrit1.faces.push(new THREE.Face3( 0,1,4 ) );
    escrit1.faces.push(new THREE.Face3( 4,1,0 ) );

    escrit1.faces.push(new THREE.Face3( 2,6,7 ) );
    escrit1.faces.push(new THREE.Face3( 7,6,2 ) );
    escrit1.faces.push(new THREE.Face3( 3,2,7 ) );
    escrit1.faces.push(new THREE.Face3( 7,2,3 ) );

    var materialesc = new THREE.MeshBasicMaterial( { color: 0x09050f } ); // e

    var escritorio1 = new THREE.Mesh (escrit1, materialesc); // Crea el objeto

    var linesc1 = new THREE.Geometry();
    linesc1.vertices.push( new THREE.Vector3( -25, 0, -5 ) );
    linesc1.vertices.push( new THREE.Vector3( -25, 10, -5) );
    linesc1.vertices.push( new THREE.Vector3( -10, 10, -5 ) );
    linesc1.vertices.push( new THREE.Vector3( -10, 0, -5 ) );
    linesc1.vertices.push( new THREE.Vector3( -25, 0, -5 ) );
    var lesc1 = new THREE.Line( linesc1, materialpr2 );

    // Escritorio2
    
    var escrit2 = new THREE.Geometry();
    escrit2.vertices.push( new THREE.Vector3( -46, -8, -5) );//0
    escrit2.vertices.push( new THREE.Vector3( -46, 2, -5) );//1
    escrit2.vertices.push( new THREE.Vector3( -31, 2, -5 ));//2
    escrit2.vertices.push( new THREE.Vector3( -31, -8, -5 ));//3

    escrit2.vertices.push( new THREE.Vector3( -46, -8, -10) );//0
    escrit2.vertices.push( new THREE.Vector3( -46, 2, -10) );//1
    escrit2.vertices.push( new THREE.Vector3( -31, 2, -10 ));//2
    escrit2.vertices.push( new THREE.Vector3( -31, -8, -10 ));//3
    
    escrit2.faces.push(new THREE.Face3( 1,0,3 ) );
    escrit2.faces.push(new THREE.Face3( 3,0,1 ) );
    escrit2.faces.push(new THREE.Face3( 2,1,3 ) );
    escrit2.faces.push(new THREE.Face3( 3,1,2 ) );

    escrit2.faces.push(new THREE.Face3( 0,4,7 ) );
    escrit2.faces.push(new THREE.Face3( 7,4,0 ) );
    escrit2.faces.push(new THREE.Face3( 3,0,7 ) );
    escrit2.faces.push(new THREE.Face3( 7,0,3 ) );

    escrit2.faces.push(new THREE.Face3( 1,5,4 ) );
    escrit2.faces.push(new THREE.Face3( 4,5,1 ) );
    escrit2.faces.push(new THREE.Face3( 0,1,4 ) );
    escrit2.faces.push(new THREE.Face3( 4,1,0 ) );

    escrit2.faces.push(new THREE.Face3( 2,6,7 ) );
    escrit2.faces.push(new THREE.Face3( 7,6,2 ) );
    escrit2.faces.push(new THREE.Face3( 3,2,7 ) );
    escrit2.faces.push(new THREE.Face3( 7,2,3 ) );


    var escritorio2 = new THREE.Mesh (escrit2, materialesc); // Crea el objeto

    var linesc2 = new THREE.Geometry();
    linesc2.vertices.push( new THREE.Vector3( -46, -8, -5) );//0
    linesc2.vertices.push( new THREE.Vector3( -46, 2, -5) );//1
    linesc2.vertices.push( new THREE.Vector3( -31, 2, -5 ));//2
    linesc2.vertices.push( new THREE.Vector3( -31, -8, -5 ));//3
    linesc2.vertices.push( new THREE.Vector3( -46, -8, -5) );//0
    var lesc2 = new THREE.Line( linesc2, materialpr2 );

    // estante1
    
    var estante1 = new THREE.Geometry();
    estante1.vertices.push( new THREE.Vector3( -49, -24, 5) );//0
    estante1.vertices.push( new THREE.Vector3( -49, -19, 5) );//1
    estante1.vertices.push( new THREE.Vector3( -35, -19, 5 ));//2
    estante1.vertices.push( new THREE.Vector3( -35, -24, 5 ));//3

    estante1.vertices.push( new THREE.Vector3( -49, -24, -9.9) );//4
    estante1.vertices.push( new THREE.Vector3( -49, -19, -9.9) );//5
    estante1.vertices.push( new THREE.Vector3( -35, -19, -9.9 ));//6
    estante1.vertices.push( new THREE.Vector3( -35, -24, -9.9 ));//7
    
    estante1.faces.push(new THREE.Face3( 1,0,3 ) );
    estante1.faces.push(new THREE.Face3( 3,0,1 ) );
    estante1.faces.push(new THREE.Face3( 2,1,3 ) );
    estante1.faces.push(new THREE.Face3( 3,1,2 ) );

    estante1.faces.push(new THREE.Face3( 5,4,7 ) );
    estante1.faces.push(new THREE.Face3( 7,4,5 ) );
    estante1.faces.push(new THREE.Face3( 6,5,7 ) );
    estante1.faces.push(new THREE.Face3( 7,5,6 ) );

    estante1.faces.push(new THREE.Face3( 0,4,7 ) );
    estante1.faces.push(new THREE.Face3( 7,4,0 ) );
    estante1.faces.push(new THREE.Face3( 3,0,7 ) );
    estante1.faces.push(new THREE.Face3( 7,0,3 ) );

    estante1.faces.push(new THREE.Face3( 1,5,4 ) );
    estante1.faces.push(new THREE.Face3( 4,5,1 ) );
    estante1.faces.push(new THREE.Face3( 0,1,4 ) );
    estante1.faces.push(new THREE.Face3( 4,1,0 ) );

    estante1.faces.push(new THREE.Face3( 2,6,7 ) );
    estante1.faces.push(new THREE.Face3( 7,6,2 ) );
    estante1.faces.push(new THREE.Face3( 3,2,7 ) );
    estante1.faces.push(new THREE.Face3( 7,2,3 ) );

    var materialestante = new THREE.MeshBasicMaterial( { color: 0xdaa520 } ); // e
    var estantel1 = new THREE.Mesh (estante1, materialestante); // Crea el objeto

    var separa1 = new THREE.Geometry();
    separa1.vertices.push( new THREE.Vector3( -49, -24, -7) );//0
    separa1.vertices.push( new THREE.Vector3( -49, -20, -7) );//1
    separa1.vertices.push( new THREE.Vector3( -35, -20, -7 ));//2
    separa1.vertices.push( new THREE.Vector3( -35, -24, -7 ));//3

    separa1.vertices.push( new THREE.Vector3( -49, -24, -4) );//4
    separa1.vertices.push( new THREE.Vector3( -49, -20, -4) );//5
    separa1.vertices.push( new THREE.Vector3( -35, -20, -4 ));//6
    separa1.vertices.push( new THREE.Vector3( -35, -24, -4 ));//7

    separa1.vertices.push( new THREE.Vector3( -49, -24, -1) );//8
    separa1.vertices.push( new THREE.Vector3( -49, -20, -1) );//9
    separa1.vertices.push( new THREE.Vector3( -35, -20, -1 ));//10
    separa1.vertices.push( new THREE.Vector3( -35, -24, -1 ));//11

    separa1.vertices.push( new THREE.Vector3( -49, -24, 2) );//12
    separa1.vertices.push( new THREE.Vector3( -49, -20, 2) );//13
    separa1.vertices.push( new THREE.Vector3( -35, -20, 2 ));//14
    separa1.vertices.push( new THREE.Vector3( -35, -24, 2 ));//15

    separa1.faces.push(new THREE.Face3( 1,0,3 ) );
    separa1.faces.push(new THREE.Face3( 3,0,1 ) );
    separa1.faces.push(new THREE.Face3( 2,1,3 ) );
    separa1.faces.push(new THREE.Face3( 3,1,2 ) );

    separa1.faces.push(new THREE.Face3( 5,4,7 ) );
    separa1.faces.push(new THREE.Face3( 7,4,5 ) );
    separa1.faces.push(new THREE.Face3( 6,5,7 ) );
    separa1.faces.push(new THREE.Face3( 7,5,6 ) );

    separa1.faces.push(new THREE.Face3( 9,8,11 ) );
    separa1.faces.push(new THREE.Face3( 11,8,9 ) );
    separa1.faces.push(new THREE.Face3( 10,9,11 ) );
    separa1.faces.push(new THREE.Face3( 11,9,10 ) );

    separa1.faces.push(new THREE.Face3( 13,12,15 ) );
    separa1.faces.push(new THREE.Face3( 15,12,13 ) );
    separa1.faces.push(new THREE.Face3( 14,13,15 ) );
    separa1.faces.push(new THREE.Face3( 15,13,14 ) );

    var materialsepara = new THREE.MeshBasicMaterial( { color: 0x7C5251 } ); // e
    var separador1 = new THREE.Mesh (separa1, materialsepara); // Crea el objeto

    // estante2
    
    var estante2 = new THREE.Geometry();
    estante2.vertices.push( new THREE.Vector3( -16, 24, 5) );//0
    estante2.vertices.push( new THREE.Vector3( -16, 19, 5) );//1
    estante2.vertices.push( new THREE.Vector3( -6, 19, 5 ));//2
    estante2.vertices.push( new THREE.Vector3( -6, 24, 5 ));//3

    estante2.vertices.push( new THREE.Vector3( -16, 24, -9.9) );//4
    estante2.vertices.push( new THREE.Vector3( -16, 19, -9.9) );//5
    estante2.vertices.push( new THREE.Vector3( -6, 19, -9.9 ));//6
    estante2.vertices.push( new THREE.Vector3( -6, 24, -9.9 ));//7
    
    estante2.faces.push(new THREE.Face3( 1,0,3 ) );
    estante2.faces.push(new THREE.Face3( 3,0,1 ) );
    estante2.faces.push(new THREE.Face3( 2,1,3 ) );
    estante2.faces.push(new THREE.Face3( 3,1,2 ) );

    estante2.faces.push(new THREE.Face3( 5,4,7 ) );
    estante2.faces.push(new THREE.Face3( 7,4,5 ) );
    estante2.faces.push(new THREE.Face3( 6,5,7 ) );
    estante2.faces.push(new THREE.Face3( 7,5,6 ) );

    estante2.faces.push(new THREE.Face3( 0,4,7 ) );
    estante2.faces.push(new THREE.Face3( 7,4,0 ) );
    estante2.faces.push(new THREE.Face3( 3,0,7 ) );
    estante2.faces.push(new THREE.Face3( 7,0,3 ) );

    estante2.faces.push(new THREE.Face3( 1,5,4 ) );
    estante2.faces.push(new THREE.Face3( 4,5,1 ) );
    estante2.faces.push(new THREE.Face3( 0,1,4 ) );
    estante2.faces.push(new THREE.Face3( 4,1,0 ) );

    estante2.faces.push(new THREE.Face3( 2,6,7 ) );
    estante2.faces.push(new THREE.Face3( 7,6,2 ) );
    estante2.faces.push(new THREE.Face3( 3,2,7 ) );
    estante2.faces.push(new THREE.Face3( 7,2,3 ) );

    var estantel2 = new THREE.Mesh (estante2, materialestante); // Crea el objeto

    var separa2 = new THREE.Geometry();
    separa2.vertices.push( new THREE.Vector3( -16, 24, -7) );//0
    separa2.vertices.push( new THREE.Vector3( -16, 20, -7) );//1
    separa2.vertices.push( new THREE.Vector3( -6, 20, -7 ));//2
    separa2.vertices.push( new THREE.Vector3( -6, 24, -7 ));//3

    separa2.vertices.push( new THREE.Vector3( -16, 24, -4) );//4
    separa2.vertices.push( new THREE.Vector3( -16, 20, -4) );//5
    separa2.vertices.push( new THREE.Vector3( -6, 20, -4 ));//6
    separa2.vertices.push( new THREE.Vector3( -6, 24, -4 ));//7

    separa2.vertices.push( new THREE.Vector3( -16, 24, -1) );//8
    separa2.vertices.push( new THREE.Vector3( -16, 20, -1) );//9
    separa2.vertices.push( new THREE.Vector3( -6, 20, -1 ));//10
    separa2.vertices.push( new THREE.Vector3( -6, 24, -1 ));//11

    separa2.vertices.push( new THREE.Vector3( -16, 24, 2) );//12
    separa2.vertices.push( new THREE.Vector3( -16, 20, 2) );//13
    separa2.vertices.push( new THREE.Vector3( -6, 20, 2 ));//14
    separa2.vertices.push( new THREE.Vector3( -6, 24, 2 ));//15

    separa2.faces.push(new THREE.Face3( 1,0,3 ) );
    separa2.faces.push(new THREE.Face3( 3,0,1 ) );
    separa2.faces.push(new THREE.Face3( 2,1,3 ) );
    separa2.faces.push(new THREE.Face3( 3,1,2 ) );

    separa2.faces.push(new THREE.Face3( 5,4,7 ) );
    separa2.faces.push(new THREE.Face3( 7,4,5 ) );
    separa2.faces.push(new THREE.Face3( 6,5,7 ) );
    separa2.faces.push(new THREE.Face3( 7,5,6 ) );

    separa2.faces.push(new THREE.Face3( 9,8,11 ) );
    separa2.faces.push(new THREE.Face3( 11,8,9 ) );
    separa2.faces.push(new THREE.Face3( 10,9,11 ) );
    separa2.faces.push(new THREE.Face3( 11,9,10 ) );

    separa2.faces.push(new THREE.Face3( 13,12,15 ) );
    separa2.faces.push(new THREE.Face3( 15,12,13 ) );
    separa2.faces.push(new THREE.Face3( 14,13,15 ) );
    separa2.faces.push(new THREE.Face3( 15,13,14 ) );

    var separador2 = new THREE.Mesh (separa2, materialsepara); // Crea el objeto

    // silla1
    
    var silla1 = new THREE.Geometry();
    silla1.vertices.push( new THREE.Vector3( -41, 3, -7) );//0
    silla1.vertices.push( new THREE.Vector3( -41, 8, -7) );//1
    silla1.vertices.push( new THREE.Vector3( -36, 8, -7 ));//2
    silla1.vertices.push( new THREE.Vector3( -36, 3, -7 ));//3

    silla1.vertices.push( new THREE.Vector3( -41, 3, -10) );//4
    silla1.vertices.push( new THREE.Vector3( -41, 8, -10) );//5
    silla1.vertices.push( new THREE.Vector3( -36, 8, -10 ));//6
    silla1.vertices.push( new THREE.Vector3( -36, 3, -10 ));//7

    silla1.vertices.push( new THREE.Vector3( -41, 8, 0 ));//8
    silla1.vertices.push( new THREE.Vector3( -36, 8, 0 ));//9
    
    silla1.faces.push(new THREE.Face3( 1,0,3 ) );
    silla1.faces.push(new THREE.Face3( 3,0,1 ) );
    silla1.faces.push(new THREE.Face3( 2,1,3 ) );
    silla1.faces.push(new THREE.Face3( 3,1,2 ) );

    silla1.faces.push(new THREE.Face3( 8,1,2 ) );
    silla1.faces.push(new THREE.Face3( 2,1,8 ) );
    silla1.faces.push(new THREE.Face3( 9,8,2 ) );
    silla1.faces.push(new THREE.Face3( 2,8,9 ) );

    silla1.faces.push(new THREE.Face3( 1,5,4 ) );
    silla1.faces.push(new THREE.Face3( 4,5,1 ) );
    silla1.faces.push(new THREE.Face3( 0,1,4 ) );
    silla1.faces.push(new THREE.Face3( 4,1,0 ) );

    silla1.faces.push(new THREE.Face3( 2,6,7 ) );
    silla1.faces.push(new THREE.Face3( 7,6,2 ) );
    silla1.faces.push(new THREE.Face3( 3,2,7 ) );
    silla1.faces.push(new THREE.Face3( 7,2,3 ) );

    var materialsilla = new THREE.MeshBasicMaterial( { color: 0x0a0a0a } ); // e
    var sill1 = new THREE.Mesh (silla1, materialsilla); // Crea el objeto

    var linesilla1 = new THREE.Geometry();
    linesilla1.vertices.push( new THREE.Vector3( -41, 3, -7) );//0
    linesilla1.vertices.push( new THREE.Vector3( -41, 8, -7) );//1
    linesilla1.vertices.push( new THREE.Vector3( -36, 8, -7 ));//2
    linesilla1.vertices.push( new THREE.Vector3( -36, 3, -7 ));//3
    linesilla1.vertices.push( new THREE.Vector3( -41, 3, -7) );//0
    var matlineas = new THREE.MeshBasicMaterial( { color: 0xffffff } ); // e
    var lisilla1 = new THREE.Line( linesilla1, matlineas );

    // silla2
    
    var silla2 = new THREE.Geometry();
    silla2.vertices.push( new THREE.Vector3( -20, 11, -7) );//0
    silla2.vertices.push( new THREE.Vector3( -20, 16, -7) );//1
    silla2.vertices.push( new THREE.Vector3( -15, 16, -7 ));//2
    silla2.vertices.push( new THREE.Vector3( -15, 11, -7 ));//3

    silla2.vertices.push( new THREE.Vector3( -20, 11, -10) );//4
    silla2.vertices.push( new THREE.Vector3( -20, 16, -10) );//5
    silla2.vertices.push( new THREE.Vector3( -15, 16, -10 ));//6
    silla2.vertices.push( new THREE.Vector3( -15, 11, -10 ));//7

    silla2.vertices.push( new THREE.Vector3( -20, 16, 0 ));//8
    silla2.vertices.push( new THREE.Vector3( -15, 16, 0 ));//9
    
    silla2.faces.push(new THREE.Face3( 1,0,3 ) );
    silla2.faces.push(new THREE.Face3( 3,0,1 ) );
    silla2.faces.push(new THREE.Face3( 2,1,3 ) );
    silla2.faces.push(new THREE.Face3( 3,1,2 ) );

    silla2.faces.push(new THREE.Face3( 8,1,2 ) );
    silla2.faces.push(new THREE.Face3( 2,1,8 ) );
    silla2.faces.push(new THREE.Face3( 9,8,2 ) );
    silla2.faces.push(new THREE.Face3( 2,8,9 ) );

    silla2.faces.push(new THREE.Face3( 1,5,4 ) );
    silla2.faces.push(new THREE.Face3( 4,5,1 ) );
    silla2.faces.push(new THREE.Face3( 0,1,4 ) );
    silla2.faces.push(new THREE.Face3( 4,1,0 ) );

    silla2.faces.push(new THREE.Face3( 2,6,7 ) );
    silla2.faces.push(new THREE.Face3( 7,6,2 ) );
    silla2.faces.push(new THREE.Face3( 3,2,7 ) );
    silla2.faces.push(new THREE.Face3( 7,2,3 ) );

    var sill2 = new THREE.Mesh (silla2, materialsilla); // Crea el objeto

    var linesilla2 = new THREE.Geometry();
    linesilla2.vertices.push( new THREE.Vector3( -20, 11, -7) );//0
    linesilla2.vertices.push( new THREE.Vector3( -20, 16, -7) );//1
    linesilla2.vertices.push( new THREE.Vector3( -15, 16, -7 ));//2
    linesilla2.vertices.push( new THREE.Vector3( -15, 11, -7 ));//3
    linesilla2.vertices.push( new THREE.Vector3( -20, 11, -7) );//0

    var lisilla2 = new THREE.Line( linesilla2, matlineas );

    // silla3
    
    var silla3 = new THREE.Geometry();
    silla3.vertices.push( new THREE.Vector3( -18, -19.5, -7) );//0
    silla3.vertices.push( new THREE.Vector3( -18, -24.5, -7) );//1
    silla3.vertices.push( new THREE.Vector3( -13, -24.5, -7 ));//2
    silla3.vertices.push( new THREE.Vector3( -13, -19.5, -7 ));//3

    silla3.vertices.push( new THREE.Vector3( -18, -19.5, -10) );//4
    silla3.vertices.push( new THREE.Vector3( -18, -24.5, -10) );//5
    silla3.vertices.push( new THREE.Vector3( -13, -24.5, -10 ));//6
    silla3.vertices.push( new THREE.Vector3( -13, -19.5, -10 ));//7

    silla3.vertices.push( new THREE.Vector3( -18, -24.5, 0 ));//8
    silla3.vertices.push( new THREE.Vector3( -13, -24.5, 0 ));//9
    
    silla3.faces.push(new THREE.Face3( 1,0,3 ) );
    silla3.faces.push(new THREE.Face3( 3,0,1 ) );
    silla3.faces.push(new THREE.Face3( 2,1,3 ) );
    silla3.faces.push(new THREE.Face3( 3,1,2 ) );

    silla3.faces.push(new THREE.Face3( 8,1,2 ) );
    silla3.faces.push(new THREE.Face3( 2,1,8 ) );
    silla3.faces.push(new THREE.Face3( 9,8,2 ) );
    silla3.faces.push(new THREE.Face3( 2,8,9 ) );

    silla3.faces.push(new THREE.Face3( 1,5,4 ) );
    silla3.faces.push(new THREE.Face3( 4,5,1 ) );
    silla3.faces.push(new THREE.Face3( 0,1,4 ) );
    silla3.faces.push(new THREE.Face3( 4,1,0 ) );

    silla3.faces.push(new THREE.Face3( 2,6,7 ) );
    silla3.faces.push(new THREE.Face3( 7,6,2 ) );
    silla3.faces.push(new THREE.Face3( 3,2,7 ) );
    silla3.faces.push(new THREE.Face3( 7,2,3 ) );

    var sill3 = new THREE.Mesh (silla3, materialsilla); // Crea el objeto

    var linesilla3 = new THREE.Geometry();
    linesilla3.vertices.push( new THREE.Vector3( -18, -19.5, -7) );//0
    linesilla3.vertices.push( new THREE.Vector3( -18, -24.5, -7) );//1
    linesilla3.vertices.push( new THREE.Vector3( -13, -24.5, -7 ));//2
    linesilla3.vertices.push( new THREE.Vector3( -13, -19.5, -7 ));//3
    linesilla3.vertices.push( new THREE.Vector3( -18, -19.5, -7) );//0

    var lisilla3 = new THREE.Line( linesilla3, matlineas );

     // silla4
    
    var silla4 = new THREE.Geometry();
    silla4.vertices.push( new THREE.Vector3( -24, -19.5, -7) );//0
    silla4.vertices.push( new THREE.Vector3( -24, -24.5, -7) );//1
    silla4.vertices.push( new THREE.Vector3( -19, -24.5, -7 ));//2
    silla4.vertices.push( new THREE.Vector3( -19, -19.5, -7 ));//3

    silla4.vertices.push( new THREE.Vector3( -24, -19.5, -10) );//4
    silla4.vertices.push( new THREE.Vector3( -24, -24.5, -10) );//5
    silla4.vertices.push( new THREE.Vector3( -19, -24.5, -10 ));//6
    silla4.vertices.push( new THREE.Vector3( -19, -19.5, -10 ));//7

    silla4.vertices.push( new THREE.Vector3( -24, -24.5, 0 ));//8
    silla4.vertices.push( new THREE.Vector3( -19, -24.5, 0 ));//9
    
    silla4.faces.push(new THREE.Face3( 1,0,3 ) );
    silla4.faces.push(new THREE.Face3( 3,0,1 ) );
    silla4.faces.push(new THREE.Face3( 2,1,3 ) );
    silla4.faces.push(new THREE.Face3( 3,1,2 ) );

    silla4.faces.push(new THREE.Face3( 8,1,2 ) );
    silla4.faces.push(new THREE.Face3( 2,1,8 ) );
    silla4.faces.push(new THREE.Face3( 9,8,2 ) );
    silla4.faces.push(new THREE.Face3( 2,8,9 ) );

    silla4.faces.push(new THREE.Face3( 1,5,4 ) );
    silla4.faces.push(new THREE.Face3( 4,5,1 ) );
    silla4.faces.push(new THREE.Face3( 0,1,4 ) );
    silla4.faces.push(new THREE.Face3( 4,1,0 ) );

    silla4.faces.push(new THREE.Face3( 2,6,7 ) );
    silla4.faces.push(new THREE.Face3( 7,6,2 ) );
    silla4.faces.push(new THREE.Face3( 3,2,7 ) );
    silla4.faces.push(new THREE.Face3( 7,2,3 ) );

    var sill4 = new THREE.Mesh (silla4, materialsilla); // Crea el objeto

    var linesilla4 = new THREE.Geometry();
    linesilla4.vertices.push( new THREE.Vector3( -24, -19.5, -7) );//0
    linesilla4.vertices.push( new THREE.Vector3( -24, -24.5, -7) );//1
    linesilla4.vertices.push( new THREE.Vector3( -19, -24.5, -7 ));//2
    linesilla4.vertices.push( new THREE.Vector3( -19, -19.5, -7 ));//3
    linesilla4.vertices.push( new THREE.Vector3( -24, -19.5, -7) );//0
 
    var lisilla4 = new THREE.Line( linesilla4, matlineas );


    // silla5
    
    var silla5= new THREE.Geometry();
    silla5.vertices.push( new THREE.Vector3( -12, -19.5, -7) );//0
    silla5.vertices.push( new THREE.Vector3( -12, -24.5, -7) );//1
    silla5.vertices.push( new THREE.Vector3( -7, -24.5, -7 ));//2
    silla5.vertices.push( new THREE.Vector3( -7, -19.5, -7 ));//3

    silla5.vertices.push( new THREE.Vector3( -12, -19.5, -10) );//4
    silla5.vertices.push( new THREE.Vector3( -12, -24.5, -10) );//5
    silla5.vertices.push( new THREE.Vector3( -7, -24.5, -10 ));//6
    silla5.vertices.push( new THREE.Vector3( -7, -19.5, -10 ));//7

    silla5.vertices.push( new THREE.Vector3( -12, -24.5, 0 ));//8
    silla5.vertices.push( new THREE.Vector3( -7, -24.5, 0 ));//9
    
    silla5.faces.push(new THREE.Face3( 1,0,3 ) );
    silla5.faces.push(new THREE.Face3( 3,0,1 ) );
    silla5.faces.push(new THREE.Face3( 2,1,3 ) );
    silla5.faces.push(new THREE.Face3( 3,1,2 ) );

    silla5.faces.push(new THREE.Face3( 8,1,2 ) );
    silla5.faces.push(new THREE.Face3( 2,1,8 ) );
    silla5.faces.push(new THREE.Face3( 9,8,2 ) );
    silla5.faces.push(new THREE.Face3( 2,8,9 ) );

    silla5.faces.push(new THREE.Face3( 1,5,4 ) );
    silla5.faces.push(new THREE.Face3( 4,5,1 ) );
    silla5.faces.push(new THREE.Face3( 0,1,4 ) );
    silla5.faces.push(new THREE.Face3( 4,1,0 ) );

    silla5.faces.push(new THREE.Face3( 2,6,7 ) );
    silla5.faces.push(new THREE.Face3( 7,6,2 ) );
    silla5.faces.push(new THREE.Face3( 3,2,7 ) );
    silla5.faces.push(new THREE.Face3( 7,2,3 ) );

    var sill5 = new THREE.Mesh (silla5, materialsilla); // Crea el objeto

    var linesilla5 = new THREE.Geometry();
    linesilla5.vertices.push( new THREE.Vector3( -12, -19.5, -7) );//0
    linesilla5.vertices.push( new THREE.Vector3( -12, -24.5, -7) );//1
    linesilla5.vertices.push( new THREE.Vector3( -7, -24.5, -7 ));//2
    linesilla5.vertices.push( new THREE.Vector3( -7, -19.5, -7 ));//3
    linesilla5.vertices.push( new THREE.Vector3( -12, -19.5, -7) );//0
   
    var lisilla5 = new THREE.Line( linesilla5, matlineas );


    // sillab1
    
    var sillab1= new THREE.Geometry();
    sillab1.vertices.push( new THREE.Vector3( 32, -18, -7) );//0
    sillab1.vertices.push( new THREE.Vector3( 32, -13, -7) );//1
    sillab1.vertices.push( new THREE.Vector3( 27, -13, -7 ));//2
    sillab1.vertices.push( new THREE.Vector3( 27, -18, -7 ));//3

    sillab1.vertices.push( new THREE.Vector3( 32, -18, -10) );//4
    sillab1.vertices.push( new THREE.Vector3( 32, -13, -10) );//5
    sillab1.vertices.push( new THREE.Vector3( 27, -13, -10 ));//6
    sillab1.vertices.push( new THREE.Vector3( 27, -18, -10 ));//7

    sillab1.vertices.push( new THREE.Vector3( 32, -13, 0 ));//8
    sillab1.vertices.push( new THREE.Vector3( 27, -13, 0 ));//9
    
    sillab1.faces.push(new THREE.Face3( 1,0,3 ) );
    sillab1.faces.push(new THREE.Face3( 3,0,1 ) );
    sillab1.faces.push(new THREE.Face3( 2,1,3 ) );
    sillab1.faces.push(new THREE.Face3( 3,1,2 ) );

    sillab1.faces.push(new THREE.Face3( 8,1,2 ) );
    sillab1.faces.push(new THREE.Face3( 2,1,8 ) );
    sillab1.faces.push(new THREE.Face3( 9,8,2 ) );
    sillab1.faces.push(new THREE.Face3( 2,8,9 ) );

    sillab1.faces.push(new THREE.Face3( 1,5,4 ) );
    sillab1.faces.push(new THREE.Face3( 4,5,1 ) );
    sillab1.faces.push(new THREE.Face3( 0,1,4 ) );
    sillab1.faces.push(new THREE.Face3( 4,1,0 ) );

    sillab1.faces.push(new THREE.Face3( 2,6,7 ) );
    sillab1.faces.push(new THREE.Face3( 7,6,2 ) );
    sillab1.faces.push(new THREE.Face3( 3,2,7 ) );
    sillab1.faces.push(new THREE.Face3( 7,2,3 ) );

    var matsillalab = new THREE.MeshBasicMaterial( { color: 0x7C5251 } ); // e
    var silab1 = new THREE.Mesh (sillab1, matsillalab); // Crea el objeto

    var linsill1 = new THREE.Geometry();
    linsill1.vertices.push( new THREE.Vector3( 32, -18, -7 ) );
    linsill1.vertices.push( new THREE.Vector3( 32, -13.1, -7) );
    linsill1.vertices.push( new THREE.Vector3( 27, -13.1, -7 ) );
    linsill1.vertices.push( new THREE.Vector3( 27, -18, -7 ) );
    linsill1.vertices.push( new THREE.Vector3( 32, -18, -7 ) );
    var linesil1 = new THREE.Line( linsill1, material );


    // sillab2
    
    var sillab2= new THREE.Geometry();
    sillab2.vertices.push( new THREE.Vector3( 40, -18, -7) );//0
    sillab2.vertices.push( new THREE.Vector3( 40, -13, -7) );//1
    sillab2.vertices.push( new THREE.Vector3( 35, -13, -7 ));//2
    sillab2.vertices.push( new THREE.Vector3( 35, -18, -7 ));//3

    sillab2.vertices.push( new THREE.Vector3( 40, -18, -10) );//4
    sillab2.vertices.push( new THREE.Vector3( 40, -13, -10) );//5
    sillab2.vertices.push( new THREE.Vector3( 35, -13, -10 ));//6
    sillab2.vertices.push( new THREE.Vector3( 35, -18, -10 ));//7

    sillab2.vertices.push( new THREE.Vector3( 40, -13, 0 ));//8
    sillab2.vertices.push( new THREE.Vector3( 35, -13, 0 ));//9
    
    sillab2.faces.push(new THREE.Face3( 1,0,3 ) );
    sillab2.faces.push(new THREE.Face3( 3,0,1 ) );
    sillab2.faces.push(new THREE.Face3( 2,1,3 ) );
    sillab2.faces.push(new THREE.Face3( 3,1,2 ) );

    sillab2.faces.push(new THREE.Face3( 8,1,2 ) );
    sillab2.faces.push(new THREE.Face3( 2,1,8 ) );
    sillab2.faces.push(new THREE.Face3( 9,8,2 ) );
    sillab2.faces.push(new THREE.Face3( 2,8,9 ) );

    sillab2.faces.push(new THREE.Face3( 1,5,4 ) );
    sillab2.faces.push(new THREE.Face3( 4,5,1 ) );
    sillab2.faces.push(new THREE.Face3( 0,1,4 ) );
    sillab2.faces.push(new THREE.Face3( 4,1,0 ) );

    sillab2.faces.push(new THREE.Face3( 2,6,7 ) );
    sillab2.faces.push(new THREE.Face3( 7,6,2 ) );
    sillab2.faces.push(new THREE.Face3( 3,2,7 ) );
    sillab2.faces.push(new THREE.Face3( 7,2,3 ) );

    var silab2 = new THREE.Mesh (sillab2, matsillalab); // Crea el objeto

    var linsill2 = new THREE.Geometry();
    linsill2.vertices.push( new THREE.Vector3( 40, -18, -7 ) );
    linsill2.vertices.push( new THREE.Vector3( 40, -13.1, -7) );
    linsill2.vertices.push( new THREE.Vector3( 35, -13.1, -7 ) );
    linsill2.vertices.push( new THREE.Vector3( 35, -18, -7 ) );
    linsill2.vertices.push( new THREE.Vector3( 40, -18, -7 ) );
    var linesil2 = new THREE.Line( linsill2, material );

    // sillab3
    
    var sillab3= new THREE.Geometry();
    sillab3.vertices.push( new THREE.Vector3( 48, -18, -7) );//0
    sillab3.vertices.push( new THREE.Vector3( 48, -13, -7) );//1
    sillab3.vertices.push( new THREE.Vector3( 43, -13, -7 ));//2
    sillab3.vertices.push( new THREE.Vector3( 43, -18, -7 ));//3

    sillab3.vertices.push( new THREE.Vector3( 48, -18, -10) );//4
    sillab3.vertices.push( new THREE.Vector3( 48, -13, -10) );//5
    sillab3.vertices.push( new THREE.Vector3( 43, -13, -10 ));//6
    sillab3.vertices.push( new THREE.Vector3( 43, -18, -10 ));//7

    sillab3.vertices.push( new THREE.Vector3( 48, -13, 0 ));//8
    sillab3.vertices.push( new THREE.Vector3( 43, -13, 0 ));//9
    
    sillab3.faces.push(new THREE.Face3( 1,0,3 ) );
    sillab3.faces.push(new THREE.Face3( 3,0,1 ) );
    sillab3.faces.push(new THREE.Face3( 2,1,3 ) );
    sillab3.faces.push(new THREE.Face3( 3,1,2 ) );

    sillab3.faces.push(new THREE.Face3( 8,1,2 ) );
    sillab3.faces.push(new THREE.Face3( 2,1,8 ) );
    sillab3.faces.push(new THREE.Face3( 9,8,2 ) );
    sillab3.faces.push(new THREE.Face3( 2,8,9 ) );

    sillab3.faces.push(new THREE.Face3( 1,5,4 ) );
    sillab3.faces.push(new THREE.Face3( 4,5,1 ) );
    sillab3.faces.push(new THREE.Face3( 0,1,4 ) );
    sillab3.faces.push(new THREE.Face3( 4,1,0 ) );

    sillab3.faces.push(new THREE.Face3( 2,6,7 ) );
    sillab3.faces.push(new THREE.Face3( 7,6,2 ) );
    sillab3.faces.push(new THREE.Face3( 3,2,7 ) );
    sillab3.faces.push(new THREE.Face3( 7,2,3 ) );

    var silab3 = new THREE.Mesh (sillab3, matsillalab); // Crea el objeto

    var linsill3 = new THREE.Geometry();
    linsill3.vertices.push( new THREE.Vector3( 48, -18, -7 ) );
    linsill3.vertices.push( new THREE.Vector3( 48, -13.1, -7) );
    linsill3.vertices.push( new THREE.Vector3( 43, -13.1, -7 ) );
    linsill3.vertices.push( new THREE.Vector3( 43, -18, -7 ) );
    linsill3.vertices.push( new THREE.Vector3( 48, -18, -7 ) );
    var linesil3 = new THREE.Line( linsill3, material );


    // sillab4
    
    var sillab4= new THREE.Geometry();
    sillab4.vertices.push( new THREE.Vector3( 56, -18, -7) );//0
    sillab4.vertices.push( new THREE.Vector3( 56, -13, -7) );//1
    sillab4.vertices.push( new THREE.Vector3( 51, -13, -7 ));//2
    sillab4.vertices.push( new THREE.Vector3( 51, -18, -7 ));//3

    sillab4.vertices.push( new THREE.Vector3( 56, -18, -10) );//4
    sillab4.vertices.push( new THREE.Vector3( 56, -13, -10) );//5
    sillab4.vertices.push( new THREE.Vector3( 51, -13, -10 ));//6
    sillab4.vertices.push( new THREE.Vector3( 51, -18, -10 ));//7

    sillab4.vertices.push( new THREE.Vector3( 56, -13, 0 ));//8
    sillab4.vertices.push( new THREE.Vector3( 51, -13, 0 ));//9
    
    sillab4.faces.push(new THREE.Face3( 1,0,3 ) );
    sillab4.faces.push(new THREE.Face3( 3,0,1 ) );
    sillab4.faces.push(new THREE.Face3( 2,1,3 ) );
    sillab4.faces.push(new THREE.Face3( 3,1,2 ) );

    sillab4.faces.push(new THREE.Face3( 8,1,2 ) );
    sillab4.faces.push(new THREE.Face3( 2,1,8 ) );
    sillab4.faces.push(new THREE.Face3( 9,8,2 ) );
    sillab4.faces.push(new THREE.Face3( 2,8,9 ) );

    sillab4.faces.push(new THREE.Face3( 1,5,4 ) );
    sillab4.faces.push(new THREE.Face3( 4,5,1 ) );
    sillab4.faces.push(new THREE.Face3( 0,1,4 ) );
    sillab4.faces.push(new THREE.Face3( 4,1,0 ) );

    sillab4.faces.push(new THREE.Face3( 2,6,7 ) );
    sillab4.faces.push(new THREE.Face3( 7,6,2 ) );
    sillab4.faces.push(new THREE.Face3( 3,2,7 ) );
    sillab4.faces.push(new THREE.Face3( 7,2,3 ) );

    var silab4 = new THREE.Mesh (sillab4, matsillalab); // Crea el objeto

    var linsill4 = new THREE.Geometry();
    linsill4.vertices.push( new THREE.Vector3( 56, -18, -7 ) );
    linsill4.vertices.push( new THREE.Vector3( 56, -13.1, -7) );
    linsill4.vertices.push( new THREE.Vector3( 51, -13.1, -7 ) );
    linsill4.vertices.push( new THREE.Vector3( 51, -18, -7 ) );
    linsill4.vertices.push( new THREE.Vector3( 56, -18, -7 ) );
    var linesil4 = new THREE.Line( linsill4, material );

    // sillab5
    
    var sillab5= new THREE.Geometry();
    sillab5.vertices.push( new THREE.Vector3( 64, -18, -7) );//0
    sillab5.vertices.push( new THREE.Vector3( 64, -13, -7) );//1
    sillab5.vertices.push( new THREE.Vector3( 59, -13, -7 ));//2
    sillab5.vertices.push( new THREE.Vector3( 59, -18, -7 ));//3

    sillab5.vertices.push( new THREE.Vector3( 64, -18, -10) );//4
    sillab5.vertices.push( new THREE.Vector3( 64, -13, -10) );//5
    sillab5.vertices.push( new THREE.Vector3( 59, -13, -10 ));//6
    sillab5.vertices.push( new THREE.Vector3( 59, -18, -10 ));//7

    sillab5.vertices.push( new THREE.Vector3( 64, -13, 0 ));//8
    sillab5.vertices.push( new THREE.Vector3( 59, -13, 0 ));//9
    
    sillab5.faces.push(new THREE.Face3( 1,0,3 ) );
    sillab5.faces.push(new THREE.Face3( 3,0,1 ) );
    sillab5.faces.push(new THREE.Face3( 2,1,3 ) );
    sillab5.faces.push(new THREE.Face3( 3,1,2 ) );

    sillab5.faces.push(new THREE.Face3( 8,1,2 ) );
    sillab5.faces.push(new THREE.Face3( 2,1,8 ) );
    sillab5.faces.push(new THREE.Face3( 9,8,2 ) );
    sillab5.faces.push(new THREE.Face3( 2,8,9 ) );

    sillab5.faces.push(new THREE.Face3( 1,5,4 ) );
    sillab5.faces.push(new THREE.Face3( 4,5,1 ) );
    sillab5.faces.push(new THREE.Face3( 0,1,4 ) );
    sillab5.faces.push(new THREE.Face3( 4,1,0 ) );

    sillab5.faces.push(new THREE.Face3( 2,6,7 ) );
    sillab5.faces.push(new THREE.Face3( 7,6,2 ) );
    sillab5.faces.push(new THREE.Face3( 3,2,7 ) );
    sillab5.faces.push(new THREE.Face3( 7,2,3 ) );

    var silab5 = new THREE.Mesh (sillab5, matsillalab); // Crea el objeto

    var linsill5 = new THREE.Geometry();
    linsill5.vertices.push( new THREE.Vector3( 64, -18, -7 ) );
    linsill5.vertices.push( new THREE.Vector3( 64, -13.1, -7) );
    linsill5.vertices.push( new THREE.Vector3( 59, -13.1, -7 ) );
    linsill5.vertices.push( new THREE.Vector3( 59, -18, -7 ) );
    linsill5.vertices.push( new THREE.Vector3( 64, -18, -7 ) );
    var linesil5 = new THREE.Line( linsill5, material );


    // sillab6
    
    var sillab6= new THREE.Geometry();
    sillab6.vertices.push( new THREE.Vector3( 32, 18, -7) );//0
    sillab6.vertices.push( new THREE.Vector3( 32, 13, -7) );//1
    sillab6.vertices.push( new THREE.Vector3( 27, 13, -7 ));//2
    sillab6.vertices.push( new THREE.Vector3( 27, 18, -7 ));//3

    sillab6.vertices.push( new THREE.Vector3( 32, 18, -10) );//4
    sillab6.vertices.push( new THREE.Vector3( 32, 13, -10) );//5
    sillab6.vertices.push( new THREE.Vector3( 27, 13, -10 ));//6
    sillab6.vertices.push( new THREE.Vector3( 27, 18, -10 ));//7

    sillab6.vertices.push( new THREE.Vector3( 32, 13, 0 ));//8
    sillab6.vertices.push( new THREE.Vector3( 27, 13, 0 ));//9
    
    sillab6.faces.push(new THREE.Face3( 1,0,3 ) );
    sillab6.faces.push(new THREE.Face3( 3,0,1 ) );
    sillab6.faces.push(new THREE.Face3( 2,1,3 ) );
    sillab6.faces.push(new THREE.Face3( 3,1,2 ) );

    sillab6.faces.push(new THREE.Face3( 8,1,2 ) );
    sillab6.faces.push(new THREE.Face3( 2,1,8 ) );
    sillab6.faces.push(new THREE.Face3( 9,8,2 ) );
    sillab6.faces.push(new THREE.Face3( 2,8,9 ) );

    sillab6.faces.push(new THREE.Face3( 1,5,4 ) );
    sillab6.faces.push(new THREE.Face3( 4,5,1 ) );
    sillab6.faces.push(new THREE.Face3( 0,1,4 ) );
    sillab6.faces.push(new THREE.Face3( 4,1,0 ) );

    sillab6.faces.push(new THREE.Face3( 2,6,7 ) );
    sillab6.faces.push(new THREE.Face3( 7,6,2 ) );
    sillab6.faces.push(new THREE.Face3( 3,2,7 ) );
    sillab6.faces.push(new THREE.Face3( 7,2,3 ) );

    var silab6 = new THREE.Mesh (sillab6, matsillalab); // Crea el objeto

    var linsill6 = new THREE.Geometry();
    linsill6.vertices.push( new THREE.Vector3( 32, 18, -7 ) );
    linsill6.vertices.push( new THREE.Vector3( 32, 13.1, -7) );
    linsill6.vertices.push( new THREE.Vector3( 27, 13.1, -7 ) );
    linsill6.vertices.push( new THREE.Vector3( 27, 18, -7 ) );
    linsill6.vertices.push( new THREE.Vector3( 32, 18, -7 ) );
    var linesil6 = new THREE.Line( linsill6, material );


    // sillab7
    
    var sillab7= new THREE.Geometry();
    sillab7.vertices.push( new THREE.Vector3( 40, 18, -7) );//0
    sillab7.vertices.push( new THREE.Vector3( 40, 13, -7) );//1
    sillab7.vertices.push( new THREE.Vector3( 35, 13, -7 ));//2
    sillab7.vertices.push( new THREE.Vector3( 35, 18, -7 ));//3

    sillab7.vertices.push( new THREE.Vector3( 40, 18, -10) );//4
    sillab7.vertices.push( new THREE.Vector3( 40, 13, -10) );//5
    sillab7.vertices.push( new THREE.Vector3( 35, 13, -10 ));//6
    sillab7.vertices.push( new THREE.Vector3( 35, 18, -10 ));//7

    sillab7.vertices.push( new THREE.Vector3( 40, 13, 0 ));//8
    sillab7.vertices.push( new THREE.Vector3( 35, 13, 0 ));//9
    
    sillab7.faces.push(new THREE.Face3( 1,0,3 ) );
    sillab7.faces.push(new THREE.Face3( 3,0,1 ) );
    sillab7.faces.push(new THREE.Face3( 2,1,3 ) );
    sillab7.faces.push(new THREE.Face3( 3,1,2 ) );

    sillab7.faces.push(new THREE.Face3( 8,1,2 ) );
    sillab7.faces.push(new THREE.Face3( 2,1,8 ) );
    sillab7.faces.push(new THREE.Face3( 9,8,2 ) );
    sillab7.faces.push(new THREE.Face3( 2,8,9 ) );

    sillab7.faces.push(new THREE.Face3( 1,5,4 ) );
    sillab7.faces.push(new THREE.Face3( 4,5,1 ) );
    sillab7.faces.push(new THREE.Face3( 0,1,4 ) );
    sillab7.faces.push(new THREE.Face3( 4,1,0 ) );

    sillab7.faces.push(new THREE.Face3( 2,6,7 ) );
    sillab7.faces.push(new THREE.Face3( 7,6,2 ) );
    sillab7.faces.push(new THREE.Face3( 3,2,7 ) );
    sillab7.faces.push(new THREE.Face3( 7,2,3 ) );

    var silab7 = new THREE.Mesh (sillab7, matsillalab); // Crea el objeto

    var linsill7 = new THREE.Geometry();
    linsill7.vertices.push( new THREE.Vector3( 40, 18, -7 ) );
    linsill7.vertices.push( new THREE.Vector3( 40, 13.1, -7) );
    linsill7.vertices.push( new THREE.Vector3( 35, 13.1, -7 ) );
    linsill7.vertices.push( new THREE.Vector3( 35, 18, -7 ) );
    linsill7.vertices.push( new THREE.Vector3( 40, 18, -7 ) );
    var linesil7 = new THREE.Line( linsill7, material );

    // sillab8
    
    var sillab8= new THREE.Geometry();
    sillab8.vertices.push( new THREE.Vector3( 48, 18, -7) );//0
    sillab8.vertices.push( new THREE.Vector3( 48, 13, -7) );//1
    sillab8.vertices.push( new THREE.Vector3( 43, 13, -7 ));//2
    sillab8.vertices.push( new THREE.Vector3( 43, 18, -7 ));//3

    sillab8.vertices.push( new THREE.Vector3( 48, 18, -10) );//4
    sillab8.vertices.push( new THREE.Vector3( 48, 13, -10) );//5
    sillab8.vertices.push( new THREE.Vector3( 43, 13, -10 ));//6
    sillab8.vertices.push( new THREE.Vector3( 43, 18, -10 ));//7

    sillab8.vertices.push( new THREE.Vector3( 48, 13, 0 ));//8
    sillab8.vertices.push( new THREE.Vector3( 43, 13, 0 ));//9
    
    sillab8.faces.push(new THREE.Face3( 1,0,3 ) );
    sillab8.faces.push(new THREE.Face3( 3,0,1 ) );
    sillab8.faces.push(new THREE.Face3( 2,1,3 ) );
    sillab8.faces.push(new THREE.Face3( 3,1,2 ) );

    sillab8.faces.push(new THREE.Face3( 8,1,2 ) );
    sillab8.faces.push(new THREE.Face3( 2,1,8 ) );
    sillab8.faces.push(new THREE.Face3( 9,8,2 ) );
    sillab8.faces.push(new THREE.Face3( 2,8,9 ) );

    sillab8.faces.push(new THREE.Face3( 1,5,4 ) );
    sillab8.faces.push(new THREE.Face3( 4,5,1 ) );
    sillab8.faces.push(new THREE.Face3( 0,1,4 ) );
    sillab8.faces.push(new THREE.Face3( 4,1,0 ) );

    sillab8.faces.push(new THREE.Face3( 2,6,7 ) );
    sillab8.faces.push(new THREE.Face3( 7,6,2 ) );
    sillab8.faces.push(new THREE.Face3( 3,2,7 ) );
    sillab8.faces.push(new THREE.Face3( 7,2,3 ) );

    var silab8 = new THREE.Mesh (sillab8, matsillalab); // Crea el objeto

    var linsill8 = new THREE.Geometry();
    linsill8.vertices.push( new THREE.Vector3( 48, 18, -7 ) );
    linsill8.vertices.push( new THREE.Vector3( 48, 13.1, -7) );
    linsill8.vertices.push( new THREE.Vector3( 43, 13.1, -7 ) );
    linsill8.vertices.push( new THREE.Vector3( 43, 18, -7 ) );
    linsill8.vertices.push( new THREE.Vector3( 48, 18, -7 ) );
    var linesil8 = new THREE.Line( linsill8, material );


    // sillab9
    
    var sillab9= new THREE.Geometry();
    sillab9.vertices.push( new THREE.Vector3( 56, 18, -7) );//0
    sillab9.vertices.push( new THREE.Vector3( 56, 13, -7) );//1
    sillab9.vertices.push( new THREE.Vector3( 51, 13, -7 ));//2
    sillab9.vertices.push( new THREE.Vector3( 51, 18, -7 ));//3

    sillab9.vertices.push( new THREE.Vector3( 56, 18, -10) );//4
    sillab9.vertices.push( new THREE.Vector3( 56, 13, -10) );//5
    sillab9.vertices.push( new THREE.Vector3( 51, 13, -10 ));//6
    sillab9.vertices.push( new THREE.Vector3( 51, 18, -10 ));//7

    sillab9.vertices.push( new THREE.Vector3( 56, 13, 0 ));//8
    sillab9.vertices.push( new THREE.Vector3( 51, 13, 0 ));//9
    
    sillab9.faces.push(new THREE.Face3( 1,0,3 ) );
    sillab9.faces.push(new THREE.Face3( 3,0,1 ) );
    sillab9.faces.push(new THREE.Face3( 2,1,3 ) );
    sillab9.faces.push(new THREE.Face3( 3,1,2 ) );

    sillab9.faces.push(new THREE.Face3( 8,1,2 ) );
    sillab9.faces.push(new THREE.Face3( 2,1,8 ) );
    sillab9.faces.push(new THREE.Face3( 9,8,2 ) );
    sillab9.faces.push(new THREE.Face3( 2,8,9 ) );

    sillab9.faces.push(new THREE.Face3( 1,5,4 ) );
    sillab9.faces.push(new THREE.Face3( 4,5,1 ) );
    sillab9.faces.push(new THREE.Face3( 0,1,4 ) );
    sillab9.faces.push(new THREE.Face3( 4,1,0 ) );

    sillab9.faces.push(new THREE.Face3( 2,6,7 ) );
    sillab9.faces.push(new THREE.Face3( 7,6,2 ) );
    sillab9.faces.push(new THREE.Face3( 3,2,7 ) );
    sillab9.faces.push(new THREE.Face3( 7,2,3 ) );

    var silab9 = new THREE.Mesh (sillab9, matsillalab); // Crea el objeto

    var linsill9 = new THREE.Geometry();
    linsill9.vertices.push( new THREE.Vector3( 56, 18, -7 ) );
    linsill9.vertices.push( new THREE.Vector3( 56, 13.1, -7) );
    linsill9.vertices.push( new THREE.Vector3( 51, 13.1, -7 ) );
    linsill9.vertices.push( new THREE.Vector3( 51, 18, -7 ) );
    linsill9.vertices.push( new THREE.Vector3( 56, 18, -7 ) );
    var linesil9 = new THREE.Line( linsill9, material );

    // sillab10
    
    var sillab10= new THREE.Geometry();
    sillab10.vertices.push( new THREE.Vector3( 64, 18, -7) );//0
    sillab10.vertices.push( new THREE.Vector3( 64, 13, -7) );//1
    sillab10.vertices.push( new THREE.Vector3( 59, 13, -7 ));//2
    sillab10.vertices.push( new THREE.Vector3( 59, 18, -7 ));//3

    sillab10.vertices.push( new THREE.Vector3( 64, 18, -10) );//4
    sillab10.vertices.push( new THREE.Vector3( 64, 13, -10) );//5
    sillab10.vertices.push( new THREE.Vector3( 59, 13, -10 ));//6
    sillab10.vertices.push( new THREE.Vector3( 59, 18, -10 ));//7

    sillab10.vertices.push( new THREE.Vector3( 64, 13, 0 ));//8
    sillab10.vertices.push( new THREE.Vector3( 59, 13, 0 ));//9
    
    sillab10.faces.push(new THREE.Face3( 1,0,3 ) );
    sillab10.faces.push(new THREE.Face3( 3,0,1 ) );
    sillab10.faces.push(new THREE.Face3( 2,1,3 ) );
    sillab10.faces.push(new THREE.Face3( 3,1,2 ) );

    sillab10.faces.push(new THREE.Face3( 8,1,2 ) );
    sillab10.faces.push(new THREE.Face3( 2,1,8 ) );
    sillab10.faces.push(new THREE.Face3( 9,8,2 ) );
    sillab10.faces.push(new THREE.Face3( 2,8,9 ) );

    sillab10.faces.push(new THREE.Face3( 1,5,4 ) );
    sillab10.faces.push(new THREE.Face3( 4,5,1 ) );
    sillab10.faces.push(new THREE.Face3( 0,1,4 ) );
    sillab10.faces.push(new THREE.Face3( 4,1,0 ) );

    sillab10.faces.push(new THREE.Face3( 2,6,7 ) );
    sillab10.faces.push(new THREE.Face3( 7,6,2 ) );
    sillab10.faces.push(new THREE.Face3( 3,2,7 ) );
    sillab10.faces.push(new THREE.Face3( 7,2,3 ) );

    var silab10 = new THREE.Mesh (sillab10, matsillalab); // Crea el objeto

    var linsill10 = new THREE.Geometry();
    linsill10.vertices.push( new THREE.Vector3( 64, 18, -7 ) );
    linsill10.vertices.push( new THREE.Vector3( 64, 13.1, -7) );
    linsill10.vertices.push( new THREE.Vector3( 59, 13.1, -7 ) );
    linsill10.vertices.push( new THREE.Vector3( 59, 18, -7 ) );
    linsill10.vertices.push( new THREE.Vector3( 64, 18, -7 ) );
    var linesil10 = new THREE.Line( linsill10, material );

    // Tallo1
    
    var tallo1 = new THREE.Geometry();
    tallo1.vertices.push( new THREE.Vector3( -23, 21, -2 ) );//0
    tallo1.vertices.push( new THREE.Vector3( -23.2, 21, -2 ) );//1
    tallo1.vertices.push( new THREE.Vector3( -23.2, 21.2, -2 ) );//2
    tallo1.vertices.push( new THREE.Vector3( -23, 21.2, -2 ) );//3
    tallo1.vertices.push( new THREE.Vector3( -23, 21, -7 ) );//4
    tallo1.vertices.push( new THREE.Vector3( -23.2, 21, -7 ) );//8
    tallo1.vertices.push( new THREE.Vector3( -23.2, 21.2, -7 ) );//6
    tallo1.vertices.push( new THREE.Vector3( -23, 21.2, -7 ) );//7

    tallo1.vertices.push( new THREE.Vector3( -22, 20, -6.5 ) );//8
    tallo1.vertices.push( new THREE.Vector3( -24.2, 20, -6.5 ) );//9
    tallo1.vertices.push( new THREE.Vector3( -24.2, 22.2, -6.5 ) );//10
    tallo1.vertices.push( new THREE.Vector3( -22, 22.2, -6.5 ) );//11

    tallo1.faces.push( new THREE.Face3( 8, 9, 10 ) );
    tallo1.faces.push( new THREE.Face3( 10, 9, 8 ) );
    tallo1.faces.push( new THREE.Face3( 11, 8, 10 ) );
    tallo1.faces.push( new THREE.Face3( 10, 8, 11 ) );

    tallo1.faces.push( new THREE.Face3( 0, 2, 4 ) );
    tallo1.faces.push( new THREE.Face3( 4, 6, 2 ) );
    tallo1.faces.push( new THREE.Face3( 0, 4, 7 ) );
    tallo1.faces.push( new THREE.Face3( 0, 3, 7 ) );
    tallo1.faces.push( new THREE.Face3( 3, 1, 5 ) );
    tallo1.faces.push( new THREE.Face3( 5, 7, 3 ) );
    tallo1.faces.push( new THREE.Face3( 1, 2, 6 ) );
    tallo1.faces.push( new THREE.Face3( 5, 6, 1 ) );
    tallo1.faces.push( new THREE.Face3( 4, 2, 0 ) );
    tallo1.faces.push( new THREE.Face3( 2, 6, 4 ) );
    tallo1.faces.push( new THREE.Face3( 7, 4, 0 ) );
    tallo1.faces.push( new THREE.Face3( 7, 3, 0 ) );
    tallo1.faces.push( new THREE.Face3( 5, 1, 3 ) );
    tallo1.faces.push( new THREE.Face3( 3, 7, 5 ) );
    tallo1.faces.push( new THREE.Face3( 6, 2, 1 ) );
    tallo1.faces.push( new THREE.Face3( 1, 6, 5 ) );
    tallo1.faces.push( new THREE.Face3( 3, 0, 2 ) );
    tallo1.faces.push( new THREE.Face3( 3, 1, 2 ) );
    tallo1.faces.push( new THREE.Face3( 2, 0, 3 ) );
    tallo1.faces.push( new THREE.Face3( 2, 1, 3 ) );

    var materialtallo = new THREE.MeshBasicMaterial( { color: 0x4B3621 } ); // cafe
    var tall1 = new THREE.Mesh (tallo1, materialtallo); // Crea el objeto

    // arbol1
    
    var arbol1 = new THREE.Geometry();
    arbol1.vertices.push( new THREE.Vector3( -23, 21, -2 ) );//0
    arbol1.vertices.push( new THREE.Vector3( -23.2, 21, -2 ) );//1
    arbol1.vertices.push( new THREE.Vector3( -23.2, 21.2, -2 ) );//2
    arbol1.vertices.push( new THREE.Vector3( -23, 21.2, -2 ) );//3

    arbol1.vertices.push( new THREE.Vector3( -22, 20, -4 ) );//4
    arbol1.vertices.push( new THREE.Vector3( -24.2, 20, -4 ) );//5
    arbol1.vertices.push( new THREE.Vector3( -24.2, 22.2, -4 ) );//6
    arbol1.vertices.push( new THREE.Vector3( -22, 22.2, -4 ) );//7

    arbol1.vertices.push( new THREE.Vector3( -22.2, 21.1, -3 ) );//4
    arbol1.vertices.push( new THREE.Vector3( -23.1, 20.2, -3 ) );//5
    arbol1.vertices.push( new THREE.Vector3( -24, 21.1, -3 ) );//6
    arbol1.vertices.push( new THREE.Vector3( -23.2, 22, -3 ) );//7

    arbol1.faces.push( new THREE.Face3( 0, 9, 4 ) );
    arbol1.faces.push( new THREE.Face3( 4, 9, 0 ) );
    arbol1.faces.push( new THREE.Face3( 0, 8, 4 ) );
    arbol1.faces.push( new THREE.Face3( 4, 8, 0 ) );

    arbol1.faces.push( new THREE.Face3( 1, 10, 5 ) );
    arbol1.faces.push( new THREE.Face3( 5, 10, 1 ) );
    arbol1.faces.push( new THREE.Face3( 1, 9, 5 ) );
    arbol1.faces.push( new THREE.Face3( 5, 9, 1 ) );

    arbol1.faces.push( new THREE.Face3( 2, 10, 6 ) );
    arbol1.faces.push( new THREE.Face3( 6, 10, 2 ) );
    arbol1.faces.push( new THREE.Face3( 2, 11, 6 ) );
    arbol1.faces.push( new THREE.Face3( 6, 11, 2 ) );

    arbol1.faces.push( new THREE.Face3( 3, 11, 7 ) );
    arbol1.faces.push( new THREE.Face3( 7, 11, 3 ) );
    arbol1.faces.push( new THREE.Face3( 3, 8, 7 ) );
    arbol1.faces.push( new THREE.Face3( 7, 8, 3 ) );

    var materialarbol = new THREE.MeshBasicMaterial( { color: 0x00722e } ); // Material de color rojo
    var arb1 = new THREE.Mesh (arbol1, materialarbol); // Crea el objeto

    // arbol2
    
    var arbol2 = new THREE.Geometry();
    arbol2.vertices.push( new THREE.Vector3( -23, 21, -3 ) );//0
    arbol2.vertices.push( new THREE.Vector3( -23.2, 21, -3 ) );//1
    arbol2.vertices.push( new THREE.Vector3( -23.2, 21.2, -3 ) );//2
    arbol2.vertices.push( new THREE.Vector3( -23, 21.2, -3 ) );//3

    arbol2.vertices.push( new THREE.Vector3( -22.2, 20.2, -4 ) );//4
    arbol2.vertices.push( new THREE.Vector3( -24, 20.2, -4 ) );//5
    arbol2.vertices.push( new THREE.Vector3( -24, 22, -4 ) );//6
    arbol2.vertices.push( new THREE.Vector3( -22.2, 22, -4 ) );//7

    arbol2.vertices.push( new THREE.Vector3( -21.5, 21.1, -5 ) );//8
    arbol2.vertices.push( new THREE.Vector3( -23.1, 19.5, -5 ) );//9
    arbol2.vertices.push( new THREE.Vector3( -24.5, 21.1, -5 ) );//10
    arbol2.vertices.push( new THREE.Vector3( -23.2, 22.5, -5 ) );//11

    arbol2.faces.push( new THREE.Face3( 0, 9, 4 ) );
    arbol2.faces.push( new THREE.Face3( 4, 9, 0 ) );
    arbol2.faces.push( new THREE.Face3( 0, 8, 4 ) );
    arbol2.faces.push( new THREE.Face3( 4, 8, 0 ) );

    arbol2.faces.push( new THREE.Face3( 1, 10, 5 ) );
    arbol2.faces.push( new THREE.Face3( 5, 10, 1 ) );
    arbol2.faces.push( new THREE.Face3( 1, 9, 5 ) );
    arbol2.faces.push( new THREE.Face3( 5, 9, 1 ) );

    arbol2.faces.push( new THREE.Face3( 2, 10, 6 ) );
    arbol2.faces.push( new THREE.Face3( 6, 10, 2 ) );
    arbol2.faces.push( new THREE.Face3( 2, 11, 6 ) );
    arbol2.faces.push( new THREE.Face3( 6, 11, 2 ) );

    arbol2.faces.push( new THREE.Face3( 3, 11, 7 ) );
    arbol2.faces.push( new THREE.Face3( 7, 11, 3 ) );
    arbol2.faces.push( new THREE.Face3( 3, 8, 7 ) );
    arbol2.faces.push( new THREE.Face3( 7, 8, 3 ) );

    var arb2 = new THREE.Mesh (arbol2, materialarbol); // Crea el objeto


    // arbol3
    
    var arbol3 = new THREE.Geometry();
    arbol3.vertices.push( new THREE.Vector3( -23, 21, -4 ) );//0
    arbol3.vertices.push( new THREE.Vector3( -23.2, 21, -4 ) );//1
    arbol3.vertices.push( new THREE.Vector3( -23.2, 21.2, -4 ) );//2
    arbol3.vertices.push( new THREE.Vector3( -23, 21.2, -4 ) );//3

    arbol3.vertices.push( new THREE.Vector3( -22, 20, -6 ) );//4
    arbol3.vertices.push( new THREE.Vector3( -24.2, 20, -6 ) );//5
    arbol3.vertices.push( new THREE.Vector3( -24.2, 22.2, -6 ) );//6
    arbol3.vertices.push( new THREE.Vector3( -22, 22.2, -6 ) );//7

    arbol3.vertices.push( new THREE.Vector3( -22.2, 21.1, -5 ) );//4
    arbol3.vertices.push( new THREE.Vector3( -23.1, 20.2, -5 ) );//5
    arbol3.vertices.push( new THREE.Vector3( -24, 21.1, -5 ) );//6
    arbol3.vertices.push( new THREE.Vector3( -23.2, 22, -5 ) );//7

    arbol3.faces.push( new THREE.Face3( 0, 9, 4 ) );
    arbol3.faces.push( new THREE.Face3( 4, 9, 0 ) );
    arbol3.faces.push( new THREE.Face3( 0, 8, 4 ) );
    arbol3.faces.push( new THREE.Face3( 4, 8, 0 ) );

    arbol3.faces.push( new THREE.Face3( 1, 10, 5 ) );
    arbol3.faces.push( new THREE.Face3( 5, 10, 1 ) );
    arbol3.faces.push( new THREE.Face3( 1, 9, 5 ) );
    arbol3.faces.push( new THREE.Face3( 5, 9, 1 ) );

    arbol3.faces.push( new THREE.Face3( 2, 10, 6 ) );
    arbol3.faces.push( new THREE.Face3( 6, 10, 2 ) );
    arbol3.faces.push( new THREE.Face3( 2, 11, 6 ) );
    arbol3.faces.push( new THREE.Face3( 6, 11, 2 ) );

    arbol3.faces.push( new THREE.Face3( 3, 11, 7 ) );
    arbol3.faces.push( new THREE.Face3( 7, 11, 3 ) );
    arbol3.faces.push( new THREE.Face3( 3, 8, 7 ) );
    arbol3.faces.push( new THREE.Face3( 7, 8, 3 ) );

    var arb3 = new THREE.Mesh (arbol3, materialarbol); // Crea el objeto


    // maceta1
    
    var maceta1 = new THREE.Geometry();

    maceta1.vertices.push( new THREE.Vector3( -22, 20, -6.5 ) );//0
    maceta1.vertices.push( new THREE.Vector3( -24.2, 20, -6.5 ) );//1
    maceta1.vertices.push( new THREE.Vector3( -24.2, 22.2, -6.5 ) );//2
    maceta1.vertices.push( new THREE.Vector3( -22, 22.2, -6.5 ) );//3

    maceta1.vertices.push( new THREE.Vector3( -22.2, 20.2, -10 ) );//4
    maceta1.vertices.push( new THREE.Vector3( -24, 20.2, -10 ) );//5
    maceta1.vertices.push( new THREE.Vector3( -24, 22, -10 ) );//6
    maceta1.vertices.push( new THREE.Vector3( -22.2, 22, -10 ) );//7

    maceta1.faces.push( new THREE.Face3( 0, 4, 5 ) );
    maceta1.faces.push( new THREE.Face3( 5, 4, 0) );
    maceta1.faces.push( new THREE.Face3( 1, 0, 5 ) );
    maceta1.faces.push( new THREE.Face3( 5, 0, 1) );

    maceta1.faces.push( new THREE.Face3( 1, 5, 6 ) );
    maceta1.faces.push( new THREE.Face3( 6, 5, 1) );
    maceta1.faces.push( new THREE.Face3( 2, 1, 6 ) );
    maceta1.faces.push( new THREE.Face3( 6, 1, 2) );

    maceta1.faces.push( new THREE.Face3( 2, 6, 7 ) );
    maceta1.faces.push( new THREE.Face3( 7, 6, 2) );
    maceta1.faces.push( new THREE.Face3( 3, 2, 7 ) );
    maceta1.faces.push( new THREE.Face3( 7, 2, 3) );

    maceta1.faces.push( new THREE.Face3( 3, 7, 4 ) );
    maceta1.faces.push( new THREE.Face3( 4, 7, 3) );
    maceta1.faces.push( new THREE.Face3( 0, 3, 4 ) );
    maceta1.faces.push( new THREE.Face3( 4, 3, 0) );

    var materialmaceta = new THREE.MeshBasicMaterial( { color: 0x000000 } ); // Material de color rojo
    var macet1 = new THREE.Mesh (maceta1, materialmaceta); // Crea el objeto

    // Tallo2
    
    var tallo2 = new THREE.Geometry();
    tallo2.vertices.push( new THREE.Vector3( -46, 6, -2 ) );//0
    tallo2.vertices.push( new THREE.Vector3( -46.2, 6, -2 ) );//1
    tallo2.vertices.push( new THREE.Vector3( -46.2, 6.2, -2 ) );//2
    tallo2.vertices.push( new THREE.Vector3( -46, 6.2, -2 ) );//3
    tallo2.vertices.push( new THREE.Vector3( -46, 6, -7 ) );//4
    tallo2.vertices.push( new THREE.Vector3( -46.2, 6, -7 ) );//8
    tallo2.vertices.push( new THREE.Vector3( -46.2, 6.2, -7 ) );//6
    tallo2.vertices.push( new THREE.Vector3( -46, 6.2, -7 ) );//7

    tallo2.vertices.push( new THREE.Vector3( -45, 5, -6.5 ) );//8
    tallo2.vertices.push( new THREE.Vector3( -47.2, 5, -6.5 ) );//9
    tallo2.vertices.push( new THREE.Vector3( -47.2, 7.2, -6.5 ) );//10
    tallo2.vertices.push( new THREE.Vector3( -45, 7.2, -6.5 ) );//11

    tallo2.faces.push( new THREE.Face3( 8, 9, 10 ) );
    tallo2.faces.push( new THREE.Face3( 10, 9, 8 ) );
    tallo2.faces.push( new THREE.Face3( 11, 8, 10 ) );
    tallo2.faces.push( new THREE.Face3( 10, 8, 11 ) );
    tallo2.faces.push( new THREE.Face3( 0, 2, 4 ) );
    tallo2.faces.push( new THREE.Face3( 4, 6, 2 ) );
    tallo2.faces.push( new THREE.Face3( 0, 4, 7 ) );
    tallo2.faces.push( new THREE.Face3( 0, 3, 7 ) );
    tallo2.faces.push( new THREE.Face3( 3, 1, 5 ) );
    tallo2.faces.push( new THREE.Face3( 5, 7, 3 ) );
    tallo2.faces.push( new THREE.Face3( 1, 2, 6 ) );
    tallo2.faces.push( new THREE.Face3( 5, 6, 1 ) );
    tallo2.faces.push( new THREE.Face3( 4, 2, 0 ) );
    tallo2.faces.push( new THREE.Face3( 2, 6, 4 ) );
    tallo2.faces.push( new THREE.Face3( 7, 4, 0 ) );
    tallo2.faces.push( new THREE.Face3( 7, 3, 0 ) );
    tallo2.faces.push( new THREE.Face3( 5, 1, 3 ) );
    tallo2.faces.push( new THREE.Face3( 3, 7, 5 ) );
    tallo2.faces.push( new THREE.Face3( 6, 2, 1 ) );
    tallo2.faces.push( new THREE.Face3( 1, 6, 5 ) );
    tallo2.faces.push( new THREE.Face3( 3, 0, 2 ) );
    tallo2.faces.push( new THREE.Face3( 3, 1, 2 ) );
    tallo2.faces.push( new THREE.Face3( 2, 0, 3 ) );
    tallo2.faces.push( new THREE.Face3( 2, 1, 3 ) );

    var tall2 = new THREE.Mesh (tallo2, materialtallo); // Crea el objeto

    // arbol1a
    
    var arbol1a = new THREE.Geometry();
    arbol1a.vertices.push( new THREE.Vector3( -46, 6, -2 ) );//0
    arbol1a.vertices.push( new THREE.Vector3( -46.2, 6, -2 ) );//1
    arbol1a.vertices.push( new THREE.Vector3( -46.2, 6.2, -2 ) );//2
    arbol1a.vertices.push( new THREE.Vector3( -46, 6.2, -2 ) );//3

    arbol1a.vertices.push( new THREE.Vector3( -45, 5, -4 ) );//4
    arbol1a.vertices.push( new THREE.Vector3( -47.2, 5, -4 ) );//5
    arbol1a.vertices.push( new THREE.Vector3( -47.2, 7.2, -4 ) );//6
    arbol1a.vertices.push( new THREE.Vector3( -45, 7.2, -4 ) );//7

    arbol1a.vertices.push( new THREE.Vector3( -45.2, 6.1, -3 ) );//4
    arbol1a.vertices.push( new THREE.Vector3( -46.1, 5.2, -3 ) );//5
    arbol1a.vertices.push( new THREE.Vector3( -47, 6.1, -3 ) );//6
    arbol1a.vertices.push( new THREE.Vector3( -46.2, 7, -3 ) );//7

    arbol1a.faces.push( new THREE.Face3( 0, 9, 4 ) );
    arbol1a.faces.push( new THREE.Face3( 4, 9, 0 ) );
    arbol1a.faces.push( new THREE.Face3( 0, 8, 4 ) );
    arbol1a.faces.push( new THREE.Face3( 4, 8, 0 ) );

    arbol1a.faces.push( new THREE.Face3( 1, 10, 5 ) );
    arbol1a.faces.push( new THREE.Face3( 5, 10, 1 ) );
    arbol1a.faces.push( new THREE.Face3( 1, 9, 5 ) );
    arbol1a.faces.push( new THREE.Face3( 5, 9, 1 ) );

    arbol1a.faces.push( new THREE.Face3( 2, 10, 6 ) );
    arbol1a.faces.push( new THREE.Face3( 6, 10, 2 ) );
    arbol1a.faces.push( new THREE.Face3( 2, 11, 6 ) );
    arbol1a.faces.push( new THREE.Face3( 6, 11, 2 ) );

    arbol1a.faces.push( new THREE.Face3( 3, 11, 7 ) );
    arbol1a.faces.push( new THREE.Face3( 7, 11, 3 ) );
    arbol1a.faces.push( new THREE.Face3( 3, 8, 7 ) );
    arbol1a.faces.push( new THREE.Face3( 7, 8, 3 ) );

    var arb1a = new THREE.Mesh (arbol1a, materialarbol); // Crea el objeto

    // arbol2a
    
    var arbol2a = new THREE.Geometry();
    arbol2a.vertices.push( new THREE.Vector3( -46, 6, -3 ) );//0
    arbol2a.vertices.push( new THREE.Vector3( -46.2, 6, -3 ) );//1
    arbol2a.vertices.push( new THREE.Vector3( -46.2, 6.2, -3 ) );//2
    arbol2a.vertices.push( new THREE.Vector3( -46, 6.2, -3 ) );//3

    arbol2a.vertices.push( new THREE.Vector3( -45.2, 5.2, -4 ) );//4
    arbol2a.vertices.push( new THREE.Vector3( -47, 5.2, -4 ) );//5
    arbol2a.vertices.push( new THREE.Vector3( -47, 7, -4 ) );//6
    arbol2a.vertices.push( new THREE.Vector3( -45.2, 7, -4 ) );//7

    arbol2a.vertices.push( new THREE.Vector3( -44.5, 6.1, -5 ) );//8
    arbol2a.vertices.push( new THREE.Vector3( -46.1, 4.5, -5 ) );//9
    arbol2a.vertices.push( new THREE.Vector3( -47.5, 6.1, -5 ) );//10
    arbol2a.vertices.push( new THREE.Vector3( -46.2, 7.5, -5 ) );//11

    arbol2a.faces.push( new THREE.Face3( 0, 9, 4 ) );
    arbol2a.faces.push( new THREE.Face3( 4, 9, 0 ) );
    arbol2a.faces.push( new THREE.Face3( 0, 8, 4 ) );
    arbol2a.faces.push( new THREE.Face3( 4, 8, 0 ) );

    arbol2a.faces.push( new THREE.Face3( 1, 10, 5 ) );
    arbol2a.faces.push( new THREE.Face3( 5, 10, 1 ) );
    arbol2a.faces.push( new THREE.Face3( 1, 9, 5 ) );
    arbol2a.faces.push( new THREE.Face3( 5, 9, 1 ) );

    arbol2a.faces.push( new THREE.Face3( 2, 10, 6 ) );
    arbol2a.faces.push( new THREE.Face3( 6, 10, 2 ) );
    arbol2a.faces.push( new THREE.Face3( 2, 11, 6 ) );
    arbol2a.faces.push( new THREE.Face3( 6, 11, 2 ) );

    arbol2a.faces.push( new THREE.Face3( 3, 11, 7 ) );
    arbol2a.faces.push( new THREE.Face3( 7, 11, 3 ) );
    arbol2a.faces.push( new THREE.Face3( 3, 8, 7 ) );
    arbol2a.faces.push( new THREE.Face3( 7, 8, 3 ) );

    var arb2a = new THREE.Mesh (arbol2a, materialarbol); // Crea el objeto


    // arbol3a
    
    var arbol3a = new THREE.Geometry();
    arbol3a.vertices.push( new THREE.Vector3( -46, 6, -4 ) );//0
    arbol3a.vertices.push( new THREE.Vector3( -46.2, 6, -4 ) );//1
    arbol3a.vertices.push( new THREE.Vector3( -46.2, 6.2, -4 ) );//2
    arbol3a.vertices.push( new THREE.Vector3( -46, 6.2, -4 ) );//3

    arbol3a.vertices.push( new THREE.Vector3( -45, 5, -6 ) );//4
    arbol3a.vertices.push( new THREE.Vector3( -47.2, 5, -6 ) );//5
    arbol3a.vertices.push( new THREE.Vector3( -47.2, 7.2, -6 ) );//6
    arbol3a.vertices.push( new THREE.Vector3( -45, 7.2, -6 ) );//7

    arbol3a.vertices.push( new THREE.Vector3( -45.2, 6.1, -5 ) );//4
    arbol3a.vertices.push( new THREE.Vector3( -46.1, 5.2, -5 ) );//5
    arbol3a.vertices.push( new THREE.Vector3( -47, 6.1, -5 ) );//6
    arbol3a.vertices.push( new THREE.Vector3( -46.2, 7, -5 ) );//7

    arbol3a.faces.push( new THREE.Face3( 0, 9, 4 ) );
    arbol3a.faces.push( new THREE.Face3( 4, 9, 0 ) );
    arbol3a.faces.push( new THREE.Face3( 0, 8, 4 ) );
    arbol3a.faces.push( new THREE.Face3( 4, 8, 0 ) );

    arbol3a.faces.push( new THREE.Face3( 1, 10, 5 ) );
    arbol3a.faces.push( new THREE.Face3( 5, 10, 1 ) );
    arbol3a.faces.push( new THREE.Face3( 1, 9, 5 ) );
    arbol3a.faces.push( new THREE.Face3( 5, 9, 1 ) );

    arbol3a.faces.push( new THREE.Face3( 2, 10, 6 ) );
    arbol3a.faces.push( new THREE.Face3( 6, 10, 2 ) );
    arbol3a.faces.push( new THREE.Face3( 2, 11, 6 ) );
    arbol3a.faces.push( new THREE.Face3( 6, 11, 2 ) );

    arbol3a.faces.push( new THREE.Face3( 3, 11, 7 ) );
    arbol3a.faces.push( new THREE.Face3( 7, 11, 3 ) );
    arbol3a.faces.push( new THREE.Face3( 3, 8, 7 ) );
    arbol3a.faces.push( new THREE.Face3( 7, 8, 3 ) );

    var arb3a = new THREE.Mesh (arbol3a, materialarbol); // Crea el objeto


    // maceta2
    
    var maceta2 = new THREE.Geometry();

    maceta2.vertices.push( new THREE.Vector3( -45, 5, -6.5 ) );//0
    maceta2.vertices.push( new THREE.Vector3( -47.2, 5, -6.5 ) );//1
    maceta2.vertices.push( new THREE.Vector3( -47.2, 7.2, -6.5 ) );//2
    maceta2.vertices.push( new THREE.Vector3( -45, 7.2, -6.5 ) );//3

    maceta2.vertices.push( new THREE.Vector3( -45.2, 5.2, -10 ) );//4
    maceta2.vertices.push( new THREE.Vector3( -47, 5.2, -10 ) );//5
    maceta2.vertices.push( new THREE.Vector3( -47, 7, -10 ) );//6
    maceta2.vertices.push( new THREE.Vector3( -45.2, 7, -10 ) );//7

    maceta2.faces.push( new THREE.Face3( 0, 4, 5 ) );
    maceta2.faces.push( new THREE.Face3( 5, 4, 0) );
    maceta2.faces.push( new THREE.Face3( 1, 0, 5 ) );
    maceta2.faces.push( new THREE.Face3( 5, 0, 1) );

    maceta2.faces.push( new THREE.Face3( 1, 5, 6 ) );
    maceta2.faces.push( new THREE.Face3( 6, 5, 1) );
    maceta2.faces.push( new THREE.Face3( 2, 1, 6 ) );
    maceta2.faces.push( new THREE.Face3( 6, 1, 2) );

    maceta2.faces.push( new THREE.Face3( 2, 6, 7 ) );
    maceta2.faces.push( new THREE.Face3( 7, 6, 2) );
    maceta2.faces.push( new THREE.Face3( 3, 2, 7 ) );
    maceta2.faces.push( new THREE.Face3( 7, 2, 3) );

    maceta2.faces.push( new THREE.Face3( 3, 7, 4 ) );
    maceta2.faces.push( new THREE.Face3( 4, 7, 3) );
    maceta2.faces.push( new THREE.Face3( 0, 3, 4 ) );
    maceta2.faces.push( new THREE.Face3( 4, 3, 0) );

    var macet2 = new THREE.Mesh (maceta2, materialmaceta); // Crea el objeto


    // mesacentro
    
    var mesacentro = new THREE.Geometry();
    mesacentro.vertices.push( new THREE.Vector3( 38, 5, -5) );//0
    mesacentro.vertices.push( new THREE.Vector3( 38, -5, -5) );//1
    mesacentro.vertices.push( new THREE.Vector3( 60, -5, -5 ));//2
    mesacentro.vertices.push( new THREE.Vector3( 60, 5, -5 ));//3

    mesacentro.vertices.push( new THREE.Vector3( 42, 2, -9.9) );//4
    mesacentro.vertices.push( new THREE.Vector3( 42, -2, -9.9) );//5
    mesacentro.vertices.push( new THREE.Vector3( 56, -2, -9.9 ));//6
    mesacentro.vertices.push( new THREE.Vector3( 56, 2, -9.9 ));//7

    mesacentro.vertices.push( new THREE.Vector3( 42, 1, -5) );//8
    mesacentro.vertices.push( new THREE.Vector3( 56, 1, -5) );//9
    mesacentro.vertices.push( new THREE.Vector3( 42, 1, -10 ));//10
    mesacentro.vertices.push( new THREE.Vector3( 56, 1, -10 ));//11

    mesacentro.vertices.push( new THREE.Vector3( 42, -1, -5) );//12
    mesacentro.vertices.push( new THREE.Vector3( 56, -1, -5) );//13
    mesacentro.vertices.push( new THREE.Vector3( 42, -1, -10 ));//14
    mesacentro.vertices.push( new THREE.Vector3( 56, -1, -10 ));//15
    
    mesacentro.faces.push(new THREE.Face3( 1,0,3 ) );
    mesacentro.faces.push(new THREE.Face3( 3,0,1 ) );
    mesacentro.faces.push(new THREE.Face3( 2,1,3 ) );
    mesacentro.faces.push(new THREE.Face3( 3,1,2 ) );

    mesacentro.faces.push(new THREE.Face3( 4,6,7 ) );
    mesacentro.faces.push(new THREE.Face3( 7,6,4 ) );
    mesacentro.faces.push(new THREE.Face3( 5,4,6 ) );
    mesacentro.faces.push(new THREE.Face3( 6,4,5 ) );

    mesacentro.faces.push(new THREE.Face3( 8,10,11 ) );
    mesacentro.faces.push(new THREE.Face3( 11,10,8 ) );
    mesacentro.faces.push(new THREE.Face3( 9,8,11 ) );
    mesacentro.faces.push(new THREE.Face3( 11,8,9 ) );

    mesacentro.faces.push(new THREE.Face3( 12,14,15 ) );
    mesacentro.faces.push(new THREE.Face3( 15,14,12 ) );
    mesacentro.faces.push(new THREE.Face3( 13,12,15 ) );
    mesacentro.faces.push(new THREE.Face3( 15,12,13 ) );

    var mesacent = new THREE.Mesh (mesacentro, materialmesa); // Crea el objeto


    //pantallablanc
    
    var pblanca = new THREE.Geometry();
    pblanca.vertices.push( new THREE.Vector3( 67, -2, -5) );//0
    pblanca.vertices.push( new THREE.Vector3( 67, -2, 4) );//1
    pblanca.vertices.push( new THREE.Vector3( 63, 8, 4 ));//2
    pblanca.vertices.push( new THREE.Vector3( 63, 8, -5 ));//3

    
    pblanca.faces.push(new THREE.Face3( 1,0,3 ) );
    pblanca.faces.push(new THREE.Face3( 3,0,1 ) );
    pblanca.faces.push(new THREE.Face3( 2,1,3 ) );
    pblanca.faces.push(new THREE.Face3( 3,1,2 ) );

    var matpblanca = new THREE.MeshBasicMaterial( { color: 0xafffff } ); // Material de color rojo
    var pablanco = new THREE.Mesh (pblanca, matpblanca); // Crea el objeto

    var linpb1 = new THREE.Geometry();
    linpb1.vertices.push( new THREE.Vector3( 67, -2, -10 ) );
    linpb1.vertices.push( new THREE.Vector3( 67, -2, 4 ) );
    var lineapb1 = new THREE.Line( linpb1, material );

    var linpb2 = new THREE.Geometry();
    linpb2.vertices.push( new THREE.Vector3( 63, 8, -10 ) );
    linpb2.vertices.push( new THREE.Vector3( 63, 8, 4 ) );
    var lineapb2 = new THREE.Line( linpb2, material );

    var linpb3 = new THREE.Geometry();
    linpb3.vertices.push( new THREE.Vector3( 67, -2, -5 ) );
    linpb3.vertices.push( new THREE.Vector3( 67, -2, 4) );
    linpb3.vertices.push( new THREE.Vector3( 63, 8, 4 ) );
    linpb3.vertices.push( new THREE.Vector3( 63, 8, -5 ) );
    linpb3.vertices.push( new THREE.Vector3( 67, -2, -5 ) );
    var lineapb3 = new THREE.Line( linpb3, material );


    // laptop1
    
    var laptop1 = new THREE.Geometry();
    laptop1.vertices.push( new THREE.Vector3( -20, 6, -1) );//0
    laptop1.vertices.push( new THREE.Vector3( -20, 5.5, -1) );//1
    laptop1.vertices.push( new THREE.Vector3( -15, 5.5, -1 ));//2
    laptop1.vertices.push( new THREE.Vector3( -15, 6, -1 ));//3

    laptop1.vertices.push( new THREE.Vector3( -20, 6, -4) );//4
    laptop1.vertices.push( new THREE.Vector3( -20, 5.5, -4) );//5
    laptop1.vertices.push( new THREE.Vector3( -15, 5.5, -4 ));//6
    laptop1.vertices.push( new THREE.Vector3( -15, 6, -4 ));//7

    laptop1.vertices.push( new THREE.Vector3( -20, 9, -4) );//8
    laptop1.vertices.push( new THREE.Vector3( -15, 9, -4 ));//9

    laptop1.faces.push(new THREE.Face3( 1,0,3 ) );
    laptop1.faces.push(new THREE.Face3( 3,0,1 ) );
    laptop1.faces.push(new THREE.Face3( 2,1,3 ) );
    laptop1.faces.push(new THREE.Face3( 3,1,2 ) );

    laptop1.faces.push(new THREE.Face3( 0,4,7 ) );
    laptop1.faces.push(new THREE.Face3( 7,4,0 ) );
    laptop1.faces.push(new THREE.Face3( 3,0,7 ) );
    laptop1.faces.push(new THREE.Face3( 7,0,3 ) );

    laptop1.faces.push(new THREE.Face3( 1,5,4 ) );
    laptop1.faces.push(new THREE.Face3( 4,5,1 ) );
    laptop1.faces.push(new THREE.Face3( 0,1,4 ) );
    laptop1.faces.push(new THREE.Face3( 4,1,0 ) );

    laptop1.faces.push(new THREE.Face3( 5,1,2 ) );
    laptop1.faces.push(new THREE.Face3( 2,1,5 ) );
    laptop1.faces.push(new THREE.Face3( 6,5,2 ) );
    laptop1.faces.push(new THREE.Face3( 2,5,6 ) );

    laptop1.faces.push(new THREE.Face3( 2,6,7 ) );
    laptop1.faces.push(new THREE.Face3( 7,6,2 ) );
    laptop1.faces.push(new THREE.Face3( 3,2,7 ) );
    laptop1.faces.push(new THREE.Face3( 7,2,3 ) );

    laptop1.faces.push(new THREE.Face3( 5,8,9 ) );
    laptop1.faces.push(new THREE.Face3( 9,8,5 ) );
    laptop1.faces.push(new THREE.Face3( 6,5,9 ) );
    laptop1.faces.push(new THREE.Face3( 9,5,6 ) );

    var lapt1= new THREE.Mesh (laptop1, materialtcl); // Crea el objeto

    var pantlaptop1 = new THREE.Geometry();

    pantlaptop1.vertices.push( new THREE.Vector3( -19.5, 6.01, -1.5) );//1
    pantlaptop1.vertices.push( new THREE.Vector3( -15.5, 6.01, -1.5 ));//2
    pantlaptop1.vertices.push( new THREE.Vector3( -19.5, 6.01, -3.5) );//5
    pantlaptop1.vertices.push( new THREE.Vector3( -15.5, 6.01, -3.5 ));//6

    pantlaptop1.faces.push(new THREE.Face3( 2,0,1 ) );
    pantlaptop1.faces.push(new THREE.Face3( 1,0,2 ) );
    pantlaptop1.faces.push(new THREE.Face3( 3,2,1 ) );
    pantlaptop1.faces.push(new THREE.Face3( 1,2,3 ) );

    var pantlap1 = new THREE.Mesh (pantlaptop1, materiavent); // Crea el objeto

    // laptop2
    
    var laptop2 = new THREE.Geometry();
    laptop2.vertices.push( new THREE.Vector3( -42, -3, -1) );//0
    laptop2.vertices.push( new THREE.Vector3( -42, -3.5, -1) );//1
    laptop2.vertices.push( new THREE.Vector3( -37, -3.5, -1 ));//2
    laptop2.vertices.push( new THREE.Vector3( -37, -3, -1 ));//3

    laptop2.vertices.push( new THREE.Vector3( -42, -3, -4) );//4
    laptop2.vertices.push( new THREE.Vector3( -42, -3.5, -4) );//5
    laptop2.vertices.push( new THREE.Vector3( -37, -3.5, -4 ));//6
    laptop2.vertices.push( new THREE.Vector3( -37, -3, -4 ));//7

    laptop2.vertices.push( new THREE.Vector3( -42, 0, -4) );//8
    laptop2.vertices.push( new THREE.Vector3( -37, 0, -4 ));//9

    laptop2.faces.push(new THREE.Face3( 1,0,3 ) );
    laptop2.faces.push(new THREE.Face3( 3,0,1 ) );
    laptop2.faces.push(new THREE.Face3( 2,1,3 ) );
    laptop2.faces.push(new THREE.Face3( 3,1,2 ) );

    laptop2.faces.push(new THREE.Face3( 0,4,7 ) );
    laptop2.faces.push(new THREE.Face3( 7,4,0 ) );
    laptop2.faces.push(new THREE.Face3( 3,0,7 ) );
    laptop2.faces.push(new THREE.Face3( 7,0,3 ) );

    laptop2.faces.push(new THREE.Face3( 1,5,4 ) );
    laptop2.faces.push(new THREE.Face3( 4,5,1 ) );
    laptop2.faces.push(new THREE.Face3( 0,1,4 ) );
    laptop2.faces.push(new THREE.Face3( 4,1,0 ) );

    laptop2.faces.push(new THREE.Face3( 5,1,2 ) );
    laptop2.faces.push(new THREE.Face3( 2,1,5 ) );
    laptop2.faces.push(new THREE.Face3( 6,5,2 ) );
    laptop2.faces.push(new THREE.Face3( 2,5,6 ) );

    laptop2.faces.push(new THREE.Face3( 2,6,7 ) );
    laptop2.faces.push(new THREE.Face3( 7,6,2 ) );
    laptop2.faces.push(new THREE.Face3( 3,2,7 ) );
    laptop2.faces.push(new THREE.Face3( 7,2,3 ) );

    laptop2.faces.push(new THREE.Face3( 5,8,9 ) );
    laptop2.faces.push(new THREE.Face3( 9,8,5 ) );
    laptop2.faces.push(new THREE.Face3( 6,5,9 ) );
    laptop2.faces.push(new THREE.Face3( 9,5,6 ) );

    var lapt2= new THREE.Mesh (laptop2, materialtcl); // Crea el objeto

    var pantlaptop2 = new THREE.Geometry();

    pantlaptop2.vertices.push( new THREE.Vector3( -41.5, -2.99, -1.5) );//1
    pantlaptop2.vertices.push( new THREE.Vector3( -37.5, -2.99, -1.5 ));//2
    pantlaptop2.vertices.push( new THREE.Vector3( -41.5, -2.99, -3.5) );//5
    pantlaptop2.vertices.push( new THREE.Vector3( -37.5, -2.99, -3.5 ));//6

    pantlaptop2.faces.push(new THREE.Face3( 2,0,1 ) );
    pantlaptop2.faces.push(new THREE.Face3( 1,0,2 ) );
    pantlaptop2.faces.push(new THREE.Face3( 3,2,1 ) );
    pantlaptop2.faces.push(new THREE.Face3( 1,2,3 ) );

    var pantlap2 = new THREE.Mesh (pantlaptop2, materiavent); // Crea el objeto

    //perillas

    var perilla= new THREE.SphereGeometry(0.45,8,5);

    var peri1 = new THREE.Mesh(perilla,materialsilla);
    peri1.position.x=-11.5;
    peri1.position.y=-5.9;
    peri1.position.z=-2;

    var peri2 = new THREE.Mesh(perilla,materialsilla);
    peri2.position.x=-11;
    peri2.position.y=-6.5;
    peri2.position.z=-2;

    var peri3 = new THREE.Mesh(perilla,materialsilla);
    peri3.position.x=-33.5;
    peri3.position.y=-15;
    peri3.position.z=-2;

    var peri4 = new THREE.Mesh(perilla,materialsilla);
    peri4.position.x=-33;
    peri4.position.y=-14.2;
    peri4.position.z=-2;

    var peri5 = new THREE.Mesh(perilla,materialsilla);
    peri5.position.x=31.3;
    peri5.position.y=-4.3;
    peri5.position.z=-2;

    var peri6 = new THREE.Mesh(perilla,materialsilla);
    peri6.position.x=30.7;
    peri6.position.y=-3.6;
    peri6.position.z=-2;

    // noticias
    
    var noti = new THREE.Geometry();
    noti.vertices.push( new THREE.Vector3( -4, 21, 10) );//0
    noti.vertices.push( new THREE.Vector3( -4, 6, 10) );//1
    noti.vertices.push( new THREE.Vector3( -4.9, 6, 10 ));//2
    noti.vertices.push( new THREE.Vector3( -4.9, 21, 10 ));//3

    noti.vertices.push( new THREE.Vector3( -4, 21, -1) );//4
    noti.vertices.push( new THREE.Vector3( -4, 6, -1) );//5
    noti.vertices.push( new THREE.Vector3( -4.9, 6, -1 ));//6
    noti.vertices.push( new THREE.Vector3( -4.9, 21, -1 ));//7

    noti.faces.push(new THREE.Face3( 1,0,3 ) );
    noti.faces.push(new THREE.Face3( 3,0,1 ) );
    noti.faces.push(new THREE.Face3( 2,1,3 ) );
    noti.faces.push(new THREE.Face3( 3,1,2 ) );

    noti.faces.push(new THREE.Face3( 0,4,7 ) );
    noti.faces.push(new THREE.Face3( 7,4,0 ) );
    noti.faces.push(new THREE.Face3( 3,0,7 ) );
    noti.faces.push(new THREE.Face3( 7,0,3 ) );

    noti.faces.push(new THREE.Face3( 1,5,4 ) );
    noti.faces.push(new THREE.Face3( 4,5,1 ) );
    noti.faces.push(new THREE.Face3( 0,1,4 ) );
    noti.faces.push(new THREE.Face3( 4,1,0 ) );

    noti.faces.push(new THREE.Face3( 5,1,2 ) );
    noti.faces.push(new THREE.Face3( 2,1,5 ) );
    noti.faces.push(new THREE.Face3( 6,5,2 ) );
    noti.faces.push(new THREE.Face3( 2,5,6 ) );

    noti.faces.push(new THREE.Face3( 2,6,7 ) );
    noti.faces.push(new THREE.Face3( 7,6,2 ) );
    noti.faces.push(new THREE.Face3( 3,2,7 ) );
    noti.faces.push(new THREE.Face3( 7,2,3 ) );

    var materialnoti = new THREE.MeshBasicMaterial( { color: 0xaaaaaa } ); // e

    var noticias = new THREE.Mesh (noti, materialnoti); // Crea el objeto

    var linenoti = new THREE.Geometry();
    linenoti.vertices.push( new THREE.Vector3( -4, 21, 10) );//0
    linenoti.vertices.push( new THREE.Vector3( -4, 21, -1) );//1
    linenoti.vertices.push( new THREE.Vector3( -4, 6, -1) );//2
    linenoti.vertices.push( new THREE.Vector3( -4, 6, 10) );//3
    linenoti.vertices.push( new THREE.Vector3( -4, 21, 10) );//0
    var linoti = new THREE.Line( linenoti, material );


    // SCENE

	scene = new THREE.Scene();

	scene.add( light );
	scene.add( ambientLight );
    scene.add(camera);
	scene.add( piso1 );
    scene.add( lapt1);
    scene.add( pantlap1);
    scene.add( lapt2);
    scene.add( pantlap2);
    scene.add( lineapb1);
    scene.add( lineapb2);
    scene.add( lineapb3);
    scene.add( linea1a );
    scene.add( linea1b );
    scene.add( linea2a );
    scene.add( linea2b );
    scene.add( linea3a );
    scene.add( linea3b );
    scene.add( linea4a );
    scene.add( linea4b );
    scene.add( linea5a );
    scene.add( linea5b );
    scene.add( linea6a );
    scene.add( linea6b );
    scene.add( linea7a );
    scene.add( linea7b );
    scene.add( linea8a );
    scene.add( linea8b );
    scene.add( pareda );
    scene.add( paredb );
    scene.add( piso2);
    scene.add( pisolab);
    scene.add( pareda4);
    scene.add( paredb4);
    scene.add( ventana1);
    scene.add( ventana2);
    scene.add( ventana3);
    scene.add( ventana4);
    scene.add( ventana5);
    scene.add( ventana6);
    scene.add( ventana7);
    scene.add( ventana8);
    scene.add( puerta1);
    scene.add( puerta2);
    scene.add( puerta3);
    scene.add( puerta4);
    scene.add( peri1);
    scene.add( peri2);
    scene.add( peri3);
    scene.add( peri4);
    scene.add( peri5);
    scene.add( peri6);
    scene.add( escritorio1);
    scene.add( escritorio2);
    scene.add( sill1);
    scene.add( sill2);
    scene.add( sill3);
    scene.add( sill4);
    scene.add( sill5);
    scene.add( mesaa1);
    scene.add( mesaa2);
    scene.add( mesaa3);
    scene.add( mesaa4);
    scene.add( mesaa5);
    scene.add( mesaa6);
    scene.add( mesaa7);
    scene.add( mesaa8);
    scene.add( mesaa9);
    scene.add( mesaa10);
    scene.add( lmesa1);
    scene.add( lmesa2);
    scene.add( lmesa3);
    scene.add( lmesa4);
    scene.add( lmesa5);
    scene.add( lmesa6);
    scene.add( lmesa7);
    scene.add( lmesa8);
    scene.add( lmesa9);
    scene.add( lmesa10);
    scene.add( compu1);
    scene.add( compu2);
    scene.add( compu3);
    scene.add( compu4);
    scene.add( compu5);
    scene.add( compu6);
    scene.add( compu7);
    scene.add( compu8);
    scene.add( compu9);
    scene.add( compu10);
    scene.add( monit1);
    scene.add( pant1);
    scene.add( monit2);
    scene.add( pant2);
    scene.add( monit3);
    scene.add( pant3);
    scene.add( monit4);
    scene.add( pant4);
    scene.add( monit5);
    scene.add( pant5);
    scene.add( monit6);
    scene.add( pant6);
    scene.add( monit7);
    scene.add( pant7);
    scene.add( monit8);
    scene.add( pant8);
    scene.add( monit9);
    scene.add( pant9);
    scene.add( monit10);
    scene.add( pant10);
    scene.add( silab1);
    scene.add( silab2);
    scene.add( silab3);
    scene.add( silab4);
    scene.add( silab5);
    scene.add( silab6);
    scene.add( silab7);
    scene.add( silab8);
    scene.add( silab9);
    scene.add( silab10);
    scene.add( tall1);
    scene.add( arb1);
    scene.add( arb2);
    scene.add( arb3);
    scene.add( macet1);
    scene.add( tall2);
    scene.add( arb1a);
    scene.add( arb2a);
    scene.add( arb3a);
    scene.add( macet2);
    scene.add( mesacent);
    scene.add( pablanco);
    scene.add( linesil1);
    scene.add( linesil2);
    scene.add( linesil3);
    scene.add( linesil4);
    scene.add( linesil5);
    scene.add( linesil6);
    scene.add( linesil7);
    scene.add( linesil8);
    scene.add( linesil9);
    scene.add( linesil10);
    scene.add( teclado1);
    scene.add( teclado2);
    scene.add( teclado3);
    scene.add( teclado4);
    scene.add( teclado5);
    scene.add( teclado6);
    scene.add( teclado7);
    scene.add( teclado8);
    scene.add( teclado9);
    scene.add( teclado10);
    scene.add( estantel1);
    scene.add( separador1);
    scene.add( estantel2);
    scene.add( separador2);
    scene.add( lesc1);
    scene.add( lesc2);
    scene.add( noticias);
    scene.add( linoti);
    scene.add( lisilla1);
    scene.add( lisilla2);
    scene.add( lisilla3);
    scene.add( lisilla4);
    scene.add( lisilla5);
}

function animate() {
	window.requestAnimationFrame( animate );
	render();
}

function render() {
	var delta = clock.getDelta();
	cameraControls.update(delta);
	renderer.render( scene, camera );
}

try {
	init();
	animate();
} catch(e) {
	var errorReport = "Your program encountered an unrecoverable error, can not draw on canvas. Error was:<br/><br/>";
	$('#container').append(errorReport+e);
}