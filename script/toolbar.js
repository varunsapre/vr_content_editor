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

function show_cmd(s){
	$('.command').html(s)
	$(".command").fadeTo("slow",1).delay(1500).fadeTo("slow", 0)
}
function update(s) {
	// var code = "\n" + document.getElementById("code").value ;

	console.log("in update")
	var img = s;
	var code = "<a-sky src='../media/bg/"+img+".jpg' rotation='0 -130 0'></a-sky>";
	var bodyElem = document.getElementById("main-body");
	bodyElem.removeChild(bodyElem.lastChild);

	var elem = document.createElement("a-scene");
	elem.setAttribute("canvas","canvas: #content");
	elem.setAttribute("id","placeholder");
	elem.innerHTML = code;
	bodyElem.appendChild(elem);
	remover();
}
