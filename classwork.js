// //  for (let i = 0; i < 50; i++) {
// //    document.body.innerHTML += ` <button>id ${i + 1} </button>`

// //  }
// //  console.table({
// //     name:"Ahmadboy",
// //     age:20,
// //     adress:"Tashkent"

// //  });

// //  console.table(["apple","orange","banana"]

// function myConstructorFn(position, experience) {
//     this.position = position,
//         this.experience = experience,

//         this.sayHello = function () {
//             return ` Hello! i am ${this.position}  and i have  ${this.experience} years experience `
//         }

// }
// const admin = new myConstructorFn("Main admin", 5)
// const admin2 = new myConstructorFn("assistant of Admin", 2)
// // console.log(admin.sayHello());


// class Product {
//     constructor(brand, price) {
//         this.brand = brand,
//             this.price = price
//     }
//     getBrand() {
//         return `The brand of product : ${this.brand}`
//     }
// }

// const clothes = new Product("Zara", "8000$")
// // console.log(clothes);

// class Techniques extends Product {
//     constructor(brand, price, memory, cycle) {
//         super(brand, price)
//         this.memory = memory
//         this.cycle = cycle

//     }

// }
// const phones = new Techniques("Iphone", "3000$", "256gb", 100)
// console.log(phones);



// let arr = ["aka", "uka", "opa"]
// let result = []
// for (const item of arr) {
//     let reverse = item.split("").reverse().join("")
//     if (item == reverse) {
//         result.push(item)
//     }
// }
// console.log(result);