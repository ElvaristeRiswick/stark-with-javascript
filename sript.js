let stark = [];

stark.push(1);

stark.push(2);
stark.push(3);

stark.push(4);
stark.push(5);

stark.push(6);

//console.log(stark);

//let retire = stark.pop();

//console.log(stark);

let retire2 = stark.shift();
//console.log(retire2);
//console.log(stark2);

function stark2() {
  this.arr = [];
}

stark2.prototype.add = function (value) {
  this.arr.push(value);
};

stark2.prototype.delete = function (value) {
  this.arr.pop(value);
};

const pil = new stark2();

pil.add(1);
pil.add(2);
pil.add(3);

console.log(pil);
