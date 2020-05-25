class Employee {
    constructor (id,fname,salary) 
    {
        this.id = id;
        this.fname = fname;
        this.salary =  salary;
    }

    get getId () {
        return this.id;
    }

    set setId (id) {
        this.id = id;
    }

    get getName() {
        return this.fname;
    }

    set setName (name) {
        this.fname = name;
    }

    get getSalary () {
        return this.salary;
    }

    set setSalary (salary) {
        this.salary = salary;
    }

    get getNetSalary () {
        ///after deduction of 10 % 
        return this.salary*0.9;
    }
    
    calculateNetSalary () {
        return this.netSalary * 0.9;
    }

    get nameIdNetsalary () {
        return " Id : "+this.getId +"; Name: "+ this.getName+"; Salary: "+this.getSalary+"; Net Salary: "+this.getNetSalary;    
    }
}

myEmployee = new Employee(1,"Tushank",50000);
var x = new Employee();// only declaring not defining
x.setId = 100;
x.setName = "Shubham";
x.setSalary = 48000;

document.getElementById("demo1").innerHTML = myEmployee.nameIdNetsalary;

document.getElementById("demo2").innerHTML = x.nameIdNetsalary;
