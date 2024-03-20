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
document.write('<h3>Question 4 Unshift Method</h3>')

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

//  Question:- 07
document.write('<h3>Question 7 Slice Method</h3>')

var array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
document.write('Array: '+array+'<br>')
var ubdatedArray=array.slice(2,5)
document.write('Ubdated Array: '+ubdatedArray)

//  Question:- 08
document.write('<h3>Question 8 Splice Method</h3>')

var array = [1, 2, 3, 4, 5,];
document.write('array: '+array+'<br>')
var newArray=array.splice(3,5)
document.write('newArray: '+newArray)

//  Question:- 09
document.write('<h3>Question 9 Shift Method</h3>')

var array = [1, 2, 3, 4, 5,6];
document.write('array: '+array+'<br>')
var array1= array.shift()
document.write('array1: '+array+'<br>')
var array2= array.shift()
document.write('array2: '+array+'<br>')
var array3= array.shift()
document.write('array3: '+array+'<br>')
var array4= array.shift()
document.write('array4: '+array+'<br>' )
var array5= array.shift()
document.write('array5: '+array)

//  Question:- 10
document.write('<h3>Question 10 Push Method</h3>')
var array = [1, 2, 3, 4, 5];
document.write('arrays: '+array+'<br>')
array.push(6,7,8)
document.write('array Elements Add 3: '+array+'<br')

 


