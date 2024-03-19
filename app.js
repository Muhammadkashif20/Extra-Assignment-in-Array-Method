//  Question:- 01
document.write('<h3>Question 1 Slice Method</h3>')
var numbers=[1,2,3,4,5,6,7,8,9,10]
document.write(numbers)
document.write('<br>')
var num=numbers.slice(2,7)
document.write("Ubdated Number: "+num)

//  Question:- 02
document.write('<h3>Question 2 Spice Method</h3>')
// document.write('<br>')

var array=['kashif','daniyal','ali','naveed','fakhar']
document.write(array)
document.write('<br>')
array.splice(1,2)
document.write('Ubdated Array: '+array)
document.write('<br>')
//  Question:- 03
document.write('<h3>Question 3 Shift Method</h3>')

var array=['kashif','daniyal','ali','naveed','fakhar']
document.write(array+'<br>')
array.shift()
document.write('Ubdated Array: '+array)
document.write('<br>')

//  Question:- 04
document.write('<h3>Question 1 Unshift Method</h3>')

var array=['kashif','daniyal','ali','naveed','fakhar']
document.write(array+'<br>')
array.unshift('haider')
document.write(array)

document.write('<br>')

//  Question:- 05
document.write('<h3>Question 5 Push Method</h3>')

var array=['kashif','daniyal','ali','naveed','fakhar']
document.write(array+'<br>')
array.push('ahmed')
document.write(array)

document.write('<br>')

//  Question:- 06
document.write('<h3>Question 6 Pop Method</h3>')

var array = [1, 2, 3, 4, 5];
var removedElement = array.pop();
document.write('removed Element'+removedElement+'<br>')
document.write('Ubdated Array:',array)






