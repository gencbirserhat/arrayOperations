let employees = [
  { id: 1, firstName: "Can", lastName: "Yılmaz", age: 21 },
  { id: 2, firstName: "Oya", lastName: "Tepe", age: 40 },
  { id: 3, firstName: "Berk", lastName: "Yağ", age: 25 },
  { id: 4, firstName: "Ali", lastName: "Şahin", age: 30 },
];

const newEmployee = { id: 5, firstName: "Serhat", lastName: "Genç", age: 20 };

employees.push(newEmployee);

console.log(employees);

const newArray = [
  ...employees,
  {
    id: 6,
    firstName: "Ferhat",
    lastName: "Genç",
    age: 27,
  },
];

console.log(newArray);
