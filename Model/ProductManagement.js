"use strict";
exports.__esModule = true;
exports.ProductManagement = void 0;
var readlineSync = require("readline-sync");
var Product_1 = require("./Product");
var menu_1 = require("../View/menu");
var ProductManagement = /** @class */ (function () {
    function ProductManagement() {
    }
    ProductManagement.numberOfProduct = function () {
        return ProductManagement.products.length;
    };
    ProductManagement.showList = function () {
        if (ProductManagement.numberOfProduct() !== 0) {
            console.table(ProductManagement.products);
        }
        else
            throw new Error('There is no data!');
    };
    ProductManagement.findProductByName = function (name) {
        return ProductManagement.products.filter(function (product) { return product.name.includes(name); });
    };
    ProductManagement.findProductById = function (id) {
        return ProductManagement.products.find(function (product) { return product.id = id; });
    };
    ProductManagement.checkType = function (typeChecked) {
        return ProductManagement.typesOfProduct.find(function (type) { return type == typeChecked; });
    };
    ProductManagement.searchProduct = function () {
        var name = readlineSync.question('Enter name of product:  ');
        var products = ProductManagement.findProductByName(name);
        if (products.length !== 0) {
            console.table(products);
        }
        else
            throw new Error('Invalid data!');
    };
    ProductManagement.addProduct = function () {
        var id = +readlineSync.question('Enter id of product:  ');
        var name = readlineSync.question('Enter name of product:  ');
        var type = readlineSync.question('Enter type of product:  ');
        while (!ProductManagement.checkType(type)) {
            console.log('Invalid type!');
            console.log("Can only choose one of types: ".concat(ProductManagement.typesOfProduct));
            type = readlineSync.question('Enter type of product:  ');
        }
        var price = +readlineSync.question('Enter price of product:  ');
        var quantity = +readlineSync.question('Enter quantity of product:  ');
        var dayAdd = new Date().toLocaleDateString();
        var info = readlineSync.question('Enter description of product:  ');
        var product = new Product_1.Product(id, name, type, price, quantity, dayAdd, info);
        ProductManagement.products.push(product);
    };
    ProductManagement.updateProduct = function () {
        var id = +readlineSync.question('Enter id of the product you want to update:  ');
        var product = ProductManagement.findProductById(id);
        if (product) {
            while (true) {
                (0, menu_1.editProductMenu)();
                var number = readlineSync.question('Choose action:  ');
                switch (number) {
                    case "1":
                        product.setName();
                        break;
                    case "2":
                        product.setType();
                        break;
                    case "3":
                        product.setPrice();
                        break;
                    case "4":
                        product.setQuantity();
                        break;
                    case "5":
                        product.setDayAdd();
                        break;
                    case "6":
                        product.setInfo();
                        break;
                    case "0":
                        return;
                }
            }
        }
        else
            throw new Error('Invalid product!');
    };
    ProductManagement.deleteProduct = function () {
        var id = +readlineSync.question('Enter id of the product you want to delete:  ');
        var product = ProductManagement.findProductById(id);
        if (product) {
            ProductManagement.products = ProductManagement.products.filter(function (product) { return product !== product; });
        }
        else
            throw new Error('Invalid product!');
    };
    ProductManagement.products = [];
    ProductManagement.typesOfProduct = ['Shoes', 'Clothes', 'Cosmetics'];
    return ProductManagement;
}());
exports.ProductManagement = ProductManagement;
