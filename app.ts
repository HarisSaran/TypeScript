// We can do it like this but better the other way to let type script infer it for us
// const person: {
//   name: string;
//   age: number;
// } = {
//   name: "Haris",
//   age: 30,
// };

// const person: {
//   name: string;
//   age: number;
//   hobbies: string[];
//   role: [number, string]; //this allows us to create a tuple, (meaning; must look like this!)
//                           // Telling ts that we want an array with exatly 2 elements, first element should be a number second should be string
// } = {
//   name: "Haris",
//   age: 30,
//   hobbies: ["Sports", "camping"],
//   role: [23, "author"],
// };

// person.role.push("admin");
// person.role[1] = 44;
// person.role = [0, "admin", "user"];


const person: {
  name: string;
  age: number;
  hobbies: string[];
  role: [number, string]; //this allows us to create a tuple, (meaning; must look like this!)
                          // Telling ts that we want an array with exatly 2 elements, first element should be a number second should be string
} = {
  name: "Haris",
  age: 30,
  hobbies: ["Sports", "camping"],
  role: [23, "author"],
};


let favoriteActivities: string[];
favoriteActivities = ["Sports"];
console.log(person.name);

for (const hobby of person.hobbies) {
  console.log(hobby.toUpperCase());
  // console.log(hobby.map());  // ERROR ts recognizes that map() does not exist with type string.
}
