function compile(queryString)
{
  xhr = new XMLHttpRequest();
  xhr.onreadystatechange = render
  var cursor = document.querySelector("a-cursor")
  var cursor_pos = new THREE.Vector3().copy(cursor.object3D.getWorldPosition());
  var x_coord = cursor_pos['x']
  var y_coord = cursor_pos['y']
  var z_coord = cursor_pos['z'] - 10

  xhr.open("GET","http://localhost:5000/compile?q="+queryString+"&x="+x_coord+"&y="+y_coord+"&z="+z_coord)
  xhr.send()
}

function render()
{
  if(xhr.readyState == 4 && xhr.status == 200)
  {
    console.log(xhr.responseText)
    document.getElementById("placeholder").innerHTML = xhr.responseText
  }
}

function publish(){

var ascene = document.getElementsByTagName("a-scene")[0]
var allcode = `<html>
<head>
<title>Experience</title>
</head>
<body>
<a-scene>`
+ascene.innerHTML+
`
</a-scene><script src="http://aframe.io/releases/0.3.0/aframe.min.js"></script>
<script src="http://cdn.rawgit.com/donmccurdy/aframe-extras/v2.5.2/dist/aframe-extras.js"></script>
</body>
</html>
`
console.log(allcode)


}