import { OurClass } from './ourclass';
import { Cart } from "./cart";
import { Teacher } from "./teacher";



//For Cart
export const displayCarts = (count:number):void => {
    console.log(count);
    
    const cartsElement = document.getElementById('carts');
    
    if(cartsElement !== null){
        
            cartsElement.innerText = `${count}`;
       
    }
}


//For Teachers
export const displayTeachers = (teachers:Array<Teacher>):void => {
    const teachersElement = document.getElementById('teacher-images');
    
    if(teachersElement !== null){
        teachers.forEach((a:Teacher, idx:number) => {
            teachersElement.innerHTML += a.html(`avatar-${idx + 1}`);
        }); 
    }
}


//For Classes or Courses
export const displayOurclass = (ourclasses:Array<OurClass>):void => {
    const ourclassesElement = document.getElementById('courses');
    
    if(ourclassesElement !== null){
        ourclasses.forEach((a:OurClass, idx:number) => {
            ourclassesElement.innerHTML += a.html(`events-img${idx + 1}`);
        }); 
    }
}