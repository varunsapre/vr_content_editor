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
