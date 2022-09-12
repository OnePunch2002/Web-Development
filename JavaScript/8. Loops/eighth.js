// Loops can execute a block of code a number of times. Loops are handy, if you want to run the same code over and over again, each time with a different value.

// for loop
let x = 0;
     for(x=0; x<5; x++){
         console.log(x);
     }

let friends = ['Noob','Bot','Pepe','Doraemon','Nobita']
for (let index = 0; index < friends.length; index++) {
  console.log("Hello " + friends[index]);
  
}


console.log('')



console.log('using forEach :')
// there is another simpler way to write the same loop with the help of forEach
let friend = ['Noob','Bot','Pepe','Doraemon','Nobita']
friend.forEach(function f(element){
  console.log("Hello Friend, " + element + " to modern JavaScript");
});


console.log('')



console.log('using for/of :')
// There is one more way of writing it using for/of loops. It loops through the values of an iterable object. 
let frnds = ['Noob','Bot','Pepe','Doraemon','Nobita']
for (element of frnds){
  console.log("Hello Friend, " + element + " to modern JavaScript again");
}


console.log('')



// To iterate through an object, we can use for/in loops.
let employee = {
  name: "Doge",
  salary: 2,
  channel: "Doge Ki Duniya"
}

// Use this loop to iterate over objects in JavaScript
for(key in employee){
  console.log(`The ${key} of employee is ${employee[key]}`);
}


console.log('')



// The while loop loops through a block of code as long as a specified condition is true.
let i =0;
    while(i<4){
        console.log(`${i} is less than 4`);
        i++;
    }
// This loop will execute until the value of i is less than 4.



// There is another loop known as do-while loops. It is a variant of the while loop. It will execute the code block once, before checking the condition, then it will repeat the loops as long as the condition is true.
let j =34;
    do{
        console.log(`${j} is less than 4 and we are inside do while loop`);
        j++;
    }while(j<4);