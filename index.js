// Create reference to list
const list = document.querySelector(".list")

// Array of bucket list items
const bucketListItems = [
    "Travel to Japan",
    "Freedive 50m",
    "Write a book",
];


// Task 1. The element is placed last in the body //
// create paragraph 1
const p1 = document.createElement("p");

// add content to the new paragraph
p1.innerText = "Create a Habit app";

// append new paragraph to dom
list.appendChild(p1);


// Task 2 //
// create paragraph 2
const p2 = document.createElement("p")

// add content to the second paragraph
p2.innerText = "Get a good software engineer job"

// append the paragraph to the list with beforeend
list.insertAdjacentElement("beforeend", p2);


// Task 3 //
console.log(list.innerHTML);


// Task 4 //
const newDiv = "<div>Move to Thailand</div>"


/// Task 5 //
//list.innerHTML = newDiv;


// Task 6 //
list.insertAdjacentHTML("afterbegin", newDiv);


// Task 7 //
for (let i = 0; i <= 2; i++) 
{
    list.insertAdjacentHTML("beforeend", `<p>${bucketListItems[i]}</p>`);
}


// Task 8 //
console.log(`There are : ${list.children.length} items in the list`);


// Task 9 //
const myName = document.querySelector(".owner");
myName.innerText = "Marcus";


// Task 10 //
const newFirstChild = document.createElement("p");
newFirstChild.innerText = "Move to Singapore";
list.replaceChild(newFirstChild, list.firstElementChild);


// Task 11 //
const newSecondChild = document.createElement("p");
newSecondChild.innerText = "Move to Hongkong";
list.replaceChild(newSecondChild, list.children[Math.floor(list.children.length / 2)]);


// Task 12 //
list.removeChild(list.lastElementChild);