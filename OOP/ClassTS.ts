class Person{
 person_name:string;
 person_job:string;
 constructor(pname:string, pjob:string){
     this.person_name=pname;
     this.person_job=pjob;
   }
   display():void{
      console.log(this.person_name);
      console.log(this.person_job);
   }
}

var p = new Person("Ajay","manager")
p.display()