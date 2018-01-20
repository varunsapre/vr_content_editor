var final_transcript = '';
var recognizing = false;

if (!('webkitSpeechRecognition' in window)) {
  window.alert("Speech recognition not available for your browser")
}
else {
  var recognition = new webkitSpeechRecognition();
  recognition.continuous = false;
  recognition.onstart = function() {
    recognizing = true;
  };
  recognition.onerror = function(event) {
    console.log("Error in recognition");
  };
  recognition.onend = function() {
    recognizing = false;
  };
  recognition.onresult = function(event) {
    if (typeof(event.results) == 'undefined') {
      recognition.onend = null;
      recognition.stop();
      return;
    }
    for (var i = event.resultIndex; i < event.results.length; ++i) {
        final_transcript += event.results[i][0].transcript;
    }
    console.log(final_transcript);
    show_cmd(final_transcript);
  };
}
function startButton(event) {
  if (recognizing) {
    recognition.stop();
    return;
  }
  final_transcript = '';
  recognition.start();
}
