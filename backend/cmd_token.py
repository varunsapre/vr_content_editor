import re

def return_value_delete(command):
	tokens = command.split()
	shape_name = tokens[1]
	if len(tokens) > 2:
		shape_name += string_to_num(tokens[2])
	return shape_name
	
def return_value(command):
	tokens = command.split()
	shape_name = tokens[1]
	i = 2

	dicto = {}
	li = {}
	for k in key_words:
		li[k] = None

	if len(tokens) > 2:
		if tokens[2] not in key_words:
			shape_name += string_to_num(tokens[2])
			i += 1

		while i < len(tokens):
			if tokens[i] in key_words:
				li[tokens[i]] = tokens[i+1]
				i+=2
			else:
				i+=1
	dicto[shape_name] = li
	#print(dicto)
	return dicto

def string_to_num(number):
	nums = {'one':'1','two':'2','three':'3','four':'4','five':'5','six':'6','seven':'7','eight':'8','nine':'9',
			'1':'1','2':'2','3':'3','4':'4','5':'5','6':'6','7':'7','8':'8','9':'9'}
	return nums[number]


key_words = ["length","color","radius","height"]


#print(return_value_delete("Delete cube1")
#print(return_value("Insert cylinder one color red radius 20 height 6"))
#val = return_value("Insert cube length 10 color red")
#print(val[][])

#string_to_num("one")




