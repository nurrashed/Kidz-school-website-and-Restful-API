import { Cart } from "./cart";
import { Teacher } from "./teacher";
import { OurClass } from "./ourclass";
import { DbResult } from "./dbResult";
import axios from "axios";

const baseUrl = "http://localhost:4000/api/";

export const getData = async () => {


    const carts = await get("cart?customerId=1");
    const teachers = await get("teacher");
    const ourclasses = await get("class/4");

    let result = new DbResult();

    result.cartCount = carts.length;
    teachers.forEach((a: any) => result.teachers.push(new Teacher(a)));
    ourclasses.forEach((a: any) => result.ourclasses.push(new OurClass(a)));

    return result;
};

const get = async (uri: string) => {
  try {
    const result = axios.get(`${baseUrl}${uri}`);
    const { data } = await result;
    return data;
  } catch (err) {
    console.log(err);
  }
};
