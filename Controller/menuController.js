"use strict";
exports.__esModule = true;
exports.start = void 0;
var readlineSync = require("readline-sync");
var ProductManagement_1 = require("../Model/ProductManagement");
var menu_1 = require("../View/menu");
function solveException(myFunction) {
    try {
        myFunction();
    }
    catch (e) {
        console.log(e.message);
    }
}
function start() {
    while (true) {
        (0, menu_1.mainMenu)();
        var number = readlineSync.question('Choose action:  ');
        switch (number) {
            case "1":
                solveException(ProductManagement_1.ProductManagement.showList);
                break;
            case "2":
                solveException(ProductManagement_1.ProductManagement.searchProduct);
                break;
            case "3":
                ProductManagement_1.ProductManagement.addProduct();
                break;
            case "4":
                solveException(ProductManagement_1.ProductManagement.updateProduct);
                break;
            case "5":
                solveException(ProductManagement_1.ProductManagement.deleteProduct);
                break;
            case "0":
                return;
        }
    }
}
exports.start = start;
