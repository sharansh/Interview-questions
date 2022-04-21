let printName = function(city, state){
    console.log(this.firstName + ' ' + this.lastName + ' ' + city + ' ' + state);
}

let person1 = {
    firstName: 'sharansh',
    lastName: 'shandilya',
}

let person2 ={
    firstName:'Happy',
    lastName: 'Mishra'
}

printName.call(person1,'lucknow', 'Uttar Pradesh');
printName.apply(person2, ['Miao', 'Arunnachal Pradesh']);

let bindFunction = printName.bind(person2);
bindFunction('Bangalore', 'Karnataka');