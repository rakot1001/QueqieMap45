// Объект с логикой

function MyArrayProto() {}
// Объекты с данными
function MyArray(...args) {}

MyArray.isMyArray = function isMyArray(obj) {
  return obj instanceof MyArray;
};

MyArray.prototype = new MyArrayProto();
