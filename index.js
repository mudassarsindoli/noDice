let randomNumber1 = Math.floor(Math.random() * 6) + 1   //random number is generated ranging from 1 to 6

let randomNumber1Source = randomNumber1 + ".png"; //Adds .png extension to the random number

let image1 = document.getElementById("diceImage1"); //selects the first image in red div

image1.setAttribute("src", randomNumber1Source) // changes the source of the img based on number generated

let randomNumber2 = Math.floor(Math.random() * 6) + 1   //random number is generated ranging from 1 to 6

let randomNumber2Source = randomNumber2 + ".png";    //Adds .png extension to the random number

let image2 = document.getElementById("diceImage2");  //selects the first image in red div

image2.setAttribute("src", randomNumber2Source) // changes the source of the img based on number generated

let randomNumber3 = Math.floor(Math.random() * 6) + 1   //random number is generated ranging from 1 to 6

let randomNumber3Source = randomNumber3 + ".png";    //Adds .png extension to the random number

let image3 = document.getElementById("diceImage3");//selects the first image in red div

image3.setAttribute("src", randomNumber3Source) // changes the source of the img based on number generated

let randomNumber4 = Math.floor(Math.random() * 6) + 1   //random number is generated ranging from 1 to 6

let randomNumber4Source = randomNumber4 + ".png";    //Adds .png extension to the random number

let image4 = document.getElementById("diceImage4");   //selects the first image in red div

image4.setAttribute("src", randomNumber4Source) // changes the source of the img based on number generated

// red

let gifImage1 = randomNumber1 + " animated" + ".gif";

let gif1 = document.getElementById("redImage");

gif1.setAttribute("src", gifImage1)

//green

let gifImage2 = randomNumber2 + " animated" + ".gif";

let gif2 = document.getElementById("greenImage");

gif2.setAttribute("src", gifImage2)

//yellow

let gifImage3 = randomNumber3 + " animated" + ".gif";

let gif3 = document.getElementById("yellowImage");

gif3.setAttribute("src", gifImage3)

//blue

let gifImage4 = randomNumber4 + " animated" + ".gif";

let gif4 = document.getElementById("blueImage");

gif4.setAttribute("src", gifImage4)
