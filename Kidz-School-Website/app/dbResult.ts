import { Cart } from "./cart";
import { Teacher } from "./teacher";
import { OurClass } from "./ourclass";

export class DbResult {
    //For Cart
    private _cartCount: number = 0;

    public get cartCount(): number {
        return this._cartCount;
    }

    public set cartCount(count: number) {
        this._cartCount = count;
    }


    //For Teacher
    private _teachers: Array<Teacher> = new Array<Teacher>();

    public get teachers(): Array<Teacher> {
        return this._teachers;
    }
    public set teachers(teachers: Array<Teacher>) {
        this._teachers = teachers;
    }

    //For Class/Courses
    private _ourclasses: Array<OurClass> = new Array<OurClass>();

    public get ourclasses(): Array<OurClass> {
        return this._ourclasses;
    }
    public set ourclasses(ourclasses: Array<OurClass>) {
        this._ourclasses = ourclasses;
    }
}
