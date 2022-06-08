const assertEqual = require("../assertEqual");
const head = require("../head");

assertEqual(head([5, 3, 10]), 5);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");
