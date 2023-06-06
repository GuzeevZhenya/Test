// const adress = {
//   title: "Minsk",
// };

// let user = {
//   name: "vasia",
//   age: 32,
//   adress: {
//     title: adress,
//   },
// };

// let user2 = {
//   name: "alice",
//   age: 30,
//   adress: adress,
// };

// console.log(user, user2);

// //array
// const users = [user, user2, { name: "zhenya", age: 16, adress: adress }];
// console.log(users);

// const a = {
//   name: "vasia",
//   age: 12,
//   isOnline: true,
//   students: ["ivan", "adnrey", "gena"],
//   classroom: {
//     teacher: {
//       name: "wew",
//       age: 19,
//     },
//   },
// };

// const b = {
//   ...a,
// };

// (b.classroom.teacher.name = "igor"), (b.classroom.teacher.age = "45");

// console.log(b);
// console.log(a);

let a = {
  name: "vasia",
  protocol: "htpps",
  maxStundetsCound: 10,
  students: ["ivan", "artur", "gena"],
  classroom: {
    teacher: {
      name: "wew",
      age: 18,
    },
  },
};

const b = {
  ...a,
  students: [...a.students],
  classroom: {
    ...a.classroom,
    teacher: {
      ...a.classroom.teacher,
    },
  },
};

console.log(b);

a.classroom.teacher.age = 12;
a.classroom.teacher.name = "wowa";
console.log(b);
