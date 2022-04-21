//it helps to add or provide operation and method on object without even changing the 
// object itself. the extra method is placed in vistor object. it is used to extend library
//

function Employee(name, salary){
    this.name = name,
    this.salary = salary
}

Employee.prototype ={
    getSalary : function(){
        return this.salary
    },
    setSalary: function(sal){
        this.salary = sal
    },
    accept: function(vistorFunction){
        vistorFunction(this);
    }
}

const devsage = new Employee('DevSAge', 1000);
console.log(devsage.getSalary());

function ExtraSalary(emp){
    emp.setSalary(emp.getSalary() * 2);
}

devsage.accept(ExtraSalary);
console.log(devsage.getSalary());