var count = 1;
var countElement = document.querySelector("#count");

console.log(countElement);

function addLikes() {
    count++;
    countElement.innerHTML = count + " " + "Likes";
    console.log(count);

}

var countElement2 = document.querySelector("#count2");
function addLikes2() {
    count++;
    countElement2.innerHTML = count + " " + "Likes";
    console.log(count);

}

var countElement3 = document.querySelector("#count3");
function addLikes3() {
    count++;
    countElement3.innerHTML = count + " " + "Likes";
    console.log(count);

}