import pickle

cmd_code = {'Load the image':'<a-sky src="puydesancy.jpg" rotation="0 -130 0"></a-sky>', \
			'Write a text':'<a-text font="kelsonsans" value=" .... " width="6" position="-2.5 0.25 -1.5" rotation="0 15 0"></a-text>', \
			'Draw a cube':'<a-box position="-1 0.5 -3" rotation="0 45 0" color="#4CC3D9" shadow="" material="" geometry=""></a-box>', \
			'Draw a sphere':'<a-sphere position="0 1.25 -5" radius="1.25" color="#EF2D5E" shadow="" material="" geometry=""></a-sphere>', \
			'Draw a cylinder':'<a-cylinder position="1 0.75 -3" radius="0.5" height="1.5" color="#FFC65D" shadow="" material="" geometry=""></a-cylinder>'}

header = '<html xmlns=" .... "><head> \n\
<meta charset="utf-8" /> \n\
<title>Command to Script Generator</title> \n\
<meta name="Generator" content="Script" /> \n\
<script src=" .... "></script> \n\
<link rel="stylesheet" href=" .... " media="all" /></head> \n\
<body class="a-body "> \n\
<a-scene class="fullscreen" inspector="" keyboard-shortcuts="" screenshot="" vr-mode-ui=""> \n'

#print(cmd_code['Draw a sphere'])

try:
	b = open("body.txt","r")
	body = b.read()
	body += "\n"
	b.close()
except (OSError, IOError) as e:
	body = ''

#body = input()
#print(cmd_code[body])

body += cmd_code['Draw a sphere']

with open("body.txt", "w") as text_file:
	text_file.write(body)
body += "\n"
footer = '</a-scene></body></html>\n'

script = header + body + footer
with open("script.txt", "w") as text_file:
    text_file.write(script)
