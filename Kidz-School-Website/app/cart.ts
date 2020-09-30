export class Cart {
    classid:number;
    customerid:number;
    price:number;
    count:number;
    title:string;
    description:string; 

    constructor(cart:any) {
        this.classid = cart.Id;
        this.customerid = cart.CustomerId;
        this.price = cart.Price;
        this.count = cart.Count;
        this.title = cart.Title;
        this.description = cart.Description;
    }

   /*  public html(){
        return `
        <span id="cart-update" class="badge btn-badge bg-success rounded-100 text-white border border-white position-absolute">5</span>
        `;
    } */
}