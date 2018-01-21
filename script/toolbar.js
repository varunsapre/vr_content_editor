function remover(){
	$("#img_selector").fadeTo('slow',0);
	$(".editor").css("width",0);
	$("#reopen").fadeTo('slow',1)
	$("#reopen").click(function(){
		$(".editor").css("width",'100vw');
		$("#img_selector").fadeTo('slow',1);
		$("#reopen").fadeTo('slow',0)
	})
}
function openCustom(){
	var elem = document.getElementById("file-input")
  elem.click()
//	$('#file-input').change(function () {
//  	var newImg = $('#file-input').files[0].name()
//		console.log(newImg)
//	}).click()
}
function selectFile(){
	var elem = document.getElementById("file-input")
	console.log(elem.files[0].name)
  update(elem.files[0].name, true)
}
function show_cmd(s){
	$('.command').html(s)
	$(".command").fadeTo("slow",1).delay(1500).fadeTo("slow", 0)
}
function update(s, new_file = false) {
	// var code = "\n" + document.getElementById("code").value ;
	if(new_file)
	{
		imgsrc = s
	}
	else {
		imgsrc = "../media/bg/"+s+".jpg"
	}
  xhrimg = new XMLHttpRequest()
	xhrimg.open("GET","https://localhost:5000/imgPath?n=" + imgsrc)
	xhrimg.send()
	console.log("in update")
	var code = "<a-camera universal-controls position='0 1.6 0'><a-cursor></a-cursor></a-camera><a-sky src='"+imgsrc+"' rotation='0 -130 0'></a-sky>";
	var bodyElem = document.getElementById("main-body");
	bodyElem.removeChild(bodyElem.lastChild);

	var elem = document.createElement("a-scene");
	elem.setAttribute("canvas","canvas: #content");
	elem.setAttribute("id","placeholder");
	elem.innerHTML = code;
	bodyElem.appendChild(elem);
	remover();
}
