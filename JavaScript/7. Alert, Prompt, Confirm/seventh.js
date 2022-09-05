// Alert in in-browser JavaScript - Does not return anything
alert("This is a message");



// Prompt in JS
let name = prompt("What is your name?", "Noob");
console.log(name);
// The prompt() method displays a dialog box that prompts the visitor for input. A prompt box is often used if you want to input a value before entering a page. When a prompt box pops up, the user will have to click either "OK" or "Cancel" to proceed after entering an input value. The prompt() method returns the input value if the user clicks "OK". If the user clicks "cancel" the method returns null.



// Confirm in JS
let deletePost = confirm("Do you really want to kill this post?");
        
// console.log(deletePost);
if(deletePost){
    // Code to delete the post
    console.log("Your post has been killed brutally");
}
else{
    // Code to cancel deletion of the post
    console.log("Sadly your poat is not dead yet");
}
// The confirm() method displays a dialog box with a specified message, along with an OK and a Cancel button. A confirm box is often used if you want the user to verify or accept something. The confirm box takes the focus away from the current window and forces the browser to read the message.  The confirm() method returns true if the user clicked "OK", and false otherwise. This method is only used if we want to double-check any task performed by the user.




// How to become sneeky littly busDriver
let pepe = prompt("What is your Age Human?" , "age likh noob");
if(pepe>=18){
    console.log("GO AHEAD, FULFILL YOUR DESIRES");
}
else{
    console.log("GO HOME KID");
}