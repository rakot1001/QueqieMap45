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
