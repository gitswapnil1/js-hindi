// const tinderUser = new Object();
const tinderUser={}

tinderUser.id = "123abc"
tinderUser.name = "danny"
tinderUser.isLoggedIn = false

// console.log(tinderUser);

const regularUser = {
    email:"some@google.com",
    fullname :{
        userfullname:{
            firstName: "Swapnil",
            lastName:"Dapkosh"
        }
    }
}

// console.log(regularUser.fullname.userfullname);

const obj1 = {1:"a", 2:"b"}
const obj2 = {3:"a", 4:"b"}
const obj4 = {5:"a", 6:"b"}
// const obj3= {obj1, obj2}

// const obj3= Object.assign({},obj1, obj2, obj4)

const obj3 = {...obj1, ...obj2, ...obj4}

// console.log(obj3);

const users =[
    {
        name:"danny",
        age:"17"
    },
    {
        name:"danny",
        age:"17"
    },
    {
        name:"danny",
        age:"17"
    },
    {
        name:"danny",
        age:"17"
    },
    {
        name:"danny",
        age:"17"
    },
    {
        name:"danny",
        age:"17"
    }
]

users[1].name;

// console.log(tinderUser);

// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));

// console.log(tinderUser.hasOwnProperty('name'));

const course={
    courseName : "Js",
    coursePrice:"$999",
    courseTeacher:"Browser and Node"
}

// course.courseTeacher

// Object destructuring
const {courseTeacher: instructor} = course

console.log(instructor); //output after destructuring name of courseTeacher to instructor
// console.log(courseTeacher);


// destructuring in React

// const navbar = ({company})=>{

// }

// navbar(company = "ssd")

// JSON
// {
//     "name":"abc",
//     "age":"14"
// }

// [
//     {},
//     {},
//     {}
// ]