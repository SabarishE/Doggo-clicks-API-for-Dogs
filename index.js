//=--------DOM for buttons----------
//  -----navigation buttons starts-------

var alldiv = document.querySelector(".content-all");
var randomdiv = document.querySelector(".content-random");

// ----selecting the navigation buttons-----
var allbtn = document.querySelector(".all");
var randombtn = document.querySelector(".random");

//  -------navigation button functionality-----
allbtn.addEventListener("click", function (e) {
  alldiv.style.display = "flex";
  randomdiv.style.display = "none";

  console.log("click all alert !!!");
});

randombtn.addEventListener("click", function (e) {
  alldiv.style.display = "none";
  randomdiv.style.display = "flex";

  console.log("click random alert !!!");
});
//  -----navigation buttons ends-------

// -------fetch call and display of all dogs starts -------
var all = [];

function allDogs() {
  fetch("https://dog.ceo/api/breeds/image/random/50", {
    method: "GET"
  })
    .then((res) => res.json())
    .then((data) => {
      console.log("dogs are fetched !!!", data);
      all.push(...data.message);
      display();
    })
    .catch((err) => console.log("ERROR in get all dogs !!!!!", err));
}

allDogs();

console.log("all >>>>>", all);

// -----------mapping the 'all' array which contains the fetched data using map method-------

function display() {
  var container = document.getElementsByClassName("content-all");
  all.forEach((e) => {
    var card = document.createElement("div");
    var img = document.createElement("img");
    img.setAttribute("src", e);
    var name = document.createElement("span");

    var urlSplit = e.split("/");
    name.innerText = urlSplit[urlSplit.length - 2];

    card.append(img, name);
    container[0].append(card);
  });
}

// -------fetch call and display of all dogs ends -------

// -------fetch call and display of one random dog starts-------

document
  .getElementsByClassName("bark-switch")[0]
  .addEventListener("click", function () {
    randomDog();
    document.querySelector("audio").play();
  });

function randomDog() {
  fetch("https://dog.ceo/api/breeds/image/random", {
    method: "GET"
  })
    .then((res) => res.json())
    .then((data) => {
      console.log(" random dog is fetched !!!");

      randomdisplay(data.message);
    })
    .catch((err) => console.log("ERROR in getting radom dog !!!!!", err));

  function randomdisplay(d) {
    document.getElementsByClassName("random-dis")[0].innerHTML = "";
    let randomPic = document.createElement("div");
    randomPic.innerHTML = "";

    let img = document.createElement("img");
    img.setAttribute("src", d);

    let split = d.split("/");
    let name = document.createElement("span");
    name.innerText = split[split.length - 2];

    randomPic.append(img, name);
    document.getElementsByClassName("random-dis")[0].append(randomPic);
  }
}

// -------fetch call and display of one random dog starts-------

// -------------------------------

// function space() {
//   fetch("https://api.spaceflightnewsapi.net/v3/articles", {
//     method: "GET"
//   })
//     .then((res) => res.json())
//     .then((data) => console.log("space>>>>>>>>>>>>>>>", data))
//     .catch((err) => console.log("ERROR in get space !!!!!", err));
// }

// space();

// function age() {
//   fetch("https://age-of-empires-2-api.herokuapp.com/api/v1/civilizations", {
//     method: "GET",
//     headers: {
//       // "Content-Type": "application/json",
//       // "Access-Control-Allow-Origin": "*"

//       "content-length": "18936",
//       "content-type": "application/json"
//     },
//     mode: "no-cors",
//     date: "Wed, 11 Aug 2021 12:15:02 GMT ",
//     server: "Cowboy ",
//     via: "1.1 vegur ",
//     connection: "keep-alive"
//   })
//     .then((res) => res.json())
//     .then((data) => console.log("ages >>>>>>>>>>>>>>>", data))
//     .catch((err) => console.log("ERROR in get age !!!!!", err));
// }

// age();

// https://api.spaceflightnewsapi.net/v3/articles

// https://age-of-empires-2-api.herokuapp.com/api/v1/civilizations

// // https://dog.ceo/api/breeds/list/all
