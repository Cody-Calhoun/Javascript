const mark = {
  name: "Mark Miller",
  weight: 78,
  height: 1.68,

  calcBMI: function () {
    this.bmi = this.weight / (this.height * this.height);
    return this.bmi;
  },
};

const john = {
  name: "John Smith",
  weight: 92,
  height: 1.25,

  calcBMI: function () {
    this.bmi = this.weight / (this.height * this.height);
    return this.bmi;
  },
};

console.log(mark.calcBMI());
console.log(john.calcBMI());
console.log(
  `${john.name}'s BMI ${john.calcBMI()} is ${
    john.bmi > mark.calcBMI() ? "higher" : "lower"
  } than ${mark.name}'s BMI ${mark.bmi}.`
);
