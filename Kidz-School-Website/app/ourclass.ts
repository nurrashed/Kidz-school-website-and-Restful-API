export class OurClass {
    id:number;
    title:string;
    price:number;
    teacherId:number; 
    minAge:number;
    maxAge:number;
    description:string;
    time:number;
    date:Date;
    teacher:string;

    constructor(OurClass:any) {
        this.id = OurClass.Id;
        this.title = OurClass.Title;
        this.price = OurClass.Price;
        this.teacherId = OurClass.TeacherId;
        this.minAge = OurClass.MinAge;
        this.maxAge = OurClass.MaxAge;
        this.description = OurClass.Description;
        this.time = OurClass.Time;
        this.date = new Date(OurClass.Date);
        this.teacher = OurClass.Teacher;
    }

    public html(events:string){
        return `
        <div class="class-card d-flex flex-column flex-wrap justify-content-center">
            <img src="./images/events/${events}.jpg" alt="emage-event-1" class="w-100">
            <div class="d-flex flex-column text-white bg-info p-4">
                <div class="display-8 heading-font mb-3">${this.title}</div>
                <div><i class="far fa-calendar-alt mr-2 mb-2"></i>Age ${this.minAge} to ${this.maxAge} Years</div>
                <div><i class="far fa-clock mr-2 mb-4"></i>${this.time}</div>
                <div class="mb-4">${this.description}</div>
                <div class="mb-4">Teacher: ${this.teacher}</div>
                <div class="mb-4">Course Prise: ${this.price}</div>
                <button class="btn btn-lg btn-warning text-uppercase text-white my-1">Learn More</button>
            </div>
            <div class="date d-flex flex-column justify-content-center align-items-center px-2 bg-info text-white font-weight-bold display-9">
                <div>${this.date.getDate()}</div>
                <div>${this.date.toLocaleString('default', { month: 'short' })}</div>

            
                
            </div>
        </div>
        `;
    } 
}