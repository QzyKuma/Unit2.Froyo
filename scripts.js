

const froyoMenu = {
    flavorOne: "vanilla",
    flavorTwo: "vanilla",
    flavorThree: "vanilla",
    flavorFour: "strawberry",
    flavorFive: "coffee",
    flavorSix: "coffee",

  }

  for (const key in froyoMenu) {
    console.log(`For  ${key}, we will be serving you a ${froyoMenu[key]}.`)
  }

console.table(froyoMenu);

const flavCounts = {};
const froyoMenuArr = ["vanilla","vanilla","vanilla","strawberry","coffee","coffee"];
froyoMenuArr.forEach(function(i) { flavCounts[i] = (flavCounts[i] || 0) + 1; });
console.log(flavCounts);


// below is the code for the button that displays the menu // 

let menu =  document.getElementsByClassName("menu")[0]
document.getElementsByClassName("click")[0].onclick =function() {
       menu.classList.toggle("showmenu");
      };