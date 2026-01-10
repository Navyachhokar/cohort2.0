// Section 1: Objects and OOPS Thinking

//1) Create a user that stores name and email and has a login method which prints "User logged in".

let user = {
    name: "Navya",
    email: "navya@gmail.com",
    login: function(){
        console.log("User logged in");
    },
};

// user.login();

//2) Imagine you now have 5 users.
// First, think how you would manage them without using a class.
// Then convert the same logic using a class and observe how the code becomes clearInterval. Write code for both approaches.
let user1 = {
    name: "Navya"
}
let user2 = {
    name: "xyajkk"
}
let user3 = {
    name: "yiouwywid"
}
let user4 = {
    name: "bcmnkc"
}
let user5 = {
    name: "ajskjd"
}

class User{
    constructor(name,email){
      this.name = name;
      this.email = email
    }

    loggedIn(){
        console.log("User is logged in");
    };
};

let z1 = new User("navya","xyz@");
let z2 = new User("abc","uoez@");
let z3 = new User("jdc","jdiz@");

//3) Create a product object that stores name and price and has a methods which returns the final price discount.
let product = {
    name: "tripod",
    price: 250,
    discountPrice: function(){
        return this.price - 30 ;
    },
};

product.discountPrice();

// Section2: Classes and Objects

//4) Create a car class with the following:
// brand 
// speed 
// a drive method that prints the car brand and speed

class Car{
    constructor(brand,speed){
        this.brand = brand;
        this.speed = speed;
    };
    drive(){
        return this.brand + " - " + this.speed;
    }

};

let car1 = new Car("Hyundai","180")
let car2 = new Car("Maruti","200")

// Section3: Constructor and this keyword

//5) Create a Student class whose constructor accepts name and roll Number
// Add a method introduce that prints both values.

class Student{
    constructor(name, rollno){
        this.name = name;
        this.rollno = rollno;
    };
    Introduce(){
        return this.name+ " " +this.rollno;
    }
}

let student1 = new Student("priya","12");

//6) Inside the constructor, set values using this.
// Then try removing this and notice what error occurs and why.
class Student1{
    constructor(name, rollno){
        name = name;
        rollno = rollno;
    };
    Introduce(){
        return this.name+ " " +this.rollno;
    }
}

let student2 = new Student("priya","12");
// output: undefined undefined
// Without this, you are manipulating local parameters instead of the object's properties, resulting in an object with no initialized data. The "error" isn't a thrown exception, but a logical failure to construct the object correctly. 

//7) Create an object with two methods:
// One method using a normal function
// One method using an arrow function
// Inside both, print this and observe the difference.

let obj = {
    normalfunc: function(){
        console.log(this);
    },
    arrowfunc: () => {
        console.log(this);
    },
};

obj.arrowfunc();// it will give window as the arrow function takes this value from its parent and its parent is obj and obj is in global space and it's parent is the window. 
obj.normalfunc();// it will give the value of this as the whole obj.

// Section4: Constructor Function and Prototypes.

// Create a User constructor function(do not use class syntax).

//bina class ke bhi constructor function bants h
//es6 se pehle constructor function aise banta tha

function OneUser(){
    this.name = "Navya";
}

let usr1 = new OneUser();

// Add a login method in two ways:
// First, inside the constructor
// Then, move the method to the prototype

function Usserr(){
    this.name = "Navya";
    this.login = function(){
        console.log("logged in");
    }
}
// Usserr.prototype.login = function(){
//     console.log("logged");
    
// }

let usr2 = new Usserr();
let usr3 = new Usserr();

// Create two User objects and compare their login methods using equality.
// Explain why the result is true or false.

usr2.login === usr3.login; //true in case of prototype as the objects will have shared memory.
// false if the method is part of the object as the objects then will have unique identity and properties and will their own login function.

// Section5: call, apply, bind

// Create a function that prints this.name

function abcd(a,b,c,d){
    console.log(this.name);
    console.log(this.login());
}

let object = {
    name: "Navya",
    login: function(){
        console.log("I'm logged In");
    }
};
abcd.call(object);// using call we can change the value of this to objects's value which otherwise gives Window.

// Create an object that contains a name property.
// Use call to run the function using object.
// Use apply to run the function using the object
abcd.apply(object,[1,2,3,4]);
// Use bind to create a new function and then call it
let newfunc = abcd.bind(object);
newfunc();

// Borrow a method from one object and run it for another object using call.
