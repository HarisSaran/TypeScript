// We can do it like this but better the other way to let type script infer it for us
// const person: {
//   name: string;
//   age: number;
// } = {
//   name: "Haris",
//   age: 30,
// };
var person = {
    name: "Haris",
    age: 30,
    hobbies: ["Sports", "camping"],
    role: [23, "author"]
};
person.role.push("admin");
// person.role[1] = 44;
var favoriteActivities;
favoriteActivities = ["Sports"];
console.log(person.name);
for (var _i = 0, _a = person.hobbies; _i < _a.length; _i++) {
    var hobby = _a[_i];
    console.log(hobby.toUpperCase());
    // console.log(hobby.map());  // ERROR ts recognizes that map() does not exist with type string.
}
