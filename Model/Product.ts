import * as readlineSync from "readline-sync";

export class Product {
    id: number;
    name: string;
    type: string;
    price: number;
    quantity: number;
    dayAdd: string;
    info: string;

    constructor(id: number,
                name: string,
                type: string,
                price: number,
                quantity: number,
                dayAdd: string,
                info: string) {
        this.id = id;
        this.name = name;
        this.type = type;
        this.price = price;
        this.quantity = quantity;
        this.dayAdd = dayAdd;
        this.info = info;
    }

    setName(): void {
        let newName = readlineSync.question('Enter new name:  ')
        this.name = newName;
    }

    setType(): void {
        let newType = readlineSync.question('Enter new type:  ')
        this.type = newType;
    }

    setPrice(): void {
        let newPrice = +readlineSync.question('Enter new price:  ')
        this.price = newPrice;
    }

    setQuantity(): void {
        let newQuantity = +readlineSync.question('Enter new quantity:  ')
        this.quantity = newQuantity;
    }

    setDayAdd(): void {
        let newDayAdd = readlineSync.question('Enter new dayAdd:  ')
        this.dayAdd = newDayAdd;
    }

    setInfo(): void {
        let newInfo = readlineSync.question('Enter new description:  ')
        this.info = newInfo;
    }
}