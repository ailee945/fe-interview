function Parent(age) {
  this.names = ["lucy", "dom"];
  this.age = age;

  this.getName = function () {
    return this.name;
  };

  this.getAge = function () {
    return this.age;
  };
}

function Child(age) {
  Parent.call(this, age);
  console.log(this);
}

var child1 = new Child(18);
child1.names.push("child1");
console.log(child1.names); // [ 'lucy', 'dom', 'child1' ]

var child2 = new Child(20);
child2.names.push("child2");
console.log(child2.names); // [ 'lucy', 'dom', 'child2' ]
