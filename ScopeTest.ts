export class Person {
    public firstName: string;
    public lastName: string;
    public age: number;
    private ssn: string;
 
    constructor(firstName:string, 
        lastName: string, age: number, 
        ssn: string) {
        this.firstName = firstName;
        this.lastName;
        this.age = age;
        this.ssn = ssn;
    }
}
 var p = new Person("John", "Smith", 29,  "123-90-4567");
console.log("Last name: " + p.lastName);