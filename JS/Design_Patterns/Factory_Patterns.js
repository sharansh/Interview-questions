function Developer(name){
    this.name = name,
    this.type = 'Developer'
}

function Tester(name){
    this.name = name,
    this.type = 'Tester'
}

function EmployeeFactory() {
    this.create = (name, type) => {
        switch(type){
            case 1:
                return new Developer(name);
                break;
            case 2:
                return new Tester(name);
                break;
            default:
                return;
        }

    }
}

function say(){
    console.log('I am '+ this.name + ' I work as '+ this.type)
}
const employeeFactory = new EmployeeFactory();
const employee = [];

employee.push(employeeFactory.create('sharansh',1));
employee.push(employeeFactory.create('swati', 2));

employee.forEach( emp => {
    say.call(emp);
})

