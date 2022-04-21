//one Object trying to access method and properties of another variable

// array.prototype --> Object
// object.prototype --> Object
// object.prototype.prototype --> Object
// function.prototype --> Object

//Array.prototype needs works

let obj = {
    name: 'Sharansh',
    lastname: 'SHandilya',
    getName(){
        console.log(this.name+ this.lastname);
    }
}

let Obj2 ={
    name: 'Aditya'
}

Obj2.__proto__ = obj;
Obj2.getName()

//example 2

function parent(name){
    this.name = name;
}

parent.Prototype.getName1 = function(){
    return this.name;
}

function child(name){
    parent.call(this, name);
}