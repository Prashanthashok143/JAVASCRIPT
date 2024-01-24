
class Emp{
constructor(name,designation,salary,experince){
this.name=name;
this.designation=designation;
this.salary=salary;
this.experince=experince;
// console.log(this);
    }
    Farmer()
    {
      if(this.designation =="Farmer")
      {
        this.designation=this.designation+" jai Jawan"
      }
      else{
        this.designation=this.designation +" Corparte life"
      }
    }


}


class Personal{
constructor(name,age,native,mobile){
this.Name=name;
this.Age=age;
this.Native=native;
this.MobileNo=mobile;
// console.log(this);
    }
    isAge()
    {
      if(this.Age>25)
      {
        this.Age=this.Age+" Eligible For Take Responsibilites";
      }
      else{
        this.Age=this.Age+" Too Young";
      }
    }
    
}


class Car{
constructor(name,color,model,price){
this.Carname=name;
this.Color=color;
this.Model=model;
this.Price=price;
console.log(this);
    }
}


class Remote{
constructor(Chassis,length,width,casterangle){
this.Chassis=Chassis;
this.Length=length;
this.Width=width;
this.Casterangle=casterangle;
console.log(this);
 }
}

class Computer{
    constructor(name,processer,ram,generation)
    {
        this.Name=name;
        this.Processer=processer;
        this.Ram=ram;
        this.Generation=generation;
        console.log(this)
    }
}

console.log("Employee Details")
const emp=new Emp("Prashanth","Frontend-Dev",35000,2)
const emp1=new Emp("Ashok","Farmer",30000,10)
emp.Farmer();
emp1.Farmer();
console.log(emp)
console.log(emp1);


console.log("Personal Details")
const per=new Personal("Prashanth",22,"Jangoan",9603049161)
const per1=new Personal("Ashok",42,"Jangoan",8179556208)
per.isAge();
per1.isAge();
console.log(per,per1);

console.log("Car Details")
const rangerover=new Emp("Range Rover","Gold",2023,"2.5CR")
console.log("Remote Details")
const remote=new Remote("4WD on-road 510mm","900mm","380mm","6/0 Degree")
console.log("Computer Details")
const Lenova=new Computer("Lenova","i3",4,5)










