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
// const ADMIN = 0;
// const READ_ONLY = 1;
// const AUTHOR = 2;
var Role;
(function (Role) {
    Role[Role["ADMIN"] = 0] = "ADMIN";
    Role[Role["READ_ONLY"] = 1] = "READ_ONLY";
    Role[Role["AUTHOR"] = 2] = "AUTHOR";
})(Role || (Role = {}));
;
var person = {
    name: "Haris",
    age: 30,
    hobbies: ["Sports", "camping"],
    role: Role.ADMIN
};
var favoriteActivities;
favoriteActivities = ["Sports"];
console.log(person.name);
for (var _i = 0, _a = person.hobbies; _i < _a.length; _i++) {
    var hobby = _a[_i];
    console.log(hobby.toUpperCase());
    // console.log(hobby.map());  // ERROR ts recognizes that map() does not exist with type string.
}
if (person.role === Role.ADMIN) {
    console.log("is author");
}
