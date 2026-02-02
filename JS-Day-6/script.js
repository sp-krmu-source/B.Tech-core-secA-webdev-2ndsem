let user={
    name:"SP Acharya",
    address:"gurugram",
    mobileno:1234567890,
    favcolor:["black","white","blue"],
    demo:function(){
        return "demo";
    }
}
// console.log("My name is "+ user.name+". My fav color is "+user.favcolor[1],user.demo());

// string literals
// console.log(`My name is ${user.name}. My fav color is ${user.favcolor[1]}`)


// Object Methods 

// 1. Object.keys(variable name):
// console.log(Object.keys(user));

// console.log(Object.values(user));

// console.log(Object.entries(user));

// [
//     ["x","o","x"],
//     ["o","x","o"],
//     ["x","o","o"]
// ]

// find the winner 


const car = { 
    make: "Mahindra", 
    model: "Thar" 
};

Object.freeze(car); //in freeze we can't add a new key value also cant change or update the values

Object.seal(car) ////in seal we can't add a new key value but we can change or update the values

car.model="XUV700";
car.color = "Black"; 
console.log(car); 