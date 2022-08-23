var string = 'this'
console.log("String ->",string);


var adj = "The ";
var name = 'Eatrh';
console.log("name = ", name);
var work = " Revolves around the Sun ";
var time = "and takes 365 days to complete a Revolution";
var temp =  `${name} completes one rotation in 24 hours ${time}` ;
console.log(adj + name + work);
console.log(temp);


//length
var len = name.length;
console.log(`Length of name is ${len}`);


// \content
console.log(" Hello \n World\tDie Soon");


console.log("");


// 
var y = new String("this");
console.log(y);
document.getElementById('content').innerHTML = '<h3>this is an h3 heading</h3>'


console.log("");


// First occurence of a substring
var str = "This is a String";
console.log(str);
position = str.indexOf('is');
console.log("First occurence of substring is",position);

// Last occurence of a substring
position = str.lastIndexOf('is');
console.log("Last occurence of substring is",position);

// Substring from a string
var substr1 = str.slice(1,7)
console.log("slicing String (1,7) :",substr1);

// substring is same as Slice but can't take negative values
var substr1 = str.substring(1,7)
console.log("Substring (1,7) :",substr1);

//substr : custom 'start counting' & 'end counting'
var substr1 = str.substr(1,10)
console.log("Substr (1,10) :",substr1);

//replace
var replaced = str.replace('String','NooB');
// console.log(str);
console.log("Replaced string :",replaced);

//upper case / lower case
console.log('Upper Case :',str.toUpperCase());
console.log('Lower Case :',str.toLowerCase());

//concat  "+ also can be used instead of concat"
var newString = str.concat(' with New String')
console.log(newString)

// adding white spaces
var strWithWhitespaces = "   this contains      white spaces";
console.log(strWithWhitespaces)

//trims spaces from start and end
var strWithWhiteSpaces = "   this    contains  white spaces    but   trimmed     ";
console.log(strWithWhiteSpaces.trim())

// locate character
var char2 = str.charAt(2);
console.log("locating character :",char2)

//character code (UTF-16)
var char2 = str.charCodeAt(2);  //not important
console.log("UTF-16 :",char2)

//slicing
console.log('slicing :',str[3])