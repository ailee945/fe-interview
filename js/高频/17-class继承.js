class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  eat() {
    console.log(`${this.name}正在吃东西`);
  }
}

class Stu extends Person {
  constructor(name, age, num) {
    super(name, age);
    this.num = num;
  }
  print() {
    console.log(`${this.age} 是年龄`);
  }
  eating() {
    super.eat();
    console.log(`打印了学号 ${this.num}`);
  }
}

const stu = new Stu("zhang", "18", 99);
console.log(stu);
stu.print();
stu.eat();
