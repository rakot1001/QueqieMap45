"use strict";

const vocabulary = new Map();
vocabulary.set("cat", "кот");
vocabulary.set("dog", "собака");
vocabulary.set("table", "стол");
vocabulary.set("structure", "структура");
vocabulary.set("count", "считать");
vocabulary.set("kernel", "ядро");

const userInput = "Cat dog Set kernel structure count";

const translate = (str) => {
  return str
    .toLowerCase()
    .split(" ")
    .map((word) => (vocabulary.has(word) ? vocabulary.get(word) : word))
    .join(" ");
};
const user1 = {
  id: 1,
  name: "John",
  age: 24,
};
const user2 = {
  id: 2,
  name: "Jane",
  age: 20,
};

const jM = ["aaaaaa", "bbbbbbbb", "zzzzzzzzzz"];
const jaM = ["saaaaaa", "sbbbbbb", "szzzzzzzzzz"];

const msgToouser = new Map();
msgToouser.set(user1, jM);
msgToouser.set(user2 ,jaM);

const getUserMsg = (u) => msgToouser.get(u);
