function Fedex() {
    this.calculate = package => {
        //some fedex calculation
        return 2.45
    }
}
function UBS(){
    this.calculate = package => {
        //some ubs caalculation
        return 1.45
    }
}
function DTDC(){
    this.calculate = package => {
        //some ubs caalculation
        return 4.45
    }
}

const fedex = new Fedex();
const ubs = new UBS();
const dtdc = new DTDC();

let package ={ from : 'Lucknow', to: 'Bangalore', weight: 400};
console.log(fedex.calculate(package));

//staretgy method

function Shipping () {
    this.company = ''
    this.setStategy = company => {
        this.company = company
    }
    this.calculate = package => {
        return this.company.calculate(package)
    }
} 

const shipping = new Shipping();
shipping.setStategy(fedex)
console.log('Fedex:  '+ shipping.calculate(package));


