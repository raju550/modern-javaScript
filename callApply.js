const persons = {
  firstName: "rahim",
  lastName: "uddin",
  salary: 1500,
  getFullName: function () {
    console.log(this.firstName, this.lastName);
  },
  chargeBill: function (amount) {
    console.log(this);
    this.salary = this.salary - amount;
  },
};
const heroPerson = {
  firstName: "hero",
  lastName: "balma",
  salary: 25000,
};
// const heroFamily = {
//   firstName: "golam",
//   lastName: "raju",
//   salary: 3000,
// };
// const heroChargeBill = persons.chargeBill.bind(heroPerson);
// heroChargeBill(2000);

// persons.chargeBill.call(heroPerson, 300);
// persons.chargeBill.call(heroPerson, 900);
// console.log(heroPerson.salary);
persons.chargeBill.apply(heroPerson, [5600, 300, 200]);
persons.chargeBill.apply(heroPerson, [900, 780, 600, 80]);
console.log(heroPerson.salary);
