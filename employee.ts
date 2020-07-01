export class Employee{
  id: number
  name: string
  constructor(_id:number, _name:string){
  this.id = _id
  this.name = _name  
  }
  displayEmployee(){
    console.log(`Employee Id ${this.id}, Employee ${this.name}`);
  }
}