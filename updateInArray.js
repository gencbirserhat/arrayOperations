let employees = [
  { id: 1, firstName: "Can", lastName: "Yılmaz", age: 21 },
  { id: 2, firstName: "Oya", lastName: "Tepe", age: 40 },
  { id: 3, firstName: "Berk", lastName: "Yağ", age: 25 },
  { id: 4, firstName: "Ali", lastName: "Şahin", age: 30 },
];

console.log(employees);

const newArray = [
  ...employees.filter((emp) => emp.id !== 3),
  { id: 3, firstName: "Veli", lastName: "Erdem", age: 32 },
];

console.log(newArray);
