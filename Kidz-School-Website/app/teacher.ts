export class Teacher {
    id:number;
    prefixId:number;
    firstName:string;
    lastName:string; 
    prefix:string; 

    constructor(teacher:any) {
        this.id = teacher.Id;
        this.prefixId = teacher.PrefixId;
        this.firstName = teacher.FirstName;
        this.lastName = teacher.LastName;
        this.lastName = teacher.LastName;
        this.prefix = teacher.Prefix;
    }

    public html(avatar:String){
        return `
        <div class="m-3 d-flex flex-column mx-auto text-center display-9 text-white heading-font">
            <img src="./images/avatars/${avatar}.jpg" alt="avatar-1" class="rounded-circle avatar-size mx-auto mb-1">
            <div>${this.prefix} ${this.lastName}</div>
        </div>
        `;
    } 
}