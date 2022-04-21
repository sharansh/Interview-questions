function Subject(){
    this.observer = []; 
}

Subject.prototype= {
    subscribe: function(fn){
        this.observer.push(fn)
    },
    unsubcribe: function(fntoRemove){
        this.observer = this.observer.filter( fn => {
            if(fn != fntoRemove){
                return fn
            }
        })
    },
    fire: function(){
        this.observer.forEach( fn => {
            fn.call()
        })
    }
}

function Observer1() {
    console.log('Observer 1 firing');
}

function Observer2() {
    console.log('Observer 2 firing');
}

const subject = new Subject();

subject.subscribe(Observer1);
subject.subscribe(Observer2);
subject.unsubcribe(Observer2);

subject.fire();
