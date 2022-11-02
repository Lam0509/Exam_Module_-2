import * as readlineSync from "readline-sync";
import {Product} from "./Product";
import {editProductMenu} from "../View/menu";

export class ProductManagement {
    static products: Product[] = [];
    static typesOfProduct: string[] = ['Shoes', 'Clothes', 'Cosmetics'];

    static numberOfProduct(): number {
        return ProductManagement.products.length;
    }

    static showList(): void {
        if (ProductManagement.numberOfProduct() !== 0) {
            console.table(ProductManagement.products);
        } else throw new Error('There is no data!');
    }

    static findProductByName(name: string): Product[] {
            return ProductManagement.products.filter(product => {return product.name.includes(name)});
    }

    static findProductById(id: number): Product | undefined {
        return ProductManagement.products.find(product => {return product.id = id});
    }

    static checkType(typeChecked: string): string | undefined {
        return ProductManagement.typesOfProduct.find(type => {return type == typeChecked})
    }

    static searchProduct(): void {
        let name = readlineSync.question('Enter name of product:  ');
        let products = ProductManagement.findProductByName(name);
        if (products.length !== 0) {
            console.table(products);
        } else throw new Error('Invalid data!');
    }

    static addProduct(): void {
        let id = +readlineSync.question('Enter id of product:  ')
        let name = readlineSync.question('Enter name of product:  ');
        let type = readlineSync.question('Enter type of product:  ');
        while (!ProductManagement.checkType(type)) {
            console.log('Invalid type!');
            console.log(`Can only choose one of types: ${ProductManagement.typesOfProduct}`)
            type = readlineSync.question('Enter type of product:  ');
        }
        let price = +readlineSync.question('Enter price of product:  ');
        let quantity = +readlineSync.question('Enter quantity of product:  ');
        let dayAdd = new Date().toLocaleDateString();
        let info = readlineSync.question('Enter description of product:  ');
        let product = new Product(id, name, type, price, quantity, dayAdd, info);
        ProductManagement.products.push(product);
    }

    static updateProduct(): void {
        let id = +readlineSync.question('Enter id of the product you want to update:  ')
        let product = ProductManagement.findProductById(id);
        if (product) {
            while (true) {
                editProductMenu();
                let number = readlineSync.question('Choose action:  ')
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
                        break
                    case "5":
                        product.setDayAdd();
                        break
                    case "6":
                        product.setInfo();
                        break;
                    case "0":
                        return;
                }
            }
        } else throw new Error('Invalid product!');
    }

    static deleteProduct(): void {
        let id = +readlineSync.question('Enter id of the product you want to delete:  ');
        let product = ProductManagement.findProductById(id);
        if (product) {
            ProductManagement.products = ProductManagement.products.filter(product => {return product !== product});
        } else throw new Error('Invalid product!');
    }
}