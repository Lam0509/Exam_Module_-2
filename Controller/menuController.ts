import * as readlineSync from "readline-sync";
import {ProductManagement} from "../Model/ProductManagement";
import {mainMenu} from "../View/menu";

function solveException(myFunction) {
    try {
        myFunction();
    } catch (e) {
        console.log(e.message);
    }
}

export function start() {
    while (true) {
        mainMenu();
        let number = readlineSync.question('Choose action:  ');
        switch (number) {
            case "1":
                solveException(ProductManagement.showList);
                break;
            case "2":
                solveException(ProductManagement.searchProduct);
                break;
            case "3":
                ProductManagement.addProduct();
                break;
            case "4":
                solveException(ProductManagement.updateProduct);
                break;
            case "5":
                solveException(ProductManagement.deleteProduct);
                break;
            case "0":
                return;
        }
    }
}