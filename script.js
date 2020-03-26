function welcome() {
    confirm("Welcome! You have chosen to play. You will be presented with a series of questions...");
    confirm("If you answer a questions incorrectly, you cannot advance to the next...");
    var retVal = prompt("Do you want to continue?");
    if (retVal == "yes") {
        alert("Good, question 1...");
    } else {
        alert("Well you're boring");
    }
    //Question 1
    var retVal = prompt("The term jitterbug originally was a slang term for a person who was real heavy on jittersauce. What does jittersauce refer to?");
    if (retVal == "alcohol") {
        alert("Not bad, next question...");
    } else {
        alert("FALSE. Please try again. HINT: it makes parties fun...");
    }
    //Question 2
    var retVal = prompt("What early American Broadway show helped popularize swing dance styles, ranging from the Charleston to the Foxtrot?");
    if (retVal == "Ziegfeld Follies") {
        alert("Dang, pretty impressive. NEXT");
    } else {
        alert("NOPE. HINT: starts with a Z...");
    }
    //Question 3

    var retVal = prompt("What ballroom style is inspired by the traditional Spanish bullfight?");
    if (retVal == "paso doble") {
        alert("Very good... your Googling skills are excellent.");
    } else {
        alert("WRONG. HINT: it's in Spanish...");
    }
    //Question 4

    var retVal = prompt("Ballroom dancing gets its name from what Latin term?");
    if (retVal == "ballare") {
        alert("More like BALLER... HAH, ok next.");
    } else {
        alert("Really? Come on. HINT: it's got the word ball in it...");
    }
    //Question 5
    var retVal = prompt("What Latin dance style is the official dance of the Dominican Republic?");
    if (retVal == "Merengue") {
        alert("Tastes like lemons, time for the final question");
    } else {
        alert("INCORRECT. HINT: starts with an M and rhymes with a fruit pie...");
    }
    //Question 6
    var retVal = prompt("What Latin dance style is a combination of the Mambo and the Rumba?");
    if (retVal == "cha cha") {
        alert("YOU WIN YOU WIN YOU WIN... click OK to claim your prize");
    } else {
        alert("DUR NO. HINT: this is a text message service that will answer any question you text them...");
    }
    //Prize

    var retVal = prompt("This is your prize. Will you accept?");
    if (retVal == "yes") {
        alert("Good. Comence prizing.");
    } else {
        alert("Why you no want prize?");
    }
}