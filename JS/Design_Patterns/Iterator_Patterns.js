// commented code is for reverse
const items = [1,'sharansh', false, 1.23];

function Iterator(items){
    this.items= items,
    this.index = 0
    // this.index = item.length -1
}

Iterator.prototype = {
    hasNext : function () {
        return this.index < this.items.length;
        //return this.index >= 0
    },
    next : function () {
        return this.items[this.index++];
        //return this.items[this.index--];
    }
}

const iter = new Iterator(items);
while(iter.hasNext()){
    console.log(iter.next());
}