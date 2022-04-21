class Person{
    constructor(){
        this.name ='sharansh',
        this.surname ='shandilya'
    }

    printName = () => {
        console.log(this.name + this.surname);
    }
}

class PersonTest extends Person{
    constructor(){
        super();
        this.fatherName = 'Anoop'
    }

    printFullBiodata = (city, state) => {
        console.log(this.name + ' '+ this.surname +' '+ this.fatherName +' '+ city+' '+ state);
    }
}

const person1 = new PersonTest;
person1.printFullBiodata('luckow', 'Uttar Pradesh');