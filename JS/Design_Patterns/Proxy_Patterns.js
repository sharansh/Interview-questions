function CryptoCurrency(){
 this.getValue = function(coin){
     console.log('fetching external APIS');
     switch(coin){
        case 'Bitcoin':
            return '$8500';
            break;
        case 'Litecoin':
            return '$8000';
            break;
        case 'Etherum':
            return '$7500';
            break;
     }
 }
}
const api = new CryptoCurrency();

console.log(api.getValue('Bitcoin'));
console.log(api.getValue('Litecoin'));
console.log(api.getValue('Bitcoin'));
console.log(api.getValue('Litecoin'));

function CryptoCurrencyProxy() {
    this.api = new CryptoCurrency();
    this.cache = {};
    this.getValue = function(coin){
        if(this.cache[coin] == null){
            this.cache[coin] = this.api.getValue(coin);
        }
        return this.cache[coin];
    }

}

const proxy = new CryptoCurrencyProxy();

console.log(proxy.getValue('Bitcoin'));
console.log(proxy.getValue('Litecoin'));
console.log(proxy.getValue('Etherum'));
console.log(proxy.getValue('Bitcoin'));