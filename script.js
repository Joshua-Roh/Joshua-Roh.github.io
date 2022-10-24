function rand_num_bars(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}

function rand_num_height(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}

function swap(el1, el2) {
  let temp = el1.style.height; 
  el1.style.height = el2.style.height; 
  el2.style.height = temp; 
}

const bar_container = document.getElementById("bar-container");
let children = bar_container.childNodes;
const generate = document.getElementById("generate");
let delay2 = 250;
let delayElement = document.getElementById('sort-speed');  
let barArray = []; 

const arraySizeValue = document.getElementById('array-size'); 
const sortSpeedValue = document.getElementById('sort-speed')


//

function delayTime(millisec) {
  return new Promise(resolve => {
    setTimeout(() => {resolve('')}, millisec); 
  })
}

delayElement.addEventListener('input', function() {
  delay2 = 320 - parseInt(delayElement.value); 
})

//Visuals

let speed = 500;
let c = 0;
let delay = 10000 / (Math.floor(Number(sortSpeedValue.value) / 10) * speed);

let p = "#e43f5a";

let p5 = 'lightgreen';
let p6 = 'cyan'; 
let p7 = 'green'; 
let p1 = "#63D7D8";
let p2 = "#008FF9";
let sorted = 'green';

let p3 = "#E9EC13";
let p4 = "#F50101";


//quick sort colors

let p10 = 'yellow';
let p11 = 'orange'; 
let p12 = 'pink';  

const anim = (bar, height, color) => {
  setTimeout(() => {
    bar.style.height = height + "px";
    bar.style.backgroundColor = color;
  });
};

const anim2 = (bar, height) => {
  setTimeout(() => {
    bar.style.height = height + "px";
  });
};

generate.addEventListener("click", () => { 
  generateNewArray(Number(arraySizeValue.value));
});

//Helper function to delete previously inserted bars to start the next sort
const deleteBars = function() {
  bar_container.innerHTML = ''; 
}

function generateNewArray(arrSize) {
  deleteBars(); 

  //Inserting child bars into parent bar container, using rand_num function to generate # of bars

  for (let i = 0; i < arrSize; i++) {
    document.getElementById(
      "bar-container"
    ).innerHTML += `<div class = 'flex-item' id = 'indiv_bar'></div>`;
  }

  //children[arrSize] = document.getElementById(
    //"bar-container"
  //).innerHTML += `<div id = 'indiv_bar'></div>`;

  //Randomizing the height for each child bar

  for (i = 0; i < arrSize; i++) {
    var rand_height = rand_num_height(100, 500);
    children[i].style.height = `${rand_height}px`;
    //Setting values of each element in bar_con array to the current child height to use for sorting later
    children[i].value = rand_height;
  }

  //children[arrSize].value = rand_num_height(100, 500) + 10;
  //children[arrSize].style.height = `${children[arrSize].value}px`;
}

//Create and visualize new array when user first visits the site
generateNewArray(Number(arraySizeValue.value))

document.getElementById('array-size').addEventListener('input', function() {
  generateNewArray(Number(arraySizeValue.value));
}, false); 

document.getElementById('sort-speed').addEventListener('input', function() {
  document.getElementById('sort-spd-val').textContent = sortSpeedValue.value; 

})

function disableBtn() {
  generate.disabled = true; 
  document.getElementById('array-size').disabled = true; 
  document.getElementById('bbl-sort').disabled = true;
  document.getElementById('quick-sort').disabled = true;
  document.getElementById('select-sort').disabled = true;
  document.getElementById('merge-sort').disabled = true;
}

function enableBtn() {
  generate.disabled = false; 
  document.getElementById('array-size').disabled = false; 
  document.getElementById('bbl-sort').disabled = false;
  document.getElementById('quick-sort').disabled = false;
  document.getElementById('select-sort').disabled = false;
  document.getElementById('merge-sort').disabled = false;
}