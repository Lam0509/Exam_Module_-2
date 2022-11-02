"use strict";
exports.__esModule = true;
exports.mainMenu = exports.editProductMenu = void 0;
function editProductMenu() {
    console.log('1: Update name');
    console.log('2: Update type');
    console.log('3: Update price');
    console.log('4: Update quantity');
    console.log('5: Update dayAdd');
    console.log('6: Update Info');
    console.log('0: Exit update');
}
exports.editProductMenu = editProductMenu;
function mainMenu() {
    console.log('1: Show list of products');
    console.log('2: Search a product');
    console.log('3: Add product');
    console.log('4: Update product');
    console.log('5: Delete  product');
    console.log('0: Exit menu');
}
exports.mainMenu = mainMenu;
