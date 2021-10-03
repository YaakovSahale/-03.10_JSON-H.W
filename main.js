//!...........................................1

// let contactUs = `{
//     "name": "kobi",
//     "message": "lorem me",
//     "email": "myemail@gmail.com"
// }`;

// const JcontactUs = JSON.parse(contactUs);
// console.log(JcontactUs);

//!...........................................2

// const vehicle = `{
//     "cars": [
//         {
//             "model": "volvo",
//             "price": 50180,
//             "year": "2020"
//         },

//         {
//             "model": "toyota",
//             "price": 20300,
//             "year": "2001"
//         },

//         {
//             "model": "pejo",
//             "price": 10500,
//             "year": "1980"
//         }
//     ],

//     "ships": [
//         {
//             "name": "aribatar",
//             "year": "2015",
//             "dockingPlace": "atlantik",
//             "image": "https://cdn.pixabay.com/photo/2018/06/17/17/00/yacht-3480913__340.jpg"
//         },

//         {
//             "name": "aribatar",
//             "year": "2015",
//             "dockingPlace": "atlantik",
//             "image": "https://cdn.pixabay.com/photo/2014/07/19/06/48/digital-art-396825__340.png"
//         },

//         {
//             "name": "aribatar",
//             "year": "2015",
//             "dockingPlace": "atlantik",
//             "image": "https://cdn.pixabay.com/photo/2014/11/12/00/26/ship-527728__340.jpg"
//         }
//     ]
// }`;

// let myDiv = document.getElementById("myDiv")

// const Jvehicle = JSON.parse(vehicle)
// Jvehicle.ships.forEach(item => {
//     myDiv.innerHTML += `name: ${item.name}<br>
//                         year: ${item.year}<br>
//                         dockingPlace:${item.dockingPlace}<br>
//                         <img src="${item.image}"><br><br>
//                         `
// });


//!.......................................3

// const inputName = document.getElementById("inputName")
// const inputEmail = document.getElementById("inputEmail")
// const inputMsg = document.getElementById("inputMsg")
// const btn = document.getElementById("btn")


// btn.onclick = (e)=>{
//     e.preventDefault()
//     let contactForm = {
//         fullName: inputName.value,
//         email: inputEmail.value,
//         message: inputMsg.value
//     }
//     let JcontactForm = JSON.stringify(contactForm)

//     console.log(JcontactForm);
// }

//!........................................4

// let rngObject = {
//     name: "kobi",
//     age: 20,
//     city: "ashdod"
// }



// function objectToJSON(myObject){
//     return JSON.stringify(myObject)
// }

// console.log(objectToJSON(rngObject));

//!........................................5

// let rngJObject = `{
//     "name": "kobi",
//     "age": 20,
//     "city": "ashdod"
// }`



// function JSONtoObject(myJObject){
//     return JSON.parse(myJObject)
// }

// console.log(JSONtoObject(rngJObject));

//!........................................6

// let rngObject = {
//     name: "kobi",
//     age: 20,
//     email: "ashdod@abc.com"
// }

// function multiplayAgeBy3JSON(myObject){
//     myObject.age *= 3
//     console.log(myObject.age);
// }

// multiplayAgeBy3JSON(rngObject)

