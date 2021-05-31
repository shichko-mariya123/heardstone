import {BaseComponent} from "./baseComponent";


export class User {
    name:string;
    lastName:string;
    email:string

    constructor(name:string,lastName:string,email:string) {
        this.name=name;
        this.lastName=lastName;
        this.email=email;
    }
}
