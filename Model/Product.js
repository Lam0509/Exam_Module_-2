"use strict";
exports.__esModule = true;
exports.Product = void 0;
var readlineSync = require("readline-sync");
var Product = /** @class */ (function () {
    function Product(id, name, type, price, quantity, dayAdd, info) {
        this.id = id;
        this.name = name;
        this.type = type;
        this.price = price;
        this.quantity = quantity;
        this.dayAdd = dayAdd;
        this.info = info;
    }
    Product.prototype.setName = function () {
        var newName = readlineSync.question('Enter new name:  ');
        this.name = newName;
    };
    Product.prototype.setType = function () {
        var newType = readlineSync.question('Enter new type:  ');
        this.type = newType;
    };
    Product.prototype.setPrice = function () {
        var newPrice = +readlineSync.question('Enter new price:  ');
        this.price = newPrice;
    };
    Product.prototype.setQuantity = function () {
        var newQuantity = +readlineSync.question('Enter new quantity:  ');
        this.quantity = newQuantity;
    };
    Product.prototype.setDayAdd = function () {
        var newDayAdd = readlineSync.question('Enter new dayAdd:  ');
        this.dayAdd = newDayAdd;
    };
    Product.prototype.setInfo = function () {
        var newInfo = readlineSync.question('Enter new description:  ');
        this.info = newInfo;
    };
    return Product;
}());
exports.Product = Product;
