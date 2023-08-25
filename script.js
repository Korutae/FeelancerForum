//I was having a bit of trouble figuring things out and I think I almost have it now going
//back over the lecture, but this workshop is incomplete since it took me a long time to figure things out.

const container = document.querySelector('.container');


const names = [
    "Steve",
    "Joe",
    "Karen",
    "Michelle",
    "James",
    "Carl",
    "Adam"
];

const occupations = [
    "Teacher",
    "Programmer",
    "Writer",
    "Artist"
];

const freelancers = [
    {name: "Steve", price: 40, occupation: "Teacher"},
    {name: "Joe", price: 25, occupation: "Artist"},
    {name: "Karen", price: 64, occuptation: "Programmer"},
    {name: "Michelle", price: 38, occupation: "Writer"},
    {name: "James", price: 45, occupation: "Writer"},
    {name: "Carl", price: 48, occupation: "Teacher"},
    {name: "Adam", price: 29, occupation: "Artist"},
];

function render(){
    const html = freelancers.map(function(freelancers){
        return `<div>'${freelancers.name} ${freelancers.price} ${freelancers.occupation}'</div>`
    });
    console.log(html.join(''));
    container.innerHTML = html.join('');
}

render();

// function render(){
//     console.log(document.querySelector('.container'));
//     const html = (freelancers.map(function(freelancers, occupations){
//         return `<div class='${freelancers.name} ${freelancers.price} ${freelancers.occupation}'</div>`;
//     }));
//     console.log(`joining ${html}`);
//     container.innerHTML = html.join('');

// }


// function randomFreelancer(){
//     const nameIdx = Math.floor(Math.random()*names.length);
//     const occupationIdx = Math.floor(Math.random()*occupations.length);
//     const priceIdx = freelancers.find(item => item.name === names[nameIdx]);
//     const freelance = {
//         name: names[nameIdx],
//         occupation: occupations[occupationIdx],
//         price: priceIdx.price
//     };
//     return freelance;
// }

// const freelancersArray = [
//     randomFreelancer(),
//     randomFreelancer()
// ]

// console.log("rendering");
// render();

// // const interval = setInterval(function(){
// //     const newFreelancer = randomFreelancer();
// //     freelancersArray.push(newFreelancer);
// //     render();
// //     if(freelancers.length === 5){
// //         clearInterval(interval);
// //     }
// // }, 500);

// console.log(randomFreelancer());